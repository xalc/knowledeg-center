'use client'
import HeatMap from '@uiw/react-heat-map';
import moment from 'moment';
import { useMemo, useState } from 'react';
import { Button, Tooltip } from 'antd';
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ token, css }) => {
    return {
        heatMap: css`
            background-color: ${token.backgroundColor};
            color: ${token.colorText} !impontant
        `
    }
})
export default function ReadingHeapmap({ readingRecords }) {

    const values = useMemo(() => {
        return readingRecords.map((record) => {
            return {
                date: moment(record._id * 1000).format('YYYY/MM/DD'),
                count: (record.readingSeconds / 60 / 10).toFixed(2)
            }
        })
    }, [readingRecords])
    const darkColor = { 0: 'rgb(255 255 255 / 25%)', 8: '#7BC96F', 4: '#C6E48B', 12: '#239A3B', 32: '#ff7b00' };
    const { styles } = useStyles();
    return <>
        <HeatMap
            className={styles.heatMap}
            value={values}
            weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
            startDate={new Date('2024/01/01')}
            endDate={new Date('2024/12/31')}
            width={1000}
            rectSize={14}
            legendCellSize={14}
            panelColors={darkColor}
            space={4}
            rectRender={(props, value) => {

                const today = moment(value.date).format("M[月]D[日]");
                const minutes = (value.count * 10).toFixed(2) || 0;
                return (
                    <Tooltip title={`${today}阅读时长: ${minutes}分钟`}>
                        <rect {...props} />
                    </Tooltip>

                );
            }}
        />

    </>

}