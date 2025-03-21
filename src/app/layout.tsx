
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/componant/footer";
import Navbar from "@/app/componant/navbar";
import ClientProvider from '../lib/ClientProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramadan | Full-Stack Web Developer Portfolio",
  description:
    "Explore Ramadan's portfolio, showcasing expertise in full-stack web development, modern technologies, and innovative web solutions.",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: LocaleLayoutProps) {
  

    return (
        <html>
            <head>
                <meta name="google" content="notranslate"/>

                <link rel="icon" href="/451548470_3829658120605216_14025268882969849787_n.JPG" sizes="32x32" />

                {/* <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js"/> */}
            </head>
            <body className={inter.className}>
                <ClientProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;
