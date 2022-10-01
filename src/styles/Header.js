import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ff9401;
  position: relative;

  @media (min-width: 1024px) {
    height: 70px;
    background-color: #ff6d08;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
`;
export const Left = styled.div`
  background-color: #ff6d08;
  max-width: 210px;
  height: 50px;
  border-radius: 0 50px 50px 0;
  display: flex;
  justify-items: space-between;
  align-items: center;
  color: #fff;
  gap: 15px;
  padding: 5px 10px 5px 10px;

  @media (min-width: 1024px) {
    background-color: #ff9401;
    height: 100%;
    width: 230px;
    justify-content: end;
    padding-right: 20px;
  }
`;
export const Center = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 50px;
    flex: 1 2 0;
  }
`;
export const Right = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 140px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;

  @media (min-width: 1024px) {
    position: static;
    width: 200px;
    padding-right: 30px;
  }
`;
export const MenuLeft = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;
export const MenuCenter = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  cursor: pointer;
  color: #fff;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;
export const Brand = styled.div`
  font-size: 2.5rem;
  cursor: pointer;
`;
export const Search = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0 12px 8px;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;
export const BoxIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #495867;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
    right: 0;
  }
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 50px;
  border: 1px solid transparent;
  height: 40px;
  padding-left: 25px;
  font-size: 1.6rem;
  &:focus {
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.2);
  }
  @media (min-width: 1024px) {
    height: 50px;
  }
`;
export const IconSearch = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 2rem;
`;
export const Login = styled.div`
  cursor: pointer;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  p:nth-child(1) {
    font-size: 1.4rem;
    text-decoration: underline;
    font-weight: bold;
    color: #33363d;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  p:nth-child(2) {
    display: none;
    @media (min-width: 1024px) {
      font-size: 1.8rem;
      font-weight: bold;
      color: #fff;
      display: flex;
    }
  }
`;
export const BoxCart = styled.div`
  position: relative;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    border-left: 1px solid #fff;
    height: 50px;
  }
`;
export const Cart = styled(FontAwesomeIcon)`
  font-size: 2.8rem;
  color: #fff;
`;
export const Counter = styled.div`
  width: 15px;
  height: 15px;
  background-color: #495867;
  position: absolute;
  right: -5px;
  top: -5px;
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  @media (min-width: 1024px) {
    right: -5px;
    top: 5px;
  }
`;
export const IconLow = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 23px;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
