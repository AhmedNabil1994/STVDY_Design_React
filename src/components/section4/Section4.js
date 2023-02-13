import React from "react";
import TextColumn from "../TextColumn";
import RightRowColSection4 from "./RightRowColSection4";

function Section4() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 section-4-left">
            <TextColumn heading3="The best business solution for you" />
          </div>
          <div className="col section-4-right">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 column">
                <RightRowColSection4
                  iconClass="icon-1"
                  heading4="Scale Your Activity"
                />
              </div>
              <div className="col-12 col-md-12 col-lg-6 column">
                <RightRowColSection4 iconClass="icon-2" heading4="Bootcamps" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 column">
                <RightRowColSection4
                  iconClass="icon-3"
                  heading4="High Quality"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 column">
                <RightRowColSection4
                  iconClass="icon-4"
                  heading4="Get Certification"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
