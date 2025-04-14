import React from "react";
import Layout from "./Layout";

function Integration() {
  return (
    <div className="row">
      <div className="col-md-1">
        <Layout />
      </div>
      <div className="col-md-11 container" style={{marginTop:'.5rem'}}>
        <div className="mt-4 container ms-md-4 ms-2">
          <h3 className="fs-3 fs-md-3">External Integration</h3>
          <hr />
        </div>
        <div className="row mx-1 mx-md-3 ms-md-4 ms-2 border border-solid">
          <div className="col-12">
            <div className="border border-solid p-2 my-2" style={{cursor:"pointer"}}>
              <h5 className="fs-6 fs-md-5 text-center text-md-start">Adobe Journey Optimizer</h5>
            </div>
          </div>
          <div className="col-12">
            <div className="border border-solid p-2 my-2" style={{cursor:"pointer"}}>
              <h5 className="fs-6 fs-md-5 text-center text-md-start">Salesforce Content Builder</h5>
            </div>
          </div>
          <div className="col-12">
            <div className="border border-solid p-2 my-2" style={{cursor:"pointer"}}>
              <h5 className="fs-6 fs-md-5 text-center text-md-start">AWS Pinpoint</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integration;
