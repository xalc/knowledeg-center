
import dynamic from 'next/dynamic'
import Title from 'antd/es/typography/Title';

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