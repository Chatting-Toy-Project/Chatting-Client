import HeaderLayout from "@/components/layout/HeaderLayout";
import MobileLayout from "@/components/layout/MobileLayout";
import ModalProvider from "@/components/modal/ModalProvider";
import React from "react";

import "./style.scss";
import { UserChatroom } from "@/types/userChatroom";
import { userChatlists } from "./dummy";
import UserProfile from "@/components/card/UserProfile";
import Link from "next/link";

const ChatListPage = () => {
  const chatList: UserChatroom[] = userChatlists;
  return (
    <section>
      <HeaderLayout backButton={true}></HeaderLayout>
      <MobileLayout>
        <div className="chatlist_title">채팅 목록</div>
        <div className="chatlist_list">
          {chatList.map((chatroom) => (
            <Link
              href={`/chat/${chatroom.chatroomId}`}
              as={`/chat/${chatroom.chatroomId}`}
              key={chatroom.chatroomId}
            >
              <div className="chatroom_card">
                <div className="chatroom_info">
                  <div className="user_profile">
                    <UserProfile name={chatroom.userName} size="small" />
                  </div>
                  <div className="last_message">{chatroom.lastMessage}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </MobileLayout>
    </section>
  );
};

export default ChatListPage;
