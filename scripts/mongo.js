// docker run -it --rm --name mongo-express --network web_default -p 8081:8081 -e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance" -e ME_CONFIG_BASICAUTH_USERNAME="hunter" -e ME_CONFIG_MONGODB_URL="mongodb://mongo:27017" mongo-express



//     db.createUser({user: "hunter",pwd: "xalc",roles: [{ role: "readWrite", db: "unrealdata" }]})


// Only nodejs example

import { MongoClient } from 'mongodb'
import WRAPI from './wereader-api.js';
const url = 'mongodb://hunter:123654@localhost:27017';
const dbName = 'knowledge';
const client = new MongoClient(url);

const checkValidUserHandler = async (user, password) => {
    console.log("user" + user);
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');
    const filteredUser = await collection.find({ name: user }).toArray();
    console.log(`filteredUser : ${JSON.stringify(filteredUser)}`)
    console.log(`password ${password}`);
    if (filteredUser.findIndex((user) => user.password === password) !== -1) {
        return true;
    }

    // the following code examples can be pasted here...

    return false;
}

const writeSheltDatatoDb = async () => {
    const data = await WRAPI.getShelt();
    await client.connect();
    const db = client.db(dbName);
    const booksCollection = db.collection('books');
    const bookProgress = db.collection('bookProgress');
    const booksInsertResult = await booksCollection.insertMany(data.books);
    console.log(`books is acknowledged: ${booksInsertResult.acknowledged}. insert count: ${booksInsertResult.insertedCount}`);

    const bookprogressResult = await bookProgress.insertMany(data.bookProgress);
    console.log(`book progress is acknowledged: ${bookprogressResult.acknowledged}. insert count: ${bookprogressResult.insertedCount}`);
    client.close();
}
writeSheltDatatoDb();
