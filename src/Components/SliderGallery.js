import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SliderGallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 500,
      delay: 100,
    });
  });
  return (
    <>
      <div className="">
        <div className="slider">
          <div className="slide-track" data-aos="fade-in">
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderGallery;
