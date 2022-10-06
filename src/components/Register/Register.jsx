import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  BoxPassword,
  BoxPhone,
  Container,
  FormRegister,
  GoToLogin,
  IconPassword,
  InfoRegister,
  InputBox,
  InputRegister,
  Inputs,
  ItemLegend,
  LabelRegister,
  LegendPassword,
  Paragraph,
  Title,
} from "../../styles/Register";
import Information from "./Information";

const Register = () => {
  return (
    <Container>
      <FormRegister>
        <Title>Registrate</Title>
        <Paragraph>
          Ingresa tus datos personales y disfruta de una experiencia de compra
          más rápida.
        </Paragraph>
        <Inputs>
          <InputBox>
            <LabelRegister htmlFor="name">Nombre</LabelRegister>
            <InputRegister
              type="text"
              id="name"
              placeholder="Ingresa tu nombre"
            />
          </InputBox>
          <InputBox>
            <LabelRegister htmlFor="lastname">Apellido Paterno</LabelRegister>
            <InputRegister
              type="text"
              id="lastname"
              placeholder="Ingresa tu apellido"
            />
          </InputBox>
          <InputBox>
            <LabelRegister htmlFor="numberDoc">N° de documento</LabelRegister>
            <InputRegister
              type="text"
              id="numberDoc"
              placeholder="Ingresa tu DNI"
            />
          </InputBox>
          <InputBox>
            <LabelRegister htmlFor="phone">Celular</LabelRegister>
            <BoxPhone>
              <span>+51</span>
              <InputRegister
                type="text"
                id="phone"
                placeholder="Ingresa tu número de celular"
              />
            </BoxPhone>
          </InputBox>
          <InputBox>
            <LabelRegister htmlFor="email">Correo electrónico</LabelRegister>
            <InputRegister
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
            />
          </InputBox>
          <InputBox>
            <LabelRegister htmlFor="password">Contraseña</LabelRegister>
            <BoxPassword>
              <InputRegister
                type="password"
                id="password"
                placeholder="Ingresa una contraseña"
              />
              <span>
                <IconPassword icon={faEye} />
              </span>
            </BoxPassword>
          </InputBox>
          <LegendPassword>
            <p>Debes usar al menos:</p>
            <ul>
              <ItemLegend>Mínimo 8 caracters</ItemLegend>
              <ItemLegend>1 mayúscula</ItemLegend>
              <ItemLegend>1 minúscula</ItemLegend>
              <ItemLegend>1 número</ItemLegend>
              <ItemLegend>Ningún espacio</ItemLegend>
            </ul>
          </LegendPassword>
          <InfoRegister>
            <Information />
          </InfoRegister>
          <InputBox type="checkbox">
            <InputRegister type="checkbox" id="conditions" />
            <LabelRegister htmlFor="conditions" type="checkbox">
              Al registrarte estás aceptando <a>términos y condiciones</a>
            </LabelRegister>
          </InputBox>
          <InputBox type="checkbox">
            <InputRegister type="checkbox" id="conditionsCMR" />
            <LabelRegister htmlFor="conditionsCMR" type="checkbox">
              Acepto los <a>términos y condiciones</a> para acceder al programa
              CMR Puntos
            </LabelRegister>
          </InputBox>
        </Inputs>
        <button type="button">Registrarme</button>
        <GoToLogin>
          ¿Ya tienes cuenta? <a>Inicia Sesión</a>
        </GoToLogin>
      </FormRegister>
      <InfoRegister desktop>
        <Information />
      </InfoRegister>
    </Container>
  );
};

export default Register;
