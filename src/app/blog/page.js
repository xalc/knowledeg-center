import Link from 'next/link';
const BlogPage = async () => {


  return <>
    <h2>Blog list</h2>
    <Link href='/blog/我的 第一篇文章'>我的 第一篇文章</Link>
  </>

}
export default BlogPage;