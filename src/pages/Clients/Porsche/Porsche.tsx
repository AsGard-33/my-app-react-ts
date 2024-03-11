import { useNavigate } from "react-router-dom";

import {
  ButtonControl,
  PorscheContainer,
  SectionName,
  PorscheList,
  PorscheName,
  PorscheVikiLink,
} from "./styles";

import Button from "components/Button/Button";

function Porsche() {
  const navigate = useNavigate();
  return (
    <PorscheContainer>
      <SectionName>Porsche</SectionName>
      <PorscheList>
        <PorscheName>
          Porsche AG — немецкий производитель автомобилей, основанный
          конструктором Фердинандом Порше в 1931 году, в настоящее время —
          дочерняя структура Porsche Automobil Holding. Штаб-квартира и основной
          завод находятся в Штутгарте, Германия. Википедия
          <PorscheVikiLink
            href="https://ru.wikipedia.org/wiki/Porsche"
            target="_blank"
            rel="noopener noreferrer"
          >
            Википедия
          </PorscheVikiLink>
        </PorscheName>
        <PorscheName>Штаб-квартира: Штутгарт</PorscheName>
        <PorscheName> Основатель: Фердинанд Порше</PorscheName>
        <PorscheName>
          {" "}
          Владельцы: Volkswagen, Porsche Automobil Holding
        </PorscheName>
        <PorscheName>
          {" "}
          Генеральный директор: Оливер Блюме (1 окт. 2015 г.–)
        </PorscheName>
        <PorscheName> Дата основания: 25 апреля 1931 г., Штутгарт</PorscheName>
      </PorscheList>
      <ButtonControl>
        <Button name="Go back" onClick={() => navigate(-1)}></Button>
      </ButtonControl>
    </PorscheContainer>
  );
}

export default Porsche;
