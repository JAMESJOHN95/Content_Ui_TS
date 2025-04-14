import React, { useEffect, useState } from "react";
import one from "../Images/1on1.png";
import choose from "../Images/choose.webp";
import Layout from "./Layout";
import Modal from "react-bootstrap/Modal";
import "../Styles/Aside.css";
import { v4 as uuidv4 } from "uuid";
import { FaCircleInfo } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface Template {
  id: string;
  templateName: string;
  categoryName: string;
  status: string;
  templateBody: string;
  columns: any[];
  containerContent: any[];
  desc: string;
}

const Templates: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [templates, setTemplates] = useState<Template[]>([]);

  //modal preview
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);
  const [previewContent, setPreviewContent] = useState<{
    title: string;
    category: string;
    description: string;
    body: string;
    image?: string;
  } | null>(null);

  const [exportModal, setExportModal] = useState<boolean>(false);
  const [exportedHTML, setExportedHTML] = useState<string>("");

  useEffect(() => {
    const storedTemplates: Template[] = JSON.parse(
      localStorage.getItem("templates") || "[]"
    );
    setTemplates(storedTemplates);
  }, []);

  //default selected platform is AJO
  const [selectedPlatform, setSelectedPlatform] = useState<string>("ajo");

  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlatform(e.target.value);
  };

  //publish modal
  const [showPublishModal, setShowPublishModal] = useState<boolean>(false);

  // handlePublishShow and handlePublishClose functions

  const handlePublishShow = () => {
    setShowPublishModal(true);
  };

  const handlePublishClose = () => {
    setShowPublishModal(false);
  };

  const handlePublishContent = () => {
    alert("Content published successfully!");
    handlePublishClose();
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleExportShow = () => setExportModal(true);
  const handleExportClose = () => setExportModal(false);

  const handlePreviewStatic = (cardIndex: number) => {
    // Creating mock data based on which template was clicked
    let content;

    switch (cardIndex) {
      case 0:
        content = {
          title: "Template Name",
          category: "Category Name",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          body: "<p>This is the first template's content.</p>",
          image: one,
        };
        break;
      case 1:
        content = {
          title: "Template Name",
          category: "Category Name",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci a animi, eaque quod sequi fugit voluptates velit quasi dolor natus.",
          body: "<p>This is the second template's content.</p>",
          image: choose,
        };
        break;
      case 2:
        content = {
          title: "Template Name",
          category: "Category Name",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci a animi, eaque quod sequi fugit voluptates velit quasi dolor natus.",
          body: "<p>This is the third template's content.</p>",
          image: one,
        };
        break;
      case 3:
        content = {
          title: "Template Name",
          category: "Category Name",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci a animi, eaque quod sequi fugit voluptates velit quasi dolor natus.",
          body: "<p>This is the fourth template's content.</p>",
          image: choose,
        };
        break;
      default:
        content = {
          title: "Unknown Template",
          category: "Unknown Category",
          description: "No description available",
          body: "<p>No content available</p>",
        };
    }

    setPreviewContent(content);
    setShowPreviewModal(true);
  };

  // Close preview modal
  const handleClosePreviewModal = () => {
    setShowPreviewModal(false);
  };

  // Function to generate HTML for export
  const exportTemplateAsHtml = () => {
    if (!previewContent) return;

    // Construct the HTML dynamically
    let htmlView = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${previewContent.title || "Untitled Template"}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          img { max-width: 100%; height: auto; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>${previewContent.title || "No Title"}</h1>
            <h3>Category: ${previewContent.category || "Uncategorized"}</h3>
            <div>${previewContent.body || "<p>No Content</p>"}</div>`;

    if (previewContent.image) {
      htmlView += `<div><img src="[IMAGE_URL_PLACEHOLDER]" alt="Template Image" style="max-width:100%, height:"auto"/></div>`;
    }

    htmlView += `
            <div>
                <p>${previewContent.description || ""}</p>
            </div>
        </div>
    </body>
    </html>`;

    setExportedHTML(htmlView);
    handleExportShow();
  };

  return (
    <>
      <div className="row ">
        <div className="col-md-1">
          <Layout />
        </div>
        <div className="col-md-11 mt-0 p-4">
          <div className="row mt-1">
            <h2 className="fw-bold mb-4">Prebuilt Content Block Template</h2>
            <div className="d-flex align-items-center justify-content-center mb-4 border row">
              <div className="text-end">
                <span
                  style={{ fontSize: "15px", color: "#333", cursor: "pointer" }}
                  onClick={handleShow}
                >
                  <FaCircleInfo />
                </span>
              </div>
              <div className="rounded p-2 col-md-12 mb-3 mb-md-0">
                <div className="row">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
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
                  <div className="col-12 col-md-6 d-flex flex-column p-2">
                    <h4 className="preTemplateName">Template Name</h4>
                    <p className="preCategoryName" style={{ fontSize: "13px" }}>Category Name</p>
                    <p>Description</p>
                    <p
                      className="preTemplateDescription"
                      style={{ fontSize: "13px", color: "grey" }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Facere ducimus veniam eum, tempora ratione alias id
                      dolorum molestias consequuntur, esse recusandae
                      consectetur ipsum facilis reprehenderit maxime unde quos,
                      dicta nobis.
                    </p>
                    <div>
                      <button
                        onClick={() => handlePreviewStatic(0)}
                        className="btn btn-md"
                        style={{
                          color: "white",
                          backgroundColor: "#333",
                          fontSize: "10px",
                        }}
                      >
                        Preview
                      </button>
                      <button
                        className="btn btn-sm ms-1"
                        style={{ border: "none" }}
                      >
                        <i
                          className="fa-solid fa-trash text-danger"
                          style={{ fontSize: "15px" }}
                        ></i>
                      </button>
                    </div>
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
              <div className="rounded col-md-12 mb-3 mb-md-0">
                <div className="row">
                  <div className="col-12 col-md-6 d-flex flex-column mb-3 mb-md-0 p-2">
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
                        onClick={() => handlePreviewStatic(1)}
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
                        onClick={() => handlePreviewStatic(2)}
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
                        onClick={() => handlePreviewStatic(3)}
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

      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Email Usage Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
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

      {/* Modal for Preview */}
      <Modal show={showPreviewModal} onHide={handleClosePreviewModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Template Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {/* Template Header */}
            <div className="row mb-4">
              <div className="col-12">
                <h3 className="text-center mb-3" style={{ fontSize: "24px" }}>
                  <b>{previewContent?.title}</b>
                </h3>
                <h4 className="text-left" style={{ fontSize: "15px" }}>
                  Category - <i>{previewContent?.category}</i>
                </h4>
              </div>
            </div>

            {/* Template Body */}
            {previewContent?.body && (
              <div className="row mb-4">
                <div className="col-12">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: previewContent.body,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Template Image */}
            {/* Template Image */}
            {previewContent?.image && (
              <div className="row mb-4">
                <div className="col-12 d-flex justify-content-center">
                  <div style={{ width: "60%" }}>
                    {" "}
                    {/* Adjust this percentage as needed */}
                    <img
                      src={previewContent.image}
                      alt="Template Preview"
                      style={{
                        width: "100%",
                        maxHeight: "150px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Template Description */}
            {previewContent?.description && (
              <div className="row mb-4">
                <div className="col-12">
                  <h5 style={{ fontSize: "14px" }}>Description:</h5>
                  <p style={{ fontSize: "13px" }}>
                    {previewContent.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handlePublishShow} className="btn btn-primary">
            Publish
          </button>
          <button onClick={exportTemplateAsHtml} className="btn btn-primary">
            Export
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleClosePreviewModal}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Export HTML content */}
      <Modal show={exportModal} onHide={handleExportClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>HTML Export - {previewContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="htmlCode">HTML Code:</label>
            <textarea
              id="htmlCode"
              className="form-control"
              rows={20}
              value={exportedHTML}
              readOnly
              style={{
                fontFamily: "monospace",
                fontSize: "0.9rem",
                whiteSpace: "pre",
                overflowX: "auto",
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleExportClose}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              // Create a Blob with the HTML content
              const blob = new Blob([exportedHTML], { type: "text/html" });

              // Create a URL for the Blob
              const url = URL.createObjectURL(blob);

              // Create a temporary link element
              const link = document.createElement("a");
              link.href = url;
              link.download = `${previewContent?.title.replace(
                /\s+/g,
                "_"
              )}_export.html`;

              // Append to the document, click it, and remove it
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);

              // Release the URL object
              URL.revokeObjectURL(url);
            }}
          >
            Download HTML
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigator.clipboard
                .writeText(exportedHTML)
                .then(() => {
                  alert("HTML code copied to clipboard!");
                })
                .catch((err) => {
                  console.error("Failed to copy HTML: ", err);
                  alert("Failed to copy HTML to clipboard");
                });
            }}
          >
            Copy to Clipboard
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Publish Options */}
      <Modal show={showPublishModal} onHide={handlePublishClose}>
        <Modal.Header closeButton>
          <Modal.Title>Publish to</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="publishPlatform"
                  id="platformAJO"
                  value="ajo"
                  checked={selectedPlatform === "ajo"}
                  onChange={handlePlatformChange}
                />
                <label className="form-check-label" htmlFor="platformAJO">
                  AJO
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="publishPlatform"
                  id="platformSalesforce"
                  value="salesforce"
                  checked={selectedPlatform === "salesforce"}
                  onChange={handlePlatformChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="platformSalesforce"
                >
                  Salesforce Cloud
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="publishPlatform"
                  id="platformAWS"
                  value="aws"
                  checked={selectedPlatform === "aws"}
                  onChange={handlePlatformChange}
                />
                <label className="form-check-label" htmlFor="platformAWS">
                  AWS Pinpoint
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handlePublishClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handlePublishContent}>
            Publish
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Templates;
