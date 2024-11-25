import React from "react";
import UserProfile from "./UserProfile";
import { User } from "@/types/user";
import "../style.scss";

const FriendCard = ({ friend }: { friend: User }) => {
  return (
    <div className="friend_card">
      <UserProfile name={friend.userName} />
      <div className="friend_name">{friend.userName}</div>
    </div>
  );
};

export default FriendCard;
