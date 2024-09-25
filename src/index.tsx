import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App";

const el: HTMLElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(el) as Root;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
