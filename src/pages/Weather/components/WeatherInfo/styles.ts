import styled from "@emotion/styled";
import { TempLogo } from "assets";

export const WeatherInfo1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 709px;
  height: 129px;
  top: 328px;
  left: 605px;
  border-radius: 18px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const SityTempBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  gap: px;
  width: 120px;
  margin-right: 200px;
`;

export const Temp = styled.p`
  width: 89px;
  height: 69px;
  top: 344px;
  left: 641px;
  font-family: Inter;
  font-size: 57px;
  font-weight: 500;
  line-height: 69px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

export const CityName = styled.h2`
  width: 67px;
  height: 22px;
  top: 419px;
  left: 641px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

export const WeatherImg = styled.img`
  width: 190px;
  height: 129px;
  top: 356px;
  left: 898px;
`;

export const FeelsLikeTemp = styled.p`
  width: 103.55px;
  height: 51px;
  top: 524px;
  left: 635.26px;
  font-family: Inter;
  font-size: 42px;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

export const FeelsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 150px;
  height: 40px;
`;

export const WeatherTempLogo = styled.p`
  width: 31px;
  height: 23px;
  margin-top: 10px;
  left: 635px;
  opacity: 0.61px;
  background: url(${TempLogo});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const WeatherFeelsLike = styled.div`
  display: flex;
  flex-direction: column;
  width: 223px;
  height: 141px;
  top: 489px;
  left: 605px;
  border-radius: 18px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FeelsLike = styled.p`
  width: 65px;
  height: 15px;
  margin-top: 10px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff91;
  background-repeat: no-repeat;
  font-size: 12px;
  white-space: nowrap;
`;

export const FeelsTemp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 150px;
`;
