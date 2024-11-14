
import { Tag, Progress, Skeleton } from "antd";
export default function ReadingStatus({ progress }) {

    if (progress === null) {
        return <Skeleton active paragraph={false} />
    }
    // return nothing from server
    if (progress === undefined) {
        return <Tag color="error">阅读状态未知</Tag>
    }
    if (progress === 100) {
        return <Tag color="blue">读完</Tag>
    } else if (progress === 0) {
        return <Tag color="red">未开始阅读</Tag>
    } else {
        return <>
            <span style={{ width: '50px' }}>已读:</span>
            <Progress size='small' percent={progress} />
        </>
    }
}
