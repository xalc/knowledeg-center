import ChartContainer from '@/components/wereader/chartContainer';
import { getDBReadingTimes, getAllReadingStatus } from '@/libs/db-utils';
import { unstable_cache } from 'next/cache'
export const revalidate = 60;
export default async function SumaryPage() {
	try {
		const cachedResult = unstable_cache(
			async () => await getDBReadingTimes(),
			['wereader'],
			{ revalidate: 60, tags: ['wereader'] }
		)
		const result = await cachedResult();
		const { readingTimes, lastSynced } = result;
		const cachedReadingStatus = unstable_cache(
			async () => await getAllReadingStatus(),
			['wereader'],
			{ revalidate: 60, tags: ['wereader'] }
		)
		const readingStatus = await cachedReadingStatus();
		return (
			<ChartContainer
				readingTimes={readingTimes}
				syncdTime={lastSynced}
				readingStatus={readingStatus}
			/>
		);
	} catch (error) {
		console.log(error);
		// TODO error handler
	}







}
