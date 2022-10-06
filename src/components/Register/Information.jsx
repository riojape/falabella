import React from "react";
import {
  ContentInfo,
  IconInfo,
  InfoRegister,
  Title,
} from "../../styles/Register";
import {
  faClipboardList,
  faMobileScreen,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const Information = ({ desktop }) => {
  return (
    <InfoRegister desktop>
      <Title>Al crear tu cuenta en falabella.com podrás:</Title>
      <div>
        <ContentInfo>
          <IconInfo icon={faTruckFast} />
          <div>
            <p>Hacer seguimiento de tus compras</p>
            <span>
              Puedes ingresar a tu cuenta y ver el progreso de tu orden.
            </span>
          </div>
        </ContentInfo>
        <ContentInfo>
          <IconInfo icon={faMobileScreen} />
          <p>
            Recibir notificaciones en tiempo real sobre el estado de tu compra.
          </p>
        </ContentInfo>
        <ContentInfo>
          <IconInfo icon={faClipboardList} />
          <p>Imprimir tus boletas o tickets de cambio</p>
        </ContentInfo>
      </div>
    </InfoRegister>
  );
};

export default Information;
