// import { Inter } from 'next/font/google'
import './globals.css'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Photos',
  description: 'AI Image Generator - AI Photos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="layout-root">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}
