import React, { useState, useEffect ,ChangeEvent} from "react";
import { useNavigate } from "react-router-dom";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import { FaImage, FaCode, FaPlus } from "react-icons/fa6";
import { IoLinkOutline, IoInformationCircleOutline } from "react-icons/io5";
import { RxText } from "react-icons/rx";
import { v4 as uuidv4 } from "uuid";
import { replace } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { DragEvent } from "react";
import { TextAlign } from "@tiptap/extension-text-align";
function EmailTemplate() {
    interface DropTarget {
        columnId?: string;
        blockId?: string;
        isImage?: boolean;
      }
      
      interface Editor {
        commands: {
          insertContent: (content: string) => void;
        };
      }
        type ImageContent = {
          imageData: string; // Base64 string or image URL
          fileName?: string; // Optional filename
        };
        
        type ColumnStructure = {
          id: string;
          content: string | ImageContent; // Content can be text or an image
        };
        
        type Column = {
          id: string;
          type: string; // e.g., "1:1 column", "2:1 column"
          structure: ColumnStructure[];
        };
        
        type ContainerContent = {
          id: string;
          type: string; // "text", "image", "code", etc.
          content: string | ImageContent;
        };
        type TemplateData = {
          id: string;
          templateName: string;
          categoryName: string;
          status: string; // Example: "Yes" or "No"
          templateBody: string;
          columns: Column[];
          containerContent: ContainerContent[];
          desc: string;
          type:string;
        };
        
      interface ContentItem {
        id: string;
        type: string;
        content: string;
      }
      // Define the type for container content items
      interface ContainerItem {
        id: string; // Assuming IDs are strings; change to number if needed
        type: string;
        content: any; // Adjust type based on actual content structure
      }
      
      
      interface DropTarget {
        isContainer?: boolean;
        columnId?: string;
        blockId?: string;
        itemId?: string;
      }
      interface Template {
        id: string;
        templateName: string;
        categoryName: string;
        status: string;
        templateBody: any; // Adjust type based on actual structure
        columns: any[]; // Replace 'any[]' with actual type
        containerContent: any[]; // Replace 'any[]' with actual type
        desc: string;
        type:string;
      }
        type SetState<T> = Dispatch<SetStateAction<T>>;
        const [showImportModal, setShowImportModal] = useState<boolean>(false);
        const [templateBody, setTemplateBody] = useState<string>("");
        const [showStructures, setShowStructures] = useState<boolean>(false);
        const [droppedContent, setDroppedContent] = useState<string>("");
        const [showContents, setShowContents] = useState<boolean>(false);
        const [showCodeModal, setShowCodeModal] = useState<boolean>(false);
        const [codeInput, setCodeInput] = useState<string>("");
        const [importHTML, setImportHtml] = useState<string>("");
        const [columns, setColumns] = useState<Column[]>([]);
        const [currentDropTarget, setCurrentDropTarget] = useState<
         { columnId?: string; blockId?: string; isContainer?: boolean; isImage?: boolean } | null
        >(null);
        const [containerContent, setContainerContent] = useState<ContainerContent[]>([]);
        const [activeImageUpload, setActiveImageUpload] = useState<
          { columnId?: string; blockId?: string; isContainer?: boolean; itemId?: string } | null
        >(null);
        const [isEditMode, setIsEditMode] = useState<boolean>(false);
        const [originalTemplateId, setOriginalTemplateId] = useState<string | null>(null);
        const [templateData, setTemplateData] = useState<TemplateData | null>(null);
        const [templateName, setTemplateName] = useState<string>("");
        const [categoryName, setCategoryName] = useState<string>("");
        const [description, setDescription] = useState<string>("");
        const navigate = useNavigate();
      
        const editor = useEditor({
          extensions: [StarterKit, Link, Heading.configure({ levels: [1, 2] }), Bold, Italic, Underline, Strike, ListItem, BulletList, OrderedList],
          content: templateBody,
          onUpdate: ({ editor }) => setTemplateBody(editor.getHTML()),
        });
      
        useEffect(() => {
          const storedTemplate = sessionStorage.getItem("editTemplate");
          if (storedTemplate) {
            const parsedTemplate: TemplateData = JSON.parse(storedTemplate);
            setIsEditMode(true);
            setTemplateData(parsedTemplate);
            if (parsedTemplate.id) setOriginalTemplateId(parsedTemplate.id);
            if (parsedTemplate.templateName) setTemplateName(parsedTemplate.templateName);
            if (parsedTemplate.categoryName) setCategoryName(parsedTemplate.categoryName);
            if (parsedTemplate.columns) setColumns([...parsedTemplate.columns]);
            if (parsedTemplate.containerContent) setContainerContent([...parsedTemplate.containerContent]);
            if (parsedTemplate.templateBody && editor) {
              setTemplateBody(parsedTemplate.templateBody);
              editor.commands.setContent(parsedTemplate.templateBody);
            }
            sessionStorage.removeItem("editTemplate");
          }
        }, [editor]);
      
        const handleDragStart = (event: React.DragEvent<HTMLLIElement>, type: string) => {
          event.dataTransfer.setData("text/plain", type);
        };
        
        const handleDrop = (event: DragEvent<HTMLDivElement>) => {
          event.preventDefault();
          const type: string = event.dataTransfer.getData("text");
          if (!type) return;
        
          let structure: ColumnStructure[] = [];
        
          switch (type) {
            case "1:1 column":
              structure = [{ id: uuidv4(), content: "" }];
              break;
            case "2:1 column":
              structure = [
                { id: uuidv4(), content: "" },
                { id: uuidv4(), content: "" },
              ];
              break;
            case "2:2 column":
              structure = [
                { id: uuidv4(), content: "" },
                { id: uuidv4(), content: "" },
              ];
              break;
            case "3:3 column":
              structure = [
                { id: uuidv4(), content: "" },
                { id: uuidv4(), content: "" },
                { id: uuidv4(), content: "" },
              ];
              break;
            case "4:4 column":
              structure = [
                { id: uuidv4(), content: "" },
                { id: uuidv4(), content: "" },
                { id: uuidv4(), content: "" },
                { id: uuidv4(), content: "" },
              ];
              break;
            default:
              // Handle direct content drop for other types (images, text, etc.)
              handleDirectContainerDrop(type, event);
              return;
          }
        
          // Define new column
          const newColumn: Column = {
            id: uuidv4(),
            type,
            structure,
          };
        
          setColumns((prevColumns) => [...prevColumns, newColumn]);
        };
        
        // Function
        
      
        const addContentToContainer = (type: string, content: string | ImageContent) => {
          const newContent: ContainerContent = { id: uuidv4(), type, content };
          setContainerContent((prev) => [...prev, newContent]);
        };
      
      const handleDirectContainerDrop = (type: string, event: DragEvent<HTMLDivElement>) => {
        if (!currentDropTarget) {
          let content: string = "";
          let contentType: string = type;
      
          if (type === "image") {
            // Ensure only one image-placeholder exists
            if (!containerContent.some((item) => item.type === "image-placeholder")) {
              addContentToContainer("image-placeholder", "+ upload an image");
              setCurrentDropTarget({ isContainer: true });
            }
            return; // Stop further execution to prevent duplication
          } 
          
          if (type === "code") {
            setShowCodeModal(true);
            setCurrentDropTarget({ isContainer: true });
            return;
          } 
          
          if (type === "text") {
            content = prompt("Enter your text:", "Sample Text") || "Sample Text";
          } 
          
          if (type === "link") {
            content = prompt("Enter URL:", "https://example.com") || "https://example.com";
          } 
          
          if (!content) {
            content = type;
          }
      
          // Prevent duplicate entries for all content types
          if (!containerContent.some((item) => item.type === contentType && item.content === content)) {
            addContentToContainer(contentType, content);
          }
        } else {
          handleContentDrop(type);
        }
      };
      
      const handleContentDrop = (
        type: string,
       /*  updateColumnContent: (columnId: string, blockId: string, content: string) => void,
        setCurrentDropTarget: Dispatch<SetStateAction<DropTarget | null>>,
        setShowCodeModal: Dispatch<SetStateAction<boolean>>,
        editor?: Editor,
        setDroppedContent?: Dispatch<SetStateAction<string>>,
        currentDropTarget?: DropTarget | null */
      ): void => {
        if (!currentDropTarget) return;
      
        if (type === "image") {
          // For column inputs, use a placeholder approach
          if (currentDropTarget.columnId && currentDropTarget.blockId) {
            updateColumnContent(currentDropTarget.columnId, currentDropTarget.blockId, "+ upload an image");
      
            setCurrentDropTarget({
              columnId: currentDropTarget.columnId,
              blockId: currentDropTarget.blockId,
              isImage: true,
            });
          }
        } else if (type === "code") {
          setShowCodeModal(true);
        } else {
          let content: string = "";
      
          if (type === "text") {
            content = prompt("Enter your text:", "Sample Text") || "Sample Text";
          } else if (type === "link") {
            content = prompt("Enter URL:", "https://example.com") || "https://example.com";
          } else {
            content = type;
          }
      
          if (currentDropTarget.columnId && currentDropTarget.blockId) {
            updateColumnContent(currentDropTarget.columnId, currentDropTarget.blockId, content);
            setCurrentDropTarget(null);
          } else if (!currentDropTarget) {
            if (editor && type !== "image" && type !== "code" && type !== "link" && setDroppedContent) {
              editor.commands.insertContent(content);
              setDroppedContent((prev) => prev + "\n" + content);
            }
          }
        }
      };
      const handleInputDragOver = (
        e: React.DragEvent<HTMLDivElement>, 
        columnId: string, 
        blockId: string
      ) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentDropTarget({ columnId, blockId });
      };
      const handleInputDragLeave = () => {
        // Only reset if not an image upload in progress
        if (!currentDropTarget || !(currentDropTarget as { isImage?: boolean }).isImage) {
          setCurrentDropTarget(null);
        }
      };
      const handleInputDrop = (
        e: React.DragEvent<HTMLDivElement>,
        columnId: string,
        blockId: string
      ) => {
        e.preventDefault();
        e.stopPropagation();
      
        const type = e.dataTransfer.getData("text");
        if (!type) return;
      
        if (type === "image") {
          // Just update the placeholder text, don't trigger file upload
          updateColumnContent(columnId, blockId, "+ upload an image");
          setCurrentDropTarget({ columnId, blockId, isImage: true });
        } else if (type === "code") {
          // Save target info before opening modal
          setCurrentDropTarget({ columnId, blockId });
          setShowCodeModal(true);
        } else {
          let content = "";
          if (type === "text") {
            content = prompt("Enter your text:", "Sample Text") || "Sample Text";
          } else if (type === "link") {
            content =
              prompt("Enter URL:", "https://example.com") || "https://example.com";
          } else {
            content = type;
          }
      
          updateColumnContent(columnId, blockId, content);
        }
      };
        const updateColumnContent = (columnId: string, blockId: string, content: string | ImageContent) => {
          setColumns((prevColumns) =>
            prevColumns.map((col) =>
              col.id === columnId
                ? {
                    ...col,
                    structure: col.structure.map((block) =>
                      block.id === blockId ? { ...block, content } : block
                    ),
                  }
                : col
            )
          );
        };
        const handleImagePlaceholderClick = (target: { columnId?: string; blockId?: string; isContainer?: boolean; itemId?: string }) => {
          setActiveImageUpload(target);
          const imageUploadElement = document.getElementById("imageUpload") as HTMLInputElement;
          if (imageUploadElement) {
            imageUploadElement.click();
          }
        };
        
        const handleImageUploadFunction = (
          target: DropTarget,
          /* setActiveImageUpload: Dispatch<SetStateAction<DropTarget | null>> */
        ): void => {
          setActiveImageUpload(target);
          const imageUploadInput = document.getElementById("imageUpload") as HTMLInputElement | null;
          if (imageUploadInput) {
            imageUploadInput.click();
          }
        };
        const handleImageUpload = (
          event: ChangeEvent<HTMLInputElement>,
         /*  activeImageUpload: DropTarget | null,
          setActiveImageUpload: Dispatch<SetStateAction<DropTarget | null>>,
          currentDropTarget: DropTarget | null,
          setCurrentDropTarget: Dispatch<SetStateAction<DropTarget | null>>,
          removeContainerItem: (id: string) => void,
          addContentToContainer: (type: string, content: ImageContent) => void,
          updateColumnContent: (columnId: string, blockId: string, content: ImageContent) => void
       */  ): void => {
          const file = event.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
              const imageContent: ImageContent = {
                fileName: file.name,
                imageData: typeof e.target?.result === "string" ? e.target.result : "",
              };
        
              if (activeImageUpload) {
                if (activeImageUpload.isContainer) {
                  if (activeImageUpload.itemId) removeContainerItem(activeImageUpload.itemId);
                  addContentToContainer("image", imageContent);
                } else if (activeImageUpload.columnId && activeImageUpload.blockId) {
                  updateColumnContent(activeImageUpload.columnId, activeImageUpload.blockId, imageContent);
                }
                setActiveImageUpload(null);
                setCurrentDropTarget(null);
              } else if (currentDropTarget) {
                if (currentDropTarget.isContainer) {
                  addContentToContainer("image", imageContent);
                } else if (currentDropTarget.columnId && currentDropTarget.blockId) {
                  updateColumnContent(currentDropTarget.columnId, currentDropTarget.blockId, imageContent);
                }
                setCurrentDropTarget(null);
              }
            };
            reader.readAsDataURL(file);
          }
        };
        
        const handleSaveCode = (
          /* codeInput: string,
          setCodeInput: Dispatch<SetStateAction<string>>,
          currentDropTarget: DropTarget | null,
          setCurrentDropTarget: Dispatch<SetStateAction<DropTarget | null>>,
          setShowCodeModal: Dispatch<SetStateAction<boolean>>,
          addContentToContainer: (type: string, content: string) => void,
          updateColumnContent: (columnId: string, blockId: string, content: string) => void */
        ): void => {
          if (codeInput.trim()) {
            const codeContent = `Code: ${codeInput.substring(0, 20)}...`;
        
            if (currentDropTarget) {
              if (currentDropTarget.isContainer) {
                // For container
                addContentToContainer("code", codeContent);
              } else if (currentDropTarget.columnId && currentDropTarget.blockId) {
                // For column input
                updateColumnContent(currentDropTarget.columnId, currentDropTarget.blockId, codeContent);
              }
              setCurrentDropTarget(null); // Reset after updating
            } else {
              // Default case - add to the container
              addContentToContainer("code", codeContent);
            }
          }
          
          setShowCodeModal(false);
          setCodeInput("");
        };
        const clearInputContent = (columnId: string, blockId: string): void => {
          updateColumnContent(columnId, blockId, "");
        };
      
      const clearContent = (
        setDroppedContent: Dispatch<SetStateAction<string>>,
        editor: Editor | null
      ): void => {
        setDroppedContent("");
      
        if (editor) {
          editor.commands.insertContent("");
        }
      };
      const clearContainerContent = (
        setContainerContent: Dispatch<SetStateAction<any[]>>
      ): void => {
        setContainerContent([]);
      };
      
      const removeContainerItem = (
        id: string, // Change to `number` if IDs are numeric
       /*  setContainerContent: Dispatch<SetStateAction<ContainerItem[]>> */
      ): void => {
        setContainerContent((prev) => prev.filter((item) => item.id !== id));
      };
      const removeColumn = (
        columnId: string, // Change to `number` if IDs are numeric
        setColumns: Dispatch<SetStateAction<Column[]>>
      ): void => {
        setColumns((prevColumns) => prevColumns.filter((col) => col.id !== columnId));
      };
      const clearAllContent = (
        /* editor: Editor | null,
        setContainerContent: SetState<any[]>, // Adjust type based on actual container structure
        setColumns: SetState<any[]>, // Adjust type based on actual column structure
        setDroppedContent: SetState<string> */
      ): void => {
        // Clear the editor content
        if (editor) {
          editor.commands.insertContent("");
      
        }
      
        // Clear the container content
        setContainerContent([]);
      
        // Clear the columns
        setColumns([]);
      
        // Clear the dropped content tracking
        setDroppedContent("");
      };
      
      const handleSaveButtonClick = (
       /*  templateName: string,
        categoryName: string,
        templateBody: any, // Adjust type accordingly
        columns: any[], // Replace 'any[]' with actual type
        containerContent: any[], // Replace 'any[]' with actual type
        isEditMode: boolean,
        originalTemplateId: string | null,
        navigate: ReturnType<typeof useNavigate> */
      ): void => {
        // Get values from state or DOM elements as needed
        const templateNameValue =
          templateName || (document.getElementById("templateNameInput") as HTMLInputElement)?.value || "Template Name";
        const categoryNameValue =
          categoryName || (document.getElementById("optionInput") as HTMLInputElement)?.value || "";
      
        const newTemplate: Template = {
          id: isEditMode && originalTemplateId ? originalTemplateId : uuidv4(),
          templateName: templateNameValue,
          categoryName: categoryNameValue,
          status: "Yes",
          templateBody,
          columns,
          containerContent,
          desc: description,
          type:"email"
        };
      
        // Retrieve existing data from localStorage
        const existingData: Template[] = JSON.parse(localStorage.getItem("templates") || "[]");
      
        // Debugging
        console.log("Is Edit Mode:", isEditMode);
        console.log("Original Template ID:", originalTemplateId);
        console.log("Templates in storage:", existingData);
      
        if (isEditMode && originalTemplateId) {
          // Find and update the existing template by ID
          const updatedTemplates = existingData.map((template) =>
            String(template.id) === String(originalTemplateId) ? newTemplate : template
          );
      
          // Check if any template was actually updated
          const wasUpdated = updatedTemplates.some(
            (template) =>
              String(template.id) === String(originalTemplateId) &&
              template.templateName === newTemplate.templateName
          );
      
          if (!wasUpdated) {
            console.error("Failed to update template - ID not found:", originalTemplateId);
          }
      
          localStorage.setItem("templates", JSON.stringify(updatedTemplates));
        } else {
          // Add new template to the list
          existingData.push(newTemplate);
          localStorage.setItem("templates", JSON.stringify(existingData));
        }
      
        alert("Template Saved Successfully!!!");
        navigate("/existingContents", { replace: true });
      };
        const renderInputField = (block: any, columnId: string) => {
          const isImagePlaceholder =
            typeof block.content === "string" &&
            block.content.includes("+ upload an image");
        
          const displayContent = () => {
            // For image objects
            if (typeof block.content === "object" && block.content?.imageData) {
              return (
                <div className="d-flex align-items-center">
                  <img
                    src={block.content.imageData}
                    alt={block.content.fileName || "Image"}
                    style={{ maxHeight: "30px", width: "auto", marginRight: "8px" }}
                  />
                  <span>{block.content.fileName}</span>
                </div>
              );
            }
        
            // For string content
            if (typeof block.content === "string") {
              return block.content;
            }
        
            // Default empty state
            return "Drop content here";
          };
        
        
      
          
          return (
            <div className="input-group">
              <div
                className="form-control d-flex align-items-center"
                style={{ minHeight: "38px", cursor: "pointer" }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleInputDragOver(e, columnId, block.id);
                }}
                onDragLeave={handleInputDragLeave}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleInputDrop(e, columnId, block.id);
                }}
              >
                {displayContent()}
              </div>
        
              {isImagePlaceholder ? (
                <button
                  className="btn btn-sm btn-outline-primary ms-2"
                  onClick={() =>
                    handleImagePlaceholderClick({
                      columnId,
                      blockId: block.id,
                    })
                  }
                >
                  <FaPlus size={12} />
                </button>
              ) : (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => clearInputContent(columnId, block.id)}
                >
                  <i className="fa-solid fa-times"></i>
                </button>
              )}
            </div>
          );
        };
        
        const getColumnLayout = (column: any) => {
          const { type, structure } = column;
          if (type === "1:1 column") {
            return (
              <div className="d-flex gap-2">
                {structure.map((block: any) => (
                  <div
                    key={block.id}
                    className="border p-2 bg-white flex-grow-1 position-relative"
                    style={{ width: "100%" }}
                  >
                    {renderInputField(block, column.id)}
                  </div>
                ))}
              </div>
            );
          } else if (type === "2:1 column") {
            return (
              <div className="d-flex gap-2">
                <div
                  className="border p-2 bg-white flex-grow-1 position-relative"
                  style={{ width: "66.67%" }}
                >
                  {renderInputField(structure[0], column.id)}
                </div>
                <div
                  className="border p-2 bg-white flex-grow-1 position-relative"
                  style={{ width: "33.33%" }}
                >
                  {renderInputField(structure[1], column.id)}
                </div>
              </div>
            );
          } else if (type === "2:2 column") {
            return (
              <div className="d-flex gap-2">
                <div
                  className="border p-2 bg-white flex-grow-1 position-relative"
                  style={{ width: "50%" }}
                >
                  {renderInputField(structure[0], column.id)}
                </div>
                <div
                  className="border p-2 bg-white flex-grow-1 position-relative"
                  style={{ width: "50%" }}
                >
                  {renderInputField(structure[1], column.id)}
                </div>
              </div>
            );
          } else if (type === "3:3 column") {
            return (
              <div className="d-flex gap-2">
                <div
                  className="border p-2 bg-white flex-grow-1 position-relative"
                  style={{ width: "33.33%" }}
                >
                  {renderInputField(structure[0], column.id)}
                </div>
                <div
                  className="border p-2 bg-white flex-grow-1 position-relative"
                  style={{ width: "33.33%" }}
                >
                  {renderInputField(structure[1], column.id)}
                </div>
                <div
                  className="border p-2 bg-white flex-grow-1 position-relative"
                  style={{ width: "33.33%" }}
                >
                  {renderInputField(structure[2], column.id)}
                </div>
              </div>
            );
          } else if (type === "4:4 column") {
            return (
              <div className="d-flex gap-2">
                {structure.map((block: any) => (
                  <div
                    key={block.id}
                    className="border p-2 bg-white flex-grow-1 position-relative"
                    style={{ width: "25%" }}
                  >
                    {renderInputField(block, column.id)}
                  </div>
                ))}
              </div>
            );
          }
        
          // Default fallback
          return (
            <div className="d-flex gap-2">
              {structure.map((block: any) => (
                <div
                  key={block.id}
                  className="border p-2 bg-white flex-grow-1 position-relative"
                  style={{ width: `${100 / structure.length}%` }}
                >
                  {renderInputField(block, column.id)}
                </div>
              ))}
            </div>
          );
        };
        // Function for importing template
        const handleImportTemplate = () => {
          if (!importHTML.trim()) {
            alert("Please enter HTML content to import.");
            return;
          }
          // Data format to be passed to the table of existing content via localStorage
          const newTemplate = {
            id: uuidv4(),
            templateName: `Imported Template ${new Date().toLocaleString()}`,
            categoryName: categoryName || "SD", // Default category name
            status: "Yes",
            templateBody: importHTML,
            columns: [] as any[],
            containerContent: [] as any[],
            desc: ""
          };
        
          // Get existing templates
          const existingData: any[] = JSON.parse(localStorage.getItem("templates") || "[]");
        
          // Add new template
          existingData.push(newTemplate);
        
          // Save to localStorage
          localStorage.setItem("templates", JSON.stringify(existingData));
        
          // Clear modal
          setImportHtml("");
          setShowImportModal(false);
        
          // Navigate to existing contents
          alert("Template imported successfully");
          navigate("/existingcontents", { replace: true });
        };
          
          return (
              <div className="container-fluid">
                <div className="row">
                  {isEditMode && (
                    <div className="col-md-12 mb-3">
                      <div className="alert alert-info">
                        Editing Existing Template: {templateName || "Untitled Template"}
                      </div>
                    </div>
                  )}
          
                  {/* Structure for columns */}
                  <div className="col-md-2 p-2 text-center border-end">
                    <div className="d-flex flex-column justify-content-between align-items-center p-2 ">
                      {/* Dropdown  for selecting structure */}
                      <button
                        style={{
                          cursor: "pointer",
                          backgroundColor: "white",
                          border: "1px solid #333",
                        }}
                        onClick={() => setShowStructures(!showStructures)}
                        className="btn w-100 mb-3 mt-3"
                      >
                        Structures
                      </button>
                      {showStructures && (
                        <ul className="list-unstyled w-100">
                          <li
                            className="p-3 border border-dark rounded mb-2 bg-white text-center fw-bold w-100"
                            draggable
                            onDragStart={(e) => handleDragStart(e, "1:1 column")}
                            style={{ cursor: "grab" }}
                          >
                            1:1 Column
                          </li>
                          <li
                            className="p-3 border border-dark rounded mb-2 bg-white text-center fw-bold w-100"
                            draggable
                            onDragStart={(e) => handleDragStart(e, "2:1 column")}
                            style={{ cursor: "grab" }}
                          >
                            2:1 Column Right
                          </li>
                          <li
                            className="p-3 border border-dark rounded mb-2 bg-white text-center fw-bold w-100"
                            draggable
                            onDragStart={(e) => handleDragStart(e, "2:2 column")}
                            style={{ cursor: "grab" }}
                          >
                            2:2 Column
                          </li>
                          <li
                            className="p-3 border border-dark rounded mb-2 bg-white text-center fw-bold w-100"
                            draggable
                            onDragStart={(e) => handleDragStart(e, "3:3 column")}
                            style={{ cursor: "grab" }}
                          >
                            3:3 Column
                          </li>
                          <li
                            className="p-3 border border-dark rounded mb-2 bg-white text-center fw-bold w-100"
                            draggable
                            onDragStart={(e) => handleDragStart(e, "4:4 column")}
                            style={{ cursor: "grab" }}
                          >
                            4:4 Column
                          </li>
                        </ul>
                      )}
                      <div className="p-0 w-100">
                        {/* Dropdown for selecting content */}
                        <button
                          style={{
                            cursor: "pointer",
                            backgroundColor: "white",
                            border: "1px solid #333",
                          }}
                          onClick={() => setShowContents(!showContents)}
                          className="btn w-100 mb-3"
                        >
                          Contents
                        </button>
                        {showContents && (
                          <ul className="list-unstyled ">
                            <li
                              className="p-3 border border-dark rounded mb-2 bg-white text-center fw-bold w-100"
                              draggable
                              onDragStart={(e) => handleDragStart(e, "text")}
                              style={{ cursor: "grab" }}
                            >
                              <RxText /> Text
                            </li>
                            <li
                              className="p-3 border rounded mb-2 bg-white text-center fw-bold w-100"
                              draggable
                              onDragStart={(e) => handleDragStart(e, "image")}
                              style={{ cursor: "grab" }}
                            >
                              <FaImage /> Image
                            </li>
                            <li
                              className="p-3 border rounded mb-2 bg-white text-center fw-bold w-100"
                              draggable
                              onDragStart={(e) => handleDragStart(e, "link")}
                              style={{ cursor: "grab" }}
                            >
                              <IoLinkOutline /> Link
                            </li>
                            <li
                              className="p-3 border rounded mb-2 bg-white text-center fw-bold w-100"
                              draggable
                              onDragStart={(e) => handleDragStart(e, "code")}
                              style={{ cursor: "grab" }}
                            >
                              <FaCode /> Code
                            </li>
                          </ul>
                        )}
                        <input
                          type="file"
                          id="imageUpload"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </div>
          
                      <div className="p-0 w-100">
                        <button
                          style={{
                            cursor: "pointer",
                            backgroundColor: "white",
                            border: "1px solid #333",
                          }}
                          className="btn w-100 mb-3"
                          onClick={() => setShowImportModal(true)}
                        >
                          Import Template
                        </button>
                      </div>
                    </div>
                  </div>
          
                  {/* Form Section */}
                  <div className="col-md-10 mt-4">
                    <h2 className="fw-bold mb-4">Create Email Template</h2>
          
                    <div className="row">
                      {/* Left Side (Category, Subject) */}
                      <div className="col-md-6">
                        {/* Category */}
                        <div className="mb-4">
                          <label className="form-label fw-semibold">
                            Category <span className="text-danger">*</span>
                          </label>
                          <select
                            id="optionInput"
                            className="form-select"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                          >
                            <option value="" disabled>
                              Category...
                            </option>
                            <option value="SD">SD</option>
                            <option value="QWP">QWP</option>
                          </select>
                        </div>
                      </div>
          
                      {/* Right Side (Template Name, Visibility) */}
                      <div className="col-md-6">
                        {/* Template Name */}
                        <div className="mb-0">
                          <label className="form-label fw-semibold">
                            Template Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="templateNameInput"
                            className="form-control"
                            placeholder="Enter Template Name..."
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
                          />
                          <small className="text-secondary">
                            It has to be unique. Accepts only Alphanumeric, Underscores,
                            and Hyphens.
                          </small>
                        </div>
                      </div>
                    </div>
                    <label className="fw-semibold">Template Body</label>
                    {/* Template Body Section */}
                    <div className="mb-4 border">
                      {/* Toolbar */}
                      {editor && (
                        <div
                          className="editor-toolbar p-1 border d-flex justify-content-between align-items-center"
                          style={{ backgroundColor: "lightgrey" }}
                        >
                          <div>
                            <button
                              className="btn"
                              onClick={() => editor.chain().focus().toggleBold().run()}
                            >
                              <b>
                                <i className="fa-solid fa-b "></i>
                              </b>
                            </button>
                            <button
                              className="btn"
                              onClick={() => editor.chain().focus().toggleItalic().run()}
                            >
                              <i className="fa-solid fa-i fa-italic"></i>
                            </button>
                            <button
                              className="btn"
                              onClick={() =>
                                editor.chain().focus().toggleUnderline().run()
                              }
                            >
                              <i className="fa-solid fa-underline"></i>
                            </button>
                            <button
                              className="btn"
                              onClick={() => editor.chain().focus().toggleStrike().run()}
                            >
                              <i className="fa-solid fa-strikethrough"></i>
                            </button>
                            <button
                              className="btn"
                              onClick={() =>
                                editor.chain().focus().toggleBulletList().run()
                              }
                            >
                              <i className="fa-solid fa-list-ul"></i>
                            </button>
                            <button
                              className="btn"
                              onClick={() =>
                                editor.chain().focus().toggleOrderedList().run()
                              }
                            >
                              <i className="fa-solid fa-list-ol"></i>
                            </button>
                            {/* Undo */}
                            <button
                              className="btn"
                              onClick={() => editor.chain().focus().undo().run()}
                              disabled={!editor.can().undo()}
                            >
                              <i className="fa-solid fa-rotate-left"></i>
                            </button>
          
                            {/* Redo */}
                            <button
                              className="btn"
                              onClick={() => editor.chain().focus().redo().run()}
                              disabled={!editor.can().redo()}
                            >
                              <i className="fa-solid fa-rotate-right"></i>
                            </button>
          
                            {/* Justify Left */}
                            <button
                              className="btn"
                              onClick={() =>
                                editor.chain().focus().setTextAlign("left").run()
                              }
                            >
                              <i className="fa-solid fa-align-left"></i>
                            </button>
          
                            {/* Justify Center */}
                            <button
                              className="btn"
                              onClick={() =>
                                editor.chain().focus().setTextAlign("center").run()
                              }
                            >
                              <i className="fa-solid fa-align-center"></i>
                            </button>
          
                            {/* Justify Right */}
                            <button
                              className="btn"
                              onClick={() =>
                                editor.chain().focus().setTextAlign("right").run()
                              }
                            >
                              <i className="fa-solid fa-align-right"></i>
                            </button>
          
                            <button
                              className="btn"
                              onClick={() => {
                                const url = prompt("Enter URL");
                                if (url) {
                                  editor.chain().focus().setLink({ href: url }).run();
                                }
                              }}
                            >
                              <i className="fa-solid fa-link"></i>
                            </button>
                            <button className="btn" onClick={clearAllContent}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => handleSaveButtonClick()}
                              className="btn border border-radius-50 bg-black text-white"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      )}
          
                      <div className="mb-3">
                        <div
                          className="border p-4 position-relative"
                          style={{ minHeight: "300px" }}
                          onDrop={handleDrop}
                          onDragOver={(e) => e.preventDefault()}
                        >
                          <div className="border" style={{ border: "1px solid black" }}>
                            <EditorContent className="" editor={editor} />
                          </div>
          
                          {/* Render direct container content */}
                          {containerContent.map((item) => (
                            <div
                              key={item.id}
                              className="mb-2 p-2 border rounded position-relative"
                              style={{
                                backgroundColor:
                                  item.type === "text"
                                    ? "#f8f9fa"
                                    : item.type === "image" ||
                                      item.type === "image-placeholder"
                                    ? "#e7f5ff"
                                    : item.type === "link"
                                    ? "#fff9db"
                                    : item.type === "code"
                                    ? "#f8f9fa"
                                    : "#ffffff",
                              }}
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="flex-grow-1">
                                  {item.type === "image" && (
                                    <div className="d-flex align-items-center">
                                      <FaImage className="me-2" />
                                      {typeof item.content !== 'string' && item.content?.imageData ? (
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={item.content.imageData}
                                            alt={item.content.fileName || "Image"}
                                            style={{
                                              maxHeight: "30px",
                                              width: "auto",
                                              marginRight: "8px",
                                            }}
                                          />
                                          <span>{item.content.fileName}</span>
                                        </div>
                                      ) : (
                                        "No image data"
                                      )}
                                    </div>
                                  )}
                                  {item.type === "image-placeholder" && (
                                    <div className="d-flex align-items-center">
                                      <FaImage className="me-2" /> {typeof item.content === 'string' ? item.content : ''}
                                      <button
                                        className="btn btn-sm btn-outline-primary ms-2"
                                        onClick={() =>
                                         handleImageUploadFunction({
                                            isContainer: true,
                                            itemId: item.id,
                                          })
                                        }
                                      >
                                        <FaPlus size={12} />
                                      </button>
                                    </div>
                                  )}
                                  {item.type === "link" && (
                                    <div className="d-flex align-items-center">
                                      <IoLinkOutline className="me-2" /> {typeof item.content === 'string' ? item.content : ''}
                                    </div>
                                  )}
                                  {item.type === "text" && (
                                    <div className="d-flex align-items-center">
                                      <RxText className="me-2" /> {typeof item.content === 'string' ? item.content : ''}
                                    </div>
                                  )}
                                  {item.type === "code" && (
                                    <div className="d-flex align-items-center">
                                      <FaCode className="me-2" /> {typeof item.content === 'string' ? item.content : ''}
                                    </div>
                                  )}
                                </div>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => removeContainerItem(item.id)}
                                >
                                  <i className="fa-solid fa-times"></i>
                                </button>
                              </div>
                            </div>
                          ))}
          
                          {/* Column layouts rendering */}
                          {columns.map((column) => (
                            <div
                              key={column.id}
                              // className="mb-3 border p-2 position-relative"
                            >
                              {/* Column header with remove button */}
                              {/*  <div className="d-flex justify-content-between align-items-center mb-2 p-1 bg-light">
                                <span className="text-muted small">{column.type}</span>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => removeColumn(column.id)}
                                >
                                  <i className="fa-solid fa-times"></i>
                                </button>
                              </div> */}
          
                              {/* Column content */}
                              {getColumnLayout(column)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
          
                    {/* Code Modal */}
                    {showCodeModal && (
                      <div className="modal d-block" tabIndex={-1} role="dialog">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Insert Code</h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowCodeModal(false)}
                              ></button>
                            </div>
                            <div className="modal-body">
                              <textarea
                                className="form-control"
                                rows={10}
                                value={codeInput}
                                onChange={(e) => setCodeInput(e.target.value)}
                                placeholder="Paste your code here..."
                              ></textarea>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowCodeModal(false)}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSaveCode}
                              >
                                Insert
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
          
                    {/* Add this modal component */}
                    {showImportModal && (
                      <div className="modal d-block" tabIndex={-1} role="dialog">
                        <div className="modal-dialog modal-lg" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Import HTML Template</h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowImportModal(false)}
                              ></button>
                            </div>
                            <div className="modal-body">
                              <textarea
                                className="form-control"
                                rows={15}
                                value={importHTML}
                                onChange={(e) => setImportHtml(e.target.value)}
                                placeholder="Paste your HTML code here..."
                                style={{ fontFamily: "monospace" }}
                              ></textarea>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowImportModal(false)}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleImportTemplate}
                              >
                                Import
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
          
                    {/* Additional Fields */}
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            Description <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Enter description"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
}

export default EmailTemplate
