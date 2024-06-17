import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const el = (
    <>
      <h1>Hello react!</h1>
      <h2>It is {new Date().toLocaleString()}.</h2>
      <App />
    </>
  );
  root.render(el);
}

setInterval(tick, 1000)
