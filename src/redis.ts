import * as redis from 'redis';
import db from './config/db';

const redisUrl = db.REDIS_URL;

export class RedisClient {
    redis(){
        return redis.createClient({
            host: 'redis'
        });
    }
}
