import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boii Rest & Breakfast - İzmir Sığacık',
  description: 'İzmir Sığacık\'ta modern konfor ve geleneksel misafirperverliği birleştiren 10 odalı butik otel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
