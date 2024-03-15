// В компоненте WeatherError должны быть показаны данные о погоде
// Данные должны приходить через props от комопонента Weather
import { WeatherErrorProps } from "./types"
import { WeatherError1, ErrorBox, ApiError, ErrorMessage } from "./styles";

const WeatherError = ({ message }: WeatherErrorProps) =>  {
  return (
    <WeatherError1>
      <ErrorBox>
        <ApiError>API Error</ApiError>
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorBox>
    </WeatherError1>
  );
};

export default WeatherError;