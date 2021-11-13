import React from "react";
import robo from "./images/robo-2.gif"

const MidHeading = () => {
    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
            <div className="mid-heading">
                <div className="mid-heading-text">
                    <div>Designs that make a difference</div>
                </div>
                <img src={robo} alt="robo" className="robo2"/>
            </div>
            <style jsx>{`
            .mid-heading{
                padding: 10%;
                position: relative;
            }
                .mid-heading-text {
                    border-radius: 10px;
                    border: 3px solid #fff;
                    font-family: "futuramedium";
                    text-transform: uppercase;
                    color: #ffc857 !important;
                    font-size: 35pt;
                }

                .mid-heading-text div {
                    padding: 10% 59% 10% 5%;
                }
                .robo2 {
                    position: absolute;
                    top: 0px;
                    right: 150px;
                    width: auto;
                    height: 800px;
                }
            `}</style>
        </>
        // 
        //     <div className="luxury-heading">
        //         <div className="luxury">Luxury<span>of</span></div>
        //         <div className="design">Design</div>
        //     </div>
        //     <img src={robo} alt="robo" className="robo" />
        
        // </>
    );
};

export default MidHeading;
