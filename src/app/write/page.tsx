"use client";
import { useState } from "react";
import styled from "styled-components";

const WritePage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 글 작성 처리 로직을 여기에 추가하세요.
    console.log("글 작성:", content);
  };

  return (
    <Container>
      <Title>글 작성 페이지</Title>
      <Form onSubmit={handleSubmit}>
        <TitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="글 내용을 입력하세요"
        />
        <SubmitButton type="submit">글 작성</SubmitButton>
      </Form>
    </Container>
  );
};

export default WritePage;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TitleInput = styled.input`
  /* width: 100%; */
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  height: 200px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
