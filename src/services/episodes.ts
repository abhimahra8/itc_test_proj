import axios from 'axios';
import { EpisodeModel } from "../model/tvEpisodes";
import { redisClient } from "../database";
import { counter } from "../utility/common";

export class TvEpisode {
   
    async getTvEpisode(payload:any){
        
        const res = [];
        try{
            const result = await axios.get(`${process.env.API_URL}/${payload.tvId}/season/${payload.season_no}?api_key=${process.env.API_KEY}`);

            const defaults: any = {
                id: result.data.id,
                episodes: result.data.episodes,
                season_no: result.data.season_no,
                overview: result.data.overview,
                air_date: result.data.air_date,
            };

            const foundResult = await EpisodeModel.findOne({ id: result.data.id});
            
            if(foundResult){
                return foundResult;
            } 
            const response = await EpisodeModel.create(defaults);
            
            if(response){
                const sortResp = response.get('episodes').sort((a,b)=>{
                    return b.vote_average - a.vote_average;
                })
                sortResp.map(data => {
                    res.push({
                        name: data.name,
                        averageVote: data.vote_average
                    })
                })
                res.splice(20,res.length);
                redisClient.set(`${payload.tvId}_${payload.season_no}`, JSON.stringify(res));
                counter(payload.tvId);
                return res;
            }

        } catch(err) {
            return {
                message: 'Episode service: Data not found',
                status: err.response.status
            }
        }
    } 
}