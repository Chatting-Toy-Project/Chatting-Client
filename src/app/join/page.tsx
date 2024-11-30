"use client";
import React from "react";
import "./style.scss";
import BackButtonNavbar from "@/components/navbar/BackButtonNavbar";
import Input from "@/components/Input";
import useInput from "@/hooks/useInput";
import LoginButton from "@/components/button/LoginButton";
import LoginLayout from "@/styles/layout/login/LoginLayout";
import Logo from "@/styles/layout/Logo";
const JoinPage = () => {
  const { value: id, onChange: onChangeId } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();
  const { value: passwordCheck, onChange: onChangePasswordCheck } = useInput();
  const { value: name, onChange: onChangeName } = useInput();
  return (
    <LoginLayout>
      <div className="login_email_page_component">
        <BackButtonNavbar />
        <div className="logo_area small">
          <Logo />
          <strong>회원가입</strong>
        </div>

        <div className="form_wrap">
          <Input
            label="아이디"
            placeholder="아이디"
            value={id}
            onChange={onChangeId}
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={onChangePassword}
          />

          <Input
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />

          <Input
            label="이름"
            placeholder="이름"
            value={name}
            onChange={onChangeName}
          />

          <div className="mt-3">
            <LoginButton onClick={() => {}}>회원가입</LoginButton>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default JoinPage;
