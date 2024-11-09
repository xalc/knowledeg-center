'use client'
import { Flex, Typography, Space, Button } from "antd";
import { useState, useEffect } from 'react';
const { Title } = Typography;
const DemoPage = () => {
    const [count, setCount] = useState(0);
    const [obj, setObject] = useState({ count: 0 })
    // const [timer, setTimer] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(15)
        }, 1000)
        setCount(20)
    }, [])
    // const increase = () => {

    //     setCount(count + 1);
    //     console.log(count)
    // }
    const increase = () => {
        obj.count++;
        setCount({ ...obj });
        console.log(obj.count)
    }

    const increaseLater = () => {
        setTimeout(() => {
            obj.count++;
            setCount({ ...obj });
            console.log(obj.count);
        }, 5000)
    }

    return (<>
        <Title level={1}> This is a test page for fasting developing/validating a component</Title>

        <Title level={3}> useState & setTimeout</Title>
        <Flex vertical>
            <Space>
                <Button type='primary' onClick={increase}>Plus 1</Button>
                <Button type='secordary' onClick={increaseLater}>Plus 3 later</Button>
            </Space>
            <div>
                currentCount: {count}
            </div>
        </Flex>


    </>)
}

export default DemoPage;