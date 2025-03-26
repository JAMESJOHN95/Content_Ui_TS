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
  const publish=()=>{
    navigate("/publish")
  }

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
          <div className="col-md-2 p-0">
            <Layout />
          </div>
          <div className="col-md-4 mt-5">
            <input
              type="text"
              className="form-control w-75 me-auto"
              placeholder="Enter the required content"
            />
            <div className="fs-5 d-flex align-items-center mt-3">
              <input
                type="radio"
                className="me-2"
                value="showAll"
                name="contentFilter"
                id="showall"
                checked={selectedFilter === "showAll"}
                onChange={handleFilterChange}
              />
              <label htmlFor="showall" className="me-3">
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
              <label htmlFor="activecontent" className="me-3">
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
              <label htmlFor="expiredcontent" className="me-2">
                Expired Content
              </label>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 mt-5 pe-4 text-end">
            {/* Other UI Elements */}
          </div>
        </div>

        <div className="row table table-responsive mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <table className="table border rounded">
              <thead>
                <tr>
                  <th>Template name</th>
                  <th>Category</th>
                  <th>Completion status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {templates.length > 0 ? (
                  templates.map((item, index) => (
                    <tr key={item.id || index}>
                      <td>{item.templateName}</td>
                      <td>{item.categoryName}</td>
                      <td>{item.status}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-dark"
                          onClick={() => handleShow(item)}
                          style={{ color: "white", backgroundColor: "black" }}
                        >
                          Preview
                        </button>
                        <button
                          className="btn btn-dark ms-2"
                          onClick={handleShowAnalytics}
                          style={{ color: "white", backgroundColor: "black" }}
                        >
                          <i className="fa-solid fa-chart-line"></i>
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => handleDelete(index)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No templates available</td>
                  </tr>
                )}
              </tbody>
            </table>
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
          <div className="row">
            <h3 className="text-center">
              <b>{selectedTemplate?.templateName}</b>
            </h3>
            <h4 className="text-left">
              Category - <i>{selectedTemplate?.categoryName}</i>
            </h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={() => handleEditTemplate(selectedTemplate)}
          >
            Edit a Draft
          </button>
          <button className="btn btn-primary" onClick={publish}>Publish</button>
          <button className="btn btn-primary">Deactivate</button>
          <button className="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAnalytics} onHide={handleCloseAnalytics} size="lg">
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
      </Modal>
    </>
  );
}

export default ExistingDetails;
