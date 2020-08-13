import axios from 'axios';
import { SeriesModel } from "../model/tvSeries";
import { redisClient } from "../database";
import { counterModel } from '../model/counter';

export class TvSeries {

    // method to get tv series detail
   
    async getTvSeries(payload:any){
        
        let result;
        try{
            result = await axios.get(`${process.env.API_URL}/${payload.tvId}?api_key=${process.env.API_KEY}`);
        } catch(err) {
            return(err.response.data);
        }

        try{
            const defaults: any = {
                id: result.data.id,
                series_name:result.data.original_name,
                overview: result.data.overview,
                status: result.data.status,
                vote_average: result.data.vote_average,
                vote_count: result.data.vote_count,
                languages: result.data.original_language,
                first_air_date: result.data.first_air_date,
                no_of_season: result.data.number_of_seasons
            };

            const foundResult = await SeriesModel.findOne({ id: result.data.id});
            
            if(foundResult){
                return foundResult;
            } 
            const response = await SeriesModel.create(defaults);
            if(response){
                console.log("Got result from DB in routes");
                redisClient.set(payload.tvId, JSON.stringify(response));
                return response;
            }

        } catch(err) {
            throw new Error('Series service: Error in Database')
        }
    } 

    // method for getting top tv series based on number of time user access the episodes api

    async getTopTvSeries(){
        const series = [];
        const foundResult = await counterModel.find({}).sort({counter:'desc'}).limit(5);
        if(foundResult){
            foundResult.forEach(element => {
                series.push({
                    seriesName: element.get('seriesName'),
                    counter: element.get('counter')
                })
            })
            return series;
        }
        return {message: "No records found"};
        
    }
}