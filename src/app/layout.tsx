import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ramadan | Full-Stack Web Developer Portfolio",
    description: "Explore Ramadan's portfolio, showcasing expertise in full-stack web development, modern technologies, and innovative web solutions.",
  };
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
