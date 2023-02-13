import React from "react";
import report from "../resources/report";
import ReportImageColumn from "./ReportImageColumn";
import ButtonColumn from "./ButtonColumn";

function Section2() {
  return (
    <>
      <div className="container section-2">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6 left">
            <p>Advanced Platform</p>
            <ButtonColumn
              heading2="Take your team to the next level"
              paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore"
            />
          </div>
          <ReportImageColumn />
        </div>
      </div>
    </>
  );
}

export default Section2;
