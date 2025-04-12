import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import NavBar from '@/components/base/Navbar';
import { Inter } from 'next/font/google';
import ClientSessionProvider from '@/app/context/ClientSessionProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.variable}  antialiased`}>
        <ClientSessionProvider>
          <NavBar />
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
