import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const PreEmailTemplate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="row ">
        <div className="col-md-1">
          <Layout />
        </div>
        <div className="col-md-11 mt-0 p-4">
          <div className="row mt-1">
            <div className="col-md-12">
              <h2 className="fw-bold mb-4">Prebuilt Email Template</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreEmailTemplate;
