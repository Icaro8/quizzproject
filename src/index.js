import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RoutesAplication } from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <RoutesAplication />
  </BrowserRouter>,
  document.getElementById("root")
);
