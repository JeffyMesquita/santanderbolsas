import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import App2 from "./components/App2";
import App4 from "./components/App4";
import App3 from "./components/App3";
import {Lista2, Item} from "./components/Lista2";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Lista2>
      <Item key={999} id={999} completo={false}>
        Teste1
      </Item>
      <Item key={998} id={998} completo={true}>
        Teste2
      </Item>
    </Lista2> 
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
