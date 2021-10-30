import React, { useState } from "react";
import Button from "./Buttons";
import Image from "./images/c.png";
import { Modal } from "react-bootstrap";
const Quote = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="quote animate__animated animate__bounce animate__delay-3s">
        <h1 className="animate__animated animate__zoomIn animate__infinite animate__slower">
          Let's create a measurable
          <br />
          impact on your business.
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="quote-button btn btn-outline-warning"
          style={{ fontFamily: "Futura-Medium,sans-serif" }}
        >
          Design a quote
        </button>
        <Modal
          show={open}
          className="animate__animated animate__fadeInBottomRight animate-slower animate__delay-1s"
        >
          <Modal.Header className="modal-head text-center"></Modal.Header>
          <Modal.Body>
            <center>
              <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                "Design A Quote"
              </h1>
              <h3>What services would you like to option ?</h3>
              <p className="modal-p">UI/UX</p>
              <p className="modal-p">Branding</p>
              <p className="modal-p">Developement</p>
              <p className="modal-p">Marketing</p>
              <p className="modal-p">All Services</p>
            </center>
          </Modal.Body>
          <Modal.Footer>
            {/* <button onClick={() => setOpen(false)}>close Modal</button> */}
            <i
              class="fa fa-times cross"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            ></i>
          </Modal.Footer>
        </Modal>
      </div>
      <style jsx>{`
        @font-face {
          font-family: futuramedium;
          src: url("./fonts/futura\ medium\ bt.ttf");
        }
        @font-face {
          font-family: futurabook;
          src: url("./fonts/Futura\ Book.ttf");
        }
        .modal-p {
          padding: 10px;
          font-size: 24px;
        }
        .modal-p:hover {
          background: #b2bec3;
        }
        .modal-head {
          // display: flex;
          // text-align: center;
          color: red;
        }
        .cross {
          font-size: 20px;
          color: red;
        }
        .cross:hover {
          background: red;
          color: white;
          padding: 15px;
          border-radius: 50%;
        }
        .quote h1 {
          color: #ffe462;
          text-align: center;
          font-family: futuramedium;
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
        .quote-button {
          background-color: #2d0707;
          color: #ffe462;
          padding: 10px;
          margin-top: 20px;
          margin-right: auto;
          margin-left: auto;
          border-radius: 5px;
          border: 2px solid #ffe462;
          // font-weight: bold;
          font-family: futurabook;
        }
        .box {
          margin: 0;
          position: absolute;
          top: 70%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .btnsize {
          width: 205px;
        }
        .quotes-button {
        }

        @media screen and (max-width: 500px) {
          .quote h1 {
            font-size: 35px;
          }
        }
      `}</style>
    </>
  );
};

export default Quote;
