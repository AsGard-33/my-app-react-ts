import { useNavigate } from "react-router-dom";

import {
  ButtonControl,
  IBMContainer,
  SectionName,
  IBMList,
  IBMName,
  IBMVikiLink,
} from "./styles";

import Button from "components/Button/Button";

function IBM() {
  const navigate = useNavigate();
  return (
    <IBMContainer>
      <SectionName>IBM</SectionName>
      <IBMList>
        <IBMName>
          IBM — американская компания со штаб-квартирой в Армонке, один из
          крупнейших в мире производителей и поставщиков аппаратного и
          программного обеспечения, а также IT-сервисов и консалтинговых услуг.
          Распространённое прозвище компании — Big Blue, что можно перевести с
          английского как «большой синий» или «голубой гигант».
          <IBMVikiLink
            href="https://ru.wikipedia.org/wiki/IBM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Википедия
          </IBMVikiLink>
        </IBMName>
        <IBMName>
          Дочерние компании: Red Hat, IBM India Private Limited, Apptio, ЕЩЁ
        </IBMName>
        <IBMName>
          Основатели: Герман Холлерит, Томас Джон Уотсон, Чарльз Флинт, Джордж
          Уинтроп Фэрчайлд
        </IBMName>
        <IBMName>Генеральный директор: Арвинд Кришна (6 апр. 2020 г.–)</IBMName>
        <IBMName>
          Дата основания: 16 июня 1911 г., Эндикотт, Нью-Йорк, США
        </IBMName>
      </IBMList>
      <ButtonControl>
        <Button name="Go back" onClick={() => navigate(-1)}></Button>
      </ButtonControl>
    </IBMContainer>
  );
}

export default IBM;
