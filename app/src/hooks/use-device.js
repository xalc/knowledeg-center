'use client'

import { useEffect, useState } from "react";
const WIDTH_CONSTANT = 400;
const useDevice = () => {
    const [width, setWidth] = useState(false);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    return width < WIDTH_CONSTANT;
}
export default useDevice;
