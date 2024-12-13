import WRBooks from '@/components/wereaderBooks';

import { getDBReadingBooks, getAllReadingStatus } from '@/libs/db-utils';

const WeReaderPage = async () => {
	// const dbInstance = DBInstance.getInstance('knowledge', 'books');

	const books = await getDBReadingBooks().catch(err => {
		//TODO Error handle
		console.error('get book list failed: ' + err);
	});
	const statuses = await getAllReadingStatus().catch(err => {
		//TODO Error handle
		console.error('get book list failed: ' + err);
	});

	const needed = books.map(b => {
		return {
			title: b.title,
			cover: b.cover,
			category: b.category,
			author: b.author,
			bookId: b.bookId,
		};
	});
	return <WRBooks books={needed} statuses={statuses} />;
};
export default WeReaderPage;
