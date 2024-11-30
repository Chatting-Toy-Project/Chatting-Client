import React from "react";
import "../style.scss";
import Image from "next/image";
const LoginButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const color = props.color || "primary";

  if (color === "kakao") {
    return (
      <button className={`login_button ${color}`} {...props}>
        <Image width={18} height={18} src="/icon/kakao.png" alt="kakao" />
        {props.children}
      </button>
    );
  }

  return (
    <button className={`login_button ${color}`} {...props}>
      {props.children}
    </button>
  );
};

export default LoginButton;
