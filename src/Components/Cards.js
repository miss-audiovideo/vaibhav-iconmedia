import React from "react";

import HoverVideoPlayer from "react-hover-video-player";

const Cards = (props) => {
  return (
    <>
      <div className={props.class}>
        <HoverVideoPlayer
          data-aos="fade-up"
          style={{
            objectFit: "cover",
            borderRadius: "10px !imporatnt",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          videoSrc={props.src.second}
          className="card_img img_two "
          restartOnPaused
          muted={false}
          pausedOverlay={
            <img
              // className="animate__animated animate__backInUp animate__delay-2s"
              src={props.src.first}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px !important",
              }}
            />
          }
        />
        <HoverVideoPlayer
          style={{
            objectFit: "cover",
            borderRadius: "10px !imporatnt",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          videoSrc={props.src.fourth}
          className="card_img img_two animate__animated animate__fadeInDown animate__delay-2s"
          restartOnPaused
          muted={false}
          pausedOverlay={
            <img
              src={props.src.third}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px !important",
              }}
            />
          }
        />
      </div>
      <style jsx>
        {`
          // .card_img {
          // }
        `}
      </style>
    </>
  );
};

export default Cards;
