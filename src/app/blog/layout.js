'use client';

import useDevice from '@/hooks/use-device';
import { createStyles } from 'antd-style';
import { ThemeProvider } from 'antd-style';
import { useThemeMode } from 'antd-style';
const useStyles = createStyles(({ css }) => ({
  layout: css`
    display: flex;
    flex-direction: column;
    flex: 1;	
  `,
  cover: css`
    height: 200px;
    width: 100vw;
  `,
  container: css`
    align-self: center;
    overflow: auto;
    width: 80%;

    max-width: 1000px;
  `,
  image: css`
    object-fit: cover;
    width: 100%;
    height:100%
  `,
}));
export default function BlogContainerLayout({ children }) {
  const { styles } = useStyles();
  const { isDarkMode } = useThemeMode();
  const isMobile = useDevice();
  return <div className={styles.layout}>
    {!isMobile &&
      <div className={styles.cover}>
        <img className={styles.image} src='https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000'></img>
      </div>
    }

    <ThemeProvider
      themeMode={isDarkMode ? 'dark' : 'light'}
      theme={{
        token: {
          fontSize: 16,
          lineHeight: 1.75
        },
      }}>
      <div className={styles.container}>
        {children}
      </div>
    </ThemeProvider>
  </div>
}
