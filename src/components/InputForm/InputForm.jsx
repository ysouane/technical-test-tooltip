import React from "react";
import "./InputForm.css";

const InputForm = ({ content, inputType }) => {
  return (
    <label htmlFor={content} className="InputForm__Label">
      <span className="InputForm__Label__Content">{content}</span>
      <input id={content} className="InputForm__Input" type={inputType} />
    </label>
  );
};

export default InputForm;
