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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const localeTyped = await locale as "en" | "ar";

  // Pass locale as an object if required
  const messages = await getMessages({ locale: localeTyped });

  return (
    <html lang={localeTyped}>
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
