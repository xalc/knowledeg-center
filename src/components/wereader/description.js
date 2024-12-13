import { Flex, Skeleton } from 'antd';

import ReadingStatus from './readingStatus';
const Description = ({ author, category, status }) => {

	const parseReadingTime = second => {
		if (second / 60 / 60 > 1) {
			const extraMinute = second % 3600;
			return (
				Math.floor(second / 3600) +
				'小时' +
				Math.floor(extraMinute / 60) +
				'分钟'
			);
		}
		if (second / 60 >= 1) {
			return Math.floor(second / 60) + '分钟';
		}
		if (second / 60 < 1) {
			return '1分钟';
		}
	};
	return (
		<>
			<Flex>
				<ReadingStatus progress={status?.progress} />
			</Flex>
			<div>
				{status?.readingTime &&
					`累计阅读: ${parseReadingTime(status.readingTime)}`}
				{status === null && <Skeleton active paragraph={false} />}
			</div>
			{author} {category ? '| ' + category : ''}
		</>
	);
};
export default Description;
