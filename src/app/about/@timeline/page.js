'use client';
import { ClockCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { Timeline, Typography } from 'antd';
const { Title, Text } = Typography;
const Item = ({ title, date, level, type }) => {
	return (
		<>
			<Title type={type} level={level}>
				{title}
			</Title>
			<Text italic>{date}</Text>
		</>
	);
};

const TimeLinePage = () => {
	const items = [
		{
			children: (
				<Item
					title="计划搭一个网站，思考技术和功能"
					type="secondary"
					level={5}
					date={'2024-08-25'}></Item>
			),
		},
		{
			children: (
				<Item
					title="确定技术方案以及需求，"
					type="secondary"
					level={5}
					date={'2024-09-03'}></Item>
			),
		},
		{
			dot: (
				<ClockCircleOutlined
					style={{
						fontSize: '16px',
					}}
				/>
			),
			color: 'green',
			children: (
				<Item
					title="第一版本地环境上线"
					type="warning"
					level={4}
					date={'2024-10-01'}></Item>
			),
		},

		{
			children: (
				<Item
					title="解析Notion日志"
					type="secondary"
					level={5}
					date={'2024-10-08'}></Item>
			),
		},
		{
			children: (
				<Item
					title="解析Credle bages数据"
					type="secondary"
					level={5}
					date={'2024-10-12'}></Item>
			),
		},
		{
			children: (
				<Item
					title="存储微信阅读数据到MongoDB"
					type="secondary"
					level={5}
					date={'2024-10-27'}></Item>
			),
		},
		{
			children: (
				<Item
					title="准备部署到云端"
					type="secondary"
					level={5}
					date={'2024-11-23'}></Item>
			),
		},
		{
			dot: (
				<LoadingOutlined
					style={{
						fontSize: '16px',
					}}
				/>
			),
			children: 'Continue......',
		},
	];
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '16px',
				height: 'calc(100vh - 220px)',
				overflow: 'auto',
				width: '600px'
			}}>
			<Timeline reverse mode="alternate" items={items} />
		</div>
	);
};
export default TimeLinePage;
