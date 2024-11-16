'use client';
import HeatMap from '@uiw/react-heat-map';
import moment from 'moment';
import { useMemo, useState } from 'react';
import { Button, Flex, Tooltip, Alert } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => {
    return {
        heatMap: css`
            background-color: ${token.colorFillContent};
            color: ${token.colorTextBase} !important;
            margin-top: ${token.marginLG}px;
            height: 200px;
        `
    };

});
export default function ReadingHeapmap({ readingRecords, updateTime }) {
    const values = useMemo(() => {
        return readingRecords.map((record) => {
            return {
                date: moment(record._id * 1000).format('YYYY/MM/DD'),
                count: (record.readingSeconds / 60 / 10).toFixed(2)
            };
        });
    }, [readingRecords]);
    const darkColor = { 0: 'rgb(255 255 255 / 25%)', 8: '#7BC96F', 4: '#C6E48B', 12: '#239A3B', 32: '#ff7b00' };
    const { styles, theme } = useStyles();

    const lightMode = theme.appearance === 'light';
    const years = [];
    const now = moment();
    const currentYear = now.year();
    let startYear = 2022;
    while (startYear <= currentYear) {
        years.push(startYear);
        startYear++;
    }
    const [year, setYear] = useState(currentYear);
    const endDay = year === currentYear ? now.toDate() : moment(`${year}/12/31`).toDate();

    return <>
        <Alert showIcon closable message='每日贴砖' description={`最新同步与 ${moment(updateTime * 1000).format("dddd, MMMM Do YYYY, h:mm:ss a")}`} type="info" />

        <Flex justify='start' gap='large' wrap>
            {years.map((y, index) => {
                return (<Button
                    key={'button_' + index}
                    color="default"
                    type={year === y ? 'primary' : 'text'}
                    onClick={() => setYear(y)}
                >
                    {y}年
                </Button>);
            })}

        </Flex >
        <Flex justify='center'>
            <HeatMap
                className={styles.heatMap}
                value={values}
                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                startDate={moment(`${year}/01/01`).toDate()}
                endDate={endDay}
                width={1000}
                rectSize={14}
                legendCellSize={14}
                panelColors={lightMode ? undefined : darkColor}
                space={4}
                rectProps={{
                    rx: 5
                }}
                legendRender={({ key, y, ...rest }) => <rect key={key} {...rest} y={y + 20} rx={5} />}
                rectRender={({ key, ...rest }, value) => {

                    const today = moment(value.date).format("M[月]D[日]");

                    const minutes = value.count ? (value.count * 10).toFixed(2) : 0;
                    return (
                        <Tooltip title={`${today}阅读时长: ${minutes}分钟`}>
                            <rect key={key} {...rest} />
                        </Tooltip>

                    );

                }}
            />
        </Flex>

    </>;


}