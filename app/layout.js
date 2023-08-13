
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './src/lib/AntdRegistry';
import { Layout, Menu } from 'antd';
import MyLayout from './src/components/mylayout/layout';
const inter = Inter({ subsets: ['latin'] });

import './global.scss'
import { Metadata } from "next"
const { Content, Header, Footer } = Layout;
export const metadata = {
  title: "Next js get started",
  description: "next js knowledge and learning",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <MyLayout>
            {/* <Header
              className={"header"}
            >
              <div className="demo-logo" />
            </Header> */}
            {/* <Content>{children}</Content> */}
            {/* <Footer className={"footer"}>
              Ant Design ©2023 Created by Ant UED
            </Footer> */}
            {children}
          </MyLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}