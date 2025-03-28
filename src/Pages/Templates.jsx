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
        <div className="col-md-11 mt-4 p-4 border">
          <div className="d-flex justify-content-center align-items-center mb-4 border p-3 row">
            <div className="col-md-3 text-center mb-3 mb-md-0">
              <img
                className="img-fluid rounded template-img"
                src={one}
                alt="No Image"
              />
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="border rounded shadow-sm p-2 ">
                <p style={{ fontSize: "15px" }}>
                  Get a 1-on-1 demo of Questrade Trading
                </p>
                <p style={{ fontSize: "12px" }}>
                  Ready to start trading stocks? Request a demo today to get a
                  1-on-1 tutorial by one of our reps to get some trading
                  practice on our Questrade Trading platform.
                </p>
                <div className="d-flex justify-content-between align-items-center">
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
            <div className="col-md-3">
              <div className="border rounded shadow-sm p-2 email-container">
                <h6
                  className="text-center"
                  style={{ fontWeight: "bold", fontSize: "11px" }}
                >
                  List of Emails where Content Block is Used
                </h6>
                <hr />
                <ul
                  style={{ fontSize: "10px", textAlign: "justify" }}
                  className="list-unstyled small email-list"
                >
                  <li>SDI_OAA_FHSA_Submitted_Day4</li>
                  <li>SDI_OAA_FHSA_Submitted_Day11</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mb-4 border p-3  row">
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="border rounded shadow-sm p-2 ">
                <p style={{ fontSize: "15px" }}>
                  Get a 1-on-1 demo of Questrade Trading
                </p>
                <p style={{ fontSize: "12px" }}>
                  Ready to start trading stocks? Request a demo today to get a
                  1-on-1 tutorial by one of our reps to get some trading
                  practice on our Questrade Trading platform.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    style={{ fontSize: "10px" }}
                    target="_blank"
                    href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                  >
                    Request a Demo{" "}
                  </a>
                  <button className="btn border" style={{ fontSize: "8px" }}>
                    <i
                      class="fa-solid fa-chart-line"
                      style={{ fontSize: "10px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
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
            <div className="col-md-3">
              <div className="border rounded shadow-sm p-2 email-container">
                <h6
                  className="text-center"
                  style={{ fontWeight: "bold", fontSize: "11px" }}
                >
                  List of Emails where Content Block is Used
                </h6>
                <hr />
                <ul
                  style={{ fontSize: "10px", textAlign: "justify" }}
                  className="list-unstyled small email-list"
                >
                  <li>SDI_OAA_FHSA_Submitted_Day4</li>
                  <li>SDI_OAA_FHSA_Submitted_Day11</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 text-center mb-3 mb-md-0">
              <img
                className="img-fluid rounded template-img"
                src={choose}
                alt="No Image"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mb-4 border p-3 row">
            {/* Image Column (Top-Aligned) */}
            <div className="col-md-12 mb-3 text-center">
              <img
                className="img-fluid rounded template-img-top"
                src={one}
                alt="No Image"
              />
            </div>

            {/* Content Column 1 (Bottom-Aligned) */}
            <div className="col-md-4">
              <div className="border rounded shadow-sm p-2 mt-auto">
                {" "}
                {/* mt-auto pushes content to bottom */}
                <p style={{ fontSize: "15px" }}>
                  Get a 1-on-1 demo of Questrade Trading
                </p>
                <p style={{ fontSize: "12px" }}>
                  Ready to start trading stocks? Request a demo today to get a
                  1-on-1 tutorial by one of our reps.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    style={{ fontSize: "10px" }}
                    target="_blank"
                    href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading"
                  >
                    Request a Demo{" "}
                  </a>
                  <button className="btn border" style={{ fontSize: "8px" }}>
                    <i
                      className="fa-solid fa-chart-line"
                      style={{ fontSize: "10px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Column 2 (Bottom-Aligned) */}
            <div className="col-md-4 ">
              <div className="border rounded shadow-sm p-2 mt-auto">
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

            {/* Content Column 3 (Bottom-Aligned) */}
            <div className="col-md-4">
              <div className="border rounded shadow-sm p-2 mt-auto">
                <h6
                  className="text-center"
                  style={{ fontWeight: "bold", fontSize: "11px" }}
                >
                  List of Emails where Content Block is Used
                </h6>
                <hr />
                <ul
                  style={{ fontSize: "10px", textAlign: "justify" }}
                  className="list-unstyled small email-list"
                >
                  <li>SDI_OAA_FHSA_Submitted_Day4</li>
                  <li>SDI_OAA_FHSA_Submitted_Day11</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center border p-3  row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="border rounded shadow-sm p-2 ">
                <p style={{ fontSize: "15px" }}>
                  Get a 1-on-1 demo of Questrade Trading
                </p>
                <p style={{ fontSize: "12px" }}>
                  Ready to start trading stocks? Request a demo today to get a
                  1-on-1 tutorial by one of our reps to get some trading
                  practice on our Questrade Trading platform.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    style={{ fontSize: "10px" }}
                    target="_blank"
                    href="https://www.questrade.com/self-directed-investing/trading-platforms/questrade-trading?s_cid=QFGBLOG_095_email_qcom_lead_pulse&eml=QFGBLOG_095_QPULSE061524_email_qcom_lead_pulse&utm_medium=email&utm_source=qcom&utm_campaign=QFGBLOG_095&utm_content=lead_pulse&mkt_tok=NDYzLUFUUy0yODIAAAGTu2DPsXmB2nGhVrS1C3vUIBO_1i5JMryktuR8VGZHCKmvTjeeCD7AVHAVisr_raQ1Pq3fAWbIalyjsHf5f7kR24jo17uDU7TpCOvCO5iM"
                  >
                    Request a Demo{" "}
                  </a>
                  <button className="btn border" style={{ fontSize: "8px" }}>
                    <i
                      class="fa-solid fa-chart-line"
                      style={{ fontSize: "10px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
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
            <div className="col-md-4">
              <div className="border rounded shadow-sm p-2 email-container">
                <h6
                  className="text-center"
                  style={{ fontWeight: "bold", fontSize: "11px" }}
                >
                  List of Emails where Content Block is Used
                </h6>
                <hr />
                <ul
                  style={{ fontSize: "10px", textAlign: "justify" }}
                  className="list-unstyled small email-list"
                >
                  <li>SDI_OAA_FHSA_Submitted_Day4</li>
                  <li>SDI_OAA_FHSA_Submitted_Day11</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day4</li>
                  <li>SDI_OAA_FHSA_PartialDocsRecvd_Day11</li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 text-center mt-3 mb-md-0">
              <img
                className="img-fluid rounded template-img-top"
                src={choose}
                alt="No Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Templates;
