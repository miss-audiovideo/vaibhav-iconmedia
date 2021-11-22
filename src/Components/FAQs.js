import React, { useState } from "react";
import FAQ from "./FAQ";

const FAQs = () => {
    const[faqs, setfaqs]= useState([
        {
            ques: 'What is the difference between a website and a website template?',
            subtitle: "Pricing",
            answer: "A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>",
            open: true
        },
        {
            ques: 'What is the difference between a website and a website template?',
            subtitle: "Pricing",
            answer: "A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>",
            open: false
        },
        {
            ques: 'What is the difference between a website and a website template?',
            subtitle: "Pricing",
            answer: "A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>",
            open: false
        },
    ]);
    
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if(i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }));
    }
    return (
    <>
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
                        {faqs.map((faq, i) => {
                            <FAQ src={faq} index={i} toggleFAQ={toggleFAQ}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default FAQs;
