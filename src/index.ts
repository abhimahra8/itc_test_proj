import { config as dotenvConfig } from "dotenv";
dotenvConfig();

import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import Database from "./database";

import routerSeries from './routes/series';
import routerEpisode from './routes/episodes';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routerSeries);
app.use('/', routerEpisode);

const server = http.createServer(app);

server.listen(PORT, () => {
    try{
      Database.init();
      console.log(`Server running at: http://localhost:${PORT}`);
    } catch(err){
      console.log("Error while running server");
    }
});

export { app };  