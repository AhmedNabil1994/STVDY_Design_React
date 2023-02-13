import React from "react";

function ButtonColumn({ heading2, paragraph }) {
  return (
    <>
      <h2>{heading2}</h2>
      <p>{paragraph}</p>
      <button>About Us</button>
    </>
  );
}

export default ButtonColumn;
