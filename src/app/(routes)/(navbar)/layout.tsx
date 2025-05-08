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
  title: 'ScamSniper',
  icons: '/app_logo.ico',
  description: 'AI–Powered Scam Awareness and Prevention',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientSessionProvider>
      <NavBar />
      {children}
    </ClientSessionProvider>
  );
}
