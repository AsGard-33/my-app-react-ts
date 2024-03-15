// В компоненте WeatherInfo должны быть показаны данные о погоде
// Данные должны приходить через props от комопонента Weather
import {
  WeatherInfo1,
  SityTempBox,
  Temp,
  CityName,
  WeatherImg,
  FeelsLikeTemp,
  FeelsInfo,
  WeatherTempLogo,
  WeatherFeelsLike,
  WeatherBox,
  FeelsLike,
  FeelsTemp,
} from "./styles";
import { WeatherData } from "./types";

function WeatherInfo({ weather }: { weather: WeatherData }) {
  return (
    <WeatherBox>
      <WeatherInfo1>
        <SityTempBox>
          <Temp>{Math.round(weather.main.temp)}°</Temp>
          <CityName>{weather.name}</CityName>
        </SityTempBox>
        <WeatherImg
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt="Weather icon"
        />
      </WeatherInfo1>
      <WeatherFeelsLike>
        <FeelsInfo>
          <WeatherTempLogo></WeatherTempLogo>
          <FeelsLike>FEELS LIKE</FeelsLike>
        </FeelsInfo>
        <FeelsTemp>
          <FeelsLikeTemp>{Math.round(weather.main.feels_like)}°</FeelsLikeTemp>
        </FeelsTemp>
      </WeatherFeelsLike>
    </WeatherBox>
  );
}

export default WeatherInfo;
