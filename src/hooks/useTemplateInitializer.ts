import { useEffect } from "react";
import preBuiltTemplates from "../data/PrebuiltTemplates";

// Define the expected structure of a template
interface Template {
  id: string;
  templateName: string;
  categoryName: string;
  status: string;
  templateBody: string;
  columns: any[]; // Update this type if you have a defined structure for columns
  containerContent: {
    type: string;
    content: {
      imageData: string;
      fileName: string;
    };
  }[];
  desc: string;
  emailList: string[];
}

export const useTemplateInitializer = () => {
  useEffect(() => {
    // Retrieve existing templates from local storage
    const existingTemplates: Template[] = JSON.parse(localStorage.getItem("templates") || "[]");

    // Check if no templates exist, then add pre-built templates
    if (existingTemplates.length === 0) {
      localStorage.setItem("templates", JSON.stringify(preBuiltTemplates));
    }
  }, []);
};
