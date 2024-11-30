import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="login_header_component">
      <Image width={150} height={150} alt="logo" src="/images/logo.png" />
    </div>
  );
};

export default Logo;
