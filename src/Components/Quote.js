import React, { useState } from "react";
import Button from "./Buttons";
import Image from "./images/c.png";
import { Modal, ModalFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { send } from 'emailjs-com';

// import ModalOne from "../Modals/ModalOne.jsx";

const Quote = () => {
  const [next, setNext] = useState(false);
  const [next2, setNext2] = useState(false);
  const [next3, setNext3] = useState(false);
  const [next4, setNext4] = useState(false);
  const [next5, setNext5] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
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
        {/* -------------------------------------------TODO One---------------------------------------- */}
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
                Design a quote
              </h1>
              <h3>What services would you like to option ?</h3>
              {/* <Link className="modal-link" to="https://leo9studio.com/"> */}
              <a className="link-name" href="https://leo9studio.com/">
                {" "}
                <p className="modal-p">UI/UX</p>
              </a>
              {/* </Link> */}
              {/* <Link className="modal-link"> */}
              <a className="link-name" href="https://leo9studio.com/">
                <p className="modal-p">Branding</p>
                {/* </Link> */}
              </a>
              {/* <Link className="modal-link"> */}
              <a className="link-name" href="https://leo9studio.com/">
                {" "}
                <p className="modal-p">Developement</p>
              </a>
              {/* </Link> */}
              {/* <Link className="modal-link"> */}
              <a className="link-name" href="https://leo9studio.com/">
                <p className="modal-p">Marketing</p>
              </a>

              {/* </Link> */}
              {/* <Link className="modal-link"> */}
              <a className="link-name" href="https://leo9studio.com/">
                <p className="modal-p">All Services</p>
              </a>

              {/* </Link> */}
            </center>
            <ModalFooter>
              {/* <center> */}{" "}
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
              {/* </center> */}
            </ModalFooter>
          </div>
          {/* --------------------------------------FIXME Two---------------------------------------------- */}
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
              <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                Design a quote
              </h1>
              <h3>How do you want to work ?</h3>
              <a className="link-name" href="https://leo9studio.com/">
                <p className="modal-p">Project</p>
              </a>
              {/* <Link className="modal-link" to="./Modals/ModalOne"> */}
              <a className="link-name" href="https://leo9studio.com/">
                <p className="modal-p">Retainer</p>
              </a>
              <a className="link-name" href="https://leo9studio.com/">
                <p className="modal-p">Hourly</p>
              </a>
            </center>
            <ModalFooter>
              <center>
                <button
                  className="btn-primary link-btn"
                  onClick={() => {
                    setNext2(true);
                    setNext(false);
                  }}
                >
                  Continue
                </button>
                <button
                  className="btn-danger  link-btn"
                  onClick={() => setNext(false)}
                >
                  close Modal
                </button>
              </center>
            </ModalFooter>
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
                Design a quote
              </h1>
              <div>
                <strong>
                  <label>Your Name : </label>
                </strong>
                <input
                  className="input-field"
                  type="text"
                  placeholder="     Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <strong>
                  <label>Reachme at :</label>
                </strong>

                <input
                  className="input-field"
                  type="email"
                  placeholder="    hi@iconmediahouse.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <strong>
                  <label>What role do you play in your business ?</label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  placeHolder="      Ceo"
                />
              </div>
            </center>
            {/* <button>finish</button> */}
            <ModalFooter>
              <div>
                <h5>{/* Hello !! i am <span>{name}</span> */}</h5>
              </div>

              <p>{email}</p>
            </ModalFooter>
            <center>
              <button
                className="btn-primary  link-btn"
                onClick={() => {
                  setNext3(true);
                  setNext2(false);
                }}
              >
                Continue
              </button>
              <button
                className="btn-danger  link-btn"
                onClick={() => setNext2(false)}
              >
                close Modal
              </button>
            </center>
          </div>
        </Modal>
        {/* --------------------------------------------------TODO Three --------------------------------------- */}

        <Modal show={next3}>
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
                Design a quote
              </h1>
              <div>
                <strong>
                  <label>Business Location 🗺 :</label>
                </strong>
                <input
                  className="input-field"
                  type="text"
                  placeholder="    Toronto, Canada"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <strong>
                  <label>Business Name 🚴‍♀️ :</label>
                </strong>

                <input
                  className="input-field"
                  type="email"
                  placeholder="   Emma Jam's"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <strong>
                  <label>What role do you play in your business 🏢? </label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  placeholder="    Web Developement"
                />
              </div>
            </center>
            {/* <button>finish</button> */}
            <ModalFooter>
              <h5>{/* Hello !! i am <span>{name}</span> */}</h5>
            </ModalFooter>
            <center>
              <button
                className="btn-primary  link-btn"
                onClick={() => {
                  setNext4(true);
                  setNext3(false);
                }}
              >
                Continue
              </button>
              <button
                className="btn-danger  link-btn"
                onClick={() => setNext3(false)}
              >
                close Modal
              </button>
            </center>
          </div>
        </Modal>
        {/* --------------------------------------------TODO four----------------------------------------- */}
        <Modal show={next4}>
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
                Design a quote
              </h1>
              <div>
                <strong>
                  <label>Business Name :</label>
                </strong>
                <input
                  className="input-field"
                  type="text"
                  placeholder="    Emma Jams"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <strong>
                  <label>What industry is your business in ? </label>
                </strong>
                <input
                  className="input-field"
                  type="email"
                  placeholder="    Website Developement"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <strong>
                  <label>What is the brand/product about ?</label>
                </strong>
                <input type="text" className="input-field" />
                <strong>
                  <label>What is the primary goal of your business ?</label>
                </strong>
                <input type="text" className="input-field" />
                <strong>
                  <label>What is your biggest challenge ?</label>
                </strong>

                <input type="text" className="input-field" />
              </div>
            </center>
            {/* <button>finish</button> */}
            <ModalFooter>
              <h5>{/* Hello !! i am <span>{name}</span> */}</h5>
            </ModalFooter>
            <center>
              <button
                className="btn-primary link-btn"
                onClick={() => {
                  setNext5(true);
                  setNext4(false);
                }}
              >
                {" "}
                Continue
              </button>
              <button
                className="btn-danger  link-btn"
                onClick={() => setNext4(false)}
              >
                close Modal
              </button>
            </center>
          </div>
        </Modal>
        {/* -------------------------------------------TODO five------------------------------------------ */}
        <Modal show={next5}>
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
                Design a quote
              </h1>
              <div>
                <strong>
                  {" "}
                  <label>
                    When people interact with your brand, how do we want them to
                    feel ?
                  </label>
                </strong>

                <input type="text" className="input-field" />
                <br />
                <strong>
                  <label>
                    {" "}
                    Who are some companies that you admire and why ?
                  </label>
                </strong>

                <input type="text" className="input-field" />
                <br />
                <strong>
                  <label>Is there anything you would like to add ? </label>
                </strong>

                <input type="text" className="input-field" />
              </div>
            </center>
            {/* <button>finish</button> */}
            <ModalFooter>
              {/* <h5>Hello !! i am <span>{name}</span></h5> */}
              <button className="submit-btn" onClick={() => setNext5(false)}>
                Submit
              </button>
            </ModalFooter>
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
        .submit-btn {
          color: white;
          background: #6c5ce7;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-weight: bolder;
        }
        .times-cross {
          display: flex-end;
        }
        .link-name {
          text-decoration: none;
        }
        .link-btn {
          margin: 10px;
        }
        .input-field {
          border: none;
          border-bottom: 2px solid silver;
          outline: none;
          width: maxContent;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .input-field:hover {
          border-bottom: 2px solid #be2edd;
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
