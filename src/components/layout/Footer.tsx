"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Footer = () => {
  const pathname = usePathname();

  const checkActive = (path: string) => {
    return pathname === path ? "active" : "";
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
