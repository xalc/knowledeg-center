

import { MDXRemote } from 'next-mdx-remote/rsc';

import { Suspense } from 'react';
import { serialize } from 'next-mdx-remote/serialize';

import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { getMDXContent } from '@/libs/mdxparser.js';

import CustomLink from '@/components/customLink';
import CustomImage from '@/components/customImage';

const components = {
    a: CustomLink,
    img: CustomImage,
    h1: (props) => <Title level={1} {...props} />,
    h2: (props) => <Title level={2} {...props} />,
    h3: (props) => <Title level={3} {...props} />

};

const MdxComponent = async ({ searchParams }) => {
    const key = searchParams.page || 'notes/index.md';
    const content = await getMDXContent(key);
    // const mdxSource = await serialize(content)
    return <Suspense fallback={<p>Loading feed...</p>}>
        <MDXRemote source={content} components={components} />
    </Suspense>;
};
export default MdxComponent;