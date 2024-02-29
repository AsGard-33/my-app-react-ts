import { useState, ChangeEvent } from "react";

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

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    age: "",
    position: "",
  });
  const [showCard, setShowCard] = useState(false);

  const handleChange = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = inputEvent.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, age, position } = employee;
    if (firstName && lastName && age && position) {
      setShowCard(true);
    } else {
      alert("Введите данные сотрудника");
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
          value={employee.firstName}
          onChange={handleChange}
        />
        <Input
          id="lastName"
          name="lastName"
          placeholder="Фамилия"
          label="Фамилия"
          value={employee.lastName}
          onChange={handleChange}
        />
        <Input
          id="age"
          name="age"
          placeholder="Возраст"
          label="Возраст"
          value={employee.age}
          onChange={handleChange}
        />
        <Input
          id="position"
          name="position"
          placeholder="Должность"
          label="Должность"
          value={employee.position}
          onChange={handleChange}
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
