
import { Image, Alert } from 'antd';

export default async function Page() {

    try {
        const bingURL = 'https://bing.biturl.top/';
        const response = await fetch(bingURL, { next: { revalidate: 3600 } });

        if (response.ok) {
            const image = await response.json();
            return (
                <div>
                    <h1>My personal knowledge graph!</h1>
                    <Image alt={image.title} src={image.url} />
                </div>
            );
        }
    } catch (error) {
        console.error('fetch bing image error' + error);
        return <Alert message="Error"
            description={error.message}
            type="error"
            showIcon />;
    }




}