import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeadingContent from "./Components/HeadingContent";
import HeadingParagraph from ".//Components/HeadingParagraph";
import MainCard from "./Components/MainCard";
import FirstPage from "./Components/FirstPage";
import Brands from "./Components/Brands";
import Profile from "./Components/Profile";
import SliderGallery from "./Components/SliderGallery"
import SliderGalleryReverse from "./Components/SliderGalleryReverse";
import Testimonial from "./Components/Testimonial";
import Dashboard from "./Components/Dashboard";
import Quote from "./Components/Quote";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/vaibhav-iconmedia">
            <HeadingContent class="text-center text-capitalize display-2 w-50 mx-auto headingContent">
              Get the attention your brand deserves
            </HeadingContent>
            <HeadingParagraph class="mt-3 mx-auto text-center text-capitalize headingPara">
              Get quality design without the cost & complexity
            </HeadingParagraph>
            <MainCard />
            <FirstPage />
            <Brands />
            <Profile />
            <HeadingContent class="text-center text-capitalize display-3 w-50 mt-lg-5  mx-auto headingContent gallery">
              Gallery
            </HeadingContent>
            <SliderGallery />
            <SliderGalleryReverse />
            {/* <HeadingContent class="text-center text-capitalize display-3 w-lg-50 w-100 mx-auto slider-reverse-position">
            </HeadingContent> */}
            <Dashboard />
            <Testimonial />
            <Quote />
            <Footer />
          </Route>

          <Route exact path="/about">
            <FirstPage />
            <Brands />
            <Footer />
          </Route>

          <Route exact path="/gallery">
            <div className="fluid-container mb-3">
              <SliderGallery />
              <SliderGalleryReverse />
            </div>
            <Footer className="mt-3" />
          </Route>

          <Route exact path="/get-in-touch">
            <Contact />
            <Testimonial />
            <Quote />
            <Footer />
          </Route>
          
        </Switch>
      </Router>
    </>
  );
};

export default App;
