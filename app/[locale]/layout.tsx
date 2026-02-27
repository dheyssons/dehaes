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
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import React from "react";

const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-archivo",
});
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm",
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
    <html lang={locale} className="scroll-smooth">
      <head>
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://schrijnwerkerij-dehaes.be/nl/"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://schrijnwerkerij-dehaes.be/fr/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://schrijnwerkerij-dehaes.be/nl/"
        />
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

        <script
          type="module"
          defer
          id="alttextify-js"
          src="https://cdn3.alttextify.net/alttextify-altedge.min.js?site-key=lqztprlf69a1b336u54ulgrvamie7ng8&replace-short-alt=true"
        ></script>
        <noscript>
          Please enable javascript to ensure auto{" "}
          <a href="https://alttextify.net">alt text generation</a> works
          properly
        </noscript>
      </head>

      <meta
        name="google-site-verification"
        content="iJG9g6Q9U-v746a0tzQHDktkoMmmpHSIrWBU9EAjGus"
      />
      <body
        className={`${archivo.variable} ${ibmPlexSans.variable} antialiased`}
      >
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
