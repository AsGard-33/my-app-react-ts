import { ButtonComponent } from "./style";

import { ButtonProps } from "./types";

// Добавляем пропс disabled в типизацию
interface ExtendedButtonProps extends ButtonProps {
  disabled?: boolean;
}

function Button({
  isRed = false,
  name,
  type = "button",
  onClick = () => {},
  disabled = false,
}: ExtendedButtonProps) {
  return (
    <ButtonComponent
      isRed={isRed}
      disabled={disabled}
      className="button-component"
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
