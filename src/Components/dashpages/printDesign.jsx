import React from "react";
import Layer1 from "../SGI/Layer17.png";
import Layer2 from "../SGI/Layer18.png";
import Layer3 from "../SGI/Layer19.png";
import Layer4 from "../SGI/Layer20.png";
import Layer5 from "../SGI/Layer21.png";
import Layer6 from "../SGI/Layer22.png";
import Layer7 from "../SGI/Layer23.png";

function printDesign() {
  return (
    <>
      <div className="dashpage">
        <div className="left animate__animated animate__fadeInUp animate__slow">
          {/* <h1>hello</h1> */}

          <center>
            <h1 style={{ fontFamily: "Futura-Medium,sans-serif" }}>
              Print Design
            </h1>
            <br />
            <img className="dashpage__image" src={Layer1}></img>
            <img className="dashpage__image" src={Layer2}></img>
            <img className="dashpage__image" src={Layer3}></img>
            <img className="dashpage__image" src={Layer4}></img>
          </center>
        </div>
        <div className="right-One animate__animated animate__fadeInUp animate__slow">
          <center>
            {/* <h3 className="dashpage_h3">
              New <br />
              Summer Collection
            </h3> */}
            {/* <p className="right-One-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              soluta blanditiis placeat, ipsa quibusdam quaerat non Lorem ipsum
              dolor sit amet consectetur
            </p> */}
          </center>
        </div>
      </div>
      <style jsx>{`
        .left {
          font-family: "Rampart One", cursive;
          // background-color: white;
        }
        .dashpage__image {
          width: 200px;
          height: 250px;
          padding-bottom: 25px;
          margin: 8px;
        }
        .right-One {
          // display: flex;
          // flex-wrap: wrap;
          font-family: "Rampart One", cursive;
        }
        .dashpage_h3 {
          color: #fee362;
        }
        .right-One-text {
          margin-bottom: 30px !important;
        }
        @import url("https://fonts.googleapis.com/css2?family=Rampart+One&display=swap");
        // .left_h1 {
        //   font-family: "Rampart One", cursive;
        // }
        // .shadow {
        //   padding-top: 30px;
        // }
        // .dashpage-text {
        //   padding-top: 20px;
        //   font-size: 32px;
        // }
        // .gap{
        //  padding:5px;
        // }
        // .dashpage .left h1 {
        //   margin: 0;
        //   padding: 20px;
        //   font-size: 2.2rem;
        //   color: #fff;
        //   font-style: italic;
        //   text-transform: uppercase;
        // }
        // .left {
        //   width: 40%;
        //   padding: 20px;
        //   overflow: hidden;
        // }
        // hr {
        //   background-color: #fff;
        // }
        // .left table {
        //   width: 100%;
        // }
        // .left td {
        // }
        // .left p {
        //   font-size: 16px;
        // }
        // .left-img {
        //   display: flex;
        //   align-items: center;
        //   justify-content: space-around;
        //   flex-wrap: wrap;
        //   padding:12px;
        // }
        // .left-img-one{
        //   width:110px; !important;
        //   height:110px; !important;
        // }
        // .right {
        //   width: 40%;
        //   padding: 20px;
        //   box-sizing:border-box;
        //   overflow: hidden;
        // }
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
        // .left-img {
        //   display: flex;
        //   align-items: center;
        //   justify-content: space-around;
        //   flex-wrap: wrap;
        //   padding:10px;
        // }
        .right-img {
          // width: 450px;
          // height: 400px;
          // padding-top: 50px;
          // padding-left: 70px;
          // overflow: hidden;
          // display: flex;
          // align-items: center;
          // justify-content: space-around;
          // flex-wrap: wrap;
        }
        @media screen and (max-width: 1000px) {
          .dashpage__image {
            width: 140px;
            height: 180px;
            // padding-bottom: 40px;
          }
        }
        @media screen and (max-width: 1250px) {
          .dashpage__image {
            width: 140px;
            height: 180px;
            // padding-bottom: 40px;
          }
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
          .right-One-text {
            margin: 30px;
            overflow: hidden;
          }
          // .column1 {
          //   margin-top: -20px;
          //   clip-path: inset(20px 0 154px 0);
          // }
          // .column2 {
          //   margin-top: -80px;
          //   clip-path: inset(80px 0 154px 0);
          // }
        }
        @media screen and (max-width: 500px) {
          // .right img {
          //   width: 50px;
          //   // padding: 15px 10px;
          //   overflow: hidden;
          // }
          .dashpage__image {
            width: 120px;
            height: 120px;
            padding-bottom: 40px;
          }
          // .column1 {
          //   margin-top: 10px;
          //   clip-path: inset(0 0 140px 0);
          // }
          // .column2 {
          //   clip-path: inset(100px 0 151px 0);
          // }
          // .left {
          //   padding: 5px;
          // }
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
