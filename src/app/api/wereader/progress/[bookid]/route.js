
import DBInstance from "../../../libs/db.js";
import MongoDBManager from "../../../libs/dbmanager.js";
import { getDbString } from "../../../libs/utils.js";
import { NextResponse } from 'next/server'
export async function GET(request, { params }) {

    const bookid = (await params).bookid;
    try {
        const dbInstance = new MongoDBManager(getDbString(), 'knowledge');
        await dbInstance.connect();
        let progress = await dbInstance.findOne('bookProgress', { bookId: bookid })
        if (progress === null) {
            progress = {}
        }
        return NextResponse.json(progress);





    } catch (error) {
        return NextResponse.json({ error: error.message });
    }




}