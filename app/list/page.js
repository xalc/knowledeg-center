'use client'
import User from '../src/components/user';
import styles from './styles.module.scss';

import { useState, useEffect } from 'react'
const VirtualList = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {

        fetch('/api/list')
            .then(resp => resp.json())
            .then(users => setUserList(users.Users));

    }, []);

    return (<>
        <h2>All lists in dom</h2>
        <div className={styles.container}>
            {
                userList.map((oneUser) => (<User key={oneUser.id} user={oneUser} />))
            }
        </div>

    </>);
}
export default VirtualList;