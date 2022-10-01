import React from "react";
import { BoxMenu, Item } from "../../styles/Menu";

const Menu = () => {
  return (
    <BoxMenu before="right">
      <ul>
        <Item>Iniciar sesión</Item>
        <Item>Registrate</Item>
      </ul>
    </BoxMenu>
  );
};

export default Menu;
