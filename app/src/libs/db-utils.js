import MongoDBManager from "@/api/libs/dbmanager";
import { getDbString } from "@/api/libs/utils";
import { WE_READER_DB_NAME, READING_TIMES_COLLECTION } from "./constants";

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