"use client";
import { useModalStore } from "@/store/modal";
import React from "react";
import "./style.scss";

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, closeModal } = useModalStore((state) => state);

  const className = isOpen ? "modal_layout open" : "modal_layout close";

  return (
    <div className={className}>
      <div onClick={closeModal} className="close_btn">
        𝘅
      </div>
      <div className="drag_handle" />
      <div className="modal_content">{children}</div>
    </div>
  );
};

export default ModalProvider;
