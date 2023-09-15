'use client'
import React from 'react';
import styles from './layout.module.css'


import { useRouter } from 'next/navigation';
import { Button } from 'antd';
export default function UILayout({ children }) {

    const router = useRouter()
    return (
        <div className={styles.uiLayout}>
            <div className={styles.header}>
                <Button type="link" onClick={() => router.push('/')}>Home</Button>
                <Button type="link" onClick={() => router.push('/list')}>List</Button>
                <Button type="link" onClick={() => router.push('/login')}>Login</Button>
            </div>
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.footer}>
                HunterX ©2023 developed in Xi'an
            </div>
        </div>
    )
}