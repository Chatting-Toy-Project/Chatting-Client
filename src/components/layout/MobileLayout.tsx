import React from "react";
import "./style.scss";
import Footer from "./Footer";
const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mobile_layout">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MobileLayout;
