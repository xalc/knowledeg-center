'use client'
import React from 'react';
import styles from './layout.module.css'

import Link from 'next/link'
export default function UILayout({ children }) {


    return (
        <div className={styles.uiLayout}>
            <div className={styles.header}>
                <div ><Link href='/'>Home</Link></div>
                <div ><Link href='/list'>List</Link></div>
                <div ><Link href='/login'>Login</Link></div>
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