"use client";
import LoginButton from "@/components/button/LoginButton";
import LoginLayout from "@/styles/layout/login/LoginLayout";
import Logo from "@/styles/layout/Logo";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <LoginLayout>
      <div className="login_page_comonent">
        <div className="logo_area">
          <Logo />
          원하시는 로그인 방법을 선택해주세요.
        </div>
        <div className="button_area">
          <LoginButton color="secondary">
            <Link href={"/login/email"}>이메일로 계속하기</Link>
          </LoginButton>
          <LoginButton color="kakao">카카오로 계속하기</LoginButton>
        </div>
        <div className="go_join_area">
          아직 회원이 아니신가요? <Link href="/join">회원가입</Link>
        </div>
        <div onClick={() => {}}>로그아웃</div>
      </div>
    </LoginLayout>
  );
};

export default LoginPage;
