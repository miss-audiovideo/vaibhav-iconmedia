import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SliderGalleryReverse = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
      easing: "ease-in",
    });
  });
  return (
    <>
      <div
        className=" "
        data-aos="fade-left"
        style={{ position: "relative", top: "-60px" }}
      >
        <div class="slider">
          <div class="slide-track1">
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
      <style jsx>
        {`
          .slider {
            background-color: transparent;
          }
          .slide2 {
            margin-left: 10px;
            margin-right: 10px;
            border-radius: 20px;
          }
        `}
      </style>
    </>
  );
};

export default SliderGalleryReverse;
