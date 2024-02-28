import Button from "components/Button/Button";

import Input from "components/Input/Input";

import { HomeworkWrapper, ButtonInputContainer } from "./style";

function Homework22() {
  return (
    <HomeworkWrapper>
      <ButtonInputContainer>
        <Button name="Blue Button" onClick={() => {}} isRed={false} />
        <Button name="Red Button" onClick={() => {}} isRed={true} />
        <Button name="Disabled Button" onClick={() => {}} disabled={true} />
        <Input
          id="input1"
          name="input1"
          placeholder="Active Input"
          label="Active Input"
        />
        <Input
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
