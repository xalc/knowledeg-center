'use client'
import { useRouter } from 'next/navigation'
import { theme, Button, Breadcrumb, Alert, Image } from 'antd';

import Link from 'next/link';
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
                // reference https://zhuanlan.zhihu.com/p/602020789
                const bingImageUrl = 'https://api.cyrilstudio.top/bing/image.php'
                const url = 'https://swapi.dev/api/films/';
                const response = await fetch('/api');
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                // const imageObj = await JSON.parse(response);

                setImage({});
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
        <>

            <Breadcrumb
                items={[{
                    title: <Link href="/"> Home</Link>,
                }, {
                    title: <Link href="/login"> Login</Link>,

                }, {
                    title: "items"
                }]}
            >

            </Breadcrumb>
            <div
                className="site-layout-content"
                style={{
                    background: colorBgContainer,
                }}
            >
                <h1>Hello, Next.js!</h1>


                {!imageLoading && image && <Image alt={image.title} src={'https://api.cyrilstudio.top/bing/image.php'} />}
                {!imageLoading && error && <Alert
                    message="Error"
                    description={error.message}
                    type="error"
                    showIcon
                />}
            </div>




        </>
    );
}