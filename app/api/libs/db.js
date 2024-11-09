import { MongoClient } from 'mongodb'

// Database Name
const dbName = process.env.MONGO_DATABASE;
const userName = process.env.MONGO_USERNAME;
const pwd = process.env.MONGO_PASSWORD;
const address = process.env.MONGO_ADDR;
const port = process.env.MONGO_PORT;
// const url = `mongodb://${userName}:${pwd}@${address}:${port}`;
// const client = new MongoClient(url);
const url = `mongodb://${userName}:${pwd}@${address}:${port}`;
class DBInstance {

    constructor(db, collection) {
        this.instance = null;
        this.client = new MongoClient(url);
        this.db = db;
        this.collection = collection;
    }
    static getInstance(db, collection) {
        if (!this.instance) {
            this.instance = new DBInstance(db, collection);
        }
        return this.instance;
    }


    async execute(func, close = true) {
        await this.client.connect();
        const dbInstance = this.client.db(dbName);
        const collection = dbInstance.collection(this.collection);
        const result = await func(collection);
        if (close) {
            this.client.close();
        }

        return result;
    }
    closeConnect() {
        this.client.close
    }
    async connect() {
        await this.client.connect()
    }
    getClient() {
        return this.client;
    }

}
export default DBInstance;