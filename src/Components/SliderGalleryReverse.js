import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SliderGalleryReverse = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 500,
      delay: 100,
    });
  });
  return (
    <>
      <div
        className="slider"
        style={{ position: "relative", top: "-60px" }}
      >
        <div class="slider">
          <div class="slide-track1" data-aos="fade-in">
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderGalleryReverse;
