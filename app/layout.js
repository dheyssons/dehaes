import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//IMPORT HEADER
import Header from "@/components/header"
//IMPORT FOOTER
import Footer from "@/components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  title: "GMW Construct SRL",
  description: "Construction et rénovations de toitures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${archivo.variable} antialiased`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
