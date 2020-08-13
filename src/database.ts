import { connect, Mongoose, Model } from "mongoose";
import db from "./config/db";
import { SeriesModel } from "./model/tvSeries";
import { EpisodeModel } from './model/tvEpisodes';
import { counterModel } from "./model/counter";
import * as redis from 'redis';

const redisUrl = process.env.REDIS_URL;

class Database {

  static mongoose: Mongoose;
  static Series: Model<any, {}>;
  static Episode: Model<any, {}>;
  static Counter: Model<any, {}>;

  static initModel() {
    this.Series = SeriesModel;
    this.Episode = EpisodeModel;
    this.Counter = counterModel;
  }

  static init() {
    return new Promise((resolve, reject) => {
      connect(db.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((mongoose) => {
        console.log("Mongo connected");
        Database.mongoose = mongoose;
        this.initModel();
        return resolve(true);
      }).catch((error) => {
        console.log("error", error);
        return reject(error);
      });
    });
  }
}

export default Database;

export const redisClient = redis.createClient({
  host: 'redis'
});