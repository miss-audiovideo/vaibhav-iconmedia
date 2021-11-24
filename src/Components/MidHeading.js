import React, { useRef } from "react";
import { useIntersection } from "react-use";
import robo from "./images/robo-2.gif";
import gsap from "gsap";

const MidHeading = () => {
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
    <>
      <div ref={sectionRef} className="robo-set-2">
        <div className="mid-heading-text">
          <div className="fadeIn">
            Designs that <br />
            <label className="mid-heading-span" data-text="make a difference.">
              make a difference.
            </label>
          </div>
        </div>
        <img src={robo} alt="robo" className="robo2 fadeIn" />
      </div>
    </>
  );
};

export default MidHeading;
