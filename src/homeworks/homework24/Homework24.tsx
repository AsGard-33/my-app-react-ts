import { useState, useEffect } from "react";
import {
  JokeCard,
  Homework24Wrapper,
  ErrorJoke,
  JokePunchline,
  JokeSetup,
  PageStyle,
  JokeContainer,
} from "./styles";
import { Joke } from "./types";
import Button from "components/Button/Button";

function Homework24() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string>("");

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      const data = await response.json();
      setJoke(data);
      setError("");
      alert("Вы получили новую шутку");
    } catch (event) {
      setError("Ошибка при получении данных");
      setJoke(null);
      alert("Ошибка при получении данных");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <PageStyle>
      <Homework24Wrapper>
        <JokeContainer>
          {error && <ErrorJoke>{error}</ErrorJoke>}
          {joke && (
            <JokeCard>
              <JokeSetup>{joke.setup}</JokeSetup>
              <JokePunchline>{joke.punchline}</JokePunchline>
            </JokeCard>
          )}
          <Button name="Получить шутку" onClick={fetchJoke} />
        </JokeContainer>
      </Homework24Wrapper>
    </PageStyle>
  );
}

export default Homework24;
