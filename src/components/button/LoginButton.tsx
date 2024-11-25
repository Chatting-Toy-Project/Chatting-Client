import React from "react";
import "../style.scss";
const LoginButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="login_button" {...props}>
      {props.children}
    </button>
  );
};

export default LoginButton;
