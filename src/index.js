import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path={"/"} component={App} />
    <Route path={"/about"} component={About} />
    <Route path={"/work"} component={Work} />
    <Route path={"/contact"} component={Contact} />
  </BrowserRouter>,
  document.getElementById("root")
);
