import React from "react";
import ReactDOM from "react-dom";
import Hello from "../src/components/Hello";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Hello text="Hello">
      <h1>Hello</h1>
    </Hello>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
