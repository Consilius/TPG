import * as bodyParser from 'body-parser';
import * as express from 'express';
import { rootRouter } from "./routes/index";
import { resolve } from "path";
const config = require('dotenv').config();

process.env.SECRET = "secret_key";
console.log("ARGS", config);
const app = express();
const host = 'http://localhost';
const port = Number(process.env.npm_config_port) || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./public"));
app.use(express.static(resolve(__dirname, "../../../client", `build/${process.env.NODE_ENV === "development" ? "dev" : "prod"}`)));

app.use("/", rootRouter);

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port);
});

/*****************************/
/***** Application logic *****/
/*****************************/
