import React from "react";
import "./style.scss";
const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mobile_layout">{children}</div>;
};

export default MobileLayout;
