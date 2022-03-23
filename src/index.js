import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";
import routes from "./routes";
import AppProvider from "./appprovider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <Router>{routes}</Router>
    </AppProvider>
  </StrictMode>,
  rootElement
);
