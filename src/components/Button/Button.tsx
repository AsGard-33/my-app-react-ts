import "./style.css";

import { ButtonProps } from "./types";

function Button({ name, type = "button", onClick = () => {} }: ButtonProps) {
  return (
    <button className="button-component" onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;
