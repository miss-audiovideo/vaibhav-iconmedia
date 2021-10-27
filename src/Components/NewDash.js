import React from "react";
import "../Components/NewDash.css";
import one from "../Components/images/girl.jpg";
const NewDash = () => {
  return (
    <div className="NewDash ">
      <div className="NewDash-Left">
        <div className="NewDash-frame">
          <img
            className="NewDash-img"
            src={one}
            alt=""
            width="200px"
            height="200px"
          />
          <img
            className="NewDash-img"
            src={one}
            alt=""
            width="200px"
            height="200px"
          />
          <img
            className="NewDash-img"
            src={one}
            alt=""
            width="200px"
            height="200px"
          />
          <img
            className="NewDash-img"
            src={one}
            alt=""
            width="200px"
            height="200px"
          />
          <img
            className="NewDash-img"
            src={one}
            alt=""
            width="200px"
            height="200px"
          />
          <img
            className="NewDash-img"
            src={one}
            alt=""
            width="200px"
            height="200px"
          />
        </div>
      </div>
      <div className="NewDash-Right">
        <div className="NewDash-text">
          <h1 className="NewDash-texting">
            Hello Mr.Bean Lorem ipsum
            <br />
            Hello Tejas
          </h1>
          <h1 className="NewDash-texting">
            Hello Mr.Bean Lorem ipsum
            <br />
            Hello Tejas
          </h1>
          <h1 className="NewDash-texting">
            Hello Mr.Bean Lorem ipsum
            <br />
            Hello Tejas
          </h1>
        </div>
        {/* <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, reprehenderit.
        </h1> */}
      </div>
    </div>
  );
};

export default NewDash;
