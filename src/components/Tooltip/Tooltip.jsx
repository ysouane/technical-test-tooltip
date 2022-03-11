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

  const displayOrRemoveTooltip = (event) => {
    let { type } = event;

    if (type === "mouseover" || type === "focus") {
      timeout = setTimeout(() => {
        setIsHover(true);
      }, 300);
    }

    if (type === "mouseout" || type === "blur") {
      clearTimeout(timeout);
      setTimeout(() => {
        setIsHover(false);
      }, 300);
    }
  };

  return (
    <div
      className="Tooltip"
      onMouseOver={displayOrRemoveTooltip}
      onMouseOut={displayOrRemoveTooltip}
      onFocus={displayOrRemoveTooltip}
      onBlur={displayOrRemoveTooltip}>
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
