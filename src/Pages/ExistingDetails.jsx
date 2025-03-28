import React from "react";
import Layout from "./Layout";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";

function ExistingDetails() {
  const navigate = useNavigate();
  const [showAnalytics, setShowAnalytics] = useState(false);
  const handleCloseAnalytics = () => setShowAnalytics(false);
  const handleShowAnalytics = () => setShowAnalytics(true);
  const [selectedFilter, setSelectedFilter] = useState("showAll");
  // State to store the templates
  const [templates, setTemplates] = useState([]);

  //add state for selected template
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  //state to show the edit modal
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShow = (template) => {
    setSelectedTemplate(template);
    setShowEditModal(true);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
    setShowEditModal(false);
  };
  const publish = (template) => {
    sessionStorage.setItem("selectedTemplate", JSON.stringify(template)); // Store selected template
    navigate("/publish"); // Redirect to Publish page
  };

  // When sending a template to edit mode
  const handleEditTemplate = (template) => {
    // Make sure the template object includes the ID
    sessionStorage.setItem("editTemplate", JSON.stringify(template));
    navigate("/newtemplate");
  };

  useEffect(() => {
    // Retrieve stored templates from localStorage
    const storedTemplates = JSON.parse(localStorage.getItem("templates")) || [];
    setTemplates(storedTemplates);
    console.log(storedTemplates)
  }, []);

  const handleDelete = (index) => {
    const updatedTemplates = [...templates];
    updatedTemplates.splice(index, 1);
    setTemplates(updatedTemplates);
    localStorage.setItem("templates", JSON.stringify(updatedTemplates));
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 p-0">
            <Layout />
          </div>
          <div className="col-md-11 mt-5">
            <input
              type="text"
              className="form-control w-75 me-auto"
              placeholder="Enter the required content"
            />
            <div className="fs-5 d-flex align-items-center mt-4">
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
          </div>
          <div className="col"></div>
          <div className="col pe-4 text-end">{/* Other UI Elements */}</div>
        </div>

        <div className="row mt-4">
          {/* Spacing for SideBar */}
          <div className="col-md-1"></div>
          {/* Existing Templates */}
          <div className="col-md-7">
            {/* First Reactangle Showing Table View */}
            <div className="border rounded shadow-sm p-2 ">
              <div className="table-responsive">
                <table className="table table-sm table-bordered rounded">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ fontSize: "12px", padding: "5px" }}>
                        Template name
                      </th>
                      <th style={{ fontSize: "12px", padding: "5px" }}>
                        Category
                      </th>
                      <th style={{ fontSize: "12px", padding: "5px" }}>
                        Completion status
                      </th>
                      <th
                        style={{ fontSize: "12px", padding: "5px" }}
                        className="text-center"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {templates.length > 0 ? (
                      templates.map((item, index) => (
                        <tr key={item.id || index}>
                          <td style={{ fontSize: "12px", padding: "5px" }}>
                            {item.templateName}
                          </td>
                          <td style={{ fontSize: "12px", padding: "5px" }}>
                            {item.categoryName}
                          </td>
                          <td style={{ fontSize: "12px", padding: "5px" }}>
                            {item.status}
                          </td>
                          <td
                            style={{ fontSize: "12px", padding: "5px" }}
                            className="text-center"
                          >
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                className="btn btn-dark btn-sm ms-2"
                                onClick={() => handleShow(item)}
                                style={{
                                  color: "white",
                                  backgroundColor: "black",
                                  fontSize: "10px",
                                  padding: "5px 10px",
                                  height: "30px",
                                }}
                              >
                                Preview
                              </button>
                              {/* <button
                          className="btn btn-dark ms-2"
                          onClick={handleShowAnalytics}
                          style={{ color: "white", backgroundColor: "black" }}
                        >
                          <i className="fa-solid fa-chart-line"></i>
                        </button> */}
                              <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() => handleDelete(index)}
                              >
                                <i
                                  className="fa-solid fa-trash"
                                  style={{
                                    fontSize: "10px",
                                    padding: "5px 10px",
                                    height: "10px",
                                  }}
                                ></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          style={{ fontSize: "12px", padding: "10px" }}
                          colSpan="4"
                        >
                          No templates available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Analytics View */}
          <div className="col-md-2">
            {/* Second Rectangle Showing Analytics View */}
            <div className="border rounded shadow-sm p-2 ">
              <h6
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "11px" }}
              >
                Analytics Overview
              </h6>
              <hr />
              <ul
                style={{ fontSize: "10px", textAlign: "justify" }}
                className="list-unstyled small"
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
          {/* Client Email List */}
          <div className="col-md-2">
            {/* Third Rectangle Showing Client Email List */}
            <div className="border rounded shadow-sm p-2 email-container">
              <h6
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "11px" }}
              >
                List of Emails where Content Block is Used
              </h6>
              <hr />
              <ul className="list-unstyled small email-list">
                <li>SDI_OAA_FHSA_Submitted_Day4</li>
                <li>SDI_OAA_FHSA_Submitted_Day11</li>
                <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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
                  {selectedTemplate.columns
                    .filter((column) =>
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
                          ))}
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
            onClick={() => handleEditTemplate(selectedTemplate)}
          >
            Edit a Draft
          </button>

          <button className="btn btn-primary" onClick={() => publish(selectedTemplate)}>Publish</button>
          <button className="btn btn-primary">Deactivate</button>
          <button className="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={showAnalytics} onHide={handleCloseAnalytics} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <span
              style={{ color: "darkviolet", fontSize: "30px" }}
              className="fw-Bold"
            >
              Analytics
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 text-center">
                <h3>Edited:48</h3>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="col-md-4">
              <h3 className="text-center">Open:42</h3>
            </div>
            <div className="col-md-4 text-center">
              <h3>Impressions:9</h3>
            </div>
            <div className="col-md-4 text-center">
              <h3>Saved:33</h3>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary ms-2 me-2 p-3"
            onClick={handleCloseAnalytics}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default ExistingDetails;
