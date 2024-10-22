
'use client'
import Link from 'next/link';
import { Button } from 'antd'
import { SelectOutlined } from '@ant-design/icons'
export default function CustomLink({ href, ...otherProps }) {
    let isOuter = href.startsWith('http');
    const newlink = isOuter ? href : `/docs?page=${href}`;
    if (isOuter) {
        return <a href={href} target="_blank" >
            <Button type="link"
                iconPosition='end'
                icon={<SelectOutlined />}
                {...otherProps} />
        </a>
    }
    return (
        <Link href={newlink}>
            <Button type="link"
                {...otherProps} />
        </Link>
    );


}