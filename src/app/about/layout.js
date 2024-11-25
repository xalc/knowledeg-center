import { Tabs } from 'antd';

export default function AboutLayout({ children, wereader, timeline }) {
	const tabItems = [
		{
			label: 'Credly',
			key: 'tab_1',
			children: children,
		},
		{
			label: '微信读书',
			key: 'tab_2',
			children: wereader,
		},
		{
			label: '时光机',
			key: 'tab_3',
			children: timeline,
		},
	];
	return (
		<Tabs
			defaultActiveKey="tab_1"
			size="large"
			centered
			items={tabItems}></Tabs>
	);
}
