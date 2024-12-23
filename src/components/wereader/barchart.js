'use client';

import ReactECharts from 'echarts-for-react';
import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useResponsive } from 'antd-style';
import moment from 'moment';

const gridLayout = {
	mobile: [
		{ top: '5%', height: '25%', width: '90%' },
		{ top: '40%', height: '25%', width: '90%' },
		{ top: '75%', height: '25%', width: '90%' },
	],
	tablet: [
		{ left: 10, bottom: '55%', width: '45%' },
		{ left: '50%', bottom: '55%', width: '45%' },
		{ left: 10, top: '65%', bottom: 30, width: '95%' },
	],
	laptop: [
		{ left: 10, width: '30%', bottom: 30 },
		{ left: '34%', width: '30%', bottom: 30 },
		{ left: '67%', width: '30%', bottom: 30 },
	],
};
const titleLayout = {
	mobile: [
		{ left: '45%', top: 0 },
		{ left: '45%', top: '35%' },
		{ left: '45%', top: '70%' },
	],
	tablet: [
		{ left: '30%', top: 0 },
		{ left: '70%', top: 0 },
		{ top: '50%', left: '50%' },
	],
	laptop: [
		{ left: '15%' },
		{ left: '50%' },
		{ left: '75%' },
	],
}
const containerHeight = {
	mobile: 1200,
	tablet: 600,
	laptop: 300,
};
export default function ReadingTimeBarChart({ readingRecords, chooseYear, year, month, chooseMonth }) {
	const responsive = useResponsive();
	const { tablet, laptop } = responsive;
	const device = laptop ? 'laptop' : tablet ? 'tablet' : 'mobile';

	const chartRef = useRef(null);

	const transferMinutes = seconds => {
		return (seconds / 60).toFixed(2);
	};

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
			const dateYear = date.year();
			if (year !== dateYear) return;
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
	}, [readingRecords, year]);

	const DateData = useMemo(() => {
		const dateMap = new Map();
		readingRecords.forEach(record => {
			const date = moment(record._id * 1000);
			const dateYear = date.year();
			const dateMonth = date.month() + 1;
			const dateOfMonth = date.date();
			const readingTime = record.readingSeconds;

			//TODO first 2024/10
			if (year === dateYear && month === dateMonth) {
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
	}, [readingRecords, year, month]);
	const options = useCallback(() => {
		const { tablet, laptop } = responsive;
		const device = laptop ? 'laptop' : tablet ? 'tablet' : 'mobile';
		const usedLayout = gridLayout[device];
		const totleReadingHoures = (yearData.reduce((acc, year) => acc + parseInt(year.value), 0) / 60).toFixed(1);
		const yearReadingHoures = (monthData.reduce((acc, month) => acc + parseInt(month.value), 0) / 60).toFixed(1);
		const monthReadingHoures = (DateData.reduce((acc, date) => acc + parseInt(date.value), 0) / 60).toFixed(1);
		return {
			legend: {},
			tooltip: {
				formatter: ({ data, seriesId, dimensionNames }) => {
					const name = dimensionNames[0];
					if (seriesId === 'year_key') {
						return data[name] + '年: 阅读' + (data["value"] / 60).toFixed(2) + '小时'
					}
					if (seriesId === 'month_key') {
						return data[name] + '月: 阅读' + (data["value"] / 60).toFixed(2) + '小时'
					}
					if (seriesId === 'date_key') {
						return data[name] + '日: 阅读' + parseInt(data.value).toFixed(2) + '分钟'
					}

				}
			},
			title: [{
				text: '总共阅读量',
				subtext: `${totleReadingHoures} 小时`,
				...titleLayout[device][0]

			}, {
				text: '当年阅读量',
				subtext: `${yearReadingHoures}小时`,
				...titleLayout[device][1]

			}, {
				text: '当月阅读量',
				subtext: `${monthReadingHoures}小时`,
				...titleLayout[device][2]

			}],
			dataset: [
				{ source: yearData },
				{ source: monthData },
				{ source: DateData },
			],
			xAxis: [
				{ type: 'category', gridIndex: 0 },
				{ type: 'category', gridIndex: 1 },
				{ type: 'category', gridIndex: 2 },
			],
			yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }, { gridIndex: 2 }],
			grid: usedLayout,
			series: [
				{
					type: 'bar',
					id: 'year_key',
					datasetIndex: 0,
					encode: {
						x: 'year',
						y: 'value',
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
				},
				{
					type: 'bar',
					id: 'date_key',
					emphasis: {
						focus: 'self',
					},
					datasetIndex: 2,
					xAxisIndex: 2,
					yAxisIndex: 2,
					encode: {
						x: 'date',
						y: 'value',
					},
				},
			],
		};
	}, [DateData, monthData, responsive, yearData]);

	useEffect(() => {
		let echartInstance = null;
		if (chartRef.current) {
			echartInstance = chartRef.current.getEchartsInstance();
			echartInstance.on('click', paras => {
				if (paras.seriesId === 'year_key') {
					chooseYear(paras.value.year)
				} else if (paras.seriesId === 'month_key') {
					chooseMonth(paras.value.month);
				}
				console.log(paras.date);
			});
		}
		return () => echartInstance?.off('click');
	}, [chartRef, chooseYear, chooseMonth]);
	useEffect(() => {
		const chart = chartRef.current.getEchartsInstance();
		chart.setOption(options(), true);
		console.log('screen changed');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [responsive]);


	return (


		<ReactECharts
			ref={chartRef}
			option={options()}
			styles={{ height: 'inherit' }}
			opts={{ renderer: 'svg' }}
			autoResize
			lazyUpdate={true}
			style={{ height: `${containerHeight[device]}px`, width: 'auto' }}
		/>

	);
}
