import React from "react";
import ButtonColumn from "../ButtonColumn";
import RightRowSection9 from "./RightRowSection9";

function Section9() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6 section-9-left">
            <ButtonColumn
              heading2="Acceleration Process to Grow Your Business"
              paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. InventoreLorem ipsum, dolor sit amet consectetur adipisicing
              elit. InventoreLorem ipsum, dolor sit amet consectetur adipisicing
              elit. Inventore"
            />
          </div>
          <div className="col section-9-right">
            <RightRowSection9/>
            <RightRowSection9/>
            <RightRowSection9/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section9;
