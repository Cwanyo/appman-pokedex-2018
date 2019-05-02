import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./index.style";
// import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById("root")
);
