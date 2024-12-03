import { MDXRemote } from 'next-mdx-remote/rsc';
import { Code } from 'bright';
import { Suspense } from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
// import { serialize } from 'next-mdx-remote/serialize';

import Title from 'antd/es/typography/Title';

import { getMDXContent } from '@/libs/mdxparser.js';

import CustomLink from '@/components/customLink';
import CustomImage from '@/components/customImage';

const components = {
	a: CustomLink,
	img: CustomImage,
	h1: props => <Title level={1} {...props} />,
	h2: props => <Title level={2} {...props} />,
	h3: props => <Title level={3} {...props} />,
	p: props => <Paragraph {...props} />,
	pre: Code,
};

const MdxComponent = async ({ searchParams }) => {
	const key = searchParams.page || 'notes/index.md';
	const content = await getMDXContent(decodeURI(key));
	// const mdxSource = await serialize(content)
	return (
		<Suspense fallback={<p>Loading feed...</p>}>
			<MDXRemote source={content} components={components} />
		</Suspense>
	);
};
export default MdxComponent;
