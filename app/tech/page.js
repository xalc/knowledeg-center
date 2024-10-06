'use client'

import { useState, useEffect, useRef } from 'react';
import TfvisCore from './tfvis-react';
import { Button } from 'antd';
import styles from './tech.modules.scss';
const TechPage = () => {

    return (<div className={styles.container}>
        <h2>Tech page</h2>
        <TfvisCore ></TfvisCore>
    </div>);
}
export default TechPage;