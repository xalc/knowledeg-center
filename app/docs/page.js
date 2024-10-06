'use client'
import React from 'react';

import NavTree from '../src/components/navTree';
import styles from './styles.module.scss';
import { useState } from 'react';
import MdxComponent from '../src/components/mdxComp';
const DocsPage = () => {
    const [key, setKey] = useState('index.mdx')
    const onClickTreeItem = (node) => {
        setKey(node.key)
    }
    return (<div className={styles.docs}>

        <div className={styles.nav}>
            <NavTree onClickTreeItem={onClickTreeItem} />
        </div>
        <div className={styles.content}>
            <MdxComponent params={key} />
        </div>

    </div>);
}
export default DocsPage;