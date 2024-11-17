'use client';
import React from 'react';

import { Layout, theme } from 'antd';
import { createStyles, ThemeProvider } from 'antd-style';
import ResponseHeader from './responseHeader.js';
const { Footer, Content } = Layout;
const useStyles = createStyles(({ css, token }) => {
	return {
		// flex-direction: column;
		// overflow: hidden;
		// background-image: url(https://www.bing.com/th?id=OHR.MoroccoMilkyWay_ZH-CN3544344290_1920x1080.jpg);
		// width: 100vw;
		// background-size: cover;
		// background-position: center;
		layout: css`
			height: 100vh;
			display: flex;
		`,
		header: css`
			background-color: inherit;
		`,
		content: css`
			height: calc(100vh - 130px);
		`,
		footer: css`
			display: flex;
			justify-content: center;
			border-top: 1px solid ${token.colorBorder};
		`,
	};
});
export default function UILayout({ children }) {
	const { styles } = useStyles();
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<ThemeProvider
			themeMode={'auto'}
			theme={{
				cssVar: true,
				components: {
					Layout: {
						headerBg: colorBgContainer,
					},
				},
			}}>
			<Layout className={styles.layout}>
				<ResponseHeader />
				<Content className={styles.content}>{children}</Content>
				<Footer className={styles.footer}>
					HunterX ©2024 developed in Xi&apos;an
				</Footer>
			</Layout>
		</ThemeProvider>
	);
}
