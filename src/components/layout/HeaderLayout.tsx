"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthUtil } from "@/utils/auth";
const HeaderLayout = ({
  children,
  backButton = false,
}: {
  children?: React.ReactNode;
  backButton: boolean;
}) => {
  const router = useRouter();
  const handleBack = () => router.back();

  const logout = () => {
    AuthUtil.logout();
    router.push("/");
  };

  return (
    <div className="header_layout">
      <div onClick={logout}>로그아웃</div>

      {backButton && (
        <button className="back_button" onClick={handleBack}>
          <Image src="/icon/backIcon.svg" alt="back" width={30} height={30} />
        </button>
      )}
      {children}
    </div>
  );
};

export default HeaderLayout;
