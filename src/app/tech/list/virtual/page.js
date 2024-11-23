'use client';
import User from '@/components/user';
import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import { Switch } from 'antd';
const ROW_HEIGHT = 50;
const VirtualList = () => {
	const [userList, setUserList] = useState([]);
	// const [renderedUser, setRenderUser] = useState([]);
	const [scrollerOffset, setScrollOffset] = useState(0);
	const [toggleHeaderIcon, setToggle] = useState(false);
	const scrollHandler = event => {
		const { scrollTop } = event.currentTarget;

		console.log(`scroll to : ${scrollTop}`);
		setScrollOffset(scrollTop);
	};
	useEffect(() => {
		fetch('/api/list')
			.then(resp => resp.json())
			.then(users => {
				setUserList(users.Users);
			});
	}, []);

	const totalHeight = userList.length * ROW_HEIGHT;
	const renderUserList = () => {
		const startIndex = Math.floor(scrollerOffset / ROW_HEIGHT);
		const endIndex = startIndex + 20;
		let items = [];
		items = userList.slice(startIndex, endIndex);
		// for (let i = startIndex; i < endIndex; i++) {
		//     items.push(userList[i])
		// }
		return items.map((oneUser, i) => (
			<div
				style={{
					position: 'absolute',
					height: ROW_HEIGHT,
					top: ROW_HEIGHT * oneUser?.index,
					width: '100%',
				}}
				key={oneUser?.index}>
				<User key={i} user={oneUser} showIcon={toggleHeaderIcon} />
			</div>
		));
	};
	return (
		<>
			<h2> virtual render v1</h2>
			<h3>	是否显示头像<Switch onChange={() => setToggle(!toggleHeaderIcon)} /></h3>
			<div
				id="visualArea"
				className={styles.container}
				onScroll={scrollHandler}>
				<div
					id="renderArea"
					className={styles.content}
					style={{ height: totalHeight }}>
					{renderUserList()}
				</div>
			</div>
		</>
	);
};
export default VirtualList;
