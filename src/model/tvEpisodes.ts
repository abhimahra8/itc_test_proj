import * as mongoose from "mongoose";

const EpisodeModelSchema = new mongoose.Schema({

  id: {
    type: String,
    unique: true
  },
  episodes: {
    default: [],
    type: Array,
  },
  overview:{
    default:"N/A",
    type: String,
  },
  season_number: {
    default: "N/A",
    type: String,
  },
  air_date: {
    default: null,
    type: Date,
  },
  __v: {type: Number, select: false},
}, {timestamps: true});

export const EpisodeModel = mongoose.model('Episode', EpisodeModelSchema);
