import * as bodyParser from 'body-parser';
import * as express from 'express';
import { resolve } from "path";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

import Document from "./Document";
import App from "../../client/src/main/pages/App/App";
import { questions } from "../../functions/src/questions";

const app = express();
const host = 'http://localhost';
const port = Number(process.env.npm_config_port) || 3000;
const state: any = questions;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(resolve(__dirname, "../../assets")));
app.use(express.static(resolve(__dirname, "../../client", `dist/${process.env.NODE_ENV === "development" ? "dev" : "prod"}`)));

app.use("*", (req, res) => {
  const html: string = ReactDOMServer.renderToString(
      <Document title="www.tpg.sk" bundle="app.js" preloadedState={state}  domain={req.get("host")}>
          <StaticRouter location={req.originalUrl} context={{ url: req.url }}>
              <App data={state}/>
          </StaticRouter>
      </Document>
  );

  res.set("Content-Type", "text/html");
  res.send("<!doctype html>" + html);
});

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port);
});
