import * as mongoose from "mongoose";

const counterModelSchema = new mongoose.Schema({
    tv_id: {
        type: Number,
        default: 0
    },
    counter: {
        default: 0,
        type: Number,
    },
    seriesName:{
        default:"N/A",
        type: String
    },
    __v: {type: Number, select: false},
  }, {timestamps: true});


export const counterModel = mongoose.model('counter', counterModelSchema);