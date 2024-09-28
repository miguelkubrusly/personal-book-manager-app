import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/books";

const el: HTMLElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(el) as Root;

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
