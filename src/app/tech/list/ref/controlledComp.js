'use client';

import { Button, Flex, Space } from "antd";
import { useEffect, useRef } from "react";

const ControlledComp = () => {

    const inputRef = useRef(null);
    const setFocus = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    };

    return <Flex>
        <Space>
            <input ref={inputRef} />
            <Button type='primary' onClick={setFocus}> focus</Button>
        </Space>
    </Flex>;
};
export default ControlledComp;