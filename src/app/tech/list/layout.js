'use client';

import { Menu, Layout } from 'antd';
import {
	ArrowRightOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useRouter } from 'next/navigation';
import { createStyles } from 'antd-style';
const { Sider } = Layout;
const useStyles = createStyles(({ css, token }) => {
	return {
		container: css`
			display: flex;
			background: ${token.colorBgContainer};
			height: calc(100vh - 128px);
		`,
		nav: css`
			order: 0;
			flex-grow: 1;
		`,
		content: css`
			order: 1;
			flex-grow: 4;
			height: inherit;
			overflow: auto;
			padding: ${token.paddingMD}px;
		`,
	};
});
export default function ListLayout({ children }) {
	const { styles } = useStyles();
	const router = useRouter();
	const items = [
		{
			label: 'List',
			key: 'list',
			icon: <NotificationOutlined />,
		},
		{
			label: 'Virtual list v1',
			key: 'virtual',
			icon: <UserOutlined />,
		},
		{
			label: 'ref examples',
			key: 'ref',
			icon: <ArrowRightOutlined />,
		},
		{
			label: 'Time Wasted',
			key: 'time',
			icon: <ArrowRightOutlined />,
		},
		{
			label: 'Utils',
			key: 'util',
			icon: <ArrowRightOutlined />,
		},
	];

	const menuClickHandler = ({ key }) => {
		if (key === 'list') {
			router.push('/tech/list');
		}
		if (key === 'virtual') {
			router.push('/tech/list/virtual');
		}
		if (key === 'ref') {
			router.push('/tech/list/ref');
		}
		if (key === 'time') {
			router.push('/tech/list/time');
		}
		if (key === 'util') {
			router.push('/tech/list/util');
		}
	};
	return (
		<Layout className={styles.container}>
			<Sider breakpoint="sm" className={styles.nav}>
				<Menu
					style={{ height: '100%' }}
					items={items}
					mode="vertical"
					onClick={menuClickHandler}
				/>
			</Sider>
			<div className={styles.content}>{children}</div>
			{/* <div className={styles.right}>
            right side
        </div> */}
		</Layout>
	);
}
