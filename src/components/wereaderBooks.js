
import { Flex } from 'antd';

import WrCard from './wereader/wrCard.js';
const WRBooks = ({ books }) => {
    return (
        <Flex wrap gap='large' aligin='center' justify='space-around'>
            {books.map((book) => {
                return <WrCard key={book.bookid} book={book} />
            })}
        </Flex>
    )
};
export default WRBooks;