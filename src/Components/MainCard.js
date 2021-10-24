import React from "react";
import Cards from "./Cards";
import ThreeCards from "./ThreeCards";
import video1 from "./Video/coffee.mp4";
import video2 from "./Video/video.mp4";
import video3 from "./Video/watch.mp4";
// import img8 from "./Video/default-image.png";
import six from "./images/six.jpg";
import three from "./images/three.jpg";
import builder from "./images/builder.jpg";
import chinese from "./images/chinese.jpg";
import jam from "./images/jam.jpg";
import run from "./images/run.jpg";
import girl from "./images/girl.jpg";
import can from "./images/can.jpg";
import drinks from "./images/drinks.jpg";
import honey from "./images/honey.jpg";
import greeting from "./images/greeting.jpg";
import swag from "./images/swag.jpg";

let fCard = {
  first: {
    first: girl,
    second: run,
    third: video1,
    fourth: six,
  },
  second: {
    first: swag,
    second: video2,
    third: drinks,
  },
  third: {
    first: jam,
    second: video3,
    third: builder,
  },
  fourth: {
    first: chinese,
    second: video2,
    third: can,
  },
  fifth: {
    first: honey,
    second: video1,
    third: greeting,
    fourth: three,
  },
};

const MainCard = () => {
  return (
    <>
      <div class="container-fluid w-70 d-flex align-items-center justify-content-between flex-wrap main_card_flex pb-lg-2">
        <ThreeCards
          src={fCard.first}
          class="d-flex flex-column first_card small-screen col-2 mx-auto"
        />
        <Cards
          src={fCard.second}
          class="d-flex-c flex-column second_card small-screen1 col-2 mx-auto hidecard"
        />
        <Cards
          src={fCard.third}
          class="d-flex-c flex-column third_card small-screen2 col-2 mx-auto hidecard"
        />
        <Cards
          src={fCard.fourth}
          class="d-flex-c flex-column second_card small-screen3 col-2 mx-auto hidecard"
        />
        <ThreeCards
          src={fCard.fifth}
          class="d-flex flex-column first_card small-screen col-2 mx-auto"
        />
      </div>
    </>
  );
};

export default MainCard;
