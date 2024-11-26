
import { getDBAddr } from '@/libs/utils';
import { NextResponse } from 'next/server';


export function GET() {

	const dbStr = getDBAddr();



	return NextResponse.json({ dbStr });
}
