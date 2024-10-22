'use client'

import Image from 'next/image'
const imageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`
}
const CustomImage = (props) => {
    return <img {...props} width='90%'></img>
    // return <div><Image loader={imageLoader} fill  {...props} /></div>
}
export default CustomImage;