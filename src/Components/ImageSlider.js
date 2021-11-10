import React from "react";
import cat from "./images/Cat1.jpeg";
import catone from "./images/billi.jpeg";
import cattwo from "./images/billabong.jpeg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Imageslider = () => {
  return (
    <div>
      <ReactCompareSlider
        style={{
          height: "400px",
          width: "80%",
          margin: "auto",
          borderRadius: "15px",
        }}
        // className="sliderImage "
        itemOne={
          <ReactCompareSliderImage
            className="sliderImage"
            src={cat}
            srcSet={cat}
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            className="sliderImage"
            src=""
            srcSet={cattwo}
            alt="Image two"
          />
        }
        itemThree={
          <ReactCompareSliderImage
            className="sliderImage"
            src=""
            srcSet={cattwo}
            alt="Image three"
          />
        }
      />
    </div>
  );
};

export default Imageslider;
