'use client';

import { PasswordInput, TextInputAlphabet } from "@/component/text_field";
import React, { useState } from "react";

type LoginProps = {
  user_id: string;
  password: string;
};

export default function Login() {
  const [login, setLogin] = useState<LoginProps>({ "user_id": "", "password": "" });
  return (
    <div>
      <h1>
        log in
      </h1>
      <div>ユーザーID</div>
      {TextInputAlphabet(login.user_id, (value) => setLogin({ ...login, user_id: value }))}
      <div>パスワード</div>
      {PasswordInput(login.password, (value) => setLogin({ ...login, password: value }))}
    </div>
  );
}
