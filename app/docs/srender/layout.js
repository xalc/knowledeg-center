'use client'
import { Splitter } from 'antd';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from '../styles.module.scss';
import NavTree from '../../src/components/navTree';
export default function DocsLayout({ children }) {

    const router = useRouter();
    const pathname = usePathname()
    const onClickTreeItem = (node) => {
        router.push(`${pathname}?page=${node.key}`);
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
                    {children}
                </div>
            </Splitter.Panel>
        </Splitter>);
}