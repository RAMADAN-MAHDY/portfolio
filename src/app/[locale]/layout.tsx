

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/[locale]/componant/footer";
import Navbar from "@/app/[locale]/componant/navbar";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramadan | Full-Stack Web Developer Portfolio",
  description:
    "Explore Ramadan's portfolio, showcasing expertise in full-stack web development, modern technologies, and innovative web solutions.",
};

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }
  

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const locale = (params as any).locale; // استخدامه بشكل مباشر

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
