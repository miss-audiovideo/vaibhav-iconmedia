import React from "react";
import Logo from "./images/homeLogo.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";

function Footer() {
  return (
    <>
      {/* <div className="bg-dark"> */}

      <div className=" light text-light">
        <section className="container">
          <div className="contact">
            <table>
              <tr>
                <td>
                  <img src={Logo} style={{ height: "60px" }} alt="icon" />
                </td>
                <td className="iconText footer">
                  We are a team of creatives who are
                  <br />
                  thrilled to create, ignite and succeed your
                  <br />
                  business with all the things digital.
                </td>
              </tr>
              <tr className="footer textYellow">Email</tr>
              <tr className="footer">priya@iconmediahouse.com</tr>
              <tr className="footer textYellow">Contact</tr>
              <tr>+1647-627-2546</tr>
            </table>
            <div className="quickLinks">
              <ul>
                <li className=" footer heading txsi">Quick Links</li>
                <li>About</li>
                <li>Careers</li>
                <li>Make Payment</li>
                <li>Reach Us</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className=" copy-social-container ">
        <div className="footer container copy-social text-light">
          <small>
            {" "}
            &#169; 2021,Icon Media House. Made &#10084; with in Toronto.
          </small>
          <small className="footer text-end">
            Follow us on:
            <i class="facebook">
              <img src={facebook} alt="" width="37px" height="37px" />
            </i>
            <i class="instagram">
              <img src={instagram} alt="" width="45px" height="45px" />
            </i>
            <i class="instagram">
              <img src={linkedin} alt="" width="45px" height="45px" />
            </i>
            {/* <i class="fab fa-twitter">
              <img src={twitter} alt="" width="45px" height="45px" />
            </i> */}
          </small>
        </div>
      </div>
      <style jsx>{`
        // .fa-facebook,
        // .fa-instagram,
        // .fa-linkedin-in,
        // .fa-twitter {
        //   font-size: 1rem;
        //   padding: 0 10px;
        // }
        @font-face {
          font-family: futuramedium;
          src: url("./fonts/futura\ medium\ bt.ttf");
        }
        @font-face {
          font-family: futurabook;
          src: url("./fonts/Futura\ Book.ttf");
        }
        .footer{
          font-family:futuramedium;
        }
        .text-end {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .light {
          height: 300px;
          background-color: #333333;
          padding: 50px;
        }
        .copy-social-container {
          background-color: #191919;
        }
        .copy-social {
          height: 50px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          // padding: 0 50px 0 50px;
        }
        .iconText {
          font-size: 12px;
          font-weight: normal;
          border-left: 1px solid #ffe462;
          padding-left: 10px;
        }
        .textYellow {
          font-size: 25px;
          color: #ffe462;
        }
        .txsi {
          font-size: 25px;
        }
        .contact {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .contact ul {
          list-style-type: none;
          width: 200px;
        }
        .contact ul li {
          margin-bottom: 20px;
        }
        .heading {
          border-bottom: 1px solid #ffe462;
          color: #ffe462;
        }
        @media screen and (max-width: 800px) {
          .light {
            height: 500px;
            padding: 20px 20px 20px 20px;
          }
          .contact {
            display: flex;
            flex-direction: column;
          }
          .quickLinks {
            margin-top: 50px;
          }
          .contact ul {
            width: 100%;
            padding: 0;
          }
          @media screen and (max-width: 500px) {
           .facebook{
            width:15px;
            height:15px;
           }
           .instagram{
             width:15px;
             height:15px;
             flex-wrap:wrap;
           }
        }
      `}</style>
      {/* </div> */}
    </>
  );
}

export default Footer;
