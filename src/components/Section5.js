import React from "react";
import report from "../resources/report";
import TextColumn from "./TextColumn";

function Section5() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center section-5">
          <div className="col-12 col-md-6 col-lg-6 section-5-right">
            <img className="w-100" src={report} alt="Report" />
          </div>
          <div className="col-12 col-md-6 col-lg-6 section-4-left">
            <TextColumn heading3="Best Platform for the Technological Era" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
