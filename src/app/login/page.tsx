"use client";
import { SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetch() {
      const res = await getData();
      console.log(res.body);
    }
    fetch();
  }, []);

  const handleUsernameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    postData();
  };

  return (
    <Container>
      <FormContainer>
        <form>
          <Title>Login</Title>
          <InputWrap>
            <Input placeholder="Email" />
          </InputWrap>
          <InputWrap>
            <Input type="password" placeholder="Password" />
          </InputWrap>
          <Button onClick={handleSubmit}>Login</Button>
        </form>
        <SocialLoginWrap>
          <button>Google</button>
        </SocialLoginWrap>
      </FormContainer>
    </Container>
  );
}

async function getData() {
  const res = await fetch("/api/hello", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}

async function postData() {
  const res = await fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "jmj",
      email: "jmj@gmail.com",
      password: "1234",
    }),
  });
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 400px;
  padding: 32px 40px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-sizing: border-box;
  color: rgb(94, 108, 132);
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
  color: #0052cc;
`;

const InputWrap = styled.div`
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--ds-background-input, #fafbfc);
  border-color: var(--ds-border-input, #dfe1e6);
  color: var(--ds-text, #091e42);
  cursor: text;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 100%;
  font-size: 14px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out 0s,
    border-color 0.2s ease-in-out 0s;
  overflow-wrap: break-word;
  vertical-align: top;
  pointer-events: auto;
  padding: 8px 6px;
  height: 2.57em;
`;

const Button = styled.button`
  width: 100%;

  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  font-weight: 500;
  background: var(--ds-background-brand-bold, #0052cc);
  &:hover {
    background: var(--ds-background-brand-bold-hovered, #0065ff);
    text-decoration: inherit;
    transition-duration: 0s, 0.15s;
  }
`;
const SocialLoginWrap = styled.div`
  margin-top: 24px;
  button {
    align-items: baseline;
    border-width: 0px;
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-flex;
    font-weight: 500;
    max-width: 100%;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background 0.1s ease-out 0s,
      box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    white-space: nowrap;
    background: var(--ds-background-neutral, rgba(9, 30, 66, 0.04));
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    padding: 0px 10px;
    border: 1px solid rgb(193, 199, 208);
    border-radius: 3px;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    color: var(--ds-text, #42526e) !important;
  }
  &::before {
    color: rgb(94, 108, 132);
    content: "Or continue with  ";
    display: block;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 16px;
    font-weight: 600;
    text-align: center;
  }
`;
