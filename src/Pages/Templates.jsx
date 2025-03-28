import React from "react";
import one from "../Images/1on1.png";
import choose from "../Images/choose.webp";
import Layout from "./Layout";
import "../Styles/Aside.css";

function Templates() {
  const handleBasicTemplate = () => {};

  return (
    <>
      <div className="row">
        <div className="col-md-1">
          <Layout />
        </div>
        <div className="col-md-11 mt-4 p-4">
          <div className="row mt-4">
            <div className="d-flex align-items-center justify-content-center mb-4 border p-3 row">
              {/* Template Info */}
              <div className="rounded p-2 col-md-6 mb-3 mb-md-0">
                <div className="row">
                  <div className="col-md-6 mb-3 mb-md-0">
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
                              maxHeight: "120px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="border rounded shadow-sm p-2">
                      <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                        Template Name
                      </p>
                      <p style={{ fontSize: "12px" }}>Category Name</p>

                      {/* Template Actions */}
                      <div className="template-actions d-flex justify-content-between align-items-center">
                        <div>
                          <a
                            style={{ fontSize: "10px" }}
                            target="_blank"
                            href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                          >
                            Request a Demo{" "}
                          </a>
                        </div>

                        {/* Preview Button */}
                        <div>
                          <button
                            className="btn btn-sm "
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
                            className="btn btn-danger btn-sm ms-1"
                            onClick={() => handleDelete(index)}
                          >
                            <i
                              className="fa-solid fa-trash"
                              style={{
                                fontSize: "11px",
                                padding: "5px 10px",
                                height: "10px",
                              }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="col-md-3 mb-3 mb-md-0">
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

              {/* Email List */}
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="border rounded shadow-sm p-3 email-container">
                  <h6
                    className="text-center fw-bold"
                    style={{ fontSize: "11px" }}
                  >
                    Email Usage
                  </h6>
                  <hr className="my-2" />
                  <ul
                    className="list-unstyled mb-0 email-list"
                    style={{
                      fontSize: "10px",
                      maxHeight: "100px",
                      overflowY: "auto",
                    }}
                  >
                    <li>SDI_OAA_FHSA_Submitted_Day4</li>
                    <li>SDI_OAA_FHSA_Submitted_Day11</li>
                    <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                    <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-4 border p-3 row">
              {/* Analytics */}
              <div className="col-md-3 mb-3 mb-md-0">
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

              {/* Email List */}
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="border rounded shadow-sm p-2 email-container">
                  <h6
                    className="text-center fw-bold"
                    style={{ fontSize: "11px" }}
                  >
                    Email Usage
                  </h6>
                  <hr className="my-2" />
                  <ul
                    className="list-unstyled mb-0 email-list"
                    style={{
                      fontSize: "10px",
                      maxHeight: "100px",
                      overflowY: "auto",
                    }}
                  >
                    <li>SDI_OAA_FHSA_Submitted_Day4</li>
                    <li>SDI_OAA_FHSA_Submitted_Day11</li>
                    <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                    <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                  </ul>
                </div>
              </div>

              {/* Template Info */}
              <div className="rounded p-2 col-md-6 mb-3 mb-md-0">
                <div className="row">
                  <div className="col-md-6">
                    <div className="border rounded shadow-sm p-2">
                      <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                        Template Name
                      </p>
                      <p style={{ fontSize: "12px" }}>Category Name</p>

                      {/* Template Actions */}
                      <div className="template-actions d-flex justify-content-between align-items-center">
                        <div>
                          <a
                            style={{ fontSize: "10px" }}
                            target="_blank"
                            href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                          >
                            Request a Demo{" "}
                          </a>
                        </div>

                        {/* Preview Button */}
                        <div>
                          <button
                            className="btn btn-sm "
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
                            className="btn btn-danger btn-sm ms-1"
                            onClick={() => handleDelete(index)}
                          >
                            <i
                              className="fa-solid fa-trash"
                              style={{
                                fontSize: "11px",
                                padding: "5px 10px",
                                height: "10px",
                              }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
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
                              maxHeight: "120px",
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
              {/* Template Info */}
              <div className="rounded p-2 col-md-6 mb-3 mb-md-0 h-100">
                <div className="row h-100">
                  <div className="col-md-12 mb-2">
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
                              maxHeight: "200px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 h-100">
                    <div className="border rounded shadow-sm p-2">
                      <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                        Template Name
                      </p>
                      <p style={{ fontSize: "12px" }}>Category Name</p>
                      {/* Template Actions */}
                      <div className="template-actions d-flex justify-content-between align-items-center">
                        <div>
                          <a
                            style={{ fontSize: "10px" }}
                            target="_blank"
                            href="https://www.questrade.com/"
                          >
                            Request a Demo
                          </a>
                        </div>
                        <div>
                          <button
                            className="btn btn-sm"
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
                          <button
                            className="btn btn-danger btn-sm ms-1"
                            onClick={() => handleDelete(index)}
                          >
                            <i
                              className="fa-solid fa-trash"
                              style={{
                                fontSize: "11px",
                                padding: "5px 10px",
                                height: "10px",
                              }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="col-md-3 mb-3 mb-md-0 h-100">
                <div className="border rounded shadow-sm p-2 h-100">
                  <h6
                    className="text-center"
                    style={{ fontWeight: "bold", fontSize: "11px" }}
                  >
                    Analytics Overview
                  </h6>
                  <hr />
                  <ul
                    className="list-unstyled mb-0 email-list"
                    style={{ fontSize: "10px", overflowY: "auto" }}
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

              {/* Email List */}
              <div className="col-md-3 mb-3 mb-md-0 h-100">
                <div className="border rounded shadow-sm p-3 h-100">
                  <h6
                    className="text-center fw-bold"
                    style={{ fontSize: "11px" }}
                  >
                    Email Usage
                  </h6>
                  <hr className="my-2" />
                  <ul
                    className="list-unstyled mb-0 email-list"
                    style={{ fontSize: "10px", overflowY: "auto" }}
                  >
                    <li>SDI_OAA_FHSA_Submitted_Day4</li>
                    <li>SDI_OAA_FHSA_Submitted_Day11</li>
                    <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                    <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-stretch justify-content-center mb-4 border p-3 row">
              {/* Analytics */}
              <div className="col-md-3 mb-3 mb-md-0 h-100">
                <div className="border rounded shadow-sm p-2 h-100">
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

              {/* Email List */}
              <div className="col-md-3 mb-3 mb-md-0 h-100">
                <div className="border rounded shadow-sm p-3 email-container h-100">
                  <h6
                    className="text-center fw-bold"
                    style={{ fontSize: "11px" }}
                  >
                    Email Usage
                  </h6>
                  <hr className="my-2" />
                  <ul
                    className="list-unstyled mb-0 email-list"
                    style={{
                      fontSize: "10px",
                      maxHeight: "100px",
                      overflowY: "auto",
                    }}
                  >
                    <li>SDI_OAA_FHSA_Submitted_Day4</li>
                    <li>SDI_OAA_FHSA_Submitted_Day11</li>
                    <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                    <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                  </ul>
                </div>
              </div>

              {/* Template Info */}
              <div className="rounded p-2 col-md-6 mb-3 mb-md-0 h-100">
                <div className="row h-100">
                  <div className="col-md-12 mb-2">
                    <div className="border rounded shadow-sm p-2">
                      <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                        Template Name
                      </p>
                      <p style={{ fontSize: "12px" }}>Category Name</p>

                      {/* Template Actions */}
                      <div className="template-actions d-flex justify-content-between align-items-center">
                        <div>
                          <a
                            style={{ fontSize: "10px" }}
                            target="_blank"
                            href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                          >
                            Request a Demo{" "}
                          </a>
                        </div>

                        {/* Preview Button */}
                        <div>
                          <button
                            className="btn btn-sm "
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
                            className="btn btn-danger btn-sm ms-1"
                            onClick={() => handleDelete(index)}
                          >
                            <i
                              className="fa-solid fa-trash"
                              style={{
                                fontSize: "11px",
                                padding: "5px 10px",
                                height: "10px",
                              }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
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
                              maxHeight: "200px",
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
    </>
  );
}

export default Templates;
