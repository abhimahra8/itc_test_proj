import axios from 'axios';
import { counterModel } from "../model/counter";

export async function counter(tv_id){
    let result;
    result = await counterModel.findOne({tv_id})
    if(result){
        let counter = result.get('counter');
        result = await result.update({counter:counter+1})
    } else {
        const response = await axios.get(`${process.env.API_URL}/${tv_id}?api_key=${process.env.API_KEY}`);
        result = await counterModel.create({counter:1, tv_id, seriesName: response.data.original_name ? response.data.original_name : 'N/A'})
    }
    if(result._update){
        return result._update;
    } 
    return result;

}