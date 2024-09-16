// docker run -it --rm --name mongo-express --network web_default -p 8081:8081 -e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance" -e ME_CONFIG_BASICAUTH_USERNAME="hunter" -e ME_CONFIG_MONGODB_URL="mongodb://mongo:27017" mongo-express



//     db.createUser({user: "hunter",pwd: "xalc",roles: [{ role: "readWrite", db: "unrealdata" }]})


// Only nodejs example

import { MongoClient } from 'mongodb'
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
console.log(await checkValidUserHandler('xalc', '123456'));