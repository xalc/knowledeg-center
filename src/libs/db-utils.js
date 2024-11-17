import MongoDBManager from '@/libs/dbmanager.js';
import { getDbString } from '@/libs/utils.js';
import {
	WE_READER_DB_NAME,
	READING_TIMES_COLLECTION,
	BOOK_PROGRESS_C,
	READING_TIME_SYNC_KEY,
	SYNC_HISTORY_COLLECTION,
	BOOKS_C,
} from './constants.js';

export const getDBReadingTimes = async () => {
	try {
		const dbInstance = new MongoDBManager(getDbString(), WE_READER_DB_NAME);
		await dbInstance.connect();
		const result = await dbInstance.findMany(READING_TIMES_COLLECTION, {});

		const readSyncTime = await dbInstance.findOne(SYNC_HISTORY_COLLECTION, {
			keyName: READING_TIME_SYNC_KEY,
		});
		let syncId = 0;
		if (readSyncTime !== null) {
			syncId = readSyncTime.keyValue;
		}
		await dbInstance.disconnect();
		return { readingTimes: result, lastSynced: syncId };
	} catch (error) {
		console.error(`Get Reading data failed:  ${error}`);
		throw error;
	}
};

export const getDBReadingBooks = async () => {
	const dbInstance = new MongoDBManager(getDbString(), WE_READER_DB_NAME);
	await dbInstance.connect();
	const result = await dbInstance.findMany(BOOKS_C, {});

	await dbInstance.disconnect();
	return result.sort((doc1, doc2) => doc2.readUpdateTime - doc1.readUpdateTime);
};
export const getDBBookProgress = async bookid => {
	const dbInstance = new MongoDBManager(getDbString(), WE_READER_DB_NAME);
	await dbInstance.connect();
	let progress = await dbInstance.findOne(BOOK_PROGRESS_C, { bookId: bookid });
	if (progress === null) {
		progress = {};
	}

	await dbInstance.disconnect();
	return progress;
};
export const getAllReadingStatus = async () => {
	const dbInstance = new MongoDBManager(getDbString(), WE_READER_DB_NAME);
	await dbInstance.connect();
	const status = await dbInstance.findMany(BOOK_PROGRESS_C, {});

	await dbInstance.disconnect();
	return status;
};
