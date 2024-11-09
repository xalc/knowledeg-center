


import { NextResponse } from 'next/server'
import { getDBBookProgress } from "@/libs/db-utils.js";
export async function GET(request, { params }) {

    const bookid = (await params).bookid;
    try {
        const progress = await getDBBookProgress(bookid);
        return NextResponse.json(progress);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }




}