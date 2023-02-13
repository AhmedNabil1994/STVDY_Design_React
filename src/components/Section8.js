import React from "react";
import report from "../resources/report";
import ReportImageColumn from "./ReportImageColumn";
import TextColumn from "./TextColumn";

function Section8() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6 section-4-left">
            <TextColumn heading3="Best Platform for the Technological Era" />
          </div>
          <ReportImageColumn />
        </div>
      </div>
    </>
  );
}

export default Section8;
