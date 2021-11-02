import React from "react";
import Brand from "./Brand";
import Allstate from "./images/Allstate.png";
import Darkbean from "./images/Darkbean.png";
import mistyvalley from "./images/mistyvalley.png";
import pantheraazul from "./images/pantheraazul.png";
import remax from "./images/RE_MAX.png";
import snapfit from "./images/snapfit.png";
import studio97 from "./images/studio97.png";
import subway from "./images/Subway.png";
import nozzle from "./images/Nozzle.png";
import hudsonwatches from "./images/Hudson Watches.png";

const Brands = () => {
  return (
    <>
      <div>
        <br />
        <br />
        <h1
          style={{
            fontFamily: `futuramedium`,
          }}
          className=" firstpage brand-line text-center pt-lg-5 pb-lg-5 animate__animated animate__jackInTheBox animate__delay-10s "
        >
          BRANDS WE HAVE WORKED WITH
        </h1>
        <div className="brands">
          <Brand
            src={Allstate}
            class="brand-img first-brand animate__animated animate__bounce "
          />
          <Brand
            src={Darkbean}
            class="brand-img second-brand animate__animated animate__bounce animate__infinite animate__slower"
          />

          <Brand
            src={nozzle}
            class="brand-img ninth-brand animate__animated animate__bounce "
          />

          <Brand
            src={mistyvalley}
            class="brand-img third-brand animate__animated animate__bounce animate__infinite animate__slower"
          />

          <Brand
            src={remax}
            class="brand-img fifth-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            src={snapfit}
            class="brand-img sixth-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            src={studio97}
            class="brand-img seventh-brand animate__animated "
          />
          <Brand
            src={hudsonwatches}
            class="brand-img tenth-brand animate__animated animate__bounce animate__infinite animate__slower"
          />

          <Brand
            src={subway}
            class="brand-img eightth-brand animate__animated animate__bounce"
          />

          <Brand
            src={pantheraazul}
            class="brand-img fourth-brand animate__animated animate__bounce"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <style jsx>{`
        @font-face {
          font-family: futuramedium;
          src: url("./fonts/futura\ medium\ bt.ttf");
        }
        @font-face {
          font-family: futurabook;
          src: url("./fonts/Futura\ Book.ttf");
        }
        .brands {
          // backdrop-filter: blur(4px) saturate(200%);
          -webkit-backdrop-filter: blur(4px) saturate(200%);
          background-color: rgba(114, 114, 114, 0.5);
          // border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
        .heading_brands {
          font-family: futuramedium;
        }
        .firstpage {
          font-family: futuramedium;
          // -webkit-backdrop-filter: blur(4px) saturate(200%);
          // background-color: rgba(114, 114, 114, 0.5);
          // border-radius: 12px;
          // border: 1px solid rgba(255, 255, 255, 0.125);
        }
        @media screen and (max-width: 800px) {
          .brand-img {
            width: 15vw;
            height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Brands;
