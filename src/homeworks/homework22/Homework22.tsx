import Button from "components/Button/Button";

import Input from "components/Input/Input";

import { HomeworkWrapper, ButtonInputContainer } from "./style";

import { useState, ChangeEvent } from "react";

function Homework22() {
  const [inputValue1, setInputValue1] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");

  const onChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };
  return (
    <HomeworkWrapper>
      <ButtonInputContainer>
        <Button name="Blue Button" onClick={() => {}} isRed={false} />
        <Button name="Red Button" onClick={() => {}} isRed={true} />
        <Button name="Disabled Button" onClick={() => {}} disabled={true} />
        <Input
          value={inputValue1}
          onChange={onChangeInput1}
          id="input1"
          name="input1"
          placeholder="Active Input"
          label="Active Input"
        />
        <Input
          value={inputValue2}
          onChange={onChangeInput2}
          id="input2"
          name="input2"
          placeholder="Disabled Input"
          label="Disabled Input"
          disabled={true}
        />
      </ButtonInputContainer>
    </HomeworkWrapper>
  );
}

export default Homework22;
