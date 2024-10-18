'use client'
import { Splitter } from 'antd';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => {
    return {
        splitter: css`
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            height: 100%
        `
    }
})

export default function DocsLayout({ children, nav }) {

    const { styles } = useStyles();
    return (
        <Splitter rootClassName={styles.splitter}>
            <Splitter.Panel defaultSize="35%" min="20%" max="70%">

                {nav}

            </Splitter.Panel>
            <Splitter.Panel>
                <div className={styles.content}>
                    {children}
                </div>
            </Splitter.Panel>
        </Splitter>);
}