
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './src/lib/AntdRegistry';

import UILayout from './src/components/mylayout/uilayout';
const inter = Inter({ subsets: ['latin'] });

import './global.scss'

export const metadata = {
  title: "Next js get started",
  description: "next js knowledge and learning"
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <UILayout>
            {children}
          </UILayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}