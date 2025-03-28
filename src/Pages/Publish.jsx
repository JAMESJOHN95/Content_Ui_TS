import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../Componants/TokenContext';
import axios from 'axios';
import Layout from './Layout';

function Publish() {
    const { token } = useContext(TokenContext);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    useEffect(() => {
        // Retrieve selected template from sessionStorage
        const storedTemplate = sessionStorage.getItem("selectedTemplate");
        console.log(storedTemplate);
        if (storedTemplate) {
            setSelectedTemplate(JSON.parse(storedTemplate));
        }
    }, []);

    const publishingTemplate = async () => {
        if (!token) {
            alert("Token Generation Failed");
            return;
        }

        try {
            console.log("Inside Publish Template Function");

            // Construct the HTML dynamically
            let htmlView = `<html>
                <head>
                    <title>${selectedTemplate?.templateName || "Untitled Template"}</title>
                </head>
                <body>
                    <h1>${selectedTemplate?.templateName || "No Title"}</h1>
                    <h3>Category: ${selectedTemplate?.categoryName || "Uncategorized"}</h3>
                    <div>${selectedTemplate?.templateBody || "<p>No Content</p>"}</div>
            `;

            // Handle container content dynamically
            if (selectedTemplate?.containerContent?.length > 0) {
                htmlView += `<div><h4>Container Content:</h4>`;
                selectedTemplate.containerContent.forEach(item => {
                    htmlView += `<div>`;
                    if (item.type === "image") {
                        htmlView += `<img src="${item.content?.imageData}" alt="${item.content?.fileName || 'Image'}" style="max-width:100%"/>`;
                    } else {
                        htmlView += `<p>${item.content || "No content"}</p>`;
                    }
                    htmlView += `</div>`;
                });
                htmlView += `</div>`;
            }

            // Handle column structures dynamically
            if (selectedTemplate?.columns?.length > 0) {
                htmlView += `<div><h4>Columns:</h4>`;
                selectedTemplate.columns.forEach(column => {
                    htmlView += `<div style="display:flex;">`;
                    column.structure.forEach(block => {
                        htmlView += `<div style="flex:1; padding:5px; border:1px solid #ccc;">`;
                        if (typeof block.content === "object") {
                            if (block.content?.imageData) {
                                htmlView += `<img src="${block.content.imageData}" alt="${block.content?.fileName || 'Image'}" style="max-width:100%"/>`;
                            } else {
                                htmlView += `<p>${block.content?.fileName || "Empty"}</p>`;
                            }
                        } else {
                            htmlView += `<p>${block.content || "Empty"}</p>`;
                        }
                        htmlView += `</div>`;
                    });
                    htmlView += `</div>`;
                });
                htmlView += `</div>`;
            }

            // Close the HTML body
            htmlView += `</body></html>`;

            // Send API request
            const response = await axios.post(
                'https://platform.adobe.io/ajo/content/templates',
                {
                    name: selectedTemplate?.templateName || "Default Name",
                    description: selectedTemplate?.desc || "No Description",
                   /*  category: selectedTemplate?.categoryName, */
                   /*  fileName: selectedTemplate?.containerContent?.fileName,
                    imageData:selectedTemplate?.containerContent?.imageData,
                    text: selectedTemplate?.templateBody,  */
                    templateType: "html",
                    channels: ["email"],
                    source: {
                        origin: "ajo",
                        metadata: {}
                    },
                    template: {
                        html:/* htmlView */ "html view",
                        editorContext: {}
                    }
                },
                {
                    headers: {
                        "x-api-key": "bc4db24a1ce845fcbe8c99d30048af8f",
                        "x-gw-ims-org-id": "3C4727E253DB241C0A490D4E@AdobeOrg",
                        "x-sandbox-name": "uatmmh",
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/vnd.adobe.ajo.template.v1+json",
                    }
                }
            );

            if (response.status === 201) {
                console.log("Template published successfully");
            } else {
                console.error("Failed to publish template", response.data);
            }
        } catch (error) {
            console.error("Error in Publishing Template", error.response?.data || error.message);
        }
    };

    return (
       <>
            <div className='row'>
                <div className='col-md-2'><Layout/></div>
                <div className='col-md-10 mt-5'>
                <div className="container">
            {/* Template Header */}
              <div className="col-12 border p-3">
                <h3 className="text-center mb-3">
                  <b>{selectedTemplate?.templateName}</b>
                </h3>
                <h4 className="text-left">
                  Category - <i>{selectedTemplate?.categoryName}</i>
                </h4>

            {/* Template Body */}
            {selectedTemplate?.templateBody && (
              <div className="row mb-4">
                <div className="col-12">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedTemplate.templateBody,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Container Content */}
            {selectedTemplate?.containerContent?.length > 0 && (
              <div className="row mb-4">
                <div className="col-12">
                  <div className="border p-3">
                    {selectedTemplate.containerContent.map((item, index) => (
                      <div key={item.id || index} className="mb-2">
                        {item.type === "image" ? (
                          <>
                            {item.content?.fileName && (
                              <div>{item.content.fileName}</div>
                            )}
                            {item.content?.imageData && (
                              <img
                                src={item.content.imageData}
                                alt={item.content.fileName || "Image"}
                                style={{ maxWidth: "100px", height: "auto" }}
                              />
                            )}
                          </>
                        ) : (
                          <div>
                            {typeof item.content === "string"
                              ? item.content
                              : ""}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Columns */}
            {selectedTemplate?.columns?.length > 0 && (
              <div className="row mb-4">
                <div className="col-12">
                  {selectedTemplate.columns.map((column, index) => (
                    <div key={column.id || index} className="border p-3 mb-3">
                      <h6 className="mb-2">{column.type}</h6>
                      <div className="d-flex gap-2">
                        {column.structure.map((block, blockIndex) => (
                          <div
                            key={block.id || blockIndex}
                            className="flex-grow-1 border p-2"
                            style={{
                              width: `${100 / column.structure.length}%`,
                            }}
                          >
                            {typeof block.content === "object" ? (
                              block.content?.imageData ? (
                                <img
                                  src={block.content.imageData}
                                  alt={block.content?.fileName || "Image"}
                                  style={{ maxWidth: "100%", height: "auto" }}
                                />
                              ) : (
                                block.content?.fileName || "Empty"
                              )
                            ) : (
                              block.content || "Empty"
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button className='btn mt-3 ms-auto w-25' style={{color:'white',backgroundColor:'black'}} onClick={publishingTemplate}>Add</button>
              </div>
            )}
           
          </div>
                </div>
               
            </div>
            </div>
       </>
    );
}

export default Publish;
