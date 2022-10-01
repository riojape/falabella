import {
  faBars,
  faCartShopping,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import useOusiteClick from "../../hooks/useOusiteClick";
import {
  BoxCart,
  BoxIcon,
  Brand,
  Cart,
  Center,
  Container,
  Counter,
  IconLow,
  IconSearch,
  Input,
  Left,
  Login,
  MenuCenter,
  MenuLeft,
  Position,
  Right,
  Search,
} from "../../styles/Header";
import { BoxMenu, ItemMenu } from "../../styles/Menu";
import Modal from "../Modal/Modal";
import FormLogin from "./FormLogin";
import MenuLogin from "./MenuLogin";
import Menu from "./MenuLogin";
import Searcher from "./Searcher";

const Header = () => {
  const [menuLogin, setMenuLogin] = useState(false);
  const [formLogin, setFormLogin] = useState(false);
  const [menuRef] = useOusiteClick(setMenuLogin);
  const [formRef] = useOusiteClick(setFormLogin);
  const onMenuLogin = () => {
    setMenuLogin(true);
  };
  const onFormLogin = () => {
    setFormLogin(true);
    setMenuLogin(false);
  };

  const closeFormLogin = useCallback(() => {
    setFormLogin(false);
  }, []);

  useEffect(() => {
    console.log("Header");
  });

  return (
    <Container>
      <Left>
        <MenuLeft icon={faBars} />
        <Brand>Falabella.com</Brand>
      </Left>
      <Center>
        <MenuCenter icon={faBars} />
        <Searcher />
      </Center>
      <Right>
        <Login ref={menuRef}>
          <p onClick={onFormLogin}>Inicio sesión</p>
          <p onClick={onMenuLogin}>
            Hola!, <br /> Inicia sesión
          </p>
          <IconLow icon={faChevronDown} onClick={onMenuLogin} />
          {menuLogin && <MenuLogin onFormLogin={onFormLogin} />}
        </Login>
        <BoxCart>
          <Cart icon={faCartShopping} />
          <Counter>2</Counter>
        </BoxCart>
      </Right>
      {formLogin && (
        <Modal>
          <FormLogin formRef={formRef} close={closeFormLogin} />
        </Modal>
      )}
    </Container>
  );
};

export default Header;
