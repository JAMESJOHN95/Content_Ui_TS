import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// Icons for Sidebar
import { MdDashboard, MdNoteAdd } from "react-icons/md";
import { FaFileUpload, FaFileAlt } from "react-icons/fa";

// Type definition for Sidebar icons
type SidebarItem = {
  label: string;
  path: string;
  icon: React.ElementType; // Type for React components like icons
};

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", path: "/", icon: MdDashboard },
  { label: "New Content", path: "/dashboard", icon: MdNoteAdd },
  { label: "Existing Contents", path: "/existingcontents", icon: FaFileAlt },
  { label: "Publish Content", path: "/", icon: FaFileUpload },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        className={`side-bar p-3 d-flex flex-column ${isOpen ? "active" : ""} mt-0`}
        style={{
          position: "fixed",
          height: "100vh",
          backgroundColor: "#D3D3D3",
          left: isOpen ? "0" : "-250px",
          transition: "left 0.3s ease",
          width: "80px",
          zIndex:1,
        }}
      >
        <ul className="list-unstyled mt-2">
          {sidebarItems.map(({ label, path, icon: Icon }) => (
            <div key={label} className="d-flex flex-column align-items-center justify-content-center">
              <Link
                to={path}
                style={{ textDecoration: "none", color: "black", marginBottom: "2px" }}
              >
                <li className="mt-2 fw-bolder">
                  <Icon style={{ width: "100%", height: "100%", fontSize: "24px" }} />
                </li>
              </Link>
              <Link to={path} style={{ textDecoration: "none", color: "black" }}>
                <p style={{ fontSize: "11px", fontWeight: "bold", textAlign: "center" }}>{label}</p>
              </Link>
            </div>
          ))}
          {/* AI Insights Section */}
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Link to="/recommendations" style={{ textDecoration: "none", color: "black", marginBottom: "2px" }}>
              <li className="mt-2 fw-bolder">
                <img
                  src="/ai icon.png"
                  alt="AI Insights"
                  style={{ width: "100%", height: "90%", fontSize: "24px", padding: "0px 3px" }}
                />
              </li>
            </Link>
            <Link to="/recommendations" style={{ textDecoration: "none", color: "black" }}>
              <p style={{ textAlign: "center", fontSize: "11px", fontWeight: "bold" }}>AI Insights</p>
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
            zIndex: 0,
          }}
        />
      )}
    </>
  );
};
export default Sidebar;
