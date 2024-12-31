'use client';
import React from 'react';
import { usePathname } from 'next/navigation'
import { Layout, theme } from 'antd';
import { createStyles, ThemeProvider } from 'antd-style';
import ResponseHeader from './responseHeader.js';
const { Content, Footer } = Layout;
const useStyles = createStyles(({ css, token }) => {
	return {
		layout: css`
			height: 100vh;
			display: flex;
		`,

		header: css`
			background-color: inherit;
		`,
		content: css`
			flex: 1 1 0;
			display: flex;
			justify-content: center;

		`,
		footer: css`
			display: flex;
			justify-content: center;
			border-top: 1px solid ${token.colorBorder};
			height: 70px;
			padding-top: 10px;
			padding-bottom: 10px;
			p {
			margin: 5px;}
		`,
	};
});
export default function UILayout({ children }) {
	const { styles } = useStyles();
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const pathname = usePathname()
	const landingPage = pathname === '/';

	const MainLayout = ({ children, landingPage }) => {
		if (landingPage) {
			return <>{children}</>
		}
		return <>
			<ResponseHeader />
			<Content className={styles.content}>{children}</Content>
			<Footer className={styles.footer}>

				<div>
					<p>HunterX  -	陕ICP备2024057216号-1</p>
					<p>
						<a href="mailto:huntxalc@gmail.com">Contact me</a>
					</p>
				</div>

			</Footer>
		</>
	}
	return (
		<ThemeProvider
			defaultThemeMode={'auto'}
			theme={{
				cssVar: true,
				components: {
					Layout: {
						headerBg: colorBgContainer,
					},
				},
			}}>
			<Layout className={styles.layout}>
				<MainLayout landingPage={landingPage}>
					{children}
				</MainLayout>
			</Layout>
		</ThemeProvider>
	);
}
