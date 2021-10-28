import React, { useState, useEffect } from "react";
import "../Components/NewDash.css";

const menu = [
  {img: "../Components/images/gallary/1.jpg", img2: "../Components/images/gallary/2.jpg", img3: "../Components/images/gallary/3.jpg", img4: "../Components/images/gallary/4.jpg", img5: "../Components/images/gallary/5.jpg", img6: "../Components/images/gallary/6.jpg"},
  {img: "../Components/images/gallary/7.jpg", img2: "../Components/images/gallary/8.jpg", img3: "../Components/images/gallary/9.jpg", img4: "../Components/images/gallary/10.jpg", img5: "../Components/images/gallary/11.jpg", img6: "../Components/images/gallary/12.jpg"},
  {img: "../Components/images/gallary/18.jpg", img2: "../Components/images/gallary/13.jpg", img3: "../Components/images/gallary/14.jpg", img4: "../Components/images/gallary/15.jpg", img5: "../Components/images/gallary/16.jpg", img6: "../Components/images/gallary/17.jpg"},
  {img: "../Components/images/gallary/19.jpg", img2: "../Components/images/gallary/25.jpg", img3: "../Components/images/gallary/26.jpg", img4: "../Components/images/gallary/27.jpg", img5: "../Components/images/gallary/28.jpg", img6: "../Components/images/gallary/29.jpg"},
  {img: "../Components/images/gallary/30.jpg", img2: "../Components/images/gallary/20.jpg", img3: "../Components/images/gallary/21.jpg", img4: "../Components/images/gallary/22.jpg", img5: "../Components/images/gallary/23.jpg", img6: "../Components/images/gallary/24.jpg"},
  {img: "../Components/images/gallary/31.jpg", img2: "../Components/images/gallary/32.jpg", img3: "../Components/images/gallary/33.jpg", img4: "../Components/images/gallary/34.jpg", img5: "../Components/images/gallary/35.jpg", img6: "../Components/images/gallary/36.jpg"},
  {img: "../Components/images/gallary/37.jpg", img2: "../Components/images/gallary/39.jpg", img3: "../Components/images/gallary/41.jpg", img4: "../Components/images/gallary/43.jpg", img5: "../Components/images/gallary/45.jpg", img6: "../Components/images/girl.jpg"},
  {img: "../Components/images/gallary/38.jpg", img2: "../Components/images/gallary/40.jpg", img3: "../Components/images/gallary/42.jpg", img4: "../Components/images/gallary/44.jpg", img5: "../Components/images/girl.jpg", img6: "../Components/images/girl.jpg"},
  
];
// import one from "../Components/images/girl.jpg";
// import two from "../Components/images/five.jpg";
// import three from "../Components/images/can.jpg";

const NewDash = () => {
  const [addClass, setState] = useState("");
  let boxClass = one;
  const toggle = (e) => {
    setState({ addClass: !addClass });
    if (addClass) {
      boxClass = one;
    }
    return boxClass;
  };
  const toggle2 = (e) => {
    setState({ addClass: !addClass });
    if (addClass) {
      boxClass = two;
    }
    return boxClass;
  };
  const toggle3 = (e) => {
    setState({ addClass: !addClass });
    if (addClass) {
      boxClass = three;
    }
    return boxClass;
  };
  
  
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
          <button className="btn color-text" onClick={toggle2.bind(this)}>
            Market Materials
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn color-text" onClick={toggle3.bind(this)}>
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
