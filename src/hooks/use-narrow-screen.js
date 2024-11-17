'use client';
// the replacement for useDevice by mediaquery
import { useEffect, useState } from 'react';
import { SMALL_SCREENT_WIDTH } from '@/libs/constants';

const useNarrowScreen = () => {
	const [narrowScreen, setNarrowScreen] = useState(false);
	useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${SMALL_SCREENT_WIDTH}px)`);
		setNarrowScreen(mql.matches);
		const handleResize = event => {
			console.log('media query changed');
			if (event.matches) {
				setNarrowScreen(true);
			} else {
				setNarrowScreen(false);
			}
		};
		mql.addEventListener('change', handleResize);

		return () => mql.removeEventListener('change', handleResize);
	}, []);

	return narrowScreen;
};

export default useNarrowScreen;
