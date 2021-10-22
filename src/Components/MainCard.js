import React from "react";
import Cards from "./Cards";
import img1 from "./images/8.jpg";
import video1 from "./Video/coffee.mp4";
import video2 from "./Video/video.mp4";
import video3 from "./Video/watch.mp4";
import img8 from "./Video/default-image.png";
// import two from "./images/two.jpg";
// import three from "./images/three.jpg";
// import four from "./images/four.jpg";
// import five from "./images/five.jpg";
// import six from "./images/six.jpg";
import img2 from "./images/seven.jpg";
import img7 from "./images/eight.jpg";
// import nine from "./images/nine.jpg";
import img3 from "./images/ten.jpg";
import img6 from "./images/eleven.jpg";
import img4 from "./images/twelve.jpg";
import img5 from "./images/thirteen.jpg";

let fCard = {
  first: img1,
  second: video1,
  third: img2,
  fourth: {
    first: img6,
    second: video2,
    third: img8,

  },
  fifth: {
    first: img5,
    second: video3,
  third: img6,

  },
  sixth: {
    first: img7,
    second: video1,
  third: img3,
  },
  seventh: {
    first: img2,
    second: video3,
    third: img4,
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
