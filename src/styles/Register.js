import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { InputLogin, LabelLogin } from "./Header";

export const Container = styled.div`
  max-width: 1280px;
  min-height: 1140px;
  padding: 0 10px;
  background-color: #fff;
  display: flex;

  @media (min-width: 768px) {
    margin: 40px auto;
    padding: 0 16px 0 32px;
  }
`;

export const FormRegister = styled.form`
  padding: 0;
  margin: 0;
  max-width: 600px;
  min-width: 320px;
  > button {
    background-color: rgb(225, 225, 225);
    color: rgb(99, 99, 99);
    font-size: 1.9rem;
    border-radius: 55px;
    border: 1px solid transparent;
    height: 44px;
    font-weight: 700;
    width: 100%;
    cursor: pointer;
    margin: 50px 0 0;
  }

  @media (min-width: 768px) {
    padding: 20px;
    margin: 0 0 12px;
  }
`;
export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: 400;
  margin: 20px 0 0 0;
`;
export const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.14px;
  margin: 20px 0 40px;
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const LabelRegister = styled(LabelLogin)`
  margin: 0 0 4px 0;

  ${({ type }) =>
    type === "checkbox" &&
    css`
      margin: 0;
      font-size: 1.5rem;
      color: rgb(51, 51, 51);
      width: 500px;
    `}
`;
export const InputRegister = styled(InputLogin)`
  padding: 8px 28px 4px 2px;
  height: 25px;
  width: 100%;

  ${({ type }) =>
    type === "checkbox" &&
    css`
      height: 20px;
      min-width: 20px;
      width: 20px;
      cursor: pointer;
      /* appearance: none;
      -webkit-appearance: none;
      height: 80px;
      min-width: 80px;
      width: 80px;
      border: 1px solid #000;
      border-radius: 2px; */
    `}
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  ${({ type }) =>
    type === "checkbox" &&
    css`
      flex-direction: row;
      gap: 15px;
      align-items: center;
    `}
`;
export const BoxPhone = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  span {
    max-width: 40px;
    font-size: 1.4rem;
    text-align: center;
    line-height: 25px;
  }
`;
export const BoxPassword = styled(BoxPhone)`
  gap: 0;
  position: relative;
`;
export const IconPassword = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  color: #767676;
  cursor: pointer;
`;
export const LegendPassword = styled.div`
  display: flex;
  gap: 30px;
  font-size: 1.2rem;
  align-items: center;

  p {
    font-weight: 400;
    color: #888;
  }
  ul {
    display: flex;
    gap: 5px 30px;
    flex-wrap: wrap;
    list-style: none;
  }
`;
export const ItemLegend = styled.li`
  color: #30871f;
  position: relative;

  ::before {
    content: "•";
    font-size: 2.4rem;
    font-weight: 400;
    position: absolute;
    left: -12px;
    top: -7px;
  }
`;
export const InfoRegister = styled.div`
  margin: 0;
  padding: 0;
  display: ${({ desktop }) => (desktop ? "none" : "flex")};
  flex-direction: column;
  min-width: 300px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 0;
    justify-content: center;
  }
  @media (min-width: 768px) {
    padding: 20px;
    margin: 0 0 12px;
    display: ${({ desktop }) => (desktop ? "flex" : "none")};
    > div {
      margin-top: 40px;
    }
  }
`;
export const ContentInfo = styled(InputBox)`
  font-size: 1.3rem;
  font-weight: bold;
  flex-direction: row;
  gap: 10px;
  > p {
    line-height: 25px;
  }
  div > span {
    font-weight: normal;
  }
`;
export const IconInfo = styled(FontAwesomeIcon)`
  color: rgba(0, 0, 0, 0.4);
  font-size: 2.5rem;
  width: 50px;
`;
export const GoToLogin = styled.p`
  font-weight: 400;
  color: #333;
  font-size: 1.3rem;
  text-align: center;
  margin: 30px 0 40px;
  > a {
    cursor: pointer;
    text-decoration: underline;
  }
`;
