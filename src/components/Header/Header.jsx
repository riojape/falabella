import {
  faBars,
  faCartShopping,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
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
  Right,
  Search,
} from "../../styles/Header";

const Header = () => {
  /*
  const [desktop, setDesktop] = useState("");
  const start = (e) => {
    setDesktop(e.target.innerWidth);
  };
  window.addEventListener("resize", start);
  console.log(desktop);*/
  return (
    <Container>
      <Left>
        <MenuLeft icon={faBars} />
        <Brand>Falabella.com</Brand>
      </Left>
      <Center>
        <MenuCenter icon={faBars} />
        <Search>
          <Input placeholder="Buscar en falabella.com" />
          <BoxIcon>
            <IconSearch icon={faMagnifyingGlass} />
          </BoxIcon>
        </Search>
      </Center>
      <Right>
        <Login>
          <p>Inicio sesión</p>
          <p>
            Hola!, <br /> Inicia sesión
          </p>
          <IconLow icon={faChevronDown} />
        </Login>
        <BoxCart>
          <Cart icon={faCartShopping} />
          <Counter>2</Counter>
        </BoxCart>
      </Right>
    </Container>
  );
};

export default Header;
