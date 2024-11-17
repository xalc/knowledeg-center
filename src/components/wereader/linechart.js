'use client';

import moment from 'moment';
import { useMemo } from 'react';
import { createStyles } from 'antd-style';
import { Line } from '@ant-design/plots';
const useStyles = createStyles(({ token, css }) => {
	return {
		heatMap: css`
			background-color: ${token.backgroundColor};
			color: ${token.colorText} !impontant;
		`,
	};
});
export default function LineChart({ readingRecords }) {
	const data = useMemo(() => {
		const yearsMap = new Map();
		readingRecords.forEach(record => {
			const m = moment(record._id * 1000);
			const currentYear = m.year();
			if (yearsMap.has(currentYear)) {
				const count = yearsMap.get(currentYear);
				yearsMap.set(currentYear, count + record.readingSeconds);
			} else {
				yearsMap.set(currentYear, record.readingSeconds);
			}
		});
		const dataArray = Array.from(yearsMap.keys(), key => {
			return {
				year: key,
				value: yearsMap.get(key) / 3600,
			};
		});
		const finalArr = dataArray.sort((a, b) => a.year - b.year);
		return finalArr;
	}, [readingRecords]);

	const { styles } = useStyles();
	return (
		<>
			<Line
				className={styles.heatMap}
				data={data}
				xField="year"
				yField={'value'}
				point={{
					sharpField: 'square',
					sizeField: 4,
				}}
				interaction={{
					tooltip: {
						marker: false,
					},
				}}
				style={{
					lineWidth: 2,
				}}
			/>
		</>
	);
}
