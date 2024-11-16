'use client';
import { Flex, Input, Typography } from 'antd';
import { useState } from 'react';
import moment from 'moment';
const { Title } = Typography;

const UtilPage = () => {
    const [value, setValue] = useState(0);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return <>
        <Flex>
            <Flex gap={'large'} justify={'space-between'} align={'center'}>
                <Title level={5}>时间戳转换</Title>
                <Input placeholder="时间戳转换" onChange={handleChange} value={value} />
                {moment(parseInt(value)).format('YYYY MM DD, h:mm:ss')}
            </Flex>
        </Flex>
    </>;
};

export default UtilPage;