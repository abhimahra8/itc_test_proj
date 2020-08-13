import * as express from 'express';
import { Request, Response } from "express";
import { checkData } from '../middleware';
import { TvSeries } from "../services/series";

const routerSeries = express.Router();
const series= new TvSeries();

routerSeries.get('/tv/:tvId', checkData, async function(req:Request , res:Response) {
    const result:any = await series.getTvSeries(req.params);
    if(result){
        res.status(200).send(result);
    }
})  

routerSeries.get('/topTvSeries', async function(_ , res:Response) {
    const result:any = await series.getTopTvSeries();
    if(result){
        res.status(200).send(result);
    }
})  

export default routerSeries;