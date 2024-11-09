import { NextResponse } from 'next/server'
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export async function GET(request) {
    try {
        const bingURL = 'https://bing.biturl.top/';
        const response = await axios.get(bingURL);
        return NextResponse.json(response.data);
    } catch (error) {
        throw error;
    }
}
// https://github.com/TimothyYe/bing-wallpaper

// example response
// const response = { "start_date": "20241011", "end_date": "20241012", "url": "https://www.bing.com/th?id=OHR.QuebecDuck_ZH-CN0588954873_1920x1080.jpg", "copyright": "林鸳鸯，魁北克省，加拿大 (© Maxime Riendeau/Getty Images)", "copyright_link": "https://www.bing.com/search?q=%E6%9E%97%E9%B8%B3%E9%B8%AF\u0026form=hpcapt\u0026mkt=zh-cn" }