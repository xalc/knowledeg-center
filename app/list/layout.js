
'use client'

import { Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

export default function ListLayout({ children }) {

    const router = useRouter()
    const items = [

        {
            label: 'Home',
            key: 'home',
            icon: <LaptopOutlined />,
        },
        {
            label: 'List',
            key: 'list',
            icon: <NotificationOutlined />,
        },
        {
            label: 'Virtual list v1',
            key: 'virtual',
            icon: <UserOutlined />,
        },

    ]

    const menuClickHandler = ({ item, key, keyPath, domEvent }) => {
        console.log('clicked key: ' + key);
        if (key === 'home') {
            router.push('/');
        }
        if (key === 'list') {
            router.push('/list');
        }
        if (key === 'virtual') {
            router.push('/list/virtual');
        }
    };
    return <>
        <div className={styles.nav}>
            <Menu
                items={items}
                mode="vertical"
                onClick={menuClickHandler}
            />

        </div>
        <div className={styles.content}>{children}</div>
        {/* <div className={styles.right}>
            right side
        </div> */}
    </>
}

