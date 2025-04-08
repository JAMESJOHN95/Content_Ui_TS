import React from "react";
import Layout from "./Layout";
function Integration() {
  return (
    <div className="row ">
      <div className="col-md-1">
        <Layout />
      </div>
      <div className="col-md-11 container" style={{marginTop:'.5rem'}}>
        <div className="mt-4 container ms-4">
          <h3>External Integration</h3>
          <hr />
        </div>
        <div className="row border m-3 container">
          <div className="border border-solid p-2 m-2 mt-3 p-2">
            <h5>Adobe Journey Optimizer</h5>
          </div>
          <div className="border border-solid p-2 m-2">
            <h5>Salesforce Content Builder</h5>
          </div>
          <div className="border border-solid p-2 m-2 mb-3">
            <h5>AWS Pinpoint</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integration;
