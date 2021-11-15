import React, { useEffect } from "react";
import "./designTwo.css";
import AOS from "aos";
import "aos/dist/aos.css";

const DesignTwo = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
      easing: "ease-in",
    });
  });
  return (
    <div data-aos="fade-in" className="designTwo">
      <p className="designTwo-p">unrivaled</p>
      <h1 className="designTwo-h1">Quality</h1>
    </div>

    // <div class="container designTwo">
    //   <p className="text-white">unrivaled</p>
    //   <p className="text-white text-center">Quality</p>
    // </div>
  );
};

export default DesignTwo;
