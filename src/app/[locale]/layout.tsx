import "../globals.css";
import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Navigation from "@/components/Navigation";
// import { locales } from "@/i18n/config";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Internationalized Next.js App",
 description: "An example of internationalization in Next.js 14",
};

// export function generateStaticParams() {
//  return locales.map((locale) => ({ locale }));
// }

export default async function RootLayout({
 children,
 params: { locale },
}: {
 children: React.ReactNode;
 params: { locale: string };
}) {
 unstable_setRequestLocale(locale);
 const messages = await getMessages();
 return (
  <NextIntlClientProvider messages={messages}>
   <html lang={locale}>
    <body className={inter.className}>
     <Navigation />
     <main className="container mx-auto px-4 py-8">{children}</main>
    </body>
   </html>
  </NextIntlClientProvider>
 );
}
