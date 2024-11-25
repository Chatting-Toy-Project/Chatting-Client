import React from "react";
import "./style.scss";

const TitleHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="title_header">
      <div className="title">CHATBLY</div>
      <div className="sub_title">{children}</div>
    </div>
  );
};

export default TitleHeader;
