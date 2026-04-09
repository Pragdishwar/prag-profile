import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pragdishwar — Engineering System',
  description: 'Full-Stack Engineer specializing in embedded IoT pipelines and financial-grade web architecture. Cyber-minimalist engineering profile.',
  keywords: ['engineer', 'embedded systems', 'React', 'ESP32', 'Next.js', 'Supabase'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
