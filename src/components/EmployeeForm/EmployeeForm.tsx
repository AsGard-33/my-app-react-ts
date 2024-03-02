import { useState } from "react";

import Input from "components/Input/Input";

import Button from "components/Button/Button";

import {
  EmployeeFormContainer,
  EmployeeCard,
  InputContainer,
  InfoBox,
  InfoBoxP,
  InfoBoxP2,
} from "./styles";

import { EmployeeState } from "./types";

function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [employee, setEmployee] = useState<EmployeeState>({
    firstName: "",
    lastName: "",
    age: "",
    position: "",
  });
  const [showCard, setShowCard] = useState<boolean>(false);

  const handleSubmit = () => {
    if (firstName && lastName && age && position) {
      setEmployee({ firstName, lastName, age, position });
      setShowCard(true);
    } else {
      setShowCard(false);
      setTimeout(() => alert("Введите данные во все поля"), 0);
    }
  };

  return (
    <EmployeeFormContainer>
      <InputContainer>
        <Input
          id="firstName"
          name="firstName"
          placeholder="Имя"
          label="Имя"
          value={firstName}
          onChange={(inputEvent) => setFirstName(inputEvent.target.value)}
        />

        <Input
          id="lastName"
          name="lastName"
          placeholder="Фамилия"
          label="Фамилия"
          value={lastName}
          onChange={(inputEvent) => setLastName(inputEvent.target.value)}
        />
        <Input
          id="age"
          name="age"
          placeholder="Возраст"
          label="Возраст"
          value={age}
          onChange={(inputEvent) => setAge(inputEvent.target.value)}
        />
        <Input
          id="position"
          name="position"
          placeholder="Должность"
          label="Должность"
          value={position}
          onChange={(inputEvent) => setPosition(inputEvent.target.value)}
        />
        <Button name="Создать" onClick={handleSubmit} />
      </InputContainer>
      {showCard && (
        <EmployeeCard>
          <InfoBox>
            <InfoBoxP2>Имя</InfoBoxP2>
            <InfoBoxP>{employee.firstName}</InfoBoxP>
          </InfoBox>
          <InfoBox>
            <InfoBoxP2>Фамилия</InfoBoxP2>
            <InfoBoxP>{employee.lastName}</InfoBoxP>
          </InfoBox>
          <InfoBox>
            <InfoBoxP2>Возраст</InfoBoxP2>
            <InfoBoxP>{employee.age} лет</InfoBoxP>
          </InfoBox>
          <InfoBox>
            <InfoBoxP2>Должность</InfoBoxP2>
            <InfoBoxP>{employee.position}</InfoBoxP>
          </InfoBox>
        </EmployeeCard>
      )}
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
