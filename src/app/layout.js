

import { AntdRegistry } from '@ant-design/nextjs-registry';

import UILayout from '@/components/uilayout';

import './global.scss';


export const metadata = {
  title: "Personal knowledge graph",
  description: "Driven by nextjs and react"
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

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
  );
}