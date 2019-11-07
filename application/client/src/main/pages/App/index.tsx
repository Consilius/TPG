import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const preloadedState = window["APP_STATE"];
console.log(preloadedState);

hydrate(
    <BrowserRouter>
        <App state={preloadedState}/>
    </BrowserRouter>,
    document.getElementById("root")
);
