import { NextResponse } from 'next/server'
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export async function GET(request) {
    try {
        const bingImageUrl = 'https://api.cyrilstudio.top/bing/image.php';
        const url = 'https://swapi.dev/api/films/';
        const response = await axios.get(bingImageUrl);

        return NextResponse.json(response.data);
    } catch (error) {
        throw error;
    }
}