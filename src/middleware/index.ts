import { Request, Response, NextFunction } from "express";
import { redisClient } from "../database";
import { counter } from "../utility/common"

const util = require('util');

redisClient.get = util.promisify(redisClient.get);

export async function checkData(req:Request, res:Response, next:NextFunction){
    let cachedData:any ;
    if(!req.params.season_no){
        cachedData = await redisClient.get(req.params.tvId);
        if(cachedData){
            return res.send(JSON.parse(String(cachedData)));
        }
        next();
    } else {
        cachedData = await redisClient.get(`${req.params.tvId}_${req.params.season_no}`);
        if(cachedData){
            counter(req.params.tvId);
            return res.send(JSON.parse(String(cachedData)));
        }
        next();
    }
};