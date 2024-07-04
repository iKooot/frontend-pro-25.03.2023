import React from "react";
import ReactDOM from "react-dom/client";
import { AppWrapper } from "./AppWrapper.jsx";
import './services/style/main.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
);
