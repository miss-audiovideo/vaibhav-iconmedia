import React from "react";


function FAQ({faq, index, toggleFAQ}) {
    return (
    <>
        <div className="panel-group" id="accordion">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <div>{faq.ques}</div>
                    </h4>
                    <a data-toggle="#collapse" data-parent="#accordion" onClick={()=>toggleFAQ(index)}>+</a>
                </div>
            </div>  
            <div id="collapse" className={"panel-collapse in" + (faq.open ? " collapse" : " ")}>
                <div className="panel-body">
                    <div className="panel-body-head">
                        <h5>{faq.subtitle}</h5> 
                        <hr/>
                    </div>
                    <p>{faq.answer}</p>
                </div>
            </div>
        </div>
    </>
    );
};

export default FAQ;
