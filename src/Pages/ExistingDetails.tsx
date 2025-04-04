import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import { FaCircleInfo } from "react-icons/fa6";
import { useTemplateInitializer } from "../hooks/useTemplateInitializer";

interface Template {
  id?: string;
  templateName: string;
  categoryName: string;
  templateBody?: string;
  containerContent?: Array<{
    id?: string;
    type: string;
    content: {
      fileName?: string;
      imageData?: string;
    } | string;
  }>;
  columns?: Array<{
    id?: string;
    type: string;
    structure: Array<{ 
      id?: string; 
      content: any 
    }>;
  }>;
  status?: string;
  type?: string;
}

const ExistingDetails: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string>("showAll");
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useTemplateInitializer();

  useEffect(() => {
    const storedTemplates: Template[] =
      JSON.parse(localStorage.getItem("templates") || "[]");
    setTemplates(storedTemplates);
  }, []);

  const handleShow = (template: Template) => {
    setSelectedTemplate(template);
    setShowEditModal(true);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
    setShowEditModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const publish = () => {
    navigate("/publish");
  };

  const handleEditTemplate = (template: Template) => {
    sessionStorage.setItem("editTemplate", JSON.stringify(template));
    navigate("/newtemplate");
  };

  const handleDelete = (index: number) => {
    const updatedTemplates = [...templates];
    updatedTemplates.splice(index, 1);
    setTemplates(updatedTemplates);
    localStorage.setItem("templates", JSON.stringify(updatedTemplates));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(event.target.value);
  };

  const getFilteredTemplates = (): Template[] => {
    switch (selectedFilter) {
      case "activeContent":
        return templates.filter((template) => template.status === "Yes");
      case "expiredContent":
        return templates.filter((template) => template.status === "No");
      case "emailContent":
        return templates.filter(
          (template) => template.type === "email" || !template.type
        );
      case "blockContent":
        return templates.filter((template) => template.type === "block");
      default:
        return templates;
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-1 p-0">
          <Layout />
        </div>
        <div className="col-md-11 mt-5">
          <div>
            <input
              type="text"
              className="form-control w-75 me-auto"
              placeholder="Enter the required content"
            />
            <div className="fs-5 d-flex align-items-center justify-content-between mt-4 p-4">
              {/* left side radio options */}
              <div>
                <input
                  type="radio"
                  className="me-2"
                  value="showAll"
                  name="contentFilter"
                  id="showall"
                  checked={selectedFilter === "showAll"}
                  onChange={handleFilterChange}
                />
                <label
                  htmlFor="showall"
                  className="me-2"
                  style={{ fontSize: "15px" }}
                >
                  Show All
                </label>

                <input
                  type="radio"
                  className="me-2"
                  value="activeContent"
                  name="contentFilter"
                  id="activecontent"
                  checked={selectedFilter === "activeContent"}
                  onChange={handleFilterChange}
                />
                <label
                  htmlFor="activecontent"
                  className="me-3"
                  style={{ fontSize: "15px" }}
                >
                  Active Content
                </label>

                <input
                  type="radio"
                  className="me-2"
                  value="expiredContent"
                  name="contentFilter"
                  id="expiredcontent"
                  checked={selectedFilter === "expiredContent"}
                  onChange={handleFilterChange}
                />
                <label
                  htmlFor="expiredcontent"
                  className="me-2"
                  style={{ fontSize: "15px" }}
                >
                  Expired Content
                </label>
              </div>
              {/* right side radio options */}
              <div>
                <input
                  type="radio"
                  className="me-2"
                  value="emailContent"
                  name="contentFilter"
                  id="emailContent"
                  checked={selectedFilter === "emailContent"}
                  onChange={handleFilterChange}
                />
                <label
                  htmlFor="emailContent"
                  className="me-2"
                  style={{ fontSize: "15px" }}
                >
                  Email Content
                </label>
                <input
                  type="radio"
                  className="me-2"
                  value="blockContent"
                  name="contentFilter"
                  id="blockContent"
                  checked={selectedFilter === "blockContent"}
                  onChange={handleFilterChange}
                />
                <label
                  htmlFor="blockContent"
                  className="me-2"
                  style={{ fontSize: "15px" }}
                >
                  Content Block
                </label>
              </div>
            </div>
          </div>

          <div className="container">
            {getFilteredTemplates().map((template, index) => (
              <div key={template.id || index} className="row mt-4">
                <div className="d-flex align-items-center justify-content-center mb-4 border p-3 row">
                  {/* Email info */}
                  <div className="text-end">
                    <span
                      style={{
                        fontSize: "15px",
                        color: "#333",
                        display: "inline-flex",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpenModal()}
                    >
                      <FaCircleInfo />
                    </span>
                  </div>
                  {/* Template Info */}
                  <div className="rounded p-2 col-12 mb-3 mb-md-0">
                    <div className="row">
                      <div className="col-md-4">
                        {template.containerContent?.length! > 0 && (
                          <div className="template-images">
                            <div className="d-flex flex-wrap gap-2">
                              {template.containerContent?.filter(
                                  (item) =>
                                    item.type === "image" &&
                                    typeof item.content === "object" &&
                                    item.content?.imageData
                                )
                                .slice(0, 1) // Show only 1 image
                                .map((item, idx) => {
                                  const content = item.content as { 
                                    fileName?: string; 
                                    imageData?: string 
                                  };
                                  return (
                                    <div
                                      key={idx}
                                      className="position-relative"
                                      style={{ width: "100%" }}
                                    >
                                      <img
                                        src={content.imageData}
                                        alt={content.fileName || "Content Image"}
                                        className="img-fluid rounded border"
                                        style={{
                                          maxHeight: "120px",
                                          objectFit: "cover",
                                          width: "100%",
                                        }}
                                      />
                                      {content.fileName && (
                                        <small
                                          className="text-muted d-block text-truncate"
                                          style={{ fontSize: "8px" }}
                                        >
                                          {content.fileName}
                                        </small>
                                      )}
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <div className="border rounded shadow-sm p-2">
                          <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                            {template.templateName}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            Category: {template.categoryName}
                          </p>

                          {/* Template Actions */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => handleShow(template)}
                              style={{ fontSize: "10px" }}
                            >
                              Preview
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDelete(index)}
                            >
                              <i
                                className="fa-solid fa-trash"
                                style={{ fontSize: "11px" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Analytics */}
                      <div className="col-md-4">
                        <div className="border rounded shadow-sm p-2 ">
                          <h6
                            className="text-center"
                            style={{ fontWeight: "bold", fontSize: "11px" }}
                          >
                            Analytics Overview
                          </h6>
                          <hr />
                          <ul
                            className="list-unstyled mb-0 email-list"
                            style={{
                              fontSize: "10px",
                              maxHeight: "100px",
                              overflowY: "auto",
                            }}
                          >
                            <li>
                              <strong>Edited:</strong> 48
                            </li>
                            <li>
                              <strong>Open:</strong> 42
                            </li>
                            <li>
                              <strong>Impressions:</strong> 9
                            </li>
                            <li>
                              <strong>Saved:</strong> 33
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal View of Email */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Email Usage Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul
                  className="list-unstyled mb-0 email-list"
                  style={{
                    fontSize: "14px",
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  <li>SDI_OAA_FHSA_Submitted_Day4</li>
                  <li>SDI_OAA_FHSA_Submitted_Day11</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal show={showEditModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              style={{ width: "40px", height: "30px" }}
              src={logo}
              alt="MartechBees Logo"
            />
            MartechBees
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {/* Template Header */}
            <div className="row mb-4">
              <div className="col-12">
                <h3 className="text-center mb-3">
                  <b>{selectedTemplate?.templateName}</b>
                </h3>
                <h4 className="text-left">
                  Category - <i>{selectedTemplate?.categoryName}</i>
                </h4>
              </div>
            </div>

            {/* Template Body */}
            {selectedTemplate?.templateBody && (
              <div className="row mb-4">
                <div className="col-12">
                  {/* <h5 className="mb-3">Template Body</h5> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedTemplate.templateBody,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Container Content */}
            {selectedTemplate?.containerContent?.length! > 0 && (
              <div className="row mb-4">
                <div className="col-12">
                  <div className="border p-3">
                    {selectedTemplate?.containerContent?.map((item, index) => {
                      if (item.type === "image" && typeof item.content === "object") {
                        const content = item.content as {
                          fileName?: string;
                          imageData?: string;
                        };
                        return (
                          <div key={item.id || index} className="mb-2">
                            {content.fileName && <div>{content.fileName}</div>}
                            {content.imageData && (
                              <img
                                src={content.imageData}
                                alt={content.fileName || "Image"}
                                style={{ maxWidth: "100px", height: "auto" }}
                              />
                            )}
                          </div>
                        );
                      } else {
                        return (
                          <div key={item.id || index}>
                            {typeof item.content === "string" ? item.content : ""}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Columns */}
            {selectedTemplate?.columns?.length! > 0 && (
              <div className="row mb-4">
                <div className="col-12">
                  {selectedTemplate?.columns?.filter((column) =>
                      [
                        "1:1 column",
                        "2:1 column",
                        "2:2 column",
                        "3:3 column",
                        "4:4 column",
                      ].includes(column.type)
                    )
                    .map((column, index) => (
                      <div key={column.id || index} className="border p-3 mb-3">
                        <h6 className="mb-2">{column.type}</h6>
                        <div className="d-flex gap-2">
                          {column.structure.map((block, blockIndex) => {
                            const flexWidth = `${100 / column.structure.length}%`;
                            return (
                              <div
                                key={block.id || blockIndex}
                                className="flex-grow-1 border p-2"
                                style={{
                                  width: flexWidth,
                                }}
                              >
                                {typeof block.content === "object" ? (
                                  block.content?.imageData ? (
                                    <img
                                      src={block.content.imageData}
                                      alt={block.content.fileName || "Image"}
                                      style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                  ) : (
                                    block.content?.fileName || "Empty"
                                  )
                                ) : (
                                  block.content || "Empty"
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={() => {
              if (selectedTemplate) {
                handleEditTemplate(selectedTemplate);
              }
            }}
          >
            Edit a Draft
          </button>
          <button className="btn btn-primary" onClick={publish}>
            Publish
          </button>
          <button className="btn btn-primary">Deactivate</button>
          <button className="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExistingDetails;