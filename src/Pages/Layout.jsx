import { useState } from "react";
import { Link } from "react-router-dom";
// Icons for Sidebar
import { MdDashboard, MdNoteAdd } from "react-icons/md";
import { FaFileUpload, FaFileAlt} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggler Button */}
      <button
        className="sidebar-toggle btn btn-outline-secondary m-2 mt-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      {/* Sidebar */}
      <div
        className={`side-bar p-3 d-flex flex-column ${
          isOpen ? "active" : ""
        } mt-0`}
        style={{
          position: "fixed",
          height: "100vh",
          backgroundColor: "#D3D3D3",
          left: isOpen ? "0" : "-250px",
          transition: "left 0.3s ease",
          width: "80px",
        }}
      >
        <ul className="list-unstyled mt-2">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "2px",
              }}
            >
              <li className="mt-2 fw-bolder">
                <MdDashboard
                  style={{ width: "100%", height: "100%", fontSize: "24px" }}
                />
              </li>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: "bold" }}>Dashboard</p>
            </Link>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "2px",
              }}
            >
              <li className="mt-2 fw-bolder">
                <MdNoteAdd
                  style={{ width: "100%", height: "100%", fontSize: "25px" }}
                />
              </li>
            </Link>
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                New Content
              </p>
            </Link>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/existingcontents"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "2px",
              }}
            >
              <li className="mt-2 fw-bolder">
                <FaFileAlt
                  style={{ width: "100%", height: "100%", fontSize: "24px" }}
                />
              </li>
            </Link>
            <Link
              to="/existingcontents"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                Existing Contents
              </p>
            </Link>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "2px",
              }}
            >
              <li className="mt-2 fw-bolder">
                <FaFileUpload
                  style={{ width: "100%", height: "100%", fontSize: "24px" }}
                />
              </li>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                Publish Content
              </p>
            </Link>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/recommendations"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "2px",
              }}
            >
              <li className="mt-2 fw-bolder">
                <img src="/ai icon.png" alt="AI icon"
                  style={{ width: "100%", height: "90%", fontSize: "24px",padding:"0px 3px" }}
                />
              </li>
            </Link>
            <Link
              to="/recommendations"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                AI Insights
              </p>
            </Link>
          </div>
        </ul>
      </div>

      {/* Overlay to close sidebar on small screens */}
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}
    </>
  );
}
