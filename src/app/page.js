'use client'
import { createStyles } from 'antd-style';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Title from 'antd/es/typography/Title';
import { Button } from 'antd';
const useStyles = createStyles(({ css, token }) => {
	return {
		container: css`
			display: flex;
			justify-content: center;
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
		btn: css`
			width: 16rem
		`,
		title: css`
					font-size: 24px;
					font-weight: bold;
					filter:brightness(120%) saturate(150%);
					display: flex;
					flex-direction: column;
					align-items: center
					`
	};

});
// color: white; /* 默认使用白色 */
// mix - blend - mode: difference; /* 使用差分混合模式 */
// filter: contrast(1000 %) invert(1)
export default function Page() {
	const { styles } = useStyles();
	const route = useRouter();
	const [show, setShow] = useState(false);
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
	const throttle = (func, timeout) => {
		let timer = null;
		return function (...args) {
			if (!timer) {
				timer = setTimeout(() => {
					func.apply(this, args);
					timer = null;
				}, timeout)
			}
		}
	}

	return (
		<div className={styles.landing}>
			<div className={styles.container} onMouseMove={() => throttle(() => setShow(true), 500)} onClick={() => setShow(!show)}>
				{show && <div id='logo' className={styles.title}>
					<Title level={1}>HuntX&rsquo;第二大脑</Title>
					<Title level={5}>博客/备忘录/以及有趣的东西</Title>
					<Button className={styles.btn} type='primary' size="large" onClick={() => route.push('/blog/这个博客网站为什么会存在')}>去看看</Button>
				</div>}

			</div>

		</div>

	);

}
