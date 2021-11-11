// import React from "react";
// import cat from "./images/Cat1.jpeg";
// import catone from "./images/billi.jpeg";
// import cattwo from "./images/billabong.jpeg";
// import {
//   ReactCompareSlider,
//   ReactCompareSliderImage,
// } from "react-compare-slider";

// const Imageslider = () => {
//   return (
//     <div>
//       <ReactCompareSlider
//         style={{
//           height: "400px",
//           width: "80%",
//           margin: "auto",
//           borderRadius: "15px",
//         }}
//         // className="sliderImage "
//         itemOne={
//           <ReactCompareSliderImage
//             className="sliderImage"
//             src={cat}
//             srcSet={cat}
//             alt="Image one"
//           />
//         }
//         itemTwo={
//           <ReactCompareSliderImage
//             className="sliderImage"
//             src=""
//             srcSet={cattwo}
//             alt="Image two"
//           />
//         }
//         itemThree={
//           <ReactCompareSliderImage
//             className="sliderImage"
//             src=""
//             srcSet={catone}
//             alt="Image three"
//           />
//         }
//       />
//     </div>
//   );
// };

// export default Imageslider;

// FIXME
// import React, { useState, useEffect } from "react";
// import cat from "./images/Cat1.jpeg";
// import catone from "./images/billi.jpeg";
// import cattwo from "./images/billabong.jpeg";
// // import "./ImageSlider.css";

// const Imageslider = () => {
//   const [one, setOpen] = useState(false);
//   const [two, setTwo] = useState(false);
//   const [three, setThree] = useState(false);
//   const [four, setFour] = useState(false);

//   useEffect(() => {
//     new Dics({
//       container: document.querySelectorAll(".b-dics"),
//       linesOrientation: "vertical",
//       textPosition: "left",
//       arrayBackgroundColorText: ["#000000", "#FFFFFF"],
//       arrayColorText: ["#FFFFFF", "#000000"],
//       linesColor: "rgb(0,0,0)",
//     });
//   }, []);

//   const style = {};

//   return (
//     <div>
//       <div className="b-dics">
//         <img src={cat} />
//         <img src={catone} alt="Japan Yellow" />
//         <img src={cattwo} alt="Japan Orange" />
//         <img src={cat} alt="Japan Black & White" />
//       </div>
//     </div>
//   );
// };
// {
//   /* new Dics({
//   container: document.querySelectorAll(".b-dics")[6],
//   filters: ["blur(3px)", "grayscale(1)", "sepia(1)", "saturate(3)"],
// }); */
// }
// export default Imageslider;
