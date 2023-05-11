import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/tech_part_cards">
    <App />
  </BrowserRouter>
);
