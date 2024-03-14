import styled from "@emotion/styled";

import { WeatherImg } from "assets";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${WeatherImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: rgb(18, 45, 77, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: 1px solid #ffffff1a;
  padding: 10px 0;
  border-color: #d2d2d2;
`;

export const NameApp = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  align-items: center;
  gap: 50px;
`;

export const WeatherForm = styled.form`
  width: 710px;
  height: 48px;
  top: 220px;
  left: 605px;
  gap: 14px;
`;

export const CityInput = styled.input`
  font-family: Inter;
  font-size: 20px;
  width: 550px;
  height: 48px;
  padding: 12px 12px 12px 20px;
  border-radius: 40px;
  margin-right: 10px;
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.048);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::placeholder {
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  width: 146px;
  height: 48px;
  padding: 12px, 40px;
  border-radius: 50px;
  cursor: pointer;
  background-color: #3678b4;
  border: none;
  color: #ffffff;
`;
