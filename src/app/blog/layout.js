'use client';

import { createStyles } from 'antd-style';
import { ThemeProvider } from 'antd-style';
import { Flex } from 'antd';
const useStyles = createStyles(({ css }) => ({
  cover: css`
    height: 200px;
    width: 100vw;
    overflow: hidden;
  `,
  container: css`
    width: 80%;
    overflow: auto;
    height: calc(100vh - 400px);
    min-width:400px;
    margin: 32px;
  
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
      <img className={styles.image} src='https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000'></img>
    </div>

    <ThemeProvider theme={{
      token: {
        fontSize: 16,
        lineHeight: 1.75
      },
    }}>
      <Flex vertical align='center'>
        <div className={styles.container}>
          {children}
        </div>
      </Flex>
    </ThemeProvider>






  </>
}
