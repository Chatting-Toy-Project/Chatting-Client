import LoginButton from "@/components/button/LoginButton";
import { User } from "@/types/user";
import React from "react";

const SelectedProfileModal = ({ user }: { user?: User }) => {
  if (!user) return null;
  return (
    <div className="profile_modal">
      <div className="profile_wrapper">
        <div className="profile_info">
          <div className="profile_name">이름 : {user.userName}</div>
          <div className="profile_id">아이디 : {user.userId}</div>
        </div>
      </div>
      <div className="profile_button_wrapper">
        <LoginButton>메시지 보내기</LoginButton>
      </div>
    </div>
  );
};

export default SelectedProfileModal;
