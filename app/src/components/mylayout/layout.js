'use client'
import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import { useRouter } from 'next/navigation'
import LoginButton from '../login/login';
import styles from './layout.module.css'
const { Header, Content, Footer } = Layout;
export default function MyLayout(props) {
  const router = useRouter();
  return (
    <Layout className={styles.layout}>
      <Header
        className={styles.header}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={new Array(5).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />

        <LoginButton />

      </Header>
      <Content className={styles.content}>
        {props.children}
      </Content>
      <Footer className={styles.footer}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
