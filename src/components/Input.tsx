"use client";
import React from "react";
import "./style.scss";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: Props) => {
  return (
    <div className="input_wrap">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
