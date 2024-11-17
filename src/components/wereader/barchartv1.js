'use client';

import { EChart } from '@kbox-labs/react-echarts';
import { useMemo, useState } from 'react';
import { useResponsive } from 'antd-style';
import moment from 'moment';

const gridLayout = {
	mobile: [
		{ top: 10, bottom: '67%' },
		{ top: '33%', bottom: '34%' },
		{ top: '66%', bottom: 30 },
	],
	tablet: [
		{ left: 10, bottom: '50%', width: '45%' },
		{ left: '50%', bottom: '50%', width: '45%' },
		{ top: '50%', bottom: 30, width: '90%' },
	],
	laptop: [
		{ left: 10, width: '30%' },
		{ left: '34%', width: '30%' },
		{ left: '67%', width: '30%' },
	],
};
const containerHeight = {
	mobile: 1500,
	tablet: 1000,
	laptop: 500,
};
export default function ReadingTimeBarChart({ readingRecords }) {
	const responsive = useResponsive();
	const { tablet, laptop } = responsive;
	const device = laptop ? 'laptop' : tablet ? 'tablet' : 'mobile';
	const usedLayout = gridLayout[device];
	const transferMinutes = seconds => {
		return (seconds / 60).toFixed(2);
	};
	const now = moment();

	const [thisYear, setThisYear] = useState(now.year());
	const [thisMonth, setThisMonth] = useState(now.month());

	const yearData = useMemo(() => {
		const yearMap = new Map();
		readingRecords.forEach(record => {
			const date = moment(record._id * 1000);
			const year = date.year();
			const readingTime = record.readingSeconds;
			if (yearMap.has(year)) {
				const count = yearMap.get(year);
				yearMap.set(year, count + readingTime);
			} else {
				yearMap.set(year, readingTime);
			}
		});
		return Array.from(yearMap.keys(), key => {
			return {
				year: key,
				value: transferMinutes(yearMap.get(key)),
			};
		}).sort((a, b) => a.year - b.year);
	}, [readingRecords]);

	const monthData = useMemo(() => {
		const monthMap = new Map();
		readingRecords.forEach(record => {
			const date = moment(record._id * 1000);
			const year = date.year();
			if (year !== thisYear) return;
			const month = date.month() + 1;
			const readingTime = record.readingSeconds;
			if (monthMap.has(month)) {
				const count = monthMap.get(month);
				monthMap.set(month, count + readingTime);
			} else {
				monthMap.set(month, readingTime);
			}
		});

		return Array.from(monthMap.keys(), key => {
			return {
				month: key,
				value: transferMinutes(monthMap.get(key)),
			};
		}).sort((a, b) => a.month - b.month);
	}, [readingRecords, thisYear]);

	const DateData = useMemo(() => {
		const dateMap = new Map();
		readingRecords.forEach(record => {
			const date = moment(record._id * 1000);
			const year = date.year();
			const month = date.month() + 1;
			const dateOfMonth = date.date();
			const readingTime = record.readingSeconds;

			//TODO first 2024/10
			if (year === thisYear && month === thisMonth) {
				if (dateMap.has(dateOfMonth)) {
					const count = dateMap.get(dateOfMonth);
					dateMap.set(dateOfMonth, count + readingTime);
				} else {
					dateMap.set(dateOfMonth, readingTime);
				}
			}
		});

		return Array.from(dateMap.keys(), key => {
			return {
				date: key,
				value: transferMinutes(dateMap.get(key)),
			};
		}).sort((a, b) => a.date - b.date);
	}, [readingRecords, thisYear, thisMonth]);

	const onClick = paras => {
		if (paras.seriesId === 'year_key') {
			setThisYear(paras.value.year);
		} else if (paras.seriesId === 'month_key') {
			setThisMonth(paras.value.month);
		}
		console.log(paras.date);
	};

	return (
		<>
			<p>{`year: ${thisYear} month: ${thisMonth}`}</p>

			<EChart
				style={{ height: `${containerHeight[device]}px`, width: 'auto' }}
				xAxis={[
					{ type: 'category', gridIndex: 0 },
					{ type: 'category', gridIndex: 1 },
					{ type: 'category', gridIndex: 2 },
				]}
				onClick={onClick}
				yAxis={[{ gridIndex: 0 }, { gridIndex: 1 }, { gridIndex: 2 }]}
				grid={usedLayout}
				dataset={[
					{ source: yearData },
					{ source: monthData },
					{ source: DateData },
				]}
				lazyUpdate
				animation
				animationDuration={1000}
				series={[
					{
						type: 'bar',
						id: 'year_key',
						datasetIndex: 0,
						encode: {
							x: 'year',
							y: 'value',
						},
						emphasis: {
							focus: 'self',
						},
					},
					{
						type: 'bar',
						id: 'month_key',
						datasetIndex: 1,
						xAxisIndex: 1,
						yAxisIndex: 1,
						encode: {
							x: 'month',
							y: 'value',
						},
						emphasis: {
							focus: 'self',
						},
					},
					{
						type: 'bar',
						datasetIndex: 2,
						xAxisIndex: 2,
						yAxisIndex: 2,
						encode: {
							x: 'date',
							y: 'value',
						},
					},
				]}
			/>
		</>
	);
}
