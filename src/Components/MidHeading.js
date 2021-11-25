import React, { useRef } from "react";
import robo from "./images/robo-2.gif";
import { useIntersection } from "react-use";
import gsap from "gsap";

const MidHeading = () => {
  const roboRef = useRef(null);
  const textRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(roboRef, {
    root: null,
    rootMargin: "-280px",
    threshold: 0.2
  });
  const intersection2 = useIntersection(textRef, {
    root: null,
    rootMargin: "-180px",
    threshold: 0.2
  });

  // Animation for fading in
  const fadeIn = el => {gsap.to(el, .8, {opacity: 1,y: -60,ease: "expo.out",}, 0.2); };
  // Animation for fading out
  const fadeOut = el => { gsap.to(el, .8, {opacity: 0, x: -20, ease: "expo.out",}, 0.2); };

  // checking to see when the vieport is visible to the user
  intersection && intersection2 && intersection2.intersectionRatio && intersection.intersectionRatio < 0.2
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
    
  return (
    <>
      <div className="robo-set-2">
        <div className="mid-heading-text">
          <div ref={textRef} className="fadeIn">
            Designs that <br />
            <label className="mid-heading-span" data-text="make a difference.">
              make a difference.
            </label>
          </div>
        </div>
        <img src={robo} alt="robo" ref={roboRef} className="robo2 fadeIn" />
      </div>
    </>
  );
};

export default MidHeading;
