import React from "react";
import "../Styles/Aside.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handlePrebuildTemplate = (): void => {
    navigate("/templates");
  };
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "#e9ecef";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "#f8f9fa";
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 p-0">
            <Layout />
          </div>
          <div className="col-md-11 p-0">
            <div className="dashboard">
              <div className="mb-3 p-3 flex-column text-center fs-5 pt-5 pb-5">
                <h2 className="bold">Design Your Content Block</h2>
                <div>
                  <p>
                    To get started on your first campaign, just select a
                    template, update its content, and your <br /> email is ready
                    to go. Export it to the ESP of your choice.
                  </p>
                </div>
                <div className="d-flex justify-content-around flex-wrap gap-4 mt-5">
                  <Link
                    to={"/newtemplate"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="selectTemplate text-center border rounded p-4">
                      <div>
                        <i className="fa-regular fa-bookmark"></i>
                      </div>
                      <h4 className="bold">New Template</h4>
                      <p>Quick Start from Basic Template</p>
                      <div className="d-flex justify-content-around align-items-center mt-4 gap-2">
                        
                      <button
                      type="button"
                      style={buttonStyle}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                        >
                          New Content Block Template
                        </button>
                        <button
                          type="button"
                          style={buttonStyle}
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                        >
                          New Email Template
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div
                    onClick={handlePrebuildTemplate}
                    style={{ cursor: "pointer" }}
                    className="selectTemplate text-center border rounded p-3"
                  >
                    <div>
                      <i className="fa-regular fa-map"></i>
                    </div>
                    <h4 className="bold">Pre-built Templates</h4>
                    <p>Edit and use right away any of the templates</p>
                    <div className="d-flex justify-content-around align-items-center mt-4 gap-2">
                    <button
                        type="button"
                        style={buttonStyle}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
                        Pre-built Content Block Template
                      </button>
                      <button
                      type="button"
                      style={buttonStyle}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    > Pre-built Email Template</button>
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
};
  const buttonStyle: React.CSSProperties = {
    fontSize: "12px",
    padding: "0.5rem",
    background: "#f8f9fa",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "0.3s",
  };


export default Dashboard;
