import { useEffect } from "react";
import preBuiltTemplates from "../data/PrebuiltTemplates";

export const useTemplateInitializer = () => {
  useEffect(() => {
    //to get existing templates from local storage
    const existingTemplates = JSON.parse(localStorage.getItem("templates")) || [];

    //check if we don't have any templates in local Storage
    if (existingTemplates.length === 0) {
      //if no templates exist, add pre-built templates
      localStorage.setItem("templates", JSON.stringify(preBuiltTemplates));
    }
  }, []);
};
