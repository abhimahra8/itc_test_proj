import * as express from 'express';
import { Request, Response } from "express";
import { checkData } from '../middleware';
import { TvEpisode } from "../services/episodes";

const routerEpisode = express.Router();
const episode= new TvEpisode();

routerEpisode.get('/topEpisodes/:tvId/season/:season_no', checkData, async function(req:Request , res:Response) {
    const result:any = await episode.getTvEpisode(req.params);
    if(result && result.message){
        res.status(result.status).send(result);
    } else {
        res.status(200).send(result);
    }
})  

export default routerEpisode;