import WRBooks from '@/components/wereaderBooks';
import { unstable_cache } from 'next/cache'
import { getDBReadingBooks, getAllReadingStatus } from '@/libs/db-utils';
export const revalidate = 60;


const getBooks = unstable_cache(async () => await getDBReadingBooks().catch(err => {
	//TODO Error handle
	console.error('get book list failed: ' + err);
}), ['posts'],
	{ revalidate: revalidate, tags: ['posts'] });
const getBookStatus = unstable_cache(async () => await getAllReadingStatus().catch(err => {
	//TODO Error handle
	console.error('get book list failed: ' + err);
}), ['posts'],
	{ revalidate: revalidate, tags: ['posts'] });
const WeReaderPage = async () => {
	// const dbInstance = DBInstance.getInstance('knowledge', 'books');

	const books = await getBooks();
	const statuses = await getBookStatus();

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
