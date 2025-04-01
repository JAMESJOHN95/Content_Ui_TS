import React, { useEffect, useState } from "react";
import one from "../Images/1on1.png";
import choose from "../Images/choose.webp";
import Layout from "./Layout";
import "../Styles/Aside.css";
import { v4 as uuidv4 } from "uuid";

// info icon
import { FaCircleInfo } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Templates() {
  //intialize the navigate
  const navigate = useNavigate();

  //state for email modal
  const [showModal, setShowModal] = useState(false);

  //state to store templates data
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const storedTemplates = JSON.parse(localStorage.getItem("templates")) || [];
    setTemplates(storedTemplates);
  }, []);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  //used for adding custom template on click in button preview
  // const handleCustomTemplates = () => {
  //   //get the data from the DOM
  //   const preTemplateName =
  //     document.getElementsByClassName("preTemplateName").value;
  //   const preCategoryName =
  //     document.getElementsByClassName("preCategoryName").value;
  //   const preTemplateDescription = document.getElementsByClassName(
  //     "preTemplateDescription"
  //   ).value;

  //   const preTemplate = {
  //     id: uuidv4(),
  //     templateName: preTemplateName,
  //     categoryName: preCategoryName,
  //     status: "Yes",
  //     templateBody: preTemplateDescription,
  //     columns: [],
  //     containerContent: [],
  //     desc: "",
  //   };

  //   const existingTemplates = JSON.parse(localStorage.getItem("templates")) || [];
  //   setExistingTemplates(existingTemplates);
  //   //Add the pre-built templates to the existing template
  //   existingTemplates.push(preTemplate);
  //   //save to local storage
  //   localStorage.setItem("templates", JSON.stringify(existingTemplates));
  //   alert("Custom Template Added Successfully");
  //   //navigate to the existing contents page
  //   navigate("/existingcontents", { replace: "true" });
  // };

  return (
    <>
      <div className="row">
        <div className="col-md-1">
          <Layout />
        </div>
        <div className="col-md-11 mt-4 p-4">
          <div className="row mt-4">
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
                  onClick={() => handleShow()}
                >
                  <FaCircleInfo />
                </span>
              </div>

              {/* Template Info */}
              <div className="rounded p-2 col-md-12 mb-3 mb-md-0">
                <div className="row">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="template-images">
                      <div className="d-flex flex-wrap gap-2">
                        <div
                          className="position-relative"
                          style={{ width: "100%" }}
                        >
                          <img
                            src={one}
                            className="img-fluid rounded border"
                            style={{
                              maxHeight: "250px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex flex-column mb-3 mb-md-0">
                    <h4 className="preTemplateName">Template Name</h4>
                    <p className="preCategoryName" style={{ fontSize: "13px" }}>
                      Category Name
                    </p>
                    <p>Description</p>
                    <p
                      className="preTemplateDescription"
                      style={{
                        fontSize: "13px",
                        color: "grey",
                        wordSpacing: "1px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Adipisci a animi, eaque quod sequi fugit voluptates velit
                      quasi dolor natus, perferendis doloribus repellendus.
                      Dicta odit culpa optio fugiat inventore suscipit!
                    </p>
                    {/* Preview Button */}
                    <div>
                      <button
                        className="btn btn-md "
                        onClick={() => handleCustomTemplates()}
                        style={{
                          color: "white",
                          backgroundColor: "#333",
                          fontSize: "10px",
                          padding: "5px 10px",
                          height: "30px",
                        }}
                      >
                        Preview
                      </button>
                      {/* Delete Button */}
                      <button
                        className="btn btn-sm ms-1"
                        style={{ border: "none", outline: "none" }}
                        onClick={() => handleDelete(index)}
                      >
                        <i
                          className="fa-solid fa-trash text-danger"
                          style={{
                            fontSize: "15px",
                            padding: "5px 10px",
                            height: "10px",
                          }}
                        ></i>
                      </button>
                    </div>
                    {/* <div>
                          <a
                            style={{ fontSize: "10px" }}
                            target="_blank"
                            href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                          >
                            Request a Demo{" "}
                          </a>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>
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
                  onClick={() => handleShow()}
                >
                  <FaCircleInfo />
                </span>
              </div>

              {/* Template Info */}
              <div className="rounded p-2 col-md-12 mb-3 mb-md-0">
                <div className="row">
                  <div className="col-12 col-md-6 d-flex flex-column mb-3 mb-md-0">
                    <h4 className="preTemplateName">Template Name</h4>
                    <p className="preCategoryName" style={{ fontSize: "13px" }}>
                      Category Name
                    </p>
                    <p>Description</p>
                    <p
                      className="preTemplateDescription"
                      style={{
                        fontSize: "13px",
                        color: "grey",
                        wordSpacing: "1px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Adipisci a animi, eaque quod sequi fugit voluptates velit
                      quasi dolor natus, perferendis doloribus repellendus.
                      Dicta odit culpa optio fugiat inventore suscipit!
                    </p>
                    {/* Preview Button */}
                    <div>
                      <button
                        className="btn btn-md "
                        onClick={() => handleShow(item)}
                        style={{
                          color: "white",
                          backgroundColor: "#333",
                          fontSize: "10px",
                          padding: "5px 10px",
                          height: "30px",
                        }}
                      >
                        Preview
                      </button>
                      {/* Delete Button */}
                      <button
                        className="btn btn-sm ms-1"
                        style={{ border: "none", outline: "none" }}
                        onClick={() => handleDelete(index)}
                      >
                        <i
                          className="fa-solid fa-trash text-danger"
                          style={{
                            fontSize: "15px",
                            padding: "5px 10px",
                            height: "10px",
                          }}
                        ></i>
                      </button>
                    </div>
                    {/* <div>
                          <a
                            style={{ fontSize: "10px" }}
                            target="_blank"
                            href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                          >
                            Request a Demo{" "}
                          </a>
                        </div> */}
                  </div>
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="template-images">
                      <div className="d-flex flex-wrap gap-2">
                        <div
                          className="position-relative"
                          style={{ width: "100%" }}
                        >
                          <img
                            src={choose}
                            className="img-fluid rounded border"
                            style={{
                              maxHeight: "250px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-stretch justify-content-center mb-4 border p-3 row">
              <div className="text-end">
                <span
                  style={{
                    fontSize: "15px",
                    color: "#333",
                    display: "inline-flex",
                    cursor: "pointer",
                  }}
                  onClick={() => handleShow()}
                >
                  <FaCircleInfo />
                </span>
              </div>
              {/* Template Info */}
              <div className="rounded p-2 col-md-6 mb-3 mb-md-0 h-100">
                <div className="row h-100">
                  <div className="col-12 mb-2">
                    <div className="template-images">
                      <div className="d-flex flex-wrap gap-2">
                        <div
                          className="position-relative"
                          style={{ width: "100%" }}
                        >
                          <img
                            src={one}
                            className="img-fluid rounded border"
                            style={{
                              maxHeight: "250px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex flex-column mb-3 mb-md-0">
                    <h4 className="preTemplateName">Template Name</h4>
                    <p className="preCategoryName" style={{ fontSize: "13px" }}>
                      Category Name
                    </p>
                    <p>Description</p>
                    <p
                      className="preTemplateDescription"
                      style={{
                        fontSize: "13px",
                        color: "grey",
                        wordSpacing: "1px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Adipisci a animi, eaque quod sequi fugit voluptates velit
                      quasi dolor natus, perferendis doloribus repellendus.
                      Dicta odit culpa optio fugiat inventore suscipit!
                    </p>
                    {/* Preview Button */}
                    <div>
                      <button
                        className="btn btn-md "
                        onClick={() => handleShow(item)}
                        style={{
                          color: "white",
                          backgroundColor: "#333",
                          fontSize: "10px",
                          padding: "5px 10px",
                          height: "30px",
                        }}
                      >
                        Preview
                      </button>
                      {/* Delete Button */}
                      <button
                        className="btn btn-sm ms-1"
                        style={{ border: "none", outline: "none" }}
                        onClick={() => handleDelete(index)}
                      >
                        <i
                          className="fa-solid fa-trash text-danger"
                          style={{
                            fontSize: "15px",
                            padding: "5px 10px",
                            height: "10px",
                          }}
                        ></i>
                      </button>
                    </div>
                    {/* <div>
                          <a
                            style={{ fontSize: "10px" }}
                            target="_blank"
                            href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                          >
                            Request a Demo{" "}
                          </a>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-stretch justify-content-center mb-4 border p-3 row">
              <div className="text-end">
                <span
                  style={{
                    fontSize: "15px",
                    color: "#333",
                    display: "inline-flex",
                    cursor: "pointer",
                  }}
                  onClick={() => handleShow()}
                >
                  <FaCircleInfo />
                </span>
              </div>
              {/* Template Info */}
              <div className="rounded p-2 col-md-6 mb-3 mb-md-0 h-100">
                <div className="row h-100">
                  <div className="col-12 d-flex flex-column mb-3 mb-md-0">
                    <h4 className="preTemplateName">Template Name</h4>
                    <p className="preCategoryName" style={{ fontSize: "13px" }}>
                      Category Name
                    </p>
                    <p>Description</p>
                    <p
                      className="preTemplateDescription"
                      style={{
                        fontSize: "13px",
                        color: "grey",
                        wordSpacing: "1px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Adipisci a animi, eaque quod sequi fugit voluptates velit
                      quasi dolor natus, perferendis doloribus repellendus.
                      Dicta odit culpa optio fugiat inventore suscipit!
                    </p>
                    {/* Preview Button */}
                    <div>
                      <button
                        className="btn btn-md "
                        onClick={() => handleShow(item)}
                        style={{
                          color: "white",
                          backgroundColor: "#333",
                          fontSize: "10px",
                          padding: "5px 10px",
                          height: "30px",
                        }}
                      >
                        Preview
                      </button>
                      {/* Delete Button */}
                      <button
                        className="btn btn-sm ms-1"
                        style={{ border: "none", outline: "none" }}
                        onClick={() => handleDelete(index)}
                      >
                        <i
                          className="fa-solid fa-trash text-danger"
                          style={{
                            fontSize: "15px",
                            padding: "5px 10px",
                            height: "10px",
                          }}
                        ></i>
                      </button>
                    </div>
                    {/* <div>
                          <a
                            style={{ fontSize: "10px" }}
                            target="_blank"
                            href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                          >
                            Request a Demo{" "}
                          </a>
                        </div> */}
                  </div>
                  <div className="col-md-12">
                    <div className="template-images">
                      <div className="d-flex flex-wrap gap-2">
                        <div
                          className="position-relative"
                          style={{ width: "100%" }}
                        >
                          <img
                            src={choose}
                            className="img-fluid rounded border"
                            style={{
                              maxHeight: "250px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal View of Email */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Email Usage Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
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
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Templates;
