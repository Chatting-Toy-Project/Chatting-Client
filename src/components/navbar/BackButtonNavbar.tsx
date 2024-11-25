"use client";
import React from "react";
import "../style.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButtonNavbar = () => {
  const router = useRouter();
  const handleBack = () => router.back();
  return (
    <div className="back_button_navbar">
      <button onClick={handleBack}>
        <Image src="/icon/backIcon.svg" alt="back" width={30} height={30} />
      </button>
    </div>
  );
};

export default BackButtonNavbar;
