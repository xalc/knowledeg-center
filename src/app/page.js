'use client'
import { createStyles } from 'antd-style';
// import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Title from 'antd/es/typography/Title';
import { Button } from 'antd';
const useStyles = createStyles(({ css, token }) => {
	return {
		container: css`
			display: flex;
			justify-content: center;
			flex-direction: column;
			height: 100vh;
			align-items: center;
			padding-bottom: ${token.paddingSM}rem

		`,
		landing: css`
			background-image: url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN);
			height: 100vh;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		`,
	};
});
export default function Page() {
	const { styles } = useStyles();
	const route = useRouter();
	// useEffect(() => {
	// 	const fetchBingImage = async () => {
	// 		const bingURL = 'https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=zh-CN';
	// 		const response = await fetch(bingURL, { next: { revalidate: 3600 } });
	// 		if (response.ok) {
	// 			await response.json();
	// 		}
	// 	}
	// whether to display the image copyright info
	// 	fetchBingImage();

	// }, []);

	return (
		<div className={styles.landing}>
			<div className={styles.container}>
				<Title level={1}>第二大脑</Title>
				<Title level={5}>博客/备忘录/以及有趣的东西</Title>
				<Button type='primary' size="large" onClick={() => route.push('/docs')}>去看看</Button>
			</div>

		</div>

	);

}
