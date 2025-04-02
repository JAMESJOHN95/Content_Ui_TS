import React from "react";
import Layout from "../Pages/Layout";
import { Link } from "react-router-dom";
import { FaBrain } from "react-icons/fa";

const Recommendations = () => {
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
                <h2 className="bold">Get AI-Powered Recommendations</h2>
                <div>
                  <p>
                    Leverage AI to optimize your email campaigns effortlessly.
                    <br /> Receive smart suggestions for subject lines, content,
                    and design to maximize engagement.
                  </p>
                </div>
                <div className="d-flex justify-content-around flex-wrap gap-4 mt-5">
                  <div style={{ textDecoration: "none", color: "black" }}>
                    <div className="selectTemplate text-center border rounded p-4">
                      <div>
                        <FaBrain  style={{ fontSize: "32px" }}/>
                      </div>
                      <h4 className="bold">AI Recommendations</h4>
                      <p>Get AI powered suggestions to enhance your template</p>
                      <div className="d-flex justify-content-around align-items-center mt-4 gap-2">
                        <div
                          className="border p-2"
                          style={{ cursor: "pointer" }}
                        >
                          <h5
                            className=" "
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Subject Recommendations
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
                            Content Recommendations
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
      </div>
    </>
  );
};

export default Recommendations;
