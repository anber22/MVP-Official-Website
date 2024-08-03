// import { Inter } from 'next/font/google'
import './globals.css'
import Header from "../app/header";
import Footer from "../app/footer";
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Photos',
  description: 'AI Image Generator - AI Photos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="layout-root">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
