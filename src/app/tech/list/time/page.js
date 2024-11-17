'use client';
import { Typography, Row, Col, Progress, Radio } from 'antd';
import moment from 'moment';
import { createStyles } from 'antd-style';
const { Title } = Typography;
import { useState, useEffect } from 'react';
const useStyles = createStyles(() => {
	return {
		number: {
			fontSize: '24px',
			color: 'red',
			paddingLeft: '12px',
			paddingRight: '12px',
		},
		container: {
			textAlign: 'center',
		},
	};
});
const TimePage = () => {
	const { styles } = useStyles();
	const [now, setNow] = useState(moment());
	const [type, setType] = useState('line');
	const toFixValue = value => value.toFixed(2);
	const options = [
		{
			label: 'Line',
			value: 'line',
		},
		{
			label: 'Circle',
			value: 'circle',
		},
		{
			label: 'Dashboard',
			value: 'dashboard',
		},
	];
	useEffect(() => {
		const timer = setInterval(() => {
			setNow(moment());
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	return (
		<>
			<Title>Time wasted!</Title>

			<Title suppressHydrationWarning level={3}>
				现在是 {now.format('dddd, MMMM Do YYYY, h:mm:ss a')}
			</Title>
			<Radio.Group
				block
				options={options}
				defaultValue="line"
				optionType="button"
				buttonStyle="solid"
				onChange={e => {
					setType(e.target.value);
				}}
			/>
			<Row
				suppressHydrationWarning
				gutter={[
					{ xs: 8, sm: 16, md: 24 },
					{ xs: 8, sm: 16, md: 24 },
				]}>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在正在经历这一分钟的第
							<span className={styles.number}>{now.second()}</span>秒钟
						</Title>
						<Progress
							type={type}
							percent={toFixValue((now.second() / 60) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在是{now.hour()}点的第
							<span className={styles.number}>{now.minute()}</span>分钟
						</Title>
						<Progress
							type={type}
							percent={toFixValue((now.minute() / 60) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在是今天的第<span className={styles.number}>{now.hour()}</span>
							小时
						</Title>

						<Progress type={type} percent={toFixValue((now.hour() / 24) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在是本周的第
							<span className={styles.number}>{now.weekday() + 1}</span>天
						</Title>

						<Progress
							type={type}
							percent={toFixValue(((now.weekday() + 1) / 7) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在是{now.month() + 1}月的第
							<span className={styles.number}>{now.date()}</span>天
						</Title>
						<Progress type={type} percent={toFixValue((now.date() / 30) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在是{now.year()}年的第
							<span className={styles.number}>{now.dayOfYear()}</span>天
						</Title>
						<Progress
							type={type}
							percent={toFixValue((now.dayOfYear() / 365) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在是{now.year()}年的第
							<span className={styles.number}>{now.week()}</span>周
						</Title>
						<Progress type={type} percent={toFixValue((now.week() / 52) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在是{now.year()}年的第
							<span className={styles.number}>{now.month() + 1}</span>月
						</Title>
						<Progress
							type={type}
							percent={toFixValue(((now.month() + 1) / 12) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
				<Col xs={24} sm={24} md={12} lg={8}>
					<div className={styles.container}>
						<Title level={5}>
							现在是{now.year()}年的第
							<span className={styles.number}>{now.quarter()}</span>季度
						</Title>
						<Progress
							type={type}
							percent={toFixValue((now.quarter() / 4) * 100)}>
							{' '}
						</Progress>
					</div>
				</Col>
			</Row>
		</>
	);
};
export default TimePage;
