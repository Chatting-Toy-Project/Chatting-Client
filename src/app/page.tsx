"use client";
import TitleHeader from "@/components/TitleHeader";
import "./style.scss";
import Input from "@/components/Input";
import LoginButton from "@/components/button/LoginButton";
import Link from "next/link";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";

const Home = () => {
  const { value: id, onChange: onChangeId } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();

  const navigate = useRouter();

  const onSubmit = () => {
    navigate.push("/friends");
  };

  return (
    <section className="main_page_wrapper">
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

        <div className="mt-1">
          <LoginButton color="primary" onClick={onSubmit}>
            로그인
          </LoginButton>
        </div>
        <div className="mt-1">
          <LoginButton color="secondary">
            <Link href="/join">회원가입</Link>
          </LoginButton>
        </div>
      </div>
    </section>
  );
};

export default Home;
