import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Cursor from '../components/ui/Cursor';
import Terminal from '../components/ui/Terminal';

export const metadata: Metadata = {
  title: 'Pragdishwar A | Full Stack Developer',
  description: 'Portfolio of Pragdishwar A, a Full Stack Developer specializing in modern, interactive, and high-performance web applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        <Cursor />
        <Terminal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
