import React, { useState, useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import car from "../Components/images/dhoom.jpg";
import cartwo from "../Components/images/dhoom machale.jpg";
import audi from "../Components/images/audi.jpeg";
import landrover from "../Components/images/landrover.jpeg";
import harrier from "../Components/images/harrier.jpg";
import buggati from "../Components/images/buggati.webp";

const NewDash = () => {
  const [img, setImg] = useState(car);
  
  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "-280px",
    threshold: 0.2
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
  
  return (
    <div ref={sectionRef} className="dash-container fadeIn">
      <div className="dash-top">
        <img className="dash-img" src={img} alt="" />
      </div>
      <div className="dash-bottom">
        <h1>HOW WE CREATE</h1>
        <div className="dash-buttons">
          <button className="One" onClick={(e) => setImg(cartwo)}>
            DISCOVER
          </button>
          <button className="Two" onClick={(e) => setImg(landrover)}>
            STRATEZIZE
          </button>
          <button className="Three" onClick={(e) => setImg(audi)}>
            CREATE
          </button>
          <button className="Four" onClick={(e) => setImg(harrier)}>
            FEEDBACK
          </button>
          <button className="Five" onClick={(e) => setImg(buggati)}>
            GROWTH
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDash;
