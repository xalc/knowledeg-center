import ChartContainer from '@/components/wereader/chartContainer';
import { getDBReadingTimes, getAllReadingStatus } from '@/libs/db-utils';
export const revalidate = 60 * 60;
export default async function SumaryPage() {
	const result = await getDBReadingTimes().catch(err => {
		console.log(err);
		// TODO error handler
	});

	const readingStatus = await getAllReadingStatus().catch(err => {
		console.log('err occured when fetch reading status' + err);
	});

	const { readingTimes, lastSynced } = result;

	return (
		<ChartContainer
			readingTimes={readingTimes}
			syncdTime={lastSynced}
			readingStatus={readingStatus}
		/>
	);
}
