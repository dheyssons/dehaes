import "./globals.css";

import CookieConsent from "../../components/CookieConsent";
import { NextIntlClientProvider } from "next-intl";

import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

//IMPORT HEADER
import Header from "@/components/header";
//IMPORT FOOTER
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/react";

//FONT IMPORT
import { Archivo } from "next/font/google";
import React from "react";

const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata = {
  title: {
    default: "Dakwerken De Haes",
    template: "%s - Dakwerken De Haes",
  },
  description:
    "Algemene dakwerken - Daktimmerwerk, dakrenovatie, gevelbekleding en isolatiewerk",
};

import Script from "next/script";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
              gtag('js', new Date());
              gtag('config', 'G-6QQ0LFS4H4');
            `,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6QQ0LFS4H4"
          strategy="afterInteractive"
        ></Script>
        <meta
          name="google-site-verification"
          content="BjIFUYGdtB0SCZnPm292PJEtnbnf9ndl3D-zqgsm0BA"
        />
        <meta
          name="keywords"
          content="Daktimmerwerk, dakherstelling, algemene dakwerken sint-katelijne-waver, gevelrenovatie sint-katelijne-waver, dakwerken sint-katelijne-waver, de haes, daktimmer, dakwerken sint katelijne waver, schrijnwerkers brussels, schrijnwerker sint-niklaas, dehaes, isolatiewerken sint-katelijne-waver, carpentry"
        ></meta>
      </head>

      <meta
        name="google-site-verification"
        content="iJG9g6Q9U-v746a0tzQHDktkoMmmpHSIrWBU9EAjGus"
      />
      <body className={`${archivo.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header></Header>
          {children}
          <CookieConsent />

          <Analytics />
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
