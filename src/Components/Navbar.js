import React from "react";
import homeLogo from "./images/homeLogo.png";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <Router>

      <nav className="navbar navbar-expand-lg pt-lg-4">
        <div className="container-fluid">
          <a className="navbar-brand mt-2 ms-5" href="#">
            <img src={homeLogo} width="120px" alt="Main_logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-lg-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active pe-lg-5 nav-style"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./gallery" className="nav-link pe-lg-5 nav-style" href="#">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/get-in-touch">
                  <button className="btn btn-outline-warning px-lg-3">
                    Get in touch
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router> */}

      <BrowserRouter>

        <nav style={{ backgroundColor: '#2b0405' }} className="navbar navbar-expand-lg navbar-dark ">
          <div className="container ">
            <Link to="/" className="navbar-brand" h> <img className="text-white" width="100px" height="30px" src={homeLogo} alt="" srcset="" /> </Link>
            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon text-white font-"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end text-center " id="navbarNavDropdown">
              <ul className="navbar-nav text-white">
                <li className="nav-item">
                  <Link to="about" className="nav-link text-white mt-2"  >About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-link text-white mt-2"  >Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link to="/get-in-touch" className="nav-link"  ><button className="btn btn-outline-warning">Get In Touch</button></Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
