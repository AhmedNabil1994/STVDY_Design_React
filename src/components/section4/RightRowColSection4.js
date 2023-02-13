import React from "react";
import { AiFillHome } from "react-icons/ai";
function RightRowColSection4({ iconClass, heading4 }) {
  return (
    <>
      <div className={iconClass}>
        <AiFillHome />
      </div>
      <h4>{heading4}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam
        labore, accusantium tempora ipsum ea doloremque
      </p>
    </>
  );
}

export default RightRowColSection4;
