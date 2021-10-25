import React from "react";
import Cards from "./Cards";
import ThreeCards from "./ThreeCards";
import video1 from "./Video/v1.mp4";
import can from "./images/can.jpg";
import video2 from "./Video/v2.mp4";
import jam from "./images/jam.jpg";
import video3 from "./Video/v3.mp4";
import six from "./images/six.jpg";
import three from "./images/three.jpg";
import builder from "./images/builder.jpg";
import chinese from "./images/chinese.jpg";
import run from "./images/run.jpg";
import girl from "./images/girl.jpg";
import drinks from "./images/drinks.jpg";
import honey from "./images/honey.jpg";
import greeting from "./images/greeting.jpg";
import swag from "./images/swag.jpg";
import uniqe from "./images/uniqe.jpg";
import uniqe2 from "./images/uniqe2.jpg";

let fCard = {
  first: {
    first: girl,
    second: can,
    third: video1,
    fourth: builder,
  },
  second: {
    first: swag,
    second: video2,
    third: drinks,
  },
  third: {
    first: run,
    second: video3,
    third: uniqe,
  },
  fourth: {
    first: chinese,
    second: video2,
    third: jam,
  },
  fifth: {
    first: honey,
    second: uniqe2,
    third: video3,
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
