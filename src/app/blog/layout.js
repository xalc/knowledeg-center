'use client';

import { createStyles } from 'antd-style';
import { Flex } from 'antd';
const useStyles = createStyles(({ css }) => ({
  cover: css`
    height: 25%;
    width: 100vw;
    overflow: hidden;
  `,
  container: css`
    width: 60%;
    overflow: auto;
    height: 600px;
    min-width:400px
  
  `,
  image: css`
    object-fit: cover;
    width: 100%;
    height:100%
  `,
}));
export default function BlogContainerLayout({ children }) {
  const { styles } = useStyles();

  return <>
    <div className={styles.cover}>
      <img className={styles.image} src='/images/blog_cover.png'></img>
    </div>
    <Flex vertical align='center'>
      <div className={styles.container}>
        {children}
      </div>

    </Flex>



  </>
}
