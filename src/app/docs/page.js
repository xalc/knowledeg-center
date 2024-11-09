

import { MDXRemote } from 'next-mdx-remote/rsc'

import { Suspense } from 'react'
import { getMDXContent } from '@/libs/mdxparser.js';

import CustomLink from '@/components/customLink';
import CustomImage from '@/components/customImage';

const components = {
    a: CustomLink,
    img: CustomImage
}

const MdxComponent = async ({ searchParams }) => {
    const key = searchParams.page || 'notes/index.md';
    const content = await getMDXContent(key);

    return <Suspense fallback={<p>Loading feed...</p>}>
        <MDXRemote source={content} components={components} />
    </Suspense>
}
export default MdxComponent;