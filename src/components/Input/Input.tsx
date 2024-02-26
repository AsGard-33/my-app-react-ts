import "./style.css";

import { InputProps } from "./types";

function Input({ name, type, placeholder, label }: InputProps) {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
}
export default Input;
