import path from 'path';

const BLOG_DIR = 'src/blogs';

export const getApproot = () => process.cwd();


export const getBlogsDir = () => path.resolve(getApproot(), BLOG_DIR);
