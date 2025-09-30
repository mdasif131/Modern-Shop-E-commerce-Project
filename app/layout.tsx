import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header_Section/Header';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider>
      <html lang="en">
        <body className={`font-poppins antialiased`}>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
