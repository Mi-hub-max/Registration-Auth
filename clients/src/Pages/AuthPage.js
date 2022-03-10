import { useHttp } from "../hooks/httm.hook";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
export const AuthPage = () => {
  const { loading, request, error } = useHttp();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${email}`);
  };
  useEffect(() => {}, [error]);
  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...email });
      console.log("Data", data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeHandler = (event) => {};
  // const handleSubmitClick = (e) => {
  //   e.preventDefault();
  //   console.log("Authenticated", form);
  // };
  const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

  const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  `;

  const Form = styled.form`
    margin: 0 auto;
    width: 100%;
    max-width: 414px;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    position: relative;
  `;

  const Input = styled.input`
    max-width: 100%;
    padding: 11px 13px;
    background: #f9f9fa;
    color: #f03d4e;
    margin-bottom: 0.9rem;
    border-radius: 4px;
    outline: 0;
    border: 1px solid rgba(245, 245, 245, 0.7);
    font-size: 14px;
    transition: all 0.3s ease-out;
    box-shadow: 0px 0px 3px 1px #5f5353;
    :focus,
    :hover {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    }
  `;

  const Button = styled.button`
    max-width: 100%;
    padding: 11px 13px;
    color: rgb(253, 249, 243);
    font-weight: 600;
    text-transform: uppercase;
    background: #f03d4e;
    border: none;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    margin-top: 0.6rem;
    margin-left: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
    :hover {
      background: rgb(200, 50, 70);
      animation: ${jump} 0.2s ease-out forwards;
    }
  `;
  const Label = styled.label``;
  const Buttons = styled.div`
    display: flex;
  `;
  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Логин"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Пароль"
            type="password"
            value={pass}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>

          <Buttons>
            <Button type="button" onClick={registerHandler} disabled={loading}>
              Entrar
            </Button>
            <Button type="button" onClick={registerHandler} disabled={loading}>
              Registration
            </Button>
          </Buttons>
        </Form>
      </Wrapper>
    </>
  );
};
