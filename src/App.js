import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import Navbar from "./Components/Navbar";
import HeadingContent from "./Components/HeadingContent";
import Heading from "./Components/Heading";
import MidHeading from "./Components/MidHeading";
// import HeadingParagraph from "./Components/HeadingParagraph";
import MainCard from "./Components/MainCard";
import FirstPage from "./Components/FirstPage";
import Brands from "./Components/Brands";
// import Profile from "./Components/Profile";
import SliderGallery from "./Components/SliderGallery";
import SliderGalleryReverse from "./Components/SliderGalleryReverse";
import Testimonial from "./Components/Testimonial";
import Testimonial2 from "./Components/Testimonial2";
import Design from "./Components/design";
// import Dashboard from "./Components/Dashboard";
import NewDash from "./Components/NewDash";
import DesignTwo from "./Components/designTwo";
// import NewDash2 from "./Components/NewDash2";
import Quote from "./Components/Quote";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Icon from "./Components/Icon";
import ThreeSixty from "./Components/360";
import FAQ from "./Components/FAQ";
import "animate.css";
// import Imageslider from "./Components/ImageSlider";
import Audio from "./Components/Audio";

// TODO

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            {/* <HeadingContent
              data-aos="fade-left"
              class="text-center text-capitalize display-2 w-50 mx-auto headingContent  animate__animated animate__fadeInUp"
            > */}
            {/* <span className="heading-contentOne">GET THE</span>
              <span className="heading-contentTwo"> ATTENTION</span>
              <br /> */}
            {/* <span className="heading-contentOnes">DESIGN THE</span>
              <span className="heading-contentThree"> FUTURE</span> */}
            {/* </HeadingContent> */}
            {/* <MainCard data-aos="fade-left" /> */}
            {/* <HeadingContent class="text-center text-capitalize display-2 w-50 mx-auto headingContent  animate__animated animate__fadeInUp">
              <span className="heading-contentOnes">DESIGN THE</span>
              <span className="heading-contentThree"> FUTURE</span>
            </HeadingContent> */}
            <Heading />
            <MainCard data-aos="fade-left" />
            <MidHeading />

            <FirstPage />
            <Brands />
            {/* <Profile /> */}
            {/* <HeadingContent class="head-style text-center text-capitalize display-3 w-50 mt-lg-6  mx-auto headingContent gallery"> */}
            <HeadingContent class="head-style text-center text-capitalize display-3 w-50 mt-lg-4  headingContent gallery"></HeadingContent>
            <SliderGallery />
            <SliderGalleryReverse />
            {/* <Imageslider /> */}
            {/* <HeadingContent class="text-center text-capitalize display-3 w-lg-50 w-100 mx-auto slider-reverse-position">
            </HeadingContent> */}
            {/* <Dashboard /> */}
            <Design />
            <NewDash />
            <DesignTwo />
            <Icon />
            <ThreeSixty />
            {/* <NewDash2 /> */}
            {/* <Imageslider /> */}
          <Testimonial2 />
          <FAQ />
            {/* <Testimonial /> */}
            <Quote />
            <Footer />
          </Route>

          <Route exact path="/about">
            <FirstPage />
            <Brands />
            <Footer />
          </Route>

          <Route
            exact
            path="/gallery"
            component={
              <div className="fluid-container mb-3">
                <SliderGallery />
                <SliderGalleryReverse />
                <Footer className="mt-3" />
              </div>
            }
          ></Route>
          <Route exact path="/get-in-touch">
            <Contact />
          </Route>
          <Route exact path="/test">
            <FAQ />
          </Route>
        </Switch>
        <Audio />
      </Router>
    </>
  );
};

export default App;
