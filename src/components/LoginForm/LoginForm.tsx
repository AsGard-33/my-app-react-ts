import { LoginformWrapper, LoginformName, InputsContainer } from "./styles";

import Input from "components/Input/Input";

import { useState, ChangeEvent } from "react";

import Button from "components/Button/Button";;


function LoginForm() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };
  return (
    <LoginformWrapper>
      <LoginformName>Login form</LoginformName>
      <InputsContainer>
        <Input
          id="login-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          type="email"
          value={emailValue}
          onChange={onChangeEmail}
        />
        <Input
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
          value={passwordValue}
          onChange={onChangePassword}
        />
      </InputsContainer>
      <Button name="Login" />
    </LoginformWrapper>
  );
}

export default LoginForm;