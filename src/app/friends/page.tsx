"use client";
import MobileLayout from "@/components/layout/MobileLayout";
import { friendsDummy } from "./dummy";
import FriendCard from "@/components/card/FriendCard";
import HeaderLayout from "@/components/layout/HeaderLayout";
import { useModalStore } from "@/store/modal";
import ModalProvider from "@/components/modal/ModalProvider";

import LoginButton from "@/components/button/LoginButton";
import { useState } from "react";
import { User } from "@/types/user";
import AddFriendModal from "./modal/AddFriend";
import SelectedProfileModal from "./modal/SelectedProfile";
const FriendsPage = () => {
  const { openModal, closeModal } = useModalStore();
  const [modalType, setModalType] = useState<"profile" | "add">("add");
  const [selectedFriend, setSelectedFriend] = useState<User>();
  const [friends] = useState<User[]>(friendsDummy);

  const onClickCard = (friend: User) => {
    setModalType("profile");
    setSelectedFriend(friend);
    openModal();
  };

  const onClickAdd = () => {
    setModalType("add");
    openModal();
  };

  return (
    <section className="friend_page_component">
      <HeaderLayout backButton={true}>
        <button onClick={onClickAdd} className="right_button">
          친구 추가
        </button>
      </HeaderLayout>
      <MobileLayout>
        <div className="friend_list_title">
          친구 목록에서 친구를 추가하거나 삭제할 수 있습니다.
        </div>
        <div className="friend_list">
          {friends.map((friend) => (
            <FriendCard
              onClick={() => onClickCard(friend)}
              key={friend.userId}
              friend={friend}
            />
          ))}
        </div>

        <ModalProvider>
          {modalType === "add" && <AddFriendModal />}
          {modalType === "profile" && (
            <SelectedProfileModal user={selectedFriend} />
          )}
        </ModalProvider>
      </MobileLayout>
    </section>
  );
};

export default FriendsPage;
