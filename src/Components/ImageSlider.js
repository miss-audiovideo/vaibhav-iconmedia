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
            srcSet={catone}
            alt="Image three"
          />
        }
      />
    </div>
  );
};

export default Imageslider;

// FIXME
// import React, { useState } from "react";
// import cat from "./images/Cat1.jpeg";
// import catone from "./images/billi.jpeg";
// import cattwo from "./images/billabong.jpeg";
// import "./ImageSlider.css";

// const Imageslider = () => {
//   const [one, setOpen] = useState(false);
//   const [two, setTwo] = useState(false);
//   const [three, setThree] = useState(false);
//   const [four, setFour] = useState(false);
//   return (
//     <div>
//       <div style={{ padding: "50px 0" }}>
//         <div className="b-dics" style={{ width: "750px" }}>
//           <img src={cat} alt="Japan" />
//           <img src={catone} alt="Japan Yellow" />
//           <img src={cattwo} alt="Japan Orange" />
//           <img src={cat} alt="Japan Black & White" />
//         </div>
//       </div>
//     </div>
//   );
// };
// new Dics({
//     container: document.querySelectorAll('.b-dics')[6],
//     filters: ['blur(3px)', 'grayscale(1)', 'sepia(1)', 'saturate(3)']
// });
// export default Imageslider;
