'use client'
import { Col, Row, Flex, Splitter } from 'antd';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => {
    return {
        splitter: css`
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            height: 100%
        `,
        content: css`
                margin: auto;
                width: 70%;
        `
    }
})

export default function DocsLayout({ children, nav }) {

    const { styles } = useStyles();

    return (
        <Splitter rootClassName={styles.splitter}>
            <Splitter.Panel defaultSize="300" min="200" max="700">
                {nav}
            </Splitter.Panel>
            <Splitter.Panel>
                <div className={styles.content}>
                    {children}
                </div>
            </Splitter.Panel>
        </Splitter>);


}