import React, { useState, useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

let faqs =[
    {
        id: 1,
        question: "What is the difference between a website and a website template?",
        subtitle: "Pricing",
        answer: `A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>`,
        open: true
    },
    {
        id: 2,
        question: "What is the difference between a website and a website template?",
        subtitle: "Pricing",
        answer: "A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>",
        open: false
    },
    {
        id: 3,
        question: "What is the difference between a website and a website template?",
        subtitle: "Pricing",
        answer: "A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>",
        open: false
    },
]

const FAQ = () => {
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
  
    const [faq, setFaqs] = useState("");
    const toggleFAQ = (e) => {
        let id = e;
        let faq = faqs[id-1];
        faq.open = !faq.open;
        setFaqs(faq.open);
    }
    return (
    <><div className="faq fadeIn" ref={sectionRef}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="faq-title">
                        <h1>FAQ</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="faq-content">
                        <div className="panel-group" data-aos="fade-up" id="accordion1">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <div>
                                            {faqs[0].question}
                                        </div>
                                    </h4>
                                    <div data-toggle="#collapse1" data-id="1" data-parent="#accordion1" onClick={()=>toggleFAQ(faqs[0].id)}>+</div>
                                </div>
                            </div>  
                            <div id="collapse1" className={(faq ? "panel-collapse in" : "panel-collapse collapse in")}>
                                <div className="panel-body">
                                    <div className="panel-body-head">
                                        <h5>{faqs[0].subtitle}</h5> 
                                        <hr/>
                                    </div>
                                    <p>{faqs[0].answer}</p>
                                </div>
                            </div>
                        </div>
                        <div className="panel-group" data-aos="fade-up" id="accordion1">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <div>
                                            {faqs[1].question}
                                        </div>
                                    </h4>
                                    <div data-toggle="#collapse1" data-id="1" data-parent="#accordion1" onClick={()=>toggleFAQ(faqs[1].id)}>+</div>
                                </div>
                            </div>  
                            <div id="collapse1" className={(faqs[1].open ? "panel-collapse in" : "panel-collapse collapse in")}>
                                <div className="panel-body">
                                    <div className="panel-body-head">
                                        <h5>{faqs[1].subtitle}</h5> 
                                        <hr/>
                                    </div>
                                    <p>{faqs[1].answer}</p>
                                </div>
                            </div>
                        </div>
                        <div className="panel-group" data-aos="fade-up" id="accordion1">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <div>
                                            {faqs[2].question}
                                        </div>
                                    </h4>
                                    <div data-toggle="#collapse1" data-id="1" data-parent="#accordion1" onClick={()=>toggleFAQ(faqs[2].id)}>+</div>
                                </div>
                            </div>  
                            <div id="collapse1" className={(faqs[2].open ? "panel-collapse in" : "panel-collapse collapse in")}>
                                <div className="panel-body">
                                    <div className="panel-body-head">
                                        <h5>{faqs[2].subtitle}</h5> 
                                        <hr/>
                                    </div>
                                    <p>{faqs[2].answer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    );
};

export default FAQ;
