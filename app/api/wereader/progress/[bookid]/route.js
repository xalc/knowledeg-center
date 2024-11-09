
import DBInstance from "@/api/libs/db";
import MongoDBManager from "@/api/libs/dbmanager";
import { getDbString } from "@/api/libs/utils";
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