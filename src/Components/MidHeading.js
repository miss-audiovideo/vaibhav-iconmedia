import React, { useEffect } from "react";
import robo from "./images/robo-2.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MidHeading.css";

const MidHeading = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
      delay: 200,
    });
  });
  return (
    <>
      <div data-aos="fade-up" className="robo-set-2">
        <div className="mid-heading-text">
          <div data-aos="fade-left">
            Designs that{" "}
            <span className="midHeading-text">make a difference</span>
          </div>
        </div>
        <img src={robo} alt="robo" className="robo2" />
      </div>
      <style jsx>{`
        .mid-heading-text span {
          color: white;
        }
        .robo-set-2 {
          margin-top: 35%;
          margin-bottom: 35%;
          padding: 10% 10%;
          height: 40vw;
          position: relative;
        }
        .midHeading-text {
          color: pink;
          animation: animated-text 4s steps(29, end) 1s 1 normal both,
            animated-cursor 600ms steps(29, end) infinite;
        }

        .mid-heading-text div {
          font-family: "futuramedium";
          text-transform: uppercase;
          color: #ffc857 !important;
          font-size: 3vw;
          padding: 8vw 45.5vw 8vw 4vw;
        }
        .robo2 {
          position: absolute;
          top: -5vw;
          right: 10vw;
          width: auto;
          height: 54vw;
        }
        @keyframes animated-text {
          from {
            width: 0;
          }
          to {
            width: 472px;
          }
        }

        /* cursor animations */

        @keyframes animated-cursor {
          from {
            border-right-color: rgba(0, 255, 0, 0.75);
          }
          to {
            border-right-color: transparent;
          }
        }
      `}</style>
    </>
    //
    //     <div className="luxury-heading">
    //         <div className="luxury">Luxury<span>of</span></div>
    //         <div className="design">Design</div>
    //     </div>
    //     <img src={robo} alt="robo" className="robo" />

    // </>
  );
};

export default MidHeading;
