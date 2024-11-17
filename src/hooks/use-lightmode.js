'use client';

import { useEffect, useState } from 'react';

const useLightMode = () => {
	const [light, setLight] = useState(true);
	useEffect(() => {
		const theme = window.matchMedia('(prefers-color-scheme: light)');
		if (!theme.matches) setLight(false);
		const handleChange = e => {
			if (e.matches) {
				setLight(true);
			} else {
				setLight(false);
			}
		};
		theme.addEventListener('change', handleChange);
		return () => theme.removeEventListener('change', handleChange);
	}, []);
	return light;
};
export default useLightMode;
