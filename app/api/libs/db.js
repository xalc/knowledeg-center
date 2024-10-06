import { MongoClient } from 'mongodb'

// Database Name
const dbName = process.env.MONGO_DATABASE;
const userName = process.env.MONGO_USERNAME;
const pwd = process.env.MONGO_PASSWORD;
const address = process.env.MONGO_ADDR;
const port = process.env.MONGO_PORT;
const url = `mongodb://${userName}:${pwd}@${address}:${port}`;
const client = new MongoClient(url);


export default client;