
'use client'

import { useState, useEffect } from 'react';
const useLogin = () => {
    const isUersLogin = localStorage.getItem('isLogin');
    const [isLogin, setLogin] = useState(isUersLogin === 1 ? true : false);
    const [text, setText] = useState(isUersLogin ? "Login out" : "Login in");
    const setUserLogin = (isUserLogin) => {
        setLogin(isUserLogin);
        setText(isUserLogin ? "Login out" : "Login in");
        localStorage.setItem("isLogin", isUserLogin ? 1 : 0);
    }

    useEffect(() => {
        const storagechanged = () => {
            console.log('changed');
        }
        window.addEventListener('storage', storagechanged);
        return window.removeEventListener('storage', storagechanged);
    }, [])

    return [isLogin, text, setUserLogin];
}
export default useLogin;


