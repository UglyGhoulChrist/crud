import React from "react";
import "./Button.scss";
import clsx from "clsx";

function Button(props) {
  return (
    <button className={clsx("button", props.classMod)}>{props.children}</button>
  );
}
export default Button;
