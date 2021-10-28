import React, { useState, useEffect } from "react";
import "../Components/NewDash.css";
import Logo from "./dash/logo";
import MarketMaterials from "./dash/market";
import ContentCreation from "./dash/contentCreation";
import DigitalAds from "./dash/digiAds";
import CustomGraphics from "./dash/customGraphinc";
import MotionGraphics from "./dash/motion";
import WebsiteDevelopment from "./dash/webDev";
import MobileApp from "./dash/mobileApp";

function NewDash() {
  const [id,setState] = useState("");
  useEffect(() => {
    setState("1");
  }, []);
  return (
  <>
    <div className="NewDash ">
      <div className="NewDash-Left">
      <div className="NewDash-text">
          <h3 className="NewDash-btn">
          <button className="btn-new color-text" onClick={()=>setState("1")}>
            Logo
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn-new color-text" onClick={()=>setState("2")}>
            Market Materials
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn-new color-text" onClick={()=>setState("3")}>
            Content Creation
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn-new color-text" onClick={()=>setState("4")}>
            Digital Ads
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn-new color-text" onClick={()=>setState("5")}>
            Custom Graphics
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn-new color-text" onClick={()=>setState("6")}>
            Motion Graphics
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn-new color-text" onClick={()=>setState("7")}>
            Website Development
          </button>
          </h3>
          <h3 className="NewDash-btn">
          <button className="btn-new color-text" onClick={()=>setState("8")}>
            Mobile App
          </button>
          </h3>
        </div>
      </div>
      <div className="NewDash-Right">
      {id === "1" && <Logo/> }
      {id === "2" && <MarketMaterials/> }
      {id === "3" && <ContentCreation/> }
      {id === "4" && <DigitalAds/> }
      {id === "5" && <CustomGraphics/> }
      {id === "6" && <MotionGraphics/> }
      {id === "7" && <WebsiteDevelopment/> }
      {id === "8" && <MobileApp/> }
      </div>
    </div></>
  );
};

export default NewDash;
