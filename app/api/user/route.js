import { MongoClient } from 'mongodb'

// Database Name
const dbName = 'knowledge';
const url = 'mongodb://hunter:123654@localhost:27017';
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

import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
export async function POST(request) {

    const { user, password } = await request.json();


    const resp = await checkValidUserHandler(user, password);
    console.log(`isValid: ${resp}`)
    return NextResponse.json({ "isValudUser": resp })

}
export async function GET(request) {
    try {
        return NextResponse.json({ "hello": "world" });
    } catch (error) {
        throw error;
    }
}