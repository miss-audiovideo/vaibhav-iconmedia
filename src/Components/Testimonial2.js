import React, { useEffect } from "react";
import imgOne from "../Components/images/userone.png";
import imgTwo from "../Components/images/usertwo.png";
import imgThree from "../Components/images/userthree.png";
import AOS from "aos";
import "aos/dist/aos.css";
// import testimonial from "../Components/images/Testimonials BG.png";

function Testimonial2() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 2000,
      easing: "ease-in-out",
      delay: 200,
    });
  });
  return (
    <>
    <div data-aos="fade-in" className="testimonials-new">
      <h1>See What Our clinets have to say about us</h1>
        <div className="slider">
          <div className="slide-track">
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
            <div className="test-card">
              <p>
                lemony is a very good website. I have used it for my
                business. I am very happy with the service.
              </p>
              <h3>Paul Jansen</h3>
              <div className="test-work"><h6>CEO</h6><span>|</span><h5>Zolt energy drink</h5></div>
              <div className="test-stars"><i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i></div>
              <div className="clinet-img">
                <img src={imgOne} alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slider {
            // background-color: transparent;
          }
          .test-card {
            margin-left: 10px;
            margin-right: 10px;
            border-radius: 20px 20px 20px 20px;
          }
        `}
      </style>
    </>
  );
}

export default Testimonial2;
