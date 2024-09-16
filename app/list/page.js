'use client'
import User from '../src/components/user';
import pageStyle from './page.module.scss';

import { useState, useEffect } from 'react'
const AllList = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {

        fetch('/api/list')
            .then(resp => resp.json())
            .then(users => setUserList(users.Users));

    }, []);

    return (<>
        <h2>All lists in dom</h2>
        <div className={pageStyle.container}>
            {
                userList.map((oneUser) => (<User key={oneUser.id} user={oneUser} />))
            }
        </div>

    </>);
}
export default AllList;