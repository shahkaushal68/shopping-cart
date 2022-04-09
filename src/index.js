import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CartContext from "./context/CartContext";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <CartContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContext>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
