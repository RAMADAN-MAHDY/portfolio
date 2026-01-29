import AboutClient from "./AboutClient";


export default function AboutPageServer() {
    return (
        <>
            {/* ProfilePage Schema – SERVER SIDE */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "@id": "https://ramadan-three.vercel.app/about#profile",
                        "mainEntity": {
                            "@type": "Person",
                            "@id": "https://ramadan-three.vercel.app/#person",
                            "name": "Ramadan Mahdy",
                            "alternateName": "رمضان مهدي",
                            "jobTitle": "Full Stack Web Developer",
                            "description": "Full Stack Web Developer specializing in modern web technologies",
                            "image": "https://ramadan-three.vercel.app/ramadan-mahdy-fullstack-developer2.jpg",
                            "experience": [
                                {
                                    "@type": "Occupation",
                                    "name": "Freelance Web Developer",
                                    "description": "Developed and maintained multiple full-stack web applications using React, Next.js, Node.js, and MongoDB",
                                    "startDate": "2022-07",
                                    "isCurrentOccupation": true
                                }
                            ],
                            "education": [
                                {
                                    "@type": "EducationalOccupationalCredential",
                                    "educationalLevel": "Bachelor's degree",
                                    "credentialCategory": "Computer Science",
                                    "name": "Bachelor of Computer Science",
                                    "issuer": {
                                        "@type": "CollegeOrUniversity",
                                        "name": "Zagazig University"
                                    },
                                    "startDate": "2018-09",
                                    "endDate": "2022-06"
                                }
                            ]
                        }
                    })
                }}
            />


            <AboutClient />
        </>
    );
}
