import React from "react";

const STYLES = ["btn--outline", "btn--white"];
const SIZES = ["btn--normal", "btn--medium"];
const Buttons = ({ children, type, onClick, btnStyle, btnSize }) => {
  const checkButtonStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      <style jsx>{`
        .btn {
          display: block;
          margin: auto;
          border-radius: 1px;
          text-align: center;
          letter-spacing: 0.1em;
          border: none;
          font-family: inherit;
          cursor: pointer;
        }
        .btn--outline {
          background-color: transparent;
          border: 2px solid #ffe462;
          border-radius: 4px;
          margin: 0 auto;
          color: #ffe462;
        }
        .btn--white {
          background-color: transparent;
          border: 2px solid #fff;
          border-radius: 4px;
          margin: 0 auto;
          color: #fff;
        }
        .btn--normal {
          width: 115px;
          padding: 6px 0;
          height: 40px;
          font-size: 18px;
        }
        .btn--medium {
          width: 200px;
          height: 40px;
          font-size: 18px;
        }
        .btn--wide {
          width: 200px;
          height: 40px;
          font-size: 18px;
        }
        }
      `}</style>
    </>
  );
};

export default Buttons;
