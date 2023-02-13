import React from "react";
import report from "../../resources/report";
import CarouselComp from "./CarouselComp";

function Section7() {
  return (
    <>
      <div className="container">
        <div className="row section-7">
          <div className="col-12">
            <CarouselComp
              id="carouselExampleCaptions_2"
              card={<img src={report} className="d-block w-100" alt="report" />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section7;
