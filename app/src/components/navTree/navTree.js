'use client'
import { Tree } from 'antd';
import { useRouter } from 'next/navigation';
const { DirectoryTree } = Tree;

const NavTree = ({ treeData }) => {

    const router = useRouter();
    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
        router.push(`/docs?page=${info.node.key}`)
    };

    return (
        <DirectoryTree
            rootStyle={{ minHeight: '100%' }}
            multiple
            onSelect={onSelect}
            treeData={treeData}
        />
    );
};

export default NavTree;