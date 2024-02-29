import { InputProps } from "./types";
import {
  InputComponent,
  InputcomponentLabel,
  InputcomponentContainer,
} from "./style";

function Input({
  id,
  name,
  placeholder,
  label,
  type = "text",
  disabled = false,
  value,
  onChange,
}: InputProps) {
  return (
    <InputcomponentContainer>
      <InputcomponentLabel htmlFor={id}>{label}</InputcomponentLabel>
      <InputComponent
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
    </InputcomponentContainer>
  );
}

export default Input;
