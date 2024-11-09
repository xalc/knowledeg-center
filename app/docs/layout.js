'use client'
import { Col, Row, Flex, Splitter, Layout } from 'antd';

import { createStyles } from 'antd-style';
import useNarrowScreen from '../src/hooks/use-narrow-screen';
const { Sider } = Layout;
const useStyles = createStyles(({ css, token }) => {
    return {
        splitter: css`
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            height: 100%
        `,
        content: css`
                margin: auto;
                width: 70%;
        `,
        mobileNav: css`
            height: 80%
        `
    }
})

export default function DocsLayout({ children, nav }) {

    const { styles } = useStyles();
    const mobile = useNarrowScreen();
    if (mobile)
        return <>
            <Layout>
                <Sider className={styles.mobileNav} breakpoint='sm' collapsedWidth='0'>
                    <div>{nav}</div>
                </Sider>
                <div>{children}</div>
            </Layout>
        </>

    return (
        <Splitter rootClassName={styles.splitter}>
            <Splitter.Panel defaultSize="300" min="200" max="500">
                {nav}
            </Splitter.Panel>
            <Splitter.Panel>
                <div className={styles.content}>
                    {children}
                </div>
            </Splitter.Panel>
        </Splitter>);


}