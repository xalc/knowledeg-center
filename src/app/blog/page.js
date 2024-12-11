
import BlogItem from "@/components/blogs/BlogItem";
import { getBlogsFromDb } from "@/libs/db-utils";

const BlogPage = async () => {
  const blogs = await getBlogsFromDb().catch(err => {
    console.log(err);
    // TODO error handler
  })

  return <>
    {blogs.map(b => {
      return (
        <BlogItem
          title={b.title}
          description={b.description}
          slug={b.slug}
          key={b._id}
        />
      );
    })}

  </>

}
export default BlogPage;