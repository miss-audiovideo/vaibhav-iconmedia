import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";


const Design = () => {
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
    <div ref={sectionRef} className="D-container fadeIn">
      <div className="D-left"></div>
      <div className="D-right">
        <h1>great design</h1>
        <h3>get you noticed.</h3>
        <h1>it's that simple</h1>
      </div>
    </div>
  );
};

export default Design;
