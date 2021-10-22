import React from "react";
import Button from "./Buttons";
import Image from "./images/c.png";
function Quote() {
  return (
    <>
      <div className="quote animate__animated animate__bounce animate__delay-3s">
        <h1 className="animate__animated animate__zoomIn animate__infinite animate__slower">
          Let's create a measurable
          <br />
          impact on your business.
        </h1>
        <div className="box">
          <button className="btn btn-outline-warning btnsize">
            Design A Quote
          </button>
        </div>
      </div>
      <style jsx>{`
        .quote h1 {
          color: #ffe462;
          text-align: center;
        }
        .quote {
            height: 500px;
            display: flex;
            background-image: url(${Image});
            background-size: cover;
            background-position: center;
          
            flex-direction: column;
            justify-content: center;
        }
        .box{ margin: 0;
          position: absolute; 
          top: 70%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .btnsize{
          
          width: 205px;
        }
        @media screen and (max-width: 500px) {
          .quote h1 {
            font-size: 35px;
          }
        }
      `}</style>
    </>
  );
}

export default Quote;
