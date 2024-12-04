"use client";
import { useModalStore } from "@/store/modal";
import React from "react";
import "./style.scss";

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { modalState, closeModal } = useModalStore((state) => state);

  return (
    <div className={`modal_layout ${modalState}`}>
      <div onClick={closeModal} className="close_btn">
        𝘅
      </div>
      <div className="drag_handle" />
      <div className="modal_content">{children}</div>
    </div>
  );
};

export default ModalProvider;
