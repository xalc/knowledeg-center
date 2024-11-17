// deprecate not necessary
import fs from 'node:fs/promises'
import path from 'path';
import { getBlogsDir } from './dir'

export const getBlogContent = async (blogName) => {
  const blogsDir = getBlogsDir();
  const blogFile = path.resolve(blogsDir, `${blogName}.mdx`);
  console.log('blog file path: ' + blogFile);
  let mdxContent = '';
  try {
    mdxContent = await fs.readFile(blogFile, 'utf-8');
  } catch (error) {
    console.log('read blog file failed' + error)
  }
  return mdxContent;
}


