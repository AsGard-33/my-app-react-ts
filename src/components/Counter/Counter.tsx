import { CounterProps } from "./type";

import { CounterWrapper, ButtonControl, Count } from "./style";

import Button from "components/Button/Button";

function Counter({ count, onMinus, onPlus }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
