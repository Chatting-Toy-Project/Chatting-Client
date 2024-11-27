import React from "react";
import "./style.scss";
import Footer from "./Footer";
const MobileLayout = ({
  children,
  footer = true,
}: {
  children: React.ReactNode;
  footer?: boolean;
}) => {
  const className = footer ? "mobile_layout" : "mobile_layout no_footer";
  return (
    <>
      <div className={className}>
        <div className="mobile_content">{children}</div>
        {footer && <Footer />}
      </div>
    </>
  );
};

export default MobileLayout;
