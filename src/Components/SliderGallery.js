import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SliderGallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
      easing: "ease-in",
    });
  });
  return (
    <>
      <div data-aos="fade-in" className="">
        <div class="slider">
          <div class="slide-track">
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
      <style jsx>
        {`
          .slider {
            // background-color: transparent;
          }
          .slide {
            margin-left: 10px;
            margin-right: 10px;
            border-radius: 20px;
          }
        `}
      </style>
    </>
  );
};

export default SliderGallery;
