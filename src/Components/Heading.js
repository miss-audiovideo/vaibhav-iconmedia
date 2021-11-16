import React, { useEffect } from "react";
import robo from "./images/Robo-1.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    });
  });
  return (
    <>
      <div data-aos="fade-in" className="robo-set-1">
        <div className="luxury-heading">
          <div className="luxury">
            Luxury<span>of</span>
          </div>
          <div className="design">Design</div>
        </div>
        <img src={robo} alt="robo" className="robo" />
      </div>
      <style jsx>{`
        .robo-set-1 {
          padding: 0 10% 10%;
          height: 30vw;
          position: relative;
          margin-bottom: 120px;
        }
        .robo {
          position: absolute;
          top: 20vw;
          right: 62vw;
          width: 56vw;
          height: auto;
          transform: scaleX(-1) translate(-50%, -50%);
        }
        .luxury-heading {
          text-align: center;
        }
        .luxury {
          padding: 0 10vw 0 0;
          font-size: 10vw;
          font-family: "cinzeldecorativebold";
          text-shadow: 0px 0px 13px #eaeaf025;
          color: #eaeaf0 !important;
        }
        .luxury span {
          font-size: 3vw;
          font-family: "herculesitalic";
          color: #eaeaf0 !important;
        }
        .design {
          position: absolute;
          margin: -6vw 0vw 0vw 29vw;
          font-size: 10vw;
          font-family: "cinzelbold";
          text-shadow: 0px 0px 13px #ffc85725;
          color: #ffc857 !important;
        }
      `}</style>
    </>
  );
};

export default Heading;
