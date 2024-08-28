'use client'
import { useRouter } from 'next/navigation';
import { theme, Button, Breadcrumb, Alert, Image } from 'antd';

import { useEffect, useState } from 'react';
export default function Page() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const route = useRouter();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBingImage = async () => {
            setImageLoading(true);
            try {
                const response = await fetch('/api');
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                const imageObj = await response.json();

                setImage(imageObj);
                setError(null);
            } catch (error) {
                setError(error);
            } finally {
                setImageLoading(false)
            }

        }
        fetchBingImage();
    }, []);
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            {!imageLoading && image && <Image alt={image.title} src={image.url} />}
            {!imageLoading && error && <Alert
                message="Error"
                description={error.message}
                type="error"
                showIcon
            />}
        </div>
    );
}