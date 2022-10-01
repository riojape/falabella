import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Delete,
  Form,
  FormField,
  FormFooter,
  FormHeader,
  FormMain,
  InputLogin,
  LabelLogin,
  Restore,
  Title,
} from "../../styles/Header";

const FormLogin = ({ formRef, close }) => {
  return (
    <Form ref={formRef}>
      <Delete icon={faCircleXmark} onClick={close} />
      <FormHeader>
        <img src="#" alt="imagen" />
        <Title>¡Que bueno tenerte de vuelta!</Title>
      </FormHeader>
      <FormMain>
        <FormField>
          <LabelLogin htmlFor="email">Correo Electronico</LabelLogin>
          <InputLogin id="email" type="text" />
        </FormField>
        <FormField>
          <LabelLogin htmlFor="password">Contraseña</LabelLogin>
          <InputLogin id="password" type="password" />
        </FormField>
        <Restore>Restablecer contraseña</Restore>
        <Button>Ingresar</Button>
      </FormMain>
      <FormFooter>
        <div>o</div>
        <p>
          ¿Aún no tienes cuenta? <Link>Regístrate</Link>
        </p>
      </FormFooter>
    </Form>
  );
};

export default FormLogin;
