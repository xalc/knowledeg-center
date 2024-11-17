'use client';

import { useState, useEffect } from 'react';
const useLogin = () => {
	const isUersLogin = true;
	const [isLogin, setLogin] = useState(isUersLogin === 1 ? true : false);
	const [text, setText] = useState(isUersLogin ? 'Login out' : 'Login in');
	const setUserLogin = isUserLogin => {
		setLogin(isUserLogin);
		setText(isUserLogin ? 'Login out' : 'Login in');
	};

	useEffect(() => {
		fetch('/api/user', {
			method: 'POST',
			headers: {
				'context-type': 'application/json',
			},
			body: JSON.stringify({
				user: 'xalc',
				password: '123456',
			}),
		})
			.then(resp => resp.json())
			.then(resp => setUserLogin(resp.isValid));
	}, []);

	return [isLogin, text, setUserLogin];
};
export default useLogin;
