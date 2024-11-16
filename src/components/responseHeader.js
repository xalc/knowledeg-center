'use client';
import { useRouter } from 'next/navigation';
import {
    MenuOutlined
} from '@ant-design/icons';
import { Button, Layout, Space, Flex } from 'antd';
import { createStyles } from 'antd-style';
import { useState } from 'react';
import useDevice from '../hooks/use-device.js';
import useNarrowScreen from '../hooks/use-narrow-screen.js';
const { Header } = Layout;




const useStyles = createStyles(({ css, token }) => {
    return {
        header: css`
            background-color: inherit;
            align-items: center;
            display: flex;
        `,
        smallDevice: css`

            background-color: inherit;
            padding-right: ${token.paddingMD}px;
  
        `,
        menuIcon: css`
            float: right;
        `,
        menu: css`
            position: absolute;
            top:64px;
            width: 100%;
            z-index:10;
            right:0px;
            opacity: 85%;
            background: ${token.colorBgContainer}
        `,
        navBtn: css`
            height: 64px;
        `
    };
});
const ResponseHeader = () => {
    const router = useRouter();
    const { styles, cx } = useStyles();
    const [collapsed, setCollapsed] = useState(true);
    // both hook below implements same features 
    // using mediaquery or window.innerHeight
    // const smallDevice = useDevice();
    const smallDevice = useNarrowScreen();


    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const redirectToPage = (target) => {
        router.push(target);
        setCollapsed(true);
    };

    return <Header className={cx(smallDevice ? styles.smallDevice : styles.header)}>
        {smallDevice && <div className={styles.menuIcon}>
            <Button color="default" icon={<MenuOutlined />} onClick={toggleCollapsed}></Button>
        </div >}
        {
            (!smallDevice || !collapsed) &&
            <Flex vertical={smallDevice}
                className={cx({ [styles.menu]: smallDevice })}>
                <Button
                    onClick={() => redirectToPage('/')}
                    className={cx({ [styles.navBtn]: smallDevice })}
                    block={smallDevice}
                    color="default"
                    variant="text">
                    主页</Button>
                {/* <Button
                    onClick={() => redirectToPage('/list')}
                    className={cx({ [styles.navBtn]: smallDevice })}
                    block={smallDevice}
                    color="default" variant="text">List</Button> */}
                <Button
                    onClick={() => redirectToPage('/tech')}
                    className={cx({ [styles.navBtn]: smallDevice })}
                    block={smallDevice}
                    color="default" variant="text">有趣</Button>
                <Button
                    onClick={() => redirectToPage('/docs')}
                    className={cx({ [styles.navBtn]: smallDevice })}
                    block={smallDevice}
                    color="default" variant="text">笔记</Button>
                <Button
                    onClick={() => { redirectToPage('/about'); }}
                    className={cx({ [styles.navBtn]: smallDevice })}
                    block={smallDevice}
                    color="default"
                    variant="text">
                    印记
                </Button>
            </Flex>
        }
    </Header>;




};

export default ResponseHeader;