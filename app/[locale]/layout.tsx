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
  title: "Dakwerken De Haes | Dakwerken in Sint-Katelijne-Waver",
  description:
    "Algemene binnen en buitenschrijnwerkerij - Daktimmers, dakbedekking, gevelbekleding en terassen",
};

import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

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
        <script
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6QQ0LFS4H4"
        ></script>
        <meta
          name="google-site-verification"
          content="BjIFUYGdtB0SCZnPm292PJEtnbnf9ndl3D-zqgsm0BA"
        />
        <meta
          name="keywords"
          content="Dakwerken, de haes, dakwerken, sd Dakwerken, Dakwerken mb, sbk Dakwerken, Belgique, carpentry"
        ></meta>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1406701764156938');
            fbq('track', 'PageView');
            `,
          }}
        ></script> */}
        {/* <noscript>
          <img
            style={{ height: 1, width: 1, display: "none" }}
            src="https://www.facebook.com/tr?id=1406701764156938&ev=PageView&noscript=1"
          />
        </noscript> */}
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

          {/* <MetaPixel /> */}
          <Analytics />
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
