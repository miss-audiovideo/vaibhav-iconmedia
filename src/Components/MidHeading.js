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
            Designs that <br />
            {/* <span className="midHeading-text">make a difference</span> */}
            <label className="tejas" data-text="make a difference.">
              make a difference.
            </label>
          </div>
        </div>
        <img src={robo} alt="robo" className="robo2" />
      </div>
      <style jsx>{`
        .tejas {
          position: absolute;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: transparent;
        }
        .tejas:before {
          content: attr(data-text);
          position: absolute;
          color: #fff;
          overflow: hidden;
          border-right: 1px solid #000;
          // animation: type 10s steps(17) infinite;
          animation: type 10s linear infinite;
          white-space: nowrap;
        }
        @keyframes type {
          0% {
            width: 0%;
          }

          50% {
            width: 100%;
          }
          // 100% {
          //   width: 0%;
          // }
        }
        .robo-set-2 {
          margin-top: 35%;
          margin-bottom: 35%;
          padding: 10% 10%;
          height: 40vw;
          position: relative;
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
