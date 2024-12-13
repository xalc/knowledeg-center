'use client';
import { Card } from 'antd';
import Cover from './cover.js';
import Description from './description.js';
const { Meta } = Card;
export default function WrCard({ book, status }) {
	return (
		<Card
			style={{
				width: '240px',
				height: '400px',
			}}
			hoverable
			cover={<Cover url={book.cover}></Cover>}>
			<Meta
				title={book.title}
				description={
					<Description
						status={status}
						author={book.author}
						category={book.category}
					/>
				}
			/>
		</Card>
	);
}
