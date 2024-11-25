const userName = process.env.MONGO_USERNAME;
const pwd = process.env.MONGO_PASSWORD;
const address = process.env.MONGO_ADDR;
const port = process.env.MONGO_PORT;



const onlineDB = process.env.USE_ATLAS_DATABASE;
const atlasName = process.env.ATLAS_NAME;
const atlasPD = process.env.ATLAS_PD;
const cluster = process.env.ATLAS_CLUSTER;


export const getDbString = () => {
	let dbaddr = '';

	if (onlineDB) {
		dbaddr = `mongodb+srv://${atlasName}:${atlasPD}@${cluster}?retryWrites=true&w=majority&appName=Cluster0`
	}

	dbaddr = `mongodb://${userName}:${pwd}@${address}:${port}`;

	return dbaddr;

};
