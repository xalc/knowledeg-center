
import { getMDXContent } from '../../libs/mdxparser';
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const data = await getMDXContent(key);
    return new Response(data, {
        headers: { 'Content-Type': 'text/plain' }
    })

}