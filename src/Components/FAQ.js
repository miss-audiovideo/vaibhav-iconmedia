// import React, { useState } from "react";
// let faqs ={
//     one: {
//         question: "What is the difference between a website and a website template?",
//         subtitle: "Pricing",
//         answer: "A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>"
//     },
//     two: {
//         question: "What is the difference between a website and a website template?",
//         subtitle: "Pricing",
//         answer: "A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>"
//     },
//     three: {
//         question: "What is the difference between a website and a website template?",
//         subtitle: "Pricing",
//         answer: "A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>"
//     },
// }

// const FAQ = () => {
//     // faq button function
//     // const [faq, setFaq] = useState(false);
    

//     // const [addClass, setState] = useState("");
    
//     // const toggle = (e) => {
//     //     setState({ addClass: !addClass });
//     //     console.log(e.target.dataset.id)
//     //     if(e.target.dataset.id === "1") {}
            
//     // };
//     // let boxClass = ["panel-collapse collapse in"];
//     // if (addClass) {
//     //     boxClass.pop("collapse");
//     // }
//     return (
//     <>
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="faq-title">
//                         <h1>FAQ</h1>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="faq-content">
//                         <div className="panel-group" id="accordion1">
//                             <div className="panel panel-default">
//                                 <div className="panel-heading">
//                                     <h4 className="panel-title">
//                                         <div>
//                                             {faqs[0].name}
//                                         </div>
//                                     </h4>
//                                     <a data-toggle="#collapse1" data-id="1" data-parent="#accordion1" onClick={toggle.bind(this)} href="#collapse1">+</a>
//                                 </div>
//                             </div>  
//                             <div id="collapse1" className={boxClass.join(" ")}>
//                                 <div className="panel-body">
//                                     <div className="panel-body-head">
//                                         <h5>Pricing</h5> 
//                                         <hr/>
//                                     </div>
//                                     <p>
//                                         A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>  A website template is a pre-made website that you can use to create your own website. A website is a collection of web pages that are linked together.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="panel-group" id="accordion2">
//                             <div className="panel panel-default">
//                                 <div className="panel-heading">
//                                     <h4 className="panel-title">
//                                         <div>
//                                             What is the difference between a website and a website template?
//                                         </div>
//                                     </h4>
//                                     <a data-toggle="#collapse2" data-id="2" data-parent="#accordion2" onClick={toggle.bind(this)} href="#collapse1">+</a>
//                                 </div>
//                             </div>  
//                             <div id="collapse2" className={boxClass.join(" ")}>
//                                 <div className="panel-body">
//                                     <div className="panel-body-head">
//                                         <h5>Pricing</h5> 
//                                         <hr/>
//                                     </div>
//                                     <p>
//                                         A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>  A website template is a pre-made website that you can use to create your own website. A website is a collection of web pages that are linked together.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="panel-group" id="accordion3">
//                             <div className="panel panel-default">
//                                 <div className="panel-heading">
//                                     <h4 className="panel-title">
//                                         <div>
//                                             What is the difference between a website and a website template?
//                                         </div>
//                                     </h4>
//                                     <a data-toggle="#collapse3" data-id="3" data-parent="#accordion3" onClick={toggle.bind(this)} href="#collapse1">+</a>
//                                 </div>
//                             </div>  
//                             <div id="collapse3" className={boxClass.join(" ")}>
//                                 <div className="panel-body">
//                                     <div className="panel-body-head">
//                                         <h5>Pricing</h5> 
//                                         <hr/>
//                                     </div>
//                                     <p>
//                                         A website template is a pre-made website that you can use to create your own website. <span>A website is a collection of web pages that are linked together.</span>  A website template is a pre-made website that you can use to create your own website. A website is a collection of web pages that are linked together.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//     );
// };

// export default FAQ;
