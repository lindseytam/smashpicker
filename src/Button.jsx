import React from "react";

import COLORS from "./constants";

function Button(props) {
  const { textColor, backgroundColor, className } = props;

  return (
    <a
      className={`${className} button parallelogram`}
      style={{ backgroundColor: COLORS[backgroundColor] }}
      href="#"
    >
      <span className="skew-fix" style={{ color: COLORS[textColor] }}>
        {props.children}
      </span>
    </a>
  );
}

export default Button;
