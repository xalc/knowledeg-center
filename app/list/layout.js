
'use client'
import { Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
export default function ShopLayout({ children, params }) {
    // URL -> /shop/shoes/nike-air-max-97
    // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: new Array(2).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });
    return <section>
        <Layout
            style={{
                padding: '24px 0',
                background: colorBgContainer,
            }}
        >
            <Sider
                style={{
                    background: colorBgContainer,
                }}
                width={200}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                    }}
                    items={items2}
                />
            </Sider>
            <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280,
                }}
            >
                {children}
            </Content>
        </Layout>
    </section>
}

