'use client';

import { useState, useEffect } from 'react';
import { createStyles } from 'antd-style';
import User from '@/components/user';
import { Switch } from 'antd';
const useStyles = createStyles(({ css }) => {
	return {
		container: css`
			height: calc(100% - 69px);
		`,
	};
});
const AllList = () => {
	const [userList, setUserList] = useState([]);
	const [toggleHeaderIcon, setToggle] = useState(false);
	const { styles } = useStyles();
	useEffect(() => {
		fetch('/api/list')
			.then(resp => resp.json())
			.then(users => setUserList(users.Users));
	}, []);

	return (
		<div className={styles.container}>
			<h2>All lists in dom

			</h2>
			<h3>	是否显示头像<Switch onChange={() => setToggle(!toggleHeaderIcon)} /></h3>
			<div>
				{userList.map(oneUser => (
					<User key={oneUser.id} user={oneUser} showIcon={toggleHeaderIcon} />
				))}
			</div>
		</div>
	);
};
export default AllList;
