"use client";
import LoginButton from "@/components/button/LoginButton";
import Input from "@/components/Input";
import BackButtonNavbar from "@/components/navbar/BackButtonNavbar";
import useInput from "@/hooks/useInput";
import LoginLayout from "@/styles/layout/login/LoginLayout";
import Logo from "@/styles/layout/Logo";
import { AuthUtil } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React from "react";

const LoginByEmail = () => {
  const { value: userEmail, onChange: onChangeId } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();

  const login = async () => {
    return await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ userEmail, password }),
    });
  };

  const router = useRouter();
  const onSubmit = async () => {
    const response = await login();

    if (response.status === 200) {
      const data = (await response.json()) as {
        token: string;
        userEmail: string;
      };
      AuthUtil.onLoginSuccess(data);
      router.push("/friends");
    } else {
      alert("로그인 실패");
    }
  };

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
            value={userEmail}
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
          <LoginButton color="secondary" onClick={onSubmit}>
            로그인
          </LoginButton>
        </div>
      </div>
    </LoginLayout>
  );
};

export default LoginByEmail;
