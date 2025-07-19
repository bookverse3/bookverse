import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookTube - Discover, Read, and Share Amazing Books',
  description: 'A YouTube-inspired platform for book lovers. Discover, read, and share amazing books with our community of readers.',
  keywords: 'books, reading, reviews, literature, book club, ebooks',
  authors: [{ name: 'BookTube Team' }],
  openGraph: {
    title: 'BookTube - Discover, Read, and Share Amazing Books',
    description: 'A YouTube-inspired platform for book lovers.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookTube - Discover, Read, and Share Amazing Books',
    description: 'A YouTube-inspired platform for book lovers.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}