import { LoginformWrapper, LoginformName, InputsContainer } from "./style";

import Button from "components/Button/Button";;
import Input from "components/Input/Input";

function LoginForm() {
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
        />
        <Input
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
        />
      </InputsContainer>
      <Button name="Login" />
    </LoginformWrapper>
  );
}

export default LoginForm;