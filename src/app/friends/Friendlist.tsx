"use client";
import FriendCard from "@/components/card/FriendCard";
import MobileLayout from "@/components/layout/MobileLayout";
import ModalProvider from "@/components/modal/ModalProvider";
import { useModalStore } from "@/store/modal";
import { User } from "@/types/user";
import React, { useState } from "react";
import SelectedProfileModal from "./modal/SelectedProfile";

const FriendlistComponent = ({ friends }: { friends: User[] }) => {
  const [selectedFriend, setSelectedFriend] = useState<User>();
  const { openModal, closeModal } = useModalStore();

  const onClickCard = (friend: User) => {
    setSelectedFriend(friend);
    openModal();
  };

  return (
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
        {<SelectedProfileModal user={selectedFriend} />}
      </ModalProvider>
    </MobileLayout>
  );
};

export default FriendlistComponent;
