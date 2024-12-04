"use client";
import ModalProvider from "@/components/modal/ModalProvider";
import { useModalStore } from "@/store/modal";
import React from "react";
import AddFriendModal from "./modal/AddFriend";

const FriendAddButton = () => {
  const { openModal, closeModal } = useModalStore();

  const onClickAdd = () => {
    openModal();
  };

  return (
    <>
      <button onClick={onClickAdd} className="right_button">
        친구 추가
      </button>
      <ModalProvider>{<AddFriendModal />}</ModalProvider>
    </>
  );
};

export default FriendAddButton;
