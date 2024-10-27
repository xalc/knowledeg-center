'use client'
import User from '../src/components/user';
import { useState, useEffect } from 'react'
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ css, token }) => {
    return {
        container: css`
            height: calc(100% - 69px);
        `
    }
});
const AllList = () => {
    const [userList, setUserList] = useState([]);
    const { styles, cx } = useStyles();
    useEffect(() => {
        fetch('/api/list')
            .then(resp => resp.json())
            .then(users => setUserList(users.Users));
    }, []);

    return (<div className={styles.container}>
        <h2>All lists in dom</h2>
        <div>
            {
                userList.map((oneUser) => (<User key={oneUser.id} user={oneUser} />))
            }
        </div>

    </div>);
}
export default AllList;