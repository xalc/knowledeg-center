
import traversDir from '../libs/mdxparser';
import traversTree from '../libs/antdTreeData';
import { NextResponse } from 'next/server'



export async function GET(request) {
    const topics = await traversDir();
    const antdTree = traversTree(topics);
    return NextResponse.json(antdTree)
}