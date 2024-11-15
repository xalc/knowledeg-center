'use client'

import ReactECharts from 'echarts-for-react';
import { useMemo } from "react";
import moment from 'moment';
export default function ReadingTimeBarChart({ readingRecords }) {
    const transferMinutes = (seconds) => {
        return (seconds / 60).toFixed(2);
    }
    const dataSources = useMemo(() => {
        const finalResult = [];

        // eslint-disable-next-line no-undef
        const yearMap = new Map();
        // eslint-disable-next-line no-undef
        const monthMap = new Map();
        // eslint-disable-next-line no-undef
        const dateMap = new Map();

        readingRecords.forEach((record) => {
            const date = moment(record._id * 1000);
            const year = date.year();
            const month = date.month() + 1;
            const dateOfMonth = date.date();
            const readingTime = record.readingSeconds;
            if (yearMap.has(year)) {
                const count = yearMap.get(year);
                yearMap.set(year, count + readingTime)
            } else {
                yearMap.set(year, readingTime)
            }

            //TODO first 2024
            if (year === 2024) {
                if (monthMap.has(month)) {
                    const count = monthMap.get(month);
                    monthMap.set(month, count + readingTime)
                } else {
                    monthMap.set(month, readingTime);
                }

            }
            //TODO first 2024/10
            if (year === 2024 && month === 10) {
                if (dateMap.has(dateOfMonth)) {
                    const count = dateMap.get(dateOfMonth);
                    dateMap.set(dateOfMonth, count + readingTime)
                } else {
                    dateMap.set(dateOfMonth, readingTime);
                }
            }


        });
        const dataArray = Array.from(yearMap.keys(), (key) => {
            return {
                year: key,
                value: transferMinutes(yearMap.get(key))
            }
        }).sort((a, b) => a.year - b.year);

        finalResult.push({ source: dataArray });

        const monthArray = Array.from(monthMap.keys(), (key) => {
            return {
                month: key,
                value: transferMinutes(monthMap.get(key))
            }
        }).sort((a, b) => a.month - b.month);

        finalResult.push({ source: monthArray });


        const dateArray = Array.from(dateMap.keys(), (key) => {
            return {
                date: key,
                value: transferMinutes(dateMap.get(key))
            }
        }).sort((a, b) => a.date - b.date);

        finalResult.push({ source: dateArray });

        return finalResult;

    }, [readingRecords])

    const options = {
        legend: {},
        tooltip: {},
        dataset: dataSources,
        xAxis: [{ type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 },
        { type: 'category', gridIndex: 2 }],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }, { gridIndex: 2 }],
        grid: [{ top: 10, bottom: '67%', },
        { top: '33%', bottom: '34%' },
        { top: '66%', bottom: 30 }],
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{
            type: 'bar',
            datasetIndex: 0,
            encode: {
                x: 'year',
                y: 'value'
            },

        },
        {
            type: 'line',
            datasetIndex: 0,
            encode: {
                x: 'year',
                y: 'value'
            },

        },
        {
            type: 'bar',
            datasetIndex: 1,
            xAxisIndex: 1,
            yAxisIndex: 1,
            encode: {
                x: 'month',
                y: 'value'
            },

        },
        {
            type: 'line',
            datasetIndex: 1,
            xAxisIndex: 1,
            yAxisIndex: 1,
            encode: {
                x: 'month',
                y: 'value'
            },

        },
        // {
        //     type: 'bar',
        //     datasetIndex: 2,
        //     xAxisIndex: 2,
        //     yAxisIndex: 2,
        //     encode: {
        //         x: 'date',
        //         y: 'value'
        //     },

        // },
        {
            type: 'line',
            datasetIndex: 2,
            xAxisIndex: 2,
            yAxisIndex: 2,
            encode: {
                x: 'date',
                y: 'value'
            },

        },

        ]
    };


    return <ReactECharts
        option={options}
        styles={{ height: 'inherit' }}
        opts={{ renderer: 'svg' }}
        style={{ height: '1500px', width: 'auto' }}
    />

}