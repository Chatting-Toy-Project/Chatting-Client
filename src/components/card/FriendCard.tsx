"use client";
import React from "react";
import UserProfile from "./UserProfile";
import { User } from "@/types/user";
import "../style.scss";

// button onClick
interface FriendCardProps {
  friend: User;
  onClick?: () => void;
}

const FriendCard = (props: FriendCardProps) => {
  const { friend, onClick } = props;

  return (
    <div onClick={onClick} className="friend_card">
      <>
        <UserProfile name={friend.userName} />
        <div className="friend_name">{friend.userName}</div>
      </>
    </div>
  );
};

export default FriendCard;
