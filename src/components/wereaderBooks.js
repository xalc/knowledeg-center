import { Flex } from 'antd';

import WrCard from './wereader/wrCard.js';
const WRBooks = ({ books, statuses }) => {
	return (
		<Flex wrap gap="large" aligin="center" justify="space-around">
			{books.map(book => {
				return <WrCard key={book.bookId} book={book} status={statuses.find((s) => s.bookId === book.bookId)} />;
			})}
		</Flex>
	);
};
export default WRBooks;
