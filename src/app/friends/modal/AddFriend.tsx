"use client";
import LoginButton from "@/components/button/LoginButton";
import Input from "@/components/Input";
import useInput from "@/hooks/useInput";
import { useModalStore } from "@/store/modal";
import React from "react";

const AddFriendModal = () => {
  const { closeModal } = useModalStore();

  const { value, onChange } = useInput();
  const onClickAddFriend = () => {
    closeModal();
  };

  return (
    <div className="add_friend_modal">
      <div className="title">친구 아이디를 입력하세요</div>
      <div className="input_wrapper mt-2">
        <Input
          value={value}
          onChange={onChange}
          placeholder="친구의 아이디를 입력하세요"
        />
        <div className="mt-2">
          <LoginButton onClick={onClickAddFriend}>추가하기</LoginButton>
        </div>
      </div>
    </div>
  );
};

export default AddFriendModal;
