
'use client';
import Link from 'next/link';
import { Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
export default function CustomLink({ href, ...otherProps }) {
    const isOuter = href.startsWith('http');
    const newlink = isOuter ? href : `/docs?page=${href}`;
    if (isOuter) {
        return <a href={href} target="_blank" rel="noreferrer" >
            <Button type="link"
                iconPosition='end'
                icon={<ExportOutlined />}
                {...otherProps} />
        </a>;
    }
    return (
        <Link href={newlink}>
            <Button type="link"
                {...otherProps} />
        </Link>
    );


}