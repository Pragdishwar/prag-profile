import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Terminal from '../components/ui/Terminal';
import BootScreen from '../components/ui/BootScreen';
import SmoothScroll from '../components/ui/SmoothScroll';

export const metadata: Metadata = {
  title: 'Pragdishwar A | Full Stack & AI Engineer',
  description: 'Portfolio of Pragdishwar A, specializing in AI-powered applications, scalable web platforms, and IoT solutions. President of Isshoni Nihongo.',
  keywords: ['Pragdishwar', 'Full Stack Developer', 'AI Engineer', 'React', 'Next.js', 'Python', 'FastAPI'],
  authors: [{ name: 'Pragdishwar A' }],
  openGraph: {
    title: 'Pragdishwar A | Full Stack & AI Engineer',
    description: 'Portfolio of Pragdishwar A, specializing in AI-powered applications, scalable web platforms, and IoT solutions.',
    url: 'https://pragdishwar.vercel.app/',
    siteName: 'Pragdishwar Portfolio',
    images: [
      {
        url: 'https://api.microlink.io/?url=https%3A%2F%2Fpragdishwar.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
        width: 1200,
        height: 630,
        alt: 'Pragdishwar Portfolio Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pragdishwar A | Full Stack & AI Engineer',
    description: 'Portfolio of Pragdishwar A, specializing in AI-powered applications, scalable web platforms, and IoT solutions.',
    images: ['https://api.microlink.io/?url=https%3A%2F%2Fpragdishwar.vercel.app&screenshot=true&meta=false&embed=screenshot.url'],
  },
  manifest: '/manifest.json',
  themeColor: '#09090b',
};

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        <SmoothScroll>
          <BootScreen />
          <Terminal />
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  );
}
