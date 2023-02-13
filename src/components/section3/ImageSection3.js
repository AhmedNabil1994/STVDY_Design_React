import React from "react";

function ImageSection3({ imageSrc }) {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-2">
        <img className="section-3-img" src={imageSrc} alt="Image" />
      </div>
    </>
  );
}

export default ImageSection3;
