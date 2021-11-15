// import React, { useState, useEffect } from "react";
// import one from "../Components/images/icons/ads.png";
// import two from "../Components/images/icons/app.png";
// import three from "../Components/images/icons/content.png";
// import four from "../Components/images/icons/graphic.png";
// import five from "../Components/images/icons/logo.png";
// import six from "../Components/images/icons/motion.png";
// import seven from "../Components/images/icons/store.png";
// import eight from "../Components/images/icons/web.png";
// import video from  "../Components/images/gallary/14.jpg";
// import Logo from "./dash/logo";
// import MarketMaterials from "./dash/market";
// import ContentCreation from "./dash/contentCreation";
// import DigitalAds from "./dash/digiAds";
// import CustomGraphics from "./dash/customGraphinc";
// import MotionGraphics from "./dash/motion";
// import WebsiteDevelopment from "./dash/webDev";
// import MobileApp from "./dash/mobileApp";
// import "./NewDash.css"

// function NewDash() {
//   const [id,setState] = useState("");
//   useEffect(() => {
//     setState("1");
//   }, []);
//   return (
//   <>
//     <div className="NewDash "><div className="dashcard">
//     <div className="NewDash-Video">
//       <img
//             className="NewDash-img"
//             src={video}
//             alt=""
//             width="250px"
//             height="250px"
//           />
//       </div>
//       <div className="NewDash-Left">
//       <div className="NewDash-text">
//           <h3 className="NewDash-btn">
//           <button className="btn-new color-text" onClick={()=>setState("1")}>
//           <img className="btn-icon" src={five} />
//           </button>
//           </h3>
//           <h3 className="NewDash-btn">
//           <button className="btn-new color-text" onClick={()=>setState("2")}>
//           <img className="btn-icon" src={seven} />
//           </button>
//           </h3>
//           <h3 className="NewDash-btn">
//           <button className="btn-new color-text" onClick={()=>setState("3")}>
//           <img className="btn-icon" src={three} />
//           </button>
//           </h3>
//           <h3 className="NewDash-btn">
//           <button className="btn-new color-text" onClick={()=>setState("4")}>
//             <img className="btn-icon" src={one} />
//           </button>
//           </h3>
//           <h3 className="NewDash-btn">
//           <button className="btn-new color-text" onClick={()=>setState("5")}>
//           <img className="btn-icon" src={four} />
//           </button>
//           </h3>
//           <h3 className="NewDash-btn">
//           <button className="btn-new color-text" onClick={()=>setState("6")}>
//           <img className="btn-icon" src={six} />
//           </button>
//           </h3>
//           <h3 className="NewDash-btn">
//           <button className="btn-new color-text" onClick={()=>setState("7")}>
//           <img className="btn-icon" src={eight} />
//           </button>
//           </h3>
//           <h3 className="NewDash-btn">
//           <button className="btn-new color-text" onClick={()=>setState("8")}>
//           <img className="btn-icon" src={two} />
//           </button>
//           </h3>
//         </div>
//       </div>
//       <div className="NewDash-Right">
//       {id === "1" && <Logo/> }
//       {id === "2" && <MarketMaterials/> }
//       {id === "3" && <ContentCreation/> }
//       {id === "4" && <DigitalAds/> }
//       {id === "5" && <CustomGraphics/> }
//       {id === "6" && <MotionGraphics/> }
//       {id === "7" && <WebsiteDevelopment/> }
//       {id === "8" && <MobileApp/> }
//       </div>

//       </div>
//     </div></>
//   );
// };

// export default NewDash;

// ANCHOR

import React, { useState, useEffect } from "react";
import "./NewDash.css";
import car from "../Components/images/dhoom.jpg";
import cartwo from "../Components/images/dhoom machale.jpg";
import audi from "../Components/images/audi.jpeg";
import landrover from "../Components/images/landrover.jpeg";
import harrier from "../Components/images/harrier.jpg";
import buggati from "../Components/images/buggati.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const NewDash = () => {
  const [img, setImg] = useState(car);
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    });
  });
  return (
    <div data-aos="fade-left" className="dash-container">
      <div className="dash-top">
        <img className="dash-img" src={img} alt="" />
      </div>
      <div className="dash-bottom">
        <h1>HOW WE CREATE</h1>
        <div className="dash-buttons">
          <button className="One" onClick={(e) => setImg(cartwo)}>
            DISCOVER
          </button>
          <button className="Two" onClick={(e) => setImg(landrover)}>
            STRATEZIZE
          </button>
          <button className="Three" onClick={(e) => setImg(audi)}>
            CREATE
          </button>
          <button className="Four" onClick={(e) => setImg(harrier)}>
            FEEDBACK
          </button>
          <button className="Five" onClick={(e) => setImg(buggati)}>
            GROWTH
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDash;
