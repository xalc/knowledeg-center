import { getDBReadingTimes } from '@/libs/db-utils';
import ReadingHeapmap from '@/components/wereader/heapmap';
import { Row, Col, Divider } from 'antd';
import ChartWrap from '@/components/wereader/chartWrap';
import ReadingTimeBarChart from '@/components/wereader/barchart';

export default async function SumaryPage() {
	const result = await getDBReadingTimes().catch(err => {
		console.log(err);
		// TODO error handler
	});
	const { readingTimes, lastSynced } = result;

	return (
		<>
			<Row gutter={16}>
				<Col sm={24} md={24} lg={24} xl={24}>
					<ReadingHeapmap
						readingRecords={readingTimes}
						updateTime={lastSynced}></ReadingHeapmap>
				</Col>
			</Row>
			<Divider orientation="center">React Echarts</Divider>
			<Row gutter={16}>
				{/* <Col sm={24} md={12} lg={12} xl={8}>
                <ReadingLineChart readingRecords={readingTimes}></ReadingLineChart>
            </Col> */}
				<Col xs={24} sm={24}>
					<ReadingTimeBarChart readingRecords={readingTimes} />
				</Col>
				<Col xs={24} sm={24}>
					<ChartWrap />
				</Col>
			</Row>
		</>
	);
}
