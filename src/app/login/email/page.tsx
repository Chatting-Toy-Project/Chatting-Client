"use client";
import LoginButton from "@/components/button/LoginButton";
import Input from "@/components/Input";
import BackButtonNavbar from "@/components/navbar/BackButtonNavbar";
import useInput from "@/hooks/useInput";
import LoginLayout from "@/styles/layout/login/LoginLayout";
import Logo from "@/styles/layout/Logo";
import React, { useState } from "react";

const LoginByEmail = () => {
  const { value: id, onChange: onChangeId } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();

  return (
    <LoginLayout>
      <div className="login_email_page_component">
        <BackButtonNavbar />
        <div className="logo_area small">
          <Logo />
          <strong>이메일로 로그인하기</strong>
        </div>

        <div className="form_wrap">
          <Input
            label="이메일"
            placeholder="이메일을 입력해주세요."
            value={id}
            onChange={onChangeId}
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>

        <div className="mt-3">
          <LoginButton color="secondary" onClick={() => {}}>
            로그인
          </LoginButton>
        </div>
      </div>
    </LoginLayout>
  );
};

export default LoginByEmail;
