'use client'
import React from 'react';

import { Button, Layout, Space, theme } from 'antd';
import { createStyles, ThemeProvider } from 'antd-style';
import ResponseHeader from './responseHeader';
const { Footer, Content } = Layout;
const useStyles = createStyles(({ css }) => {
    return {
        layout: css`
            height: 100vh;
            display: flex;
            flex-direction: column;
   
        `,
        header: css`
            background-color: inherit;
        `,
        content: css`
        height: calc(100vh - 130px)
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
                <ResponseHeader />
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