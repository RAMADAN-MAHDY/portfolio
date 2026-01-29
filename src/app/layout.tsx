import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/componant/navbar";
import ClientProvider from "../lib/ClientProvider";
import GoogleAnalytics from "@/app/componant/googleAnalytics";
import ChatBotWidget from "@/app/componant/ChatBotWidget";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramadan Mahdy | Full Stack Web Developer | Portfolio",
  description:
    "Explore Ramadan Mahdy's portfolio, showcasing expertise in full-stack web development and modern web technologies.",
  openGraph: {
    type: "profile",
    title: "Ramadan Mahdy | Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in modern web technologies.",
    url: "https://ramadan-three.vercel.app/",
    siteName: "Ramadan Mahdy Portfolio",
    images: [
      {
        url: "https://ramadan-three.vercel.app/ramadan-mahdy-fullstack-developer2.jpg",
        width: 1200,
        height: 630,
        alt: "Ramadan Mahdy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramadan Mahdy | Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in modern web technologies",
    images: [
      "https://ramadan-three.vercel.app/ramadan-mahdy-fullstack-developer2.jpg",
    ],
    creator: "@RamadanMahdy",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="-1HDfMA8r2MPfNp6oa5PTR1Pe2Z-g4CThr_hEn1rIsM" />
        <link rel="icon" href="/ramadan-mahdy-fullstack-developer2.jpg" />
        <link rel="apple-touch-icon" href="/ramadan-mahdy-fullstack-developer2.jpg" />

        {/* Person Schema – Global Identity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://ramadan-three.vercel.app/#person",
              name: "رمضان مهدي سعيد",
              alternateName: "Ramadan Mahdy",
              jobTitle: "Full Stack Web Developer",
              url: "https://ramadan-three.vercel.app/",
              image: "https://ramadan-three.vercel.app/ramadan-mahdy-fullstack-developer2.jpg",
              sameAs: [
                "https://github.com/RAMADAN-MAHDY",
                "https://www.linkedin.com/in/ramadan-mahdy/",
              ],
            }),
          }}
        />

        {/* Google Adsense – keep only if needed */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1900509020605535"
          strategy="afterInteractive"
          async
          crossOrigin="anonymous"
        />

        {/* Lottie – Fixed Version */}
        <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js"
          strategy="afterInteractive"
        />
      </head>

      <body className={inter.className}>
        <GoogleAnalytics trackingId={GA_TRACKING_ID} />
        <ClientProvider>
          <Navbar />
          {children}
          <ChatBotWidget />
        </ClientProvider>
      </body>
    </html>
  );
}
