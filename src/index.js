import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById("root"));
function tick() {
  ReactDOM.render(<App date={new Date()} />, document.getElementById("root"));
}
setInterval(tick, 1000);
// setInterval(<App />, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
