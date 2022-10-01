import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FalabellaPovider from "./context/FalabellaPovider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <FalabellaPovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FalabellaPovider>
  // </React.StrictMode>
);
