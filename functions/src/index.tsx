import * as functions from 'firebase-functions';
// import * as db from 'firebase-database';
import * as ReactDOMServer from "react-dom/server";
import { questions } from "./questions";
import Document from "./Document";
import { StaticRouter } from "react-router";
import App from "../../client/src/main/pages/App/App";
import * as React from "react";

// const database = db.database();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const app = functions.https.onRequest((req, res) => {
    const html: string = ReactDOMServer.renderToString(
        <Document title="Simple" bundle="app.js" preloadedState={questions}>
            <StaticRouter location={req.originalUrl} context={{ url: req.url }}>
                <App data={questions as any}/>
            </StaticRouter>
        </Document>
    );

    res.send(html);
});

// export function post(data) {
//     database().ref('questionnaire/').set(data);
// }
