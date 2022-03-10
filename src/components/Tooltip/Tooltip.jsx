import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({
  children,
  isActive,
  content,
  position,
  minWidth,
  minHeight,
  maxWidht,
  maxHeight,
  wrap,
}) => {
  const [isHover, setIsHover] = useState(false);

  let timeout;

  const handleMouseOver = () => {
    console.log("onMouseOver");
    timeout = setTimeout(() => {
      setIsHover(true);
    }, 300);
  };

  const handleMouseOut = () => {
    console.log("onMouseOut");
    clearTimeout(timeout);
    setTimeout(() => {
      setIsHover(false);
    }, 300);
  };

  const handleFocus = () => {
    // console.log("onFocus");
  };

  const handleBlur = () => {
    // console.log("onBlur");
  };

  return (
    <div
      className="Tooltip"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}>
      {children}
      {isActive && (
        <div
          className={`Tooltip__Content ${position} ${isHover ? "isHover" : ""}`}
          style={{
            minWidth: `${minWidth}`,
            minHeight: `${minHeight}`,
            maxWidth: `${maxWidht}`,
            maxHeight: `${maxHeight}`,
            whiteSpace: `${wrap ? "normal" : "nowrap"}`,
          }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
