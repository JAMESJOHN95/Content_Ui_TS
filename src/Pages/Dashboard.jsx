import React, { useContext, useEffect } from "react";
import "../Styles/Aside.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";

function Dashboard() {
  const navigate = useNavigate();
  const handlePrebuildTemplate = () => {
    navigate("/templates");
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
                        <div
                          className="border p-2"
                          style={{ cursor: "pointer" }}
                        >
                          <h5
                            className=" "
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            New Content Block Template
                          </h5>
                        </div>
                        <div
                          className="border p-2"
                          style={{ cursor: "pointer" }}
                        >
                          <h5
                            className=""
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            New Email Template
                          </h5>
                        </div>
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
                      <div className="border p-2" style={{ cursor: "pointer" }}>
                        <h5
                          className=" "
                          style={{ fontSize: "12px", fontWeight: "bold" }}
                        >
                          Pre-built Content Block Template
                        </h5>
                      </div>
                      <div className="border p-2" style={{ cursor: "pointer" }}>
                        <h5
                          className=""
                          style={{ fontSize: "12px", fontWeight: "bold" }}
                        >
                          Pre-built Email Template
                        </h5>
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

export default Dashboard;
