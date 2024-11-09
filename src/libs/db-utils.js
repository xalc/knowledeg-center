import MongoDBManager from "@/libs/dbmanager.js";
import { getDbString } from "@/libs/utils.js";
import { WE_READER_DB_NAME, READING_TIMES_COLLECTION, BOOK_PROGRESS_C, KNOWLEDGE_DB_NAME, BOOKS_C } from "./constants.js";

export const getDBReadingTimes = async () => {
    try {
        const dbInstance = new MongoDBManager(getDbString(), WE_READER_DB_NAME);
        await dbInstance.connect();
        const result = await dbInstance.findMany(READING_TIMES_COLLECTION, {});
        await dbInstance.disconnect();
        return result;

    } catch (error) {
        console.error(`Get Reading data failed:  ${error}`);
        throw (error)
    }
}
export const getDBReadingBooks = async () => {
    const dbInstance = new MongoDBManager(getDbString(), KNOWLEDGE_DB_NAME);
    await dbInstance.connect();
    const result = await dbInstance.findMany(BOOKS_C, {});
    await dbInstance.disconnect();
    return result;
}
export const getDBBookProgress = async (bookid) => {
    const dbInstance = new MongoDBManager(getDbString(), KNOWLEDGE_DB_NAME);
    await dbInstance.connect();
    let progress = await dbInstance.findOne(BOOK_PROGRESS_C, { bookId: bookid })
    if (progress === null) {
        progress = {}
    }

    await dbInstance.disconnect();
    return progress;

}