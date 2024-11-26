"use client";
import Link from "next/link";

import React from "react";

const Footer = () => {
  const checkActive = (path: string) => {
    const location = window.location.pathname;
    return location === path ? "active" : "";
  };
  return (
    <div className="footer_layout">
      <Link className={checkActive("/friends")} href="/friends">
        친구
      </Link>
      <Link className={checkActive("/chatlists")} href="/chatlists">
        채팅
      </Link>
    </div>
  );
};

export default Footer;
