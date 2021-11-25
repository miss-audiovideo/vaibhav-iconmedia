import React, { useRef } from "react";
import twelve from "./images/twelve.jpg";
import { useIntersection } from "react-use";
import gsap from "gsap";

const FirstPage = () => {
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
      <div ref={sectionRef}
        className="container-fluid my-lg-5 py-lg-5 top-mrgn fp fadeIn"
      >
        <div className="row mt-lg-5 pt-lg-5">
          <div className="col-md-10 mx-auto">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 col-12 order-lg-1 order-2 first_div">
                <p
                  data-aos="fade-left"
                  className="firstpage heading_Para animate__animated animate__backInDown"
                >
                  What we do ?
                </p>
                <h1
                  data-aos="fade-right"
                  className="firstpage heading_Content animate__animated animate__backInUp"
                >
                  Do you need help with <br />
                  your graphic design ?
                </h1>
                <button className="firstpage-bt btn btn-outline-warning px-3 mt-3 animate__animated animate__pulse animate__delay-2s animate__slower animate__infinite">
                  Get in Touch
                </button>
              </div>
              <div className="col-md-6 col-12 order-lg-2 order-1 mx-auto">
                <img
                  className="img-fluid container-img mx-auto"
                  src={twelve}
                  alt="main_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          
        `}
      </style>
    </>
  );
};

export default FirstPage;
