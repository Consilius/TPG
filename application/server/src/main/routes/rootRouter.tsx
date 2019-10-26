import { Router } from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import Document from "../Document";
import { StaticRouter } from "react-router";
import App from "../../../../client/src/main/pages/App/App";

const router: Router = Router();

router.use("/", (req, res) => {
    const html: string = ReactDOMServer.renderToString(
        <Document title="Simple" bundle="app.js" preloadedState={{}}  domain={req.get("host")}>
            <StaticRouter location={req.originalUrl} context={{ url: req.url }}>
                <App />
            </StaticRouter>
        </Document>
    );

    res.set("Content-Type", "text/html");
    res.send("<!doctype html>" + html);
});


export default router;
