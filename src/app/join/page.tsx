"use client";
import React from "react";
import "./style.scss";
import BackButtonNavbar from "@/components/navbar/BackButtonNavbar";
import TitleHeader from "@/components/TitleHeader";
import Input from "@/components/Input";
import useInput from "@/hooks/useInput";
import LoginButton from "@/components/button/LoginButton";
const JoinPage = () => {
  const { value: id, onChange: onChangeId } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();
  const { value: passwordCheck, onChange: onChangePasswordCheck } = useInput();
  const { value: name, onChange: onChangeName } = useInput();
  return (
    <section className="join_page_wrapper">
      <BackButtonNavbar />
      <TitleHeader>
        <p>No.1 채팅 어플리케이션</p>
        <p>챗블리에 오신것을 환영합니다!</p>
      </TitleHeader>

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

        <div className="mt-1">
          <LoginButton onClick={() => {}}>회원가입</LoginButton>
        </div>
      </div>
    </section>
  );
};

export default JoinPage;
