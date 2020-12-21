import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { MemoryRouter as Router } from "react-router-dom";
import Ctx from "./TodosState";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <Ctx>
        <App />
      </Ctx>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
