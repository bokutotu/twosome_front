'use client';

import { PasswordInput, TextInput, TextInputAlphabet } from "@/component/text_field";
import axios from "axios";
import React, { useState } from "react";

type RegisterProps = {
  name: string;
  user_id: string;
  password: string;
};

type RegisterResponse = {
  id: string;
};

async function register(login: RegisterProps) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await axios.post(`${apiBaseUrl}/register`, login);
  if (response.status !== 200) {
    throw new Error("Failed to register");
  }
  console.log(response.data);
  return response.data as RegisterResponse;
}

async function handleSubmit(login: RegisterProps) {
  try {
    const response = await register(login);
    alert(`Registered: ${response.id}`);
  } catch (e) {
    alert("Failed to register");
  }
}

export default function Register() {
  const [login, setLogin] = useState<RegisterProps>({"name": "", "user_id": "", "password": "" });
  return (
    <div>
      <h1>
        Register
      </h1>
      <div>名前</div>
      {TextInput(login.name, (value) => setLogin({ ...login, name: value }))}
      <div>ユーザーID</div>
      {TextInputAlphabet(login.user_id, (value) => setLogin({ ...login, user_id: value }))}
      <div>パスワード</div>
      {PasswordInput(login.password, (value) => setLogin({ ...login, password: value }))}
      <button onClick={() => handleSubmit(login)}>Register</button>
    </div>
  );
}
