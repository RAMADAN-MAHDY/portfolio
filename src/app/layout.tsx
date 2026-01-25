import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from "@/app/componant/footer";
import Navbar from "@/app/componant/navbar";
import ClientProvider from '../lib/ClientProvider';
import GoogleAnalytics from '@/app/componant/googleAnalytics';
import ChatBotWidget from "@/app/componant/ChatBotWidget";
import Script from "next/script";

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
                <meta name="google-site-verification" content="a7cDoFaMs8fod9LHeAd1nKF-VxhOaEkjOBRvHriEzzU" />
                <link rel="icon" href="/ramadan-mahdy-fullstack-developer2.jpg" sizes="32x32" type="image/jpeg" />
                <link rel="apple-touch-icon" href="/ramadan-mahdy-fullstack-developer2.jpg" />
                
                {/* Open Graph Tags */}
                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Ramadan Mahdy | Full-Stack Web Developer Portfolio" />
                <meta property="og:description" content="Explore Ramadan Mahdy's portfolio, showcasing expertise in full-stack web development, modern technologies, and innovative web solutions." />
                <meta property="og:url" content="https://ramadan-three.vercel.app/" />
                <meta property="og:image" content="https://ramadan-three.vercel.app/ramadan-mahdy-fullstack-developer2.jpg" />
                <meta property="og:site_name" content="Ramadan Mahdy Portfolio" />
                
                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Ramadan Mahdy | Full-Stack Web Developer" />
                <meta name="twitter:description" content="Full-Stack Web Developer specializing in modern web technologies" />
                <meta name="twitter:image" content="https://ramadan-three.vercel.app/ramadan-mahdy-fullstack-developer2.jpg" />
                <meta name="twitter:creator" content="@RamadanMahdy" />
                
                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Person",
                      "name": "رمضان مهدي سعيد",
                      "alternateName": "Ramadan Mahdy Seaid",
                      "jobTitle": "مطور ويب Full Stack",
                      "birthDate": "2000-09-06",
                      "homeLocation": {
                        "@type": "City",
                        "name": "الزقازيق",
                        "containedInPlace": {
                          "@type": "State",
                          "name": "الشرقية",
                          "containedInPlace": {
                            "@type": "Country",
                            "name": "مصر"
                          }
                        }
                      },
                      "image": "https://ramadan-three.vercel.app/ramadan-mahdy-fullstack-developer2.jpg",
                      "url": "https://ramadan-three.vercel.app/",
                      "sameAs": [
                        "https://github.com/RAMADAN-MAHDY",
                        "https://www.linkedin.com/in/ramadan-mahdy/"
                      ],
                      "worksFor": {
                        "@type": "Organization",
                        "name": "Freelancer"
                      },
                      "description": "مطور ويب Full Stack ذو خبرة في تطوير تطبيقات الويب الحديثة باستخدام أحدث التقنيات مثل React.js, Next.js, Node.js, MongoDB, و GraphQL.",
                      "knowsAbout": [
                        "Front-End Development",
                        "Back-End Development",
                        "Full Stack Development",
                        "React.js",
                        "Next.js",
                        "Node.js",
                        "MongoDB",
                        "GraphQL",
                        "JavaScript",
                        "TypeScript",
                        "Tailwind CSS"
                      ],
                      "portfolio": "https://ramadan-three.vercel.app/projects"
                    })}
                </script>
                
                {/* Profile Page Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "ProfilePage",
                      "mainEntity": {
                        "@type": "Person",
                        "name": "رمضان مهدي سعيد"
                      },
                      "publisher": {
                        "@type": "Person",
                        "name": "رمضان مهدي سعيد"
                      }
                    })}
                </script>
                <Script
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1900509020605535"
                    strategy="afterInteractive"
                    async
                    crossOrigin="anonymous"
                    id="adsense-script"
                />
                <Script
                    src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
                    strategy="afterInteractive"
                    id="lottie-player-script"
                />
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
