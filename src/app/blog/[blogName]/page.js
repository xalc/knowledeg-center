
import dynamic from 'next/dynamic'

const BlogItem = async ({ params }) => {

  const blogNameURL = (await params).blogName;
  const blogName = decodeURI(blogNameURL);
  const MDX = dynamic(() => import(`@/blogs/${blogName}.mdx`))

  return <>

    <MDX />

  </>

}
export default BlogItem;