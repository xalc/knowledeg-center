import { NextResponse } from 'next/server'
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export async function GET(request) {
    try {
        const bingImageUrl = 'https://api.bimg.cc/all?page=1&order=asc&limit=1&w=1920&h=1080&mkt=zh-CN';
        const response = await axios.get(bingImageUrl);
        return NextResponse.json(response.data.data[0]);
    } catch (error) {
        throw error;
    }
}