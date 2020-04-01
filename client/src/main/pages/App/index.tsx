import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const preloadedState = window["APP_STATE"];

hydrate(
    <BrowserRouter>
        <App data={preloadedState}/>
    </BrowserRouter>,
    document.getElementById("app")
);
