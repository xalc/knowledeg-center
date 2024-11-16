import { useEffect, useState } from "react";

const Avatar = ({ url, id }) => {
    const [useDefault, setDefault] = useState(false);
    const onError = (event) => {
        setDefault(true);
    };
    const onLoad = (event) => {
        console.log(`image loaded for image ${id}: ${event.target.src}`);
        setDefault(false);
    };
    useEffect(() => {
        setDefault(true);
    }, [url]);


    const getStyle = (isDefault) => {
        return isDefault ? {
            display: 'block'
        } : {
            display: 'none'
        };
    };
    return (<>

        {<img src='/images/profile.jpg' loading="lazy" style={getStyle(useDefault)}></img>}
        {<img src={url} onLoad={onLoad}
            style={getStyle(!useDefault)}
            onError={onError}></img>}

    </>);


};

export default Avatar;
