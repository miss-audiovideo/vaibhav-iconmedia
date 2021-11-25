import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";


const Design = () => {
  const roboRef = useRef(null);
  const textRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(roboRef, {
    root: null,
    rootMargin: "0px",
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
    <div className="D-container">
      <div ref={roboRef} className="D-left fadeIn"></div>
      <div ref={textRef} className="D-right fadeIn">
        <h1>great design</h1>
        <h3 >get you noticed.</h3>
        <h1>it's that simple</h1>
      </div>
    </div>
  );
};

export default Design;
