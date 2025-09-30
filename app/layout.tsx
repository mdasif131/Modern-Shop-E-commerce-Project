import type { Metadata } from 'next';

import './globals.css';
import Header from '@/components/Header_Section/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s -Mordern online store',
    default: 'Mordern online store',
  },
  description: 'Modern online store, Your one stop shop for all your needs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
