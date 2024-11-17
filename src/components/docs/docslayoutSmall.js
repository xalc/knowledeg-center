'use client';
import { createStyles } from 'antd-style';
import { Button, Drawer, Affix } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
const useStyles = createStyles(({ css }) => {
	return {
		content: css`
			margin-right: 32px;
			margin-left: 32px;
		`,
		mobile: css`
			height: calc(100vh - 132px);
			overflow: auto;
		`,
	};
});
const SmallDoc = ({ nav, children }) => {
	const { styles } = useStyles();

	const [open, setOpen] = useState(false);
	const onClose = () => setOpen(false);
	const searchParams = useSearchParams();
	const key = decodeURI(searchParams.get('page'));
	useEffect(() => {
		setOpen(false);
	}, [key]);

	return (
		<div className={styles.mobile}>
			<div className={styles.content}>{children}</div>
			<Drawer
				title="Menu"
				placement={'left'}
				onClose={onClose}
				open={open}
				key={'left'}>
				{nav}
			</Drawer>
			<Affix offsetBottom={100}>
				<Button
					type="icon"
					shape="circle"
					onClick={() => setOpen(true)}
					icon={<DoubleRightOutlined />}
				/>
			</Affix>
		</div>
	);
};
export default SmallDoc;
