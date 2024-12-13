
import dynamic from 'next/dynamic'
import Title from 'antd/es/typography/Title';
// import BlogPost, { metadata } from '@/blogs/这个博客网站为什么会存在.mdx'
export async function generateStaticParams() {
  return [{ blogName: '这个博客网站为什么会存在' }, { blogName: '我的 第一篇文章' }]
}
const BlogItem = async ({ params }) => {

  const blogNameURL = (await params).blogName;
  const blogName = decodeURI(blogNameURL);

  const MDX = dynamic(() => import(`@/blogs/${blogName}.mdx`))

  return <>
    <Title level={1}>{blogName}</Title>

    <MDX />
  </>
}
export default BlogItem;