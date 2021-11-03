import React, { useState } from "react";
import Button from "./Buttons";
import Image from "./images/c.png";
import { Modal, ModalFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
// import ModalOne from "../Modals/ModalOne.jsx";

const Quote = () => {
  const [next, setNext] = useState(false);
  const [next2, setNext2] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="quote animate__animated animate__bounce animate__delay-3s">
        <h1 className="animate__animated animate__zoomIn animate__infinite animate__slower">
          <span style={{ color: "white" }}>Let's create a measurable</span>
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
        <Modal show={open}>
          {/* <ModalOne /> */}
          <ModalHeader>
            <i
              className="fa fa-times times-cross"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            ></i>
          </ModalHeader>
          <div>
            <center>
              <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                "Design A Quote"
              </h1>
              <h3>What services would you like to option ?</h3>
              <Link className="modal-link" to="./Modals/ModalOne">
                <p className="modal-p">UI/UX</p>
              </Link>
              <Link className="modal-link">
                <p className="modal-p">Branding</p>
              </Link>
              <Link className="modal-link">
                <p className="modal-p">Developement</p>
              </Link>
              <Link className="modal-link">
                <p className="modal-p">Marketing</p>
              </Link>
              <Link className="modal-link">
                <p className="modal-p">All Services</p>
              </Link>
            </center>
            <ModalFooter>
              <button
                className="btn-primary"
                onClick={() => {
                  setNext(true);
                  setOpen(false);
                }}
              >
                Continue
              </button>
              <button className="btn-danger" onClick={() => setOpen(false)}>
                close Modal
              </button>
            </ModalFooter>
          </div>
        </Modal>
        <Modal show={next}>
          <ModalHeader>
            <i
              className="fa fa-times times-cross"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            ></i>
          </ModalHeader>
          <div>
            <center>
              {/* <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                "Design A Quote"
              </h1> */}
              <h3>How do you want to work ?</h3>
              <Link className="modal-link" to="./Modals/ModalOne">
                <p className="modal-p">Project</p>
              </Link>
              <Link className="modal-link">
                <p className="modal-p">Retainer</p>
              </Link>
              <Link className="modal-link">
                <p className="modal-p">Hourly</p>
              </Link>
            </center>
            <button
              className="btn-primary"
              onClick={() => {
                setNext2(true);
                setNext(false);
              }}
            >
              Continue
            </button>
            <button className="btn-danger" onClick={() => setNext(false)}>
              close Modal
            </button>
          </div>
        </Modal>
        <Modal show={next2}>
          <ModalHeader>
            <i
              className="fa fa-times times-cross"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            ></i>
          </ModalHeader>
          <div>
            <center>
              <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                "Design A Quote"
              </h1>
              hello222
            </center>
            {/* <button>finish</button> */}
            <button className="btn-danger" onClick={() => setNext2(false)}>
              close Modal
            </button>
          </div>
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
          text-decoration: none;
          color: #2f3542;
          underline: none;
        }
        .modal-p:hover {
          background: #b2bec3;
        }
        .modal-head {
          // display: flex;
          // text-align: center;
          color: red;
        }
        .modal-link {
          text-decoration: none;
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
          // background-image: url(${Image});
          background-image: url("./images/Leaf.jpeg");
          background-size: cover;
          background-position: center;

          flex-direction: column;
          justify-content: center;
        }
        .quote-button {
          // background-color: blue;
          // color: #ffe462;
          color: white;
          padding: 10px;
          margin-top: 20px;
          margin-right: auto;
          margin-left: auto;
          border-radius: 5px;
          border: 2px solid white;
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
        .btn-primary {
          color: white;
          background: blue;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-weight: bolder;
        }
        .btn-danger {
          color: white;
          background: red;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-weight: bolder;
        }
        .times-cross {
          display: flex-end;
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
