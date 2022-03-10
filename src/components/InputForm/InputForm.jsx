import React from "react";
import "./InputForm.css";

const InputForm = ({ content }) => {
  return (
    <label className="InputLabel">
      <strong>{content}</strong>
      <input className="InputForm" type="text" />
    </label>
  );
};

export default InputForm;
