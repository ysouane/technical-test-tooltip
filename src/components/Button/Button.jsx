import React from "react";
import "./Button.css";

const Button = ({ content, buttonType }) => {
  return (
    <button className="Button" type={buttonType}>
      {content}
    </button>
  );
};

export default Button;
