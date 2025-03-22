
import "./globals.css";

//IMPORT HEADER
import Header from "@/components/header"
//IMPORT FOOTER
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/react"

//FONT IMPORT
import localFont from 'next/font/local';
const archivo = localFont({
    src: [{
        path: '../public/fonts/Archivo-Regular.ttf',
        weight: '400'
    }],
    variable: '--font-archivo'
})

export const metadata = {
  title: "Schrijnwerkerij de haes",
  description: "Algemene binnen en buitenschrijnwerkerij - Daktimmers, dakbedekking, gevelbekleding en terassen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <meta name="keywords" content="schrijnwerkerij, de haes, sd schrijnwerkerij, schrijnwerkerij mb, sbk schrijnwerkerij, Belgique, carpentry"></meta>
      </head>
      <meta name="google-site-verification" content="iJG9g6Q9U-v746a0tzQHDktkoMmmpHSIrWBU9EAjGus" />
      <body className={`${archivo.variable} antialiased`}>
        <Header></Header>
        {children}
        <Analytics/>
        <Footer></Footer>
      </body>
    </html>
  );
}
