'use client'
import Link from 'next/link';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';

import { createStyles } from 'antd-style';
const useStyles = createStyles(({ css, token }) => ({

  item: css`
    margin:${token.marginLG}px;
    background-color: ${token.colorBgContainer};
    border-radius: ${token.borderRadiusLG}px;
    padding: ${token.paddingLG}px;
    min-width:400px;
    max-width: 1200px;


  `,

  link: css`
    :hover {
       color: ${token.colorLinkActive}
      }
  `
}));
const BlogPage = () => {
  const { styles } = useStyles();
  return <>



    <div className={styles.item}>
      <Link href='/blog/这个博客网站为什么会存在'>
        <Title level={4} className={styles.link} underline italic>这个博客网站为什么会存在</Title>
      </Link>
      <Text> 这是本博客的第一篇文章，思考开启博客的由来契机以及一些规划</Text>
    </div>
    <div className={styles.item}>
      <Link href='/blog/我的 第一篇文章'>
        <Title level={4} className={styles.link} underline italic>我的 第一篇文章 </Title>
      </Link>
      <Text> 总结
        选择合适的 JSON 数据库取决于你的具体需求，包括数据规模、性能要求、扩展性和易用性等因素。以下是几种数据库的简要对比：</Text>
    </div>
    <div className={styles.item}>
      <Link href='/blog/我的 第一篇文章'>
        <Title level={4} className={styles.link} underline italic>我的 第一篇文章 </Title>
      </Link>
      <Text> 总结
        在 CSS 中，有几种不同的属性和值可以用来控制图片的填充和裁剪方式。这些属性主要应用于 background-image 和 img 元素。以下是常用的配置选项：</Text>
    </div>

  </>

}
export default BlogPage;