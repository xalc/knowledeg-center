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
export default function BlogItem({ title, description, slug }) {
  const { styles } = useStyles();

  return <section className={styles.item}>
    <Link href={`/blog/${encodeURIComponent(slug)}`}>
      <Title level={4} className={styles.link} underline italic>{title}</Title>
    </Link>
    <Text> {description}</Text>
  </section>
} 