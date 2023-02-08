import React from "react";

const Button = ({ props }) => {
  return (
    <button
      className={props.children.className}
      type={props.children.type || "button"}
    >
      {props.children.text}
    </button>
  );
};

export default Button;
