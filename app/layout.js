

import { AntdRegistry } from '@ant-design/nextjs-registry';

import UILayout from './src/components/mylayout/uilayout';


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
      <body>
        <AntdRegistry>
          <UILayout>
            {children}
          </UILayout>
        </AntdRegistry>
      </body>
    </html>
  )
}