'use client'
import { Card } from 'antd';
import Cover from './cover';
import Description from './description';
const { Meta } = Card;
export default function WrCard({ book }) {
    return (
        <Card
            style={{
                width: '240px',
                height: '400px'
            }}

            hoverable
            cover={<Cover url={book.cover}></Cover>}>
            <Meta title={book.title}
                description={<Description
                    bookid={book.bookid}
                    author={book.author}
                    category={book.category} />} />
        </Card>
    );
}