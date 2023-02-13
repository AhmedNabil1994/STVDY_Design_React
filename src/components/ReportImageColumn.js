import React from "react";
import report from "../resources/report";

function ReportImageColumn() {
  return (
    <>
      <div className="col-12 col-md-5 col-lg-6">
        <img className="w-100" src={report} alt="Report" />
      </div>
    </>
  );
}

export default ReportImageColumn;
