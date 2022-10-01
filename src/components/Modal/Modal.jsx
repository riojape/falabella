import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BgModal } from "../../styles/Modal";

const Modal = ({ children }) => {
  useEffect(() => {
    console.log("Modal");
  });
  return ReactDOM.createPortal(
    <BgModal>{children}</BgModal>,

    document.getElementById("modal")
  );
};

export default Modal;
