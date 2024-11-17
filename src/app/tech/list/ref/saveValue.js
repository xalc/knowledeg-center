'use client';

import { Button, Flex, Space } from 'antd';
import { useState, useRef } from 'react';

const SaveValue = () => {
	const [startTime, setStartTime] = useState(null);
	const [now, setNow] = useState(null);
	const intervalRef = useRef(null);

	function handleStart() {
		setStartTime(Date.now());
		setNow(Date.now());

		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setNow(Date.now());
		}, 10);
	}

	function handleStop() {
		clearInterval(intervalRef.current);
	}

	let secondsPassed = 0;
	if (startTime != null && now != null) {
		secondsPassed = (now - startTime) / 1000;
	}

	return (
		<Flex vertical>
			<Space>
				<Button type="primary" onClick={handleStart}>
					{' '}
					Start
				</Button>
				<Button type="secondary" onClick={handleStop}>
					{' '}
					Stop
				</Button>
			</Space>
			<Space>
				<p>Time passed: {secondsPassed.toFixed(3)}</p>
			</Space>
		</Flex>
	);
};
export default SaveValue;
