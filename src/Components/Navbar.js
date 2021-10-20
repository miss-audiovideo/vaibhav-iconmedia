import React from "react";
import homeLogo from "./images/homeLogo.png";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-lg-4">
        <div className="container-fluid">
          <Link className="navbar-brand mt-2 ms-5" to="/">
            <img src={homeLogo} width="120px" alt="Main_logo" />
          </Link>
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
                <Link to="/gallery" className="nav-link pe-lg-5 nav-style" href="#">
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
    </>
  );
};

export default Navbar;
