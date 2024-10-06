'use client'
import { Tree } from 'antd';
const { DirectoryTree } = Tree;
import { useEffect, useState } from 'react';

const NavTree = ({ onClickTreeItem }) => {
    const [treeData, setTreeData] = useState([]);
    useEffect(() => {
        fetch('/api/docs')
            .then(resp => resp.json())
            .then(data => setTreeData(data));
    }, [])
    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
        onClickTreeItem(info.node);
    };
    const onExpand = (keys, info) => {
        // console.log('Trigger Expand', keys, info);
    };
    return (
        <DirectoryTree
            multiple
            defaultExpandAll
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}

        />
    );
};

export default NavTree;