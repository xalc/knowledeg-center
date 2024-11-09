const userName = process.env.MONGO_USERNAME;
const pwd = process.env.MONGO_PASSWORD;
const address = process.env.MONGO_ADDR;
const port = process.env.MONGO_PORT;

export const getDbString = () => {
    const url = `mongodb://${userName}:${pwd}@${address}:${port}`;
    return url;
}
