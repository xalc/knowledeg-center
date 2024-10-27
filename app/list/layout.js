
'use client'

import { Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useRouter } from 'next/navigation';
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ css, token }) => {
    return {
        container: css`
            display: flex;
            background: ${token.colorBgContainer};
            height: calc(100vh - 128px)
        `,
        nav: css`
            order: 0;
            flex-grow: 1;
        `,
        content: css`
            order: 1;
            flex-grow: 4;

        `
    }
});
export default function ListLayout({ children }) {
    const { styles } = useStyles();
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
    return <div className={styles.container}>
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
    </div>
}

