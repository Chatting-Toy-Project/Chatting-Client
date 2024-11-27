"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
const HeaderLayout = ({
  children,
  backButton = false,
}: {
  children?: React.ReactNode;
  backButton: boolean;
}) => {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="header_layout">
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
