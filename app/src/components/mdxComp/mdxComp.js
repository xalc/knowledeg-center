'use client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense, useState, useEffect } from 'react'
import ErrorBoundary from '../ErrorBoundary'
const MdxComponent = ({ params }) => {
    const [content, setContent] = useState();
    useEffect(() => {
        fetch(`api/docs/mdcontent?key=${params}`)
            .then(res => res.text())
            .then(content => setContent(content))
    }, [params])

    return (
        // <ErrorBoundary fallback={<p>Content not support</p>}>
        <Suspense fallback={<p>Loading feed...</p>}>
            <MDXRemote source={content} />
        </Suspense>
        // </ErrorBoundary>
    )



}
export default MdxComponent;