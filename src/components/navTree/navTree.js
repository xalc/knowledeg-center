'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { FileMarkdownOutlined, FolderOutlined } from '@ant-design/icons';
import DirectoryTree from 'antd/es/tree/DirectoryTree';
import { useEffect, useRef } from 'react';

const NavTree = ({ treeData }) => {

    const router = useRouter();
    const treeRef = useRef();
    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
        if (info.node.isLeaf) {
            router.push(`/docs?page=${info.node.key}`)
        }

    };

    const searchParams = useSearchParams();
    const key = decodeURI(searchParams.get('page'));
    useEffect(() => {
        if (treeRef.current) {
            console.log('tree auto scrollto ' + key)
            treeRef.current.scrollTo({ key })
        }

    }, [key])


    return (
        <DirectoryTree
            ref={treeRef}
            defaultExpandParent
            selectedKeys={[key]}
            rootStyle={{ minHeight: '100%' }}
            multiple
            onSelect={onSelect}
            treeData={treeData}
            icon={({ isLeaf }) => {
                return isLeaf ? <FileMarkdownOutlined /> : <FolderOutlined />
            }}
            showIcon={true}
        // titleRender={({ key, children, title, ...rest }) => {
        //     return <span key={key} style={{ lineHeight: '30px' }} {...rest}>{title}</span>
        // }}
        />
    );
};

export default NavTree;