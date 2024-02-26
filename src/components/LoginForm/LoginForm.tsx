import "./style.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <div className="login">
      <h2 className="login-title">Login form</h2>
      <div className="input-box">
        <Input
          name="email"
          type="email"
          placeholder="enter email"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="enter password"
          label="Password"
        />
      </div>
      <div>
        <Button name="Login" type="submit" />
      </div>
    </div>
  );
}
export default LoginForm;
