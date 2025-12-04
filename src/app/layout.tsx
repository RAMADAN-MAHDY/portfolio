import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from "@/app/componant/footer";
import Navbar from "@/app/componant/navbar";
import ClientProvider from '../lib/ClientProvider';
import GoogleAnalytics from '@/app/componant/googleAnalytics';
import ChatBotWidget from "@/app/componant/ChatBotWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ramadan Mahdy | Full-Stack Web Developer Portfolio | مطور ويب | فرونت اند | باك اند | رمضان مهدي سعيد",
    description:
        "Explore Ramadan Mahdy's portfolio, showcasing expertise in full-stack web development, modern technologies, and innovative web solutions. Specializing in front-end and back-end development. | استكشف بورتفوليو رمضان مهدي، الذي يعرض خبرته في تطوير الويب باستخدام أحدث التقنيات وحلول الويب المبتكرة. متخصص في تطوير الواجهة الأمامية والخلفية. رمضان مهدي سعيد.",
};

interface LocaleLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: LocaleLayoutProps) {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

    // Use `typeof window` to ensure this code only runs on the client side
    //   let currentPath = "";
    //   if (typeof window !== "undefined") {
    //     currentPath = window.location.pathname;
    // }


    // console.log(currentPath);

    return (
        <html>
            <head>
                <meta name="google" content="notranslate" />
                <meta name="google-site-verification" content="-1HDfMA8r2MPfNp6oa5PTR1Pe2Z-g4CThr_hEn1rIsM" />
                <link rel="icon" href="/ramadan-mahdy-fullstack-developer2.jpg" sizes="32x32" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1900509020605535"
                    crossOrigin="anonymous"></script>
                <script
                    src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
                    type="module"
                ></script>
            </head>
            <body className={inter.className}>
                <GoogleAnalytics trackingId={GA_TRACKING_ID} />
                <ClientProvider>
                    <Navbar />
                    {children}
                    
                    <ChatBotWidget/>
                </ClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;
