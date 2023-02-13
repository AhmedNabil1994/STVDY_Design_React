import React from "react";
import backgroundImage from "../resources/background_image";

function BackgroundImages() {
  return (
    <>
      <div className="topLeft-image">
        <img src={backgroundImage} alt="Background Image" />
      </div>
      <div className="middleLeft-image">
        <img src={backgroundImage} alt="Background Image" />
      </div>
      <div className="rightButtom-image">
        <img src={backgroundImage} alt="Background Image" />
      </div>
    </>
  );
}

export default BackgroundImages;
