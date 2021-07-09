import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import App2 from "./components/App2";
import App4 from "./components/App4";
import App3 from "./components/App3";
import {Lista2, Item} from "./components/Lista2";
import Formulario from "./components/Formulario";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Formulario />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
