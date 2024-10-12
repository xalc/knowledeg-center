'use client'
import React from 'react';

import NavTree from '../src/components/navTree';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Splitter } from 'antd';
import MdxComponent from '../src/components/mdxComp';
const DocsPage = () => {
    const [key, setKey] = useState('index.mdx')
    const onClickTreeItem = (node) => {
        setKey(node.key)
    }
    return (
        <Splitter
            style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Splitter.Panel defaultSize="35%" min="20%" max="70%">
                <NavTree onClickTreeItem={onClickTreeItem} />
            </Splitter.Panel>
            <Splitter.Panel>
                <div className={styles.content}>
                    <MdxComponent params={key} />
                </div>
            </Splitter.Panel>
        </Splitter>);
}
export default DocsPage;