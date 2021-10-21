import React from "react";
import Layer1 from "../SGI/Layer17.png";
import Layer2 from "../SGI/Layer18.png";
import Layer3 from "../SGI/Layer19.png";
import Layer4 from "../SGI/Layer20.png";
import Layer5 from "../SGI/Layer21.png";
import Layer6 from "../SGI/Layer22.png";
import Layer7 from "../SGI/Layer23.png";
// import Lotties from "react-lottie";

function printDesign() {
  return (
    <>
      <div className="dashpage">
        {/* <video autoplay muted loop id="myVideo">
          <source src="rain.mp4" type="video/mp4" />
        </video> */}

        <div className="left">
          <h1 className="animate__animated animate__fadeInUp animate__slow left_h1">
            Print Design
          </h1>
          <div className="left-img animate__animated animate__fadeInUp animate__slow">
            <img className="left-img-one gap" src={Layer6} alt="" />
            <img className="left-img-one gap" src={Layer4} alt="" />
            <img className="left-img-one gap" src={Layer1} alt="" />
            <img className="left-img-one gap" src={Layer2} alt="" />
          </div>
        </div>
        <div className="right">
          {/* <div className="column1">
            <img className="shadow" src={Layer1} alt="" />
            <img src={Layer2} alt="" />
            <img className="shadow" src={Layer3} alt="" />
          </div>
          <div className="column2">
            <img className="shadow" src={Layer4} alt="" />
            // <img src={Layer5} alt="" />
            <img src={Layer6} alt="" />
            <img className="shadow" src={Layer7} alt="" /> */}
          {/* </div> */}
          <div className="right-img">{/* <img src={Layer5} alt="" /> */}</div>
        </div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Rampart+One&display=swap");
        .left_h1 {
          font-family: "Rampart One", cursive;
        }
        .shadow {
          padding-top: 30px;
        }
        .dashpage-text {
          padding-top: 20px;
          font-size: 32px;
        }
        .dashpage {
          display: flex;
          flex-direction: row;
          box-sizing: border-box;
          overflow: hidden;
        }
        .gap{
         padding:5px;
        }
        .dashpage .left h1 {
          margin: 0;
          padding: 20px;
          font-size: 2.2rem;
          color: #fff;
          font-style: italic;
          text-transform: uppercase;
        }
        .left {
          width: 40%;
          padding: 20px;
          overflow: hidden;
        }
        hr {
          background-color: #fff;
        }
        .left table {
          width: 100%;
        }
        .left td {
        }
        .left p {
          font-size: 16px;
        }
        .left-img {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          padding:12px;
        }
        .left-img-one{
          width:110px; !important; 
          height:110px; !important;
        }

        .right {
        }
        //
        // .column1,
        // .column2 {
        //   display: flex;
        //   flex-direction: column;
        // }
        // .column1 {
        //   margin-top: -20px;
        //   clip-path: inset(20px 0 110px 0);
        // }
        // .column2 {
        //   margin-top: -100px;
        //   clip-path: inset(80px 0 110px 0);
        // }
        .left-img {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          // padding:10px;
        }
        .right img {
          width: 450px;
          height: 400px;
          padding-top: 50px;
          padding-left: 70px;
          overflow: hidden;
        }
        @media screen and (max-width: 800px) {
          .left {
            width: 100%;
          }
          .right {
            width: 100%;
          }
          .dashpage {
            display: flex;
            flex-direction: column;
          }
          .column1 {
            margin-top: -20px;
            clip-path: inset(20px 0 154px 0);
          }
          .column2 {
            margin-top: -80px;
            clip-path: inset(80px 0 154px 0);
          }
        }
        @media screen and (max-width: 500px) {
          .right img {
            width: 50px;
            // padding: 15px 10px;
            overflow: hidden;
          }
          .column1 {
            margin-top: 10px;
            clip-path: inset(0 0 140px 0);
          }
          .column2 {
            clip-path: inset(100px 0 151px 0);
          }
          .left {
            padding: 5px;
          }
        }
      `}</style>
    </>
  );
}

export default printDesign;

// .right {
//   // padding-top: 50px;
//   // width: 60%;
//   // height: min-content;
//   display: flex;
//   // flex-direction: row;
//   // align-items: center;
//   // justify-content: center;
//   flex-wrap: wrap;
// }

{
  /* <p className="dashpage-text animate__animated animate__fadeInUp animate__slow">
            A strong handshake is half the battle. We are here to help with the
            other half. From business cards, to advertisement, banners with
            designs that will leave lasting impressions.
          </p>
          <hr />
          <table className="animate__animated animate__fadeInUp animate__slow">
            <tr>
              <td>Catalogs</td>
              <td>Business Cards</td>
            </tr>
            <tr>
              <td>Presentations</td>
              <td>Door Hangers</td>
            </tr>
            <tr>
              <td>Signage</td>
              <td>Brochures</td>
            </tr>
            <tr>
              <td>Stationary</td>
              <td>Posters</td>
            </tr>
            <tr>
              <td>Reports</td>
              <td>Calendars</td>
            </tr>
            <tr>
              <td>Postcards</td>
              <td>Flyers</td>
            </tr>
            <tr>
              <td>Tradeshow Graphics</td>
              <td>Menus</td>
            </tr>
          </table> */
}
