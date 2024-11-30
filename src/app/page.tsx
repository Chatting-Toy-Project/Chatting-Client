import LoginButton from "@/components/button/LoginButton";
import LoginLayout from "@/styles/layout/login/LoginLayout";
import Logo from "@/styles/layout/Logo";
import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <section className="main_page_component">
      <LoginLayout>
        <div className="logo_area">
          <Logo />
          친구들과 소통하고 즐겁게 대화하세요.
          <br />
          <strong>챗블리와 함께 지금 시작하기</strong>
        </div>
        <div className="start_button_area">
          <LoginButton color="secondary">
            <Link href={"/login"}>시작하기</Link>
          </LoginButton>
        </div>
      </LoginLayout>
    </section>
  );
};

export default MainPage;
