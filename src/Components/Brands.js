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
      <div className="brands">
        <div className="brands-heading">
          <h1
            // style={{
            //   fontFamily: `futuramedium`,
            // }}
            className="brands-title"
            // className=" firstpage brand-line text-center pt-lg-5 pb-lg-5 animate__animated animate__jackInTheBox animate__delay-10s "
          >
            BRANDS WE HAVE WORKED WITH
          </h1>
        </div>
        {/* <div className="brands"> */}
        <div className="brands-variants">
       <div class="col--5">
          <Brand src={Allstate} class="brand-img first-brand  " />
          <Brand src={Darkbean} class="brand-img second-brand " />

          <Brand src={nozzle} class="brand-img ninth-brand  " />

          <Brand src={mistyvalley} class="brand-img third-brand " />

          <Brand src={remax} class="brand-img fifth-brand " />
          <Brand src={snapfit} class="brand-img sixth-brand" />
          <Brand src={studio97} class="brand-img seventh-brand  " />
          <Brand src={hudsonwatches} class="brand-img tenth-brand " />

          <Brand src={subway} class="brand-img eightth-brand" />

          <Brand src={pantheraazul} class="brand-img fourth-brand " />
        </div></div>
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
        .col--5 {
          column-count: 5;
          padding-bottom:25px;
        }
        .brands {
          display: flex;
          flex-wrap: wrap;
          -webkit-backdrop-filter: blur(4px) saturate(200%);
          background-color: rgba(114, 114, 114, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.125);
          padding-bottom: 50px;
        }
        .brands-title {
          padding-top: 50px;
          font-family: futuramedium;
          font-size: 35px;
          font-weight: bolder;
          padding-bottom: 30px;
          color: #ffc857;
          text-align:center;
        }
        .brands-heading {
          display: flex;
        }
        .brands-variants {
          display: flex;
          flex-wrap: wrap;
        }
        .heading_brands {
          font-family: futuramedium;
        }
        .firstpage {
          font-family: futuramedium;
        }
        .brand-img {
          display: flex;
          width: 130px;
          height: 55px;
          margin-left: 50px;
          margin-right: 50px;
          align-items: center;
          justifycontent: space-around;
          flex-wrap: wrap;
        }
        @media screen and (max-width: 1030px) {
          .brand-img {
            width: 12vw;
            height: max-content;
            margin-right:5px;
         
          }
          .col--5 {
            margin-bottom:-55px;
          }

          .brands {
            margin-top: 200px;
            padding-bottom: 100px;
            padding-right:80px;
          }
        }
      
        @media screen and (max-width: 800px) {
          .brand-img {
            width: 15vw;
            height: max-content;
            margin: auto;
          }
          .brands {
            margin-top: 250px;
            padding-bottom: 100px;
            padding-left:80px;
          }
          .brands-heading {
            font-size: 25px;
            display: flex;
            padding-top: -40px;
          }
        }
        
        
        
      `}</style>
    </>
  );
};

export default Brands;
