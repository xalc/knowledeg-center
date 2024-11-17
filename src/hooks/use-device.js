'use client';

import { useEffect, useState } from 'react';
import { SMALL_SCREENT_WIDTH } from '@/libs/constants';
const useDevice = () => {
	const [width, setWidth] = useState(false);
	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return width < SMALL_SCREENT_WIDTH;
};
export default useDevice;
