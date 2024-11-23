'use client'
import { Row, Col, Divider, Alert, Button, Space } from "antd";
import Typography from "antd/es/typography/Typography";
import { useRef, useState } from 'react';
import ReadingHeapmap from "./heapmap";
import ReadingPieChart from "./piechart";
import ReadingTimeBarChart from "./barchart";

import moment from "moment";


const { Text } = Typography;
const getYears = () => {
  const now = moment();
  let years = [];
  const currentYear = now.year();
  let startYear = 2019;
  while (startYear <= currentYear) {
    years.push(startYear);
    startYear++;
  }
  return years;
}

export default function ChartContainer({ readingTimes, syncdTime, readingStatus }) {
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().month() + 1);

  const timer = useRef();
  let years = getYears();
  const onStart = () => {
    if (timer.current) return;
    timer.current = setInterval(() => {


      setMonth(m => {
        console.log('起舞:' + m);
        const nextMonth = (m % 12) + 1;
        if (m === 12) {
          setYear(y => getYears()[(years.indexOf(y) + 1) % years.length]);
        }
        return nextMonth;

      })



    }, 1000);
  }
  const onEnd = () => {
    clearInterval(timer.current);
    timer.current = null;
  }

  return <>
    <Row gutter={[16, 32]}>
      <Col sm={24} md={24} lg={24} xl={24}>
        <Alert
          showIcon
          closable
          message="每日贴砖"
          description={`最新同步与 ${moment(syncdTime * 1000).format('dddd, MMMM Do YYYY, h:mm:ss a')}`}
          type="info"
        />
      </Col>
    </Row >
    <Row gutter={[16, 32]}>
      <Col>
        <Space size={'large'}>
          {getYears().map((y, index) => {
            return (
              <Button
                key={'button_' + index}
                color="default"
                type={year === y ? 'primary' : 'text'}
                onClick={() => setYear(y)}>
                {y}年
              </Button>
            );
          })}
        </Space>

      </Col>
    </Row>
    <Row gutter={[16, 32]}>
      <Col sm={24} md={24} lg={24} xl={24}>
        <ReadingHeapmap
          year={year}
          readingRecords={readingTimes}
        ></ReadingHeapmap>
      </Col>
    </Row>
    <Divider orientation="center">React Echarts</Divider>
    <Row gutter={[16, 32]}>
      <Col xs={24} sm={24}>
        <Space>
          <Button
            onClick={onStart}>
            数据起舞
          </Button>
          <Button
            onClick={onEnd}>
            暂停
          </Button>

        </Space>

      </Col>
      <Col xs={24} sm={24}>
        <Space size={'large'}>
          <span style={{ fontSize: '24px', fontWeight: 900 }}>{year}</span>
          <Text>年</Text>
          <span style={{ fontSize: '24px', fontWeight: 900 }}>{month}</span>
          <Text>月</Text>
        </Space>
      </Col>

      <Col xs={24} sm={24}>
        <ReadingTimeBarChart readingRecords={readingTimes} year={year} month={month} chooseMonth={(m) => setMonth(m)} chooseYear={(y) => setYear(y)} />
      </Col>
      <Col xs={24} sm={24}>
        <ReadingPieChart data={readingStatus} />
      </Col>
    </Row>
  </>
} 