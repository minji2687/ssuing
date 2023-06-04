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
        <Title>Login</Title>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button onClick={handleSubmit}>Login</Button>
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
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
