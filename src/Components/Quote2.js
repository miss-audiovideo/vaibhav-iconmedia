import React, { useState } from "react";
import Button from "./Buttons";
import Image from "./images/c.png";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./Quote.css"
const Quote = () => {
    const [open, setOpen] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);
    const [seven, setSeven] = useState(false);
    const [eight, setEight] = useState(false);
    const [nine, setNine] = useState(false);
    const [ten, setTen] = useState(false);
    const [eleven, setEleven] = useState(false);
    const [twelve, setTwelve] = useState(false);
    const [thirteen, setThirteen] = useState(false);
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
                {/* 1 */}
                <Modal show={open} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setOpen(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>Your Name </label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setTwo(true);
                                        setOpen(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 2 */}
                <Modal show={two} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setTwo(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>Your Email </label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setThree(true);
                                        setTwo(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 3 */}
                <Modal show={three} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setThree(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>What role do you play in your business?</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setFour(true);
                                        setThree(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 4 */}
                <Modal show={four} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setFour(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>Business Location</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setFive(true);
                                        setFour(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 5 */}
                <Modal show={five} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setFive(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>What service you want?</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setSix(true);
                                        setFive(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 6 */}
                <Modal show={six} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setSix(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>Business Name</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setSeven(true);
                                        setSix(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 7 */}
                <Modal show={seven} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setSeven(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>What industry is your business in?</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setEight(true);
                                        setSeven(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 8 */}
                <Modal show={eight} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setEight(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>What is the brand/product about?*</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setNine(true);
                                        setEight(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 9 */}
                <Modal show={nine} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setNine(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>What is the primary goal of your business?</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setTen(true);
                                        setNine(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 10 */}
                <Modal show={ten} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setTen(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>What is your biggest challenge?</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setEleven(true);
                                        setTen(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 11 */}
                <Modal show={eleven} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setEleven(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>When people interact with your brand, how do we want them to feel?</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setTwelve(true);
                                        setEleven(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 12 */}
                <Modal show={twelve} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setTwelve(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>12.	Who are some companies that you admire and why?</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary fa fa-long-arrow-right next"
                                    onClick={() => {
                                        setThirteen(true);
                                        setTwelve(false);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* 13 */}
                <Modal show={thirteen} className="bg">
                    <div className="container">
                        <i
                            className="fa fa-times times-cross"
                            onClick={() => setThirteen(false)}
                            aria-hidden="true"
                        ></i>
                        <div className="codrops-header">
                            <center>
                                <h1 className="modal-head">
                                    Design A Quote
                                </h1>
                            </center>
                        </div>
                        <div className="questions">
                            <label>Is there anything you would like to add?</label>
                            <div className="grid">
                                <input type="text" />
                                <button
                                    className="btn-primary next"
                                // onClick={() => {
                                //   setThree(true);
                                //   setTwo(false);
                                // }}
                                >Submit
                                </button>
                            </div>
                        </div>
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
