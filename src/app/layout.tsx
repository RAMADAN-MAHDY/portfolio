
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/componant/footer";
import Navbar from "@/app/componant/navbar";
import ClientProvider from '../lib/ClientProvider';
import GoogleAnalytics from '@/app/componant/googleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ramadan | Full-Stack Web Developer Portfolio",
    description:
      "Explore Ramadan's portfolio, showcasing expertise in full-stack web development, modern technologies, and innovative web solutions. | استكشف بورتفوليو رمضان، الذي يعرض خبرته في تطوير الويب باستخدام أحدث التقنيات وحلول الويب المبتكرة.",
  };

interface LocaleLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: LocaleLayoutProps) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID ;

    return (
        <html>
            <head>
                <meta name="google" content="notranslate"/>
                <meta name="google-site-verification" content="a7cDoFaMs8fod9LHeAd1nKF-VxhOaEkjOBRvHriEzzU" />

                <link rel="icon" href="/451548470_3829658120605216_14025268882969849787_n.JPG" sizes="32x32" />

                {/* google-site-verification=a7cDoFaMs8fod9LHeAd1nKF-VxhOaEkjOBRvHriEzzU */}


                {/* <!-- Google tag (gtag.js) --> */}
               {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5925EB49R4"></script>
              <script>
  window.dataLayer = window.dataLayer || [];
  const dataLayer = window.dataLayer; // Declare dataLayer
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5925EB49R4');
              </script> */}
                {/* <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js"/> */}


            </head>
            <body className={inter.className}>

            <GoogleAnalytics trackingId={GA_TRACKING_ID} />

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
