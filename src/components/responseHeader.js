'use client';
import { useRouter, usePathname } from 'next/navigation';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Flex, Switch } from 'antd';
import { createStyles } from 'antd-style';
import { useState } from 'react';
import useNarrowScreen from '../hooks/use-narrow-screen.js';
import { useThemeMode } from 'antd-style';
const { Header } = Layout;

const useStyles = createStyles(({ css, token }) => {
	return {
		header: css`
			background-color: inherit;
			align-items: center;
			display: flex;
		`,
		smallDevice: css`
			background-color: inherit;
			padding-right: ${token.paddingMD}px;
		`,
		menuIcon: css`
			float: left;
		`,
		menu: css`
			position: absolute;
			top: 64px;
			width: 100%;
			z-index: 10;
			right: 0px;
			opacity: 85%;
			background: ${token.colorBgContainer};
		`,
		navBtn: css`
			height: 64px;
		`,
	};
});
const ResponseHeader = () => {
	const router = useRouter();
	const pathname = usePathname()
	const { styles, cx } = useStyles();
	const [collapsed, setCollapsed] = useState(true);

	const smallDevice = useNarrowScreen();

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};
	const redirectToPage = target => {
		router.push(target);
		setCollapsed(true);
	};
	const getIconColor = (name) => name === pathname ? 'primary' : 'default';
	const { isDarkMode, setThemeMode } = useThemeMode();

	const onChange = (checked) => {
		if (checked) {
			setThemeMode('light')
		} else {
			setThemeMode('dark')
		}
	}
	return (
		<Header className={cx(smallDevice ? styles.smallDevice : styles.header)}>
			{smallDevice && (
				<div className={styles.menuIcon}>
					<Button
						color="default"
						icon={<MenuOutlined />}
						onClick={toggleCollapsed}></Button>
				</div>
			)}
			{(!smallDevice || !collapsed) && (
				<Flex justify='space-between' style={{ width: '100%' }}>
					<Flex
						vertical={smallDevice}
						className={cx({ [styles.menu]: smallDevice })}>
						<Button
							onClick={() => redirectToPage('/')}
							className={cx({ [styles.navBtn]: smallDevice })}
							block={smallDevice}
							color={getIconColor('/')}
							variant="text">
							WELCOME
						</Button>
						<Button
							onClick={() => redirectToPage('/tech')}
							className={cx({ [styles.navBtn]: smallDevice })}
							block={smallDevice}
							disabled
							color={getIconColor('/tech')}
							variant="text">
							有趣
						</Button>
						<Button
							onClick={() => redirectToPage('/docs')}
							className={cx({ [styles.navBtn]: smallDevice })}
							block={smallDevice}
							color={getIconColor('/docs')}
							variant="text">
							备忘录
						</Button>
						<Button
							onClick={() => redirectToPage('/blog')}
							className={cx({ [styles.navBtn]: smallDevice })}
							block={smallDevice}
							color={getIconColor('/blog')}
							variant="text">
							文章
						</Button>
						<Button
							onClick={() => {
								redirectToPage('/about');
							}}
							className={cx({ [styles.navBtn]: smallDevice })}
							block={smallDevice}
							color={getIconColor('/about')}
							variant="text">
							印记
						</Button>
					</Flex>
					<Flex>
						<Switch defaultChecked={!isDarkMode} onChange={onChange} checkedChildren='暗色' unCheckedChildren='亮色' />
					</Flex>

				</Flex>

			)}
		</Header>
	);
};

export default ResponseHeader;
