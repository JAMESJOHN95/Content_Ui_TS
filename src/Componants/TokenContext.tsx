import React, { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { ServerUrl } from "../server";

// Define the shape of the context
interface TokenContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

// Create context with default values
export const TokenContext = createContext<TokenContextType | undefined>(undefined);

// Define props for TokenProvider
interface TokenProviderProps {
  children: ReactNode;
}

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>("");

  const fetchToken = async () => {
    try {
      console.log("Inside fetchToken Function");
      const response = await axios.post<{ token: string }>(`${ServerUrl}/generate-token`);
      
      if (response.data?.token) {
        setToken(response.data.token);
      } else {
        console.error("No token received in response");
      }
    } catch (error) {
      console.log("Error fetching token:", error);
    }
  };

  useEffect(() => {
    fetchToken(); // Fetch the token initially
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};


