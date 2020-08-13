import * as mongoose from "mongoose";

const SeriesModelSchema = new mongoose.Schema({

  id: {
    type: String,
    unique: true
  },
  series_name: {
    default: "N/A",
    type: String,
  },
  overview:{
    default:"N/A",
    type: String,
  },
  status: {
    default: "N/A",
    type: String,
  },
  vote_average: {
    default: 0,
    type: Number,
  },
  vote_count: {
    default: 0,
    type: Number,
  },
  languages: {
    default: "N/A",
    type: String,
  },
  first_air_date: {
    default: null,
    type: Date,
  },
  no_of_season: {
    default:0,
    type: Number
  },
  __v: {type: Number, select: false},
}, {timestamps: true});

export const SeriesModel = mongoose.model('Series', SeriesModelSchema);