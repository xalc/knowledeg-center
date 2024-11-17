import { MongoClient } from 'mongodb';

class MongoDBManager {
	constructor(connectionStr, dbName) {
		this.connectionStr = connectionStr;
		this.dbName = dbName;
		this.client = new MongoClient(connectionStr);
	}
	async connect() {
		try {
			await this.client.connect();
			this.db = this.client.db(this.dbName);
		} catch (error) {
			console.error('Error connecting to MongoDB:', error);
			throw error;
		}
	}
	async disconnect() {
		try {
			await this.client.close();
		} catch (error) {
			console.error('Error disconnecting from MongoDB:', error);
			throw error;
		}
	}
	async findOne(collectionName, filter) {
		try {
			const collection = this.db.collection(collectionName);
			const result = await collection.findOne(filter);
			return result;
		} catch (error) {
			console.error('Error finding document:', error);
			throw error;
		}
	}
	async findMany(collectionName, filter) {
		try {
			const collection = this.db.collection(collectionName);
			const cursor = collection.find(filter);
			return await cursor.toArray();
		} catch (error) {
			console.error('Error finding documents:', error);
			throw error;
		}
	}
}
export default MongoDBManager;
