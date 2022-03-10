import React from "react";
import "./Button.css";

const Button = ({ content }) => {
  return (
    <button className="Button" type="button">
      {content}
    </button>
  );
};

export default Button;
