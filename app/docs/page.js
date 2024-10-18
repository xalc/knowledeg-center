
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense } from 'react'
import { getMDXContent } from '@/api/libs/mdxparser';

const MdxComponent = async ({ searchParams }) => {
    const key = searchParams.page || 'index.mdx';
    const content = await getMDXContent(key);
    return <Suspense fallback={<p>Loading feed...</p>}>
        <MDXRemote source={content} />
    </Suspense>
}
export default MdxComponent;