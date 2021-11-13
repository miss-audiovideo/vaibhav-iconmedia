import React from "react";
import "./design.css";
import robo from "./images/Robo-1.gif";

const Design = () => {
  return (
    <div className="container  mt-5 mb-5">
      <div className="row">
        <div className="col-sm-4">
          <img className="img-responsive mx-auto" src={robo} alt="" />
        </div>
        <div className="col-sm-8 text-center my-auto banner-info">
          <h1 className="  banner-info-h1">great design</h1>
          <h3 className="text-white  banner-info-h2">gets you noticed.</h3>
          <h3 className="  banner-info-h3">it's that simple</h3>
        </div>
      </div>
    </div>
  );
};

export default Design;
