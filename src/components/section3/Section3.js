import React from "react";
import ImageSection3 from "./ImageSection3";
import shopify from "../../resources/shopify";
import nearpad from "../../resources/nearpad";
import bench from "../../resources/bench";
import forbes from "../../resources/forbes";
import bumble from "../../resources/bumble";

function Section3() {
  return (
    <>
      <div className="container">
        <div className="row text-center m-auto justify-content-center">
          <ImageSection3 imageSrc={shopify} />
          <ImageSection3 imageSrc={nearpad} />
          <ImageSection3 imageSrc={bench} />
          <ImageSection3 imageSrc={forbes} />
          <ImageSection3 imageSrc={bumble} />
        </div>
      </div>
    </>
  );
}

export default Section3;
