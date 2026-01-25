import { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'About Ramadan Mahdy | Full-Stack Web Developer',
  description: 'Learn about Ramadan Mahdy, a passionate Full-Stack Web Developer with expertise in modern web technologies including React, Next.js, Node.js, and MongoDB.',
  alternates: {
    canonical: 'https://ramadan-three.vercel.app/about',
  },
  openGraph: {
    title: 'About Ramadan Mahdy | Full-Stack Web Developer',
    description: 'Learn about Ramadan Mahdy, a passionate Full-Stack Web Developer with expertise in modern web technologies including React, Next.js, Node.js, and MongoDB.',
    url: 'https://ramadan-three.vercel.app/about',
    type: 'article',
  },
  twitter: {
    title: 'About Ramadan Mahdy | Full-Stack Web Developer',
    description: 'Learn about Ramadan Mahdy, a passionate Full-Stack Web Developer with expertise in modern web technologies including React, Next.js, Node.js, and MongoDB.',
    card: 'summary',
  },
};

export default function AboutLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}