"use client";
import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import { User } from "@/types/user";
import "../style.scss";

// button onClick
interface FriendCardProps {
  friend: User;
  onClick?: () => void;
}

const FriendCard = (props: FriendCardProps) => {
  const colors = [
    { bgColor: "#FFC0CB", fontColor: "#FF69B4" },
    { bgColor: "#FFA07A", fontColor: "#FF4500" },
    { bgColor: "#20B2AA", fontColor: "#008080" },
    { bgColor: "#87CEFA", fontColor: "#1E90FF" },
    { bgColor: "#9370DB", fontColor: "#8A2BE2" },
    { bgColor: "#FFD700", fontColor: "#FF8C00" },
    { bgColor: "#7FFFD4", fontColor: "#40E0D0" },
    { bgColor: "#90EE90", fontColor: "#2E8B57" },
    { bgColor: "#FFA07A", fontColor: "#532311" },
    { bgColor: "#FFB6C1", fontColor: "#FF69B4" },
    { bgColor: "#FF6347", fontColor: "#FF4500" },
  ];

  const { friend, onClick } = props;
  const [randomColor, setRandomColor] = useState<{
    bgColor: string;
    fontColor: string;
  }>();
  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  return (
    <div onClick={onClick} className="friend_card">
      {randomColor && (
        <>
          <UserProfile color={randomColor} name={friend.userName} />
          <div className="friend_name">{friend.userName}</div>
        </>
      )}
    </div>
  );
};

export default FriendCard;
