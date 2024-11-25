import React from "react";
import "../style.scss";
const LoginButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const color = props.color || "primary";

  return (
    <button className={`login_button ${color}`} {...props}>
      {props.children}
    </button>
  );
};

export default LoginButton;
