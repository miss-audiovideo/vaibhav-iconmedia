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
        <div className="left">
          <h1>Print Design</h1>
          <p>
            A strong handshake is half the battle. We are here to help with the
            other half. From business cards, to advertisement, banners with
            designs that will leave lasting impressions.
          </p>
          <hr />
          <table>
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
          </table>
        </div>
        <div className="right">
          <div className="column1">
            <img className="shadow" src={Layer1} alt="" />
            <img src={Layer2} alt="" />
            <img className="shadow" src={Layer3} alt="" />
          </div>
          <div className="column2">
            <img className="shadow" src={Layer4} alt="" />
            <img src={Layer5} alt="" />
            <img src={Layer6} alt="" />
            <img className="shadow" src={Layer7} alt="" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .dashpage {
          display: flex;
          flex-direction: row;
        }
        .dashpage .left h1 {
          margin: 0;
          padding: 0;
          font-size:2.2rem;
          color: #fff;
          font-style: italic;
          text-transform: uppercase;
        }
        .left {
          width: 40%;
          padding: 20px;
        }
        hr {
          background-color: #fff;
        }
        .left table {
          font-size: 12px;
          width: 100%;
        }
        .left td {
        }
        .left p {
          font-size: 12px;
        }

        .right {
          width: 50%;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .column1,
        .column2 {
          display: flex;
          flex-direction: column;
        }
        .column1 {
          margin-top: -40px;
          clip-path: inset(20px 0 110px 0);
        }
        .column2 {
          margin-top: -100px;
          clip-path: inset(80px 0 110px 0);
        }
        .right img {
          width: 120px;
          padding: 10px;
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
          width: 90px;
          padding: 15px 10px;
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
