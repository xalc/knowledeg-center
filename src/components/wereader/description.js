import { Flex, Progress, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
const Description = ({ author, category, bookid }) => {
    const [progress, setProgress] = useState(null);
    useEffect(() => {
        const getProgress = async (bookid) => {
            const result = await fetch(`/api/wereader/progress/${bookid}`);
            if (!result.ok) {
                console.error('connect failed ' + result.statusText);
            }
            const p = await result.json();
            if (p.error) {
                console.log(bookid);
                console.error(p.error);
            } else {
                setProgress(p)
            }

        }
        getProgress(bookid);
    }, [bookid]);

    const parseReadingTime = (second) => {
        if (second / 60 / 60 > 1) {
            const extraMinute = second % 3600;
            return Math.floor(second / 3600) + '小时' + Math.floor(extraMinute / 60) + '分钟';
        }
        if (second / 60 >= 1) {
            return Math.floor(second / 60) + '分钟';
        }
        if (second / 60 < 1) {
            return '1分钟'
        }


    }
    return <>
        <Flex >
            <div style={{ width: '50px' }}>已读:</div>
            {(progress && progress.progress) && <Progress size='small' percent={progress.progress} />}
            {progress === null && <Skeleton active paragraph={false} />}

        </Flex>
        <div>
            {progress?.readingTime && `累计阅读: ${parseReadingTime(progress.readingTime)}`}
            {progress === null && <Skeleton active paragraph={false} />}

        </div>

        {author} {category ? '| ' + category : ''}

    </>
}
export default Description;