import { useState } from "react";

import {
  WeatherWrapper,
  Header,
  Main,
  WeatherForm,
  CityInput,
  Button,
  NameApp,
} from "./styles";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherError from "./components/WeatherError/WeatherError";
import { WeatherData } from "./types";

function Weather() {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const APP_ID = "0ffa9b03f679229e054b836e9bc5d128";

  const fetchWeather = async () => {
    if (!cityName.trim()) {
      alert("Пожалуйста, введите название города");
      return;
    }
    setLoading(true);
    setError("");
    setWeatherData(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}&units=metric`
      );
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Город не найден. Пожалуйста, проверьте название и попробуйте снова.");
        } else {
          throw new Error("Ошибка при получении данных о погоде");
        }
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <WeatherWrapper>
      <Header>
        <NameApp>Weather app</NameApp>
        </Header>
      <Main>
        <WeatherForm
          onSubmit={(e) => {
            e.preventDefault();
            fetchWeather();
          }}
        >
          <CityInput
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Введите город"
          />
          <Button type="submit">Получить погоду</Button>
        </WeatherForm>
        {loading ? (
          <p>Загрузка...</p>
        ) : error ? (
          <WeatherError message={error} />
        ) : weatherData ? (
          <WeatherInfo weather={weatherData} />
        ) : null}
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
