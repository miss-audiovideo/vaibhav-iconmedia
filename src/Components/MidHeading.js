import React from "react";
import robo from "./images/robo-2.gif"

const MidHeading = () => {
    return (
        <>
            <div className="robo-set-2">
                <div className="mid-heading-text">
                    <div>Designs that make a difference</div>
                </div>
                <img src={robo} alt="robo" className="robo2"/>
            </div>
            <style jsx>{`
            .robo-set-2{
                padding: 10% 10%;
                height: 40vw;
                position: relative;
            }
            .mid-heading-text {
                border-radius: 10px;
                border: 3px solid #fff;
            }

            .mid-heading-text div {
                font-family: "futuramedium";
                text-transform: uppercase;
                color: #ffc857 !important;
                font-size: 3vw;
                padding: 8vw 45.5vw 8vw 4vw;
            }
            .robo2 {
                position: absolute;
                top: -5vw;
                right: 10vw;
                width: auto;
                height: 54vw;
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