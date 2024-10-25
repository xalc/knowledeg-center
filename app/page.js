
import { Image, Alert } from 'antd';

export default async function Page() {

    const bingURL = 'https://bing.biturl.top/';
    const response = await fetch(bingURL);
    if (response.ok) {
        const image = await response.json();
        return (
            <div>
                <h1>Hello, Next.js!</h1>
                <Image alt={image.title} src={image.url} />
            </div>
        );
    }
    const error = await response.error();
    return <Alert message="Error"
        description={error.message}
        type="error"
        showIcon />

}