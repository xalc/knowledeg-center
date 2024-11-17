import { getAllReadingStatus } from '@/libs/db-utils';

import ReadingPieChart from './piechart';

const ChartWrap = async () => {
	const readingStatus = await getAllReadingStatus().catch(err => {
		console.log('err occured when fetch reading status' + err);
	});

	return <ReadingPieChart data={readingStatus} />;
	// return <>hello</>
};

export default ChartWrap;
