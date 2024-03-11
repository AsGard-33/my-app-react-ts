import { useNavigate } from "react-router-dom";

import {
  ButtonControl,
  FacebookContainer,
  SectionName,
  FacebookList,
  FacebookName,
  FacebookVikiLink,
} from "./styles";

import Button from "components/Button/Button";

function Facebook() {
  const navigate = useNavigate();
  return (
    <FacebookContainer>
      <SectionName>Facebook</SectionName>
      <FacebookList>
        <FacebookName>
          Meta Platforms, Inc. — американская транснациональная холдинговая
          компания, владеющая технологическим конгломератом и расположенная в
          Менло-Парке, Калифорния. Является материнской организацией Facebook,
          Instagram, WhatsApp и Reality Labs.
          <FacebookVikiLink
            href="https://ru.wikipedia.org/wiki/Meta_Platforms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Википедия
          </FacebookVikiLink>
        </FacebookName>
        <FacebookName>
          Основатели: Марк Цукерберг, Эдуардо Саверин, Эндрю Макколум, Дастин
          Московиц, Крис Хьюз
        </FacebookName>
        <FacebookName>
          Дата основания: февраль 2004 г., Кеймбридж, Массачусетс, США
        </FacebookName>
      </FacebookList>
      <ButtonControl>
        <Button name="Go back" onClick={() => navigate(-1)}></Button>
      </ButtonControl>
    </FacebookContainer>
  );
}

export default Facebook;
