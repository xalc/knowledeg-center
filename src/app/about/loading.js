'use client';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ token, css }) => {
    return {
        spinContainer: css`
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            height: 300px;
        `
    };
});
export default function ListLoading() {
    const { styles } = useStyles();
    return (

        <div className={styles.spinContainer}>
            <Spin indicator={
                <LoadingOutlined
                    style={{ fontSize: 96 }}
                    spin
                />
            }>

            </Spin>

        </div>

    );
}