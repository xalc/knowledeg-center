'use client';

import ReactECharts from 'echarts-for-react';
import { useMemo } from "react";
const READ_FINISH_KEY = 'finished';
const READ_IN_PROGRESS_KEY = 'reading';
const READ_NOT_START = 'notstart';
export default function ReadingPieChart({ data }) {


    const datas = useMemo(() => {
        const bookMap = new Map();
        bookMap.set(READ_FINISH_KEY, 0);
        bookMap.set(READ_IN_PROGRESS_KEY, 0);
        bookMap.set(READ_NOT_START, 0);
        for (const book of data) {
            if (book.progress === 100) {
                const currentCount = bookMap.get(READ_FINISH_KEY);
                bookMap.set(READ_FINISH_KEY, currentCount + 1);
            } else if (book.progress < 100 && book.progress > 0) {
                const currentCount = bookMap.get(READ_IN_PROGRESS_KEY);
                bookMap.set(READ_IN_PROGRESS_KEY, currentCount + 1);
            } else {
                const currentCount = bookMap.get(READ_NOT_START);
                bookMap.set(READ_NOT_START, currentCount + 1);
            }
        }
        const dataArray = [];
        bookMap.forEach((value, key) => {
            let lebel = '读完';
            if (key === READ_NOT_START) {
                lebel = '未开始';
            } else if (key === READ_IN_PROGRESS_KEY) {
                lebel = '在读';
            }
            dataArray.push(
                {
                    type: key,
                    value: value,
                    lebel
                }
            );
        });
        return dataArray;

    }, [data]);



    const options = {
        title: {
            text: '阅读情况',
        },

        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'right'
        },
        dataset: {
            source: datas
        },


        series: [
            {
                type: 'pie',
                emphasis: {
                    focus: 'self'
                },
                radius: '85%',
                center: ['50%', '50%'],
                encode: {
                    value: 'value',
                    itemName: 'lebel'

                },
                label: {
                    formatter: '{d}%',
                    position: 'inside'
                },
                tooltip: {

                    valueFormatter: (value) => value + '本'
                }
            },
        ]
    };

    return <ReactECharts
        option={options}
        styles={{ height: 'inherit' }}
        opts={{ renderer: 'svg' }}
        style={{ height: '500px', width: 'auto' }}
    />;


}