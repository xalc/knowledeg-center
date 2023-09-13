
'use client'
import { Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useRouter } from 'next/navigation';
export default function ListLayout({ children, params }) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const router = useRouter()
    const labels = ["list", "other", "rest"]
    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: labels[index],
            children: new Array(2).fill(null).map((_, j) => {
                const subKey = index * 3 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });
    items2[0].children = [
        {
            key: `list0`,
            label: "All list"
        }, {
            key: 'list1',
            label: 'dynamic list'
        }
    ];
    const menuClickHandler = ({ item, key, keyPath, domEvent }) => {
        console.log('clicked key: ' + key);
        if (key === `list0`) {
            router.push('/list');

        }
        if (key === `list1`) {
            router.push('/list/virtual');

        }
    };
    return <section>
        <Layout
            style={{
                padding: '24px 0',
                background: colorBgContainer,
                height: 'calc(100vh - 132px)'

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
                    onClick={menuClickHandler}
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

