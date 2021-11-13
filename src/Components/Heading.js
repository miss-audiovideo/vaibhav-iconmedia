import React from "react";
import robo from "./images/Robo-1.gif"

const Heading = () => {
    return (
        <>
            <div className="luxury-heading">
                <div className="luxury">Luxury<span>of</span></div>
                <div className="design">Design</div>
            </div>
            <img src={robo} alt="robo" className="robo" />
            <style jsx>{`
            .luxury-heading{
                text-align: center;
            }
                .luxury {
                    position: relative;
                    font-family: "cinzeldecorativebold";
                    color: #eaeaf0 !important;
                    font-size: 100pt;
                    text-shadow: 0px 0px 13px #eaeaf025;
                }
                .luxury span {
                    font-family: "herculesitalic";
                    color: #fff !important;
                    font-size: 30pt;
                }

                .design {
                    position: absolute;
                    top: 200px;
                    left: 500px;
                    text-align: center;
                    font-family: "cinzelbold";
                    color: #ffc857 !important;
                    font-size: 100pt;
                    text-shadow: 0px 0px 13px #ffc85725;
                }
                .robo {
                    width: 735px;
                    position: absolute;
                    top: 160px;
                    left: 100px;
                    height: auto;
                    -webkit-transform: scaleX(-1);
                    transform: scaleX(-1);
                }
            `}</style>
        </>
    );
};

export default Heading;
