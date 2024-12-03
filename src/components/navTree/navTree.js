'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FileMarkdownOutlined, FolderOutlined } from '@ant-design/icons';
import DirectoryTree from 'antd/es/tree/DirectoryTree';
import { ConfigProvider } from 'antd';
import { useEffect, useRef } from 'react';

const NavTree = ({ treeData }) => {
	const router = useRouter();
	const treeRef = useRef();
	const onSelect = (keys, info) => {
		console.log('Trigger Select', keys, info);
		if (info.node.isLeaf) {
			router.push(`/docs?page=${info.node.key}`);
		}
	};

	const searchParams = useSearchParams();
	const key = decodeURI(searchParams.get('page'));
	useEffect(() => {
		if (treeRef.current) {
			console.log('tree auto scrollto ' + key);
			treeRef.current.scrollTo({ key });
		}
	}, [key]);

	return (
		<ConfigProvider
			theme={{
				components: {
					Tree: {
						titleHeight: 24,
						indentSize: 12,
					},
				},
			}}
		>
			<DirectoryTree
				ref={treeRef}
				defaultExpandParent
				selectedKeys={[key]}
				rootStyle={{ minHeight: '100%' }}
				multiple
				onSelect={onSelect}
				treeData={treeData}
				icon={({ isLeaf }) => {
					return isLeaf ? <FileMarkdownOutlined /> : <FolderOutlined />;
				}}
				showIcon={true}
			// titleRender={({ key, title, ...rest }) => {
			// 	return <span key={key} style={{ lineHeight: '50px' }} {...rest}>{title}</span>
			// }}
			/>

		</ConfigProvider>

	);
};

export default NavTree;
