import React from "react";
import Cards from "./Cards";
// import img1 from "./images/8.jpg";
import video1 from "./Video/coffee.mp4";
import video2 from "./Video/video.mp4";
import video3 from "./Video/watch.mp4";
// import img8 from "./Video/default-image.png";
// import two from "./images/two.jpg";
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
  first: girl,

  second: video1,
  third: run,
  eight: girl,
  fourth: {
    first: chinese,
    second: video2,
    third: can,
  },
  fifth: {
    first: honey,
    second: video3,
    third: greeting,
  },
  sixth: {
    first: swag,
    second: video1,
    third: drinks,
  },
  seventh: {
    first: jam,
    second: video3,
    third: builder,
  },
};

const MainCard = () => {
  return (
    <>
      <div class="container-fluid w-70 d-flex align-items-center justify-content-between flex-wrap main_card_flex pb-lg-2">
        <Cards
          src={fCard}
          class="d-flex flex-column first_card small-screen col-2 mx-auto"
        />
        <Cards
          src={fCard.fourth}
          class="d-flex flex-column second_card small-screen1 col-2 mx-auto"
        />
        <Cards
          src={fCard.fifth}
          class="d-flex flex-column third_card small-screen2 col-2 mx-auto"
        />
        <Cards
          src={fCard.sixth}
          class="d-flex flex-column second_card small-screen3 col-2 mx-auto"
        />
        <Cards
          src={fCard.seventh}
          class="d-flex flex-column first_card small-screen4 col-2 mx-auto"
        />
      </div>
    </>
  );
};

export default MainCard;
