'use client'
import React from 'react';
import Link from 'next/link';

import { Button, Layout, Space, theme } from 'antd';
import { createStyles, ThemeProvider } from 'antd-style';
const { Header, Footer, Content } = Layout;
const useStyles = createStyles(({ textDecorationThickness, css }) => {
    return {
        layout: css`
            height: 100vh;
        `,
        header: css`
            background-color: inherit;
        `,
        content: css`

        `,
        footer: css`
            display: flex;
            justify-content:center
        `
    }
})
export default function UILayout({ children }) {


    const { styles, cx } = useStyles();
    const {
        token: { colorBgContainer },
    } = theme.useToken();



    return (
        <ThemeProvider themeMode={'auto'}
            theme={{
                components: {
                    Layout: {
                        headerBg: colorBgContainer
                    },
                },
            }}
        >
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <Space>
                        <Link href='/'><Button color="default" variant="text">主页</Button></Link>
                        <Link href='/list'><Button color="default" variant="text">List</Button></Link>
                        <Link href='/tech'><Button color="default" variant="text">Tech</Button></Link>
                        <Link href='/docs'><Button color="default" variant="text">笔记</Button></Link>
                        <Link href='/about'><Button color="default" variant="text">About me</Button></Link>
                    </Space>
                </Header>
                <Content className={styles.content}>
                    {children}
                </Content>
                <Footer className={styles.footer}>
                    HunterX ©2024 developed in Xi'an
                </Footer>
            </Layout>
        </ThemeProvider >
    )
}