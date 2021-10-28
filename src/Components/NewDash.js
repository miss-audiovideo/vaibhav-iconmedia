import React, { useState, useEffect } from "react";
import "../Components/NewDash.css";
import one from "../Components/images/girl.jpg";
import two from "../Components/images/five.jpg";
import three from "../Components/images/can.jpg";

const NewDash = () => {
  const [addClass, setState] = useState("");
  const toggle = (e) => {
    setState({ addClass: !addClass });
  };
  let boxClass = one;
  if (addClass) {
    boxClass = two;
  }
  return (
<>
    <div className="NewDash ">
      <div className="NewDash-Left">
      <div className="NewDash-text">
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle.bind(this)}>
            Logo
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle.bind(this)}>
            Market Materials
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle.bind(this)}>
            Content Creation
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle.bind(this)}>
            Digital Ads
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle.bind(this)}>
            Custom Graphics
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle.bind(this)}>
            Motion Graphics
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle.bind(this)}>
            Website Development
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle.bind(this)}>
            Mobile App
          </button>
          </h3>
        </div>
      </div>
      <div className="NewDash-Right">
      <img
            className="NewDash-img"
            src={boxClass}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={boxClass}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={boxClass}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={boxClass}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={boxClass}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={boxClass}
            alt=""
            width="250px"
            height="250px"
          />
      </div>
    </div></>
  );
};

export default NewDash;
