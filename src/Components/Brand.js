import React from "react";
import "../Brand.css";

const Brand = (props) => {
  return (
    <>
      <span style={{ width: "20%" }} className={props.class}>
        <img
          className="brand-img"
          src={props.src}
          alt=""
          width="150px"
          height="80px"
        />
      </span>
    </>
  );
};

export default Brand;
