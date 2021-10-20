import React, { useState, useEffect } from "react";
import PrintDesign from "./dashpages/printDesign";
import Branding from "./dashpages/branding";
import Packaging from "./dashpages/packaging";
import Digital from "./dashpages/digital";
import Presentations from "./dashpages/presentations";
import Photography from "./dashpages/photography";
import WebDesign from "./dashpages/webdesign";

function Dashboard() {
  const [ui, setUi] = useState("");

  useEffect(() => {
    setUi("printDesign");
  }, []);
  return (
    <>
      {/* <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
        <source src="polina.webm" type="video/webm" />
        <source src="../Video/coffee.mp4" type="video/mp4" />
      </video> */}
      <div style={{ height: "25vh" }} />
      <div className="section  mt-3 fluid-container text-light">
        <h1
          className="mt-3 animate__animated animate__zoomIn animate__repeat-2s"
          style={{ fontSize: "55px", fontFamily: "Quicksand,sans-serif" }}
        >
          We can design just
          <br /> about anything
        </h1>
        <div className="dashboard">
          <div className="sidebar">
            <div
              className={ui === "printDesign" ? "links links--active" : "links"}
              onClick={() => setUi("printDesign")}
            >
              Print Design
            </div>
            <div
              className={ui === "branding" ? "links links--active" : "links"}
              onClick={() => setUi("branding")}
            >
              Branding
            </div>
            <div
              className={ui === "digital" ? "links links--active" : "links"}
              onClick={() => setUi("digital")}
            >
              Digital
            </div>
            <div
              className={ui === "packaging" ? "links links--active" : "links"}
              onClick={() => setUi("packaging")}
            >
              Packaging
            </div>
            <div
              className={
                ui === "presentations" ? "links links--active" : "links"
              }
              onClick={() => setUi("presentations")}
            >
              Presentations
            </div>
            <div
              className={ui === "photography" ? "links links--active" : "links"}
              onClick={() => setUi("photography")}
            >
              Photography
            </div>
            <div
              className={ui === "webdesign" ? "links links--active" : "links"}
              onClick={() => setUi("webdesign")}
            >
              Web Design
            </div>
          </div>
          <div className="children">
            {ui === "printDesign" && <PrintDesign />}
            {ui === "branding" && <Branding />}
            {ui === "digital" && <Digital />}
            {ui === "packaging" && <Packaging />}
            {ui === "presentations" && <Presentations />}
            {ui === "photography" && <Photography />}
            {ui === "webdesign" && <WebDesign />}
          </div>
        </div>
      </div>
      <style jsx>{`
        .section h1 {
          color: #ffe462;
          // color: black;
          text-align: center;
          margin-bottom: 50px;
        }
        .section {
          padding-top: 100px;
          height: 600px;
        }
        .dashboard {
          width: 80%;
          margin: 0 auto;
          height: 450px;
          display: flex;
          flex-direction: row;
        }
        .sidebar {
          width: 25%;
          background: #fff;
          color: #333;
          height: 450px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          padding-top: 20px;
        }
        .links {
          width: 70%;
          font-size: 18px;
          margin-bottom: 10px;
          padding-bottom: 20px;
          border-bottom: 1px solid #dbdbdb;
          cursor: pointer;
          margin-left: 15px;
        }
        .links--active {
          background-color: #187e8a;
          color: #fff;
          margin-left: 0;
          margin-right: 0;
          width: 100%;
          padding: 15px 0 10px 20px;
          margin-top: -20px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        .children {
          width: 85%;
          margin-left: -10px;
          padding-left: 30px;
          padding-top: 20px;
          padding-right: 20px;
          height: 450px;
          border-radius: 10px;
          background-color: #187e8a;
        }
        @media screen and (max-width: 1150px) {
          .dashboard {
            width: 95%;
          }
        }
        @media screen and (max-width: 800px) {
          .children {
            width: 90%;
          }
          .dashboard {
            width: 90%;
          }
          .section {
            height: 1000px;
          }
          .sidebar {
            height: 650px;
            width: 35%;
          }
          .links {
            font-size: 14px;
            width: 90%;
          }
          .children {
            padding-top: 20px;
            padding-right: 20px;
            height: 650px;
          }
        }
        @media screen and (max-width: 500px) {
          .children {
            width: 60%;
          }
          .section {
            height: 900px;
          }
          .dashboard {
            width: 85%;
          }
          .sidebar {
            width: 40%;
          }
          .links {
            width: 95%;
            margin-left: 10px;
          }
          .links--active {
            margin-left: 0;
            margin-right: 0;
            width: 90%;
            padding-left: 5px;
          }
        }
      `}</style>
    </>
  );
}

export default Dashboard;
