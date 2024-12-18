import { compileMDX } from 'next-mdx-remote/rsc';
import { Code } from 'bright';
import { Suspense } from 'react';
import Paragraph from 'antd/es/typography/Paragraph';

import remarkGfm from 'remark-gfm'
import Title from 'antd/es/typography/Title';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from 'rehype-toc';
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
	code: props => <code style={{ color: 'red', fontWeight: 500 }} {...props} />
};

const MdxComponent = async (props) => {
	const searchParams = await props.searchParams;
	const key = searchParams.page ?? 'notes/index.md';
	const source = await getMDXContent(decodeURIComponent(key));
	const { content, frontmatter } = await compileMDX({
		source,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				remarkPlugins: [remarkGfm],
				rehypePlugins: [
					rehypeSlug,
					rehypeAutolinkHeadings,
					[rehypeToc, {
						// position: 'after', // 将 TOC 放在内容之后
						// heading: '目录', // 自定义目录标题
						// className: 'my-toc', // 添加自定义 class
					}]
				]
			}
		},
		components: components,
	});

	return (
		<Suspense fallback={<p>Loading feed...</p>}>
			<h1>{frontmatter.Author}</h1>
			{/* <MDXRemote source={source} components={components} /> */}
			{/* <MDXRemote {...content} components={{}} /> */}
			{content}

		</Suspense >
	);
};
export default MdxComponent;
