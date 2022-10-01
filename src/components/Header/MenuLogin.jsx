import React, { useEffect } from "react";
import { Position } from "../../styles/Header";
import { BoxMenu, ItemMenu } from "../../styles/Menu";
import Modal from "../Modal/Modal";

const MenuLogin = ({ onFormLogin }) => {
  useEffect(() => {
    console.log("Menu Login");
  });

  return (
    <>
      <Position>
        <BoxMenu before="right">
          <ItemMenu onClick={onFormLogin}>Inicio de sesion</ItemMenu>
          <ItemMenu>Registrate</ItemMenu>
        </BoxMenu>
      </Position>
      <Modal></Modal>
    </>
  );
};

export default MenuLogin;
