import React from "react";
import Logo from "./images/homeLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
                <td className="iconText">
                  We are a team of creatives who are
                  <br />
                  thrilled to create, ignite and succeed your
                  <br />
                  business with all the things digital.
                </td>
              </tr>
              <tr className="textYellow">Email</tr>
              <tr className="">priya@iconmediahouse.com</tr>
              <tr className="textYellow">Contact</tr>
              <tr>+1647-627-2546</tr>
            </table>
            <div className="quickLinks">
              <ul>
                <li className="heading txsi">Quick Links</li>
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
        <div className="container copy-social text-light">
          <small>
            {" "}
            &#169; 2021,Icon Media House. Made &#10084; with in Toronto.
          </small>
          <small >
            {" "}
            Follow us on:
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
            
          </small>
        </div>
      </div>
      <style jsx>{`
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
          display: grid;
          grid-template-columns: auto auto;
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
