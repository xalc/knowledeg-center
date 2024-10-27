'use client'
// the replacement for useDevice by mediaquery
import { useEffect, useState } from "react";
const WIDTH_CONSTANT = 500;

const useNarrowScreen = () => {
    const [narrowScreen, setNarrowScreen] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${WIDTH_CONSTANT}px)`);
        setNarrowScreen(mql.matches);
        const handleResize = (event) => {
            console.log('media query changed')
            if (event.matches) {
                setNarrowScreen(true)
            } else {
                setNarrowScreen(false)
            }
        }
        mql.addEventListener("change", handleResize);

        return () => mql.removeEventListener('change', handleResize);
    }, []);

    return narrowScreen;
}

export default useNarrowScreen;