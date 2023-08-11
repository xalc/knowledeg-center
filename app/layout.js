import './global.scss'

import { Metadata } from "next"
export const metadata ={
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
        <body>{children}</body>
      </html>
    )
  }