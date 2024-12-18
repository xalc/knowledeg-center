
import dynamic from 'next/dynamic'
import Link from 'next/link';
import Title from 'antd/es/typography/Title';
import { ArrowLeftOutlined } from '@ant-design/icons';
// import MDX, { metadata } from '@/blogs/这个博客网站为什么会存在.mdx'
//TODO： https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration
export async function generateStaticParams() {
  return [{ blogName: '这个博客网站为什么会存在' }, { blogName: '我的 第一篇文章' }]
}
const BlogItem = async ({ params }) => {

  const blogNameURL = (await params).blogName;
  const blogName = decodeURIComponent(blogNameURL);
  const MDX = dynamic(() => import(`@/blogs/${blogName}.mdx`))

  return <>
    <Title level={1}>{blogName}</Title>
    <MDX />
    <Link href='/blog'><ArrowLeftOutlined /> Back</Link>
  </>
}
export default BlogItem;