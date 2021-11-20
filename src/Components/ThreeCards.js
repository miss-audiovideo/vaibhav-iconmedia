import React from "react";
import Image from "./Video/default-image.png";

import HoverVideoPlayer from "react-hover-video-player";

const ThreeCards = (props) => {
  return (
    <>
      <div className={props.class}>
        <HoverVideoPlayer
          style={{
            borderRadius: "15px !important",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          videoSrc={props.src.second}
          className="card_img img_two animate__animated animate__fadeInUp animate__delay-5s animate__slower"
          restartOnPaused
          muted={false}
          pausedOverlay={
            <img
              src={props.src.first}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            />
          }
        />
        <HoverVideoPlayer
          style={{
            borderRadius: "15px !important",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          videoSrc={props.src.fourth}
          className="card_img img_two  animate__animated animate__fadeInDown animate__delay-5s animate__slower"
          restartOnPaused
          muted={false}
          pausedOverlay={
            <img
              src={props.src.third}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            />
          }
        />
        <HoverVideoPlayer
          style={{
            borderRadius: "15px !important",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          videoSrc={props.src.sixth}
          className="card_img img_two"
          restartOnPaused
          muted={false}
          pausedOverlay={
            <img
              src={props.src.fifth}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            />
          }
        />
      </div>
    </>
  );
};

export default ThreeCards;
