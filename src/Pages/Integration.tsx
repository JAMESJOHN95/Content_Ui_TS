import React from "react";
import Layout from "./Layout";
function Integration() {
  return (
    <div className="row ">
      <div className="col-md-1">
        <Layout />
      </div>
      <div className="col-md-11 container">
        <div className="mt-3 container">
          <h3>External Integration</h3>
          <hr />
        </div>
        <div className="row border p-0 m-3">
          <div className="border border-solid p-2 m-2">
            <h5>Adobe Journey Optimizer</h5>
          </div>
          <div className="border border-solid p-2 m-2">
            <h5>Salesforce Content Builder</h5>
          </div>
          <div className="border border-solid p-2 m-2">
            <h5>AWS Pinpoint</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integration;
