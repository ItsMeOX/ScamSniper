import './globals.css';
import { Inter } from 'next/font/google';
import ClientSessionProvider from '../context/ClientSessionProvider';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
      <body className={`antialiased`}>
        <ClientSessionProvider>{children}</ClientSessionProvider>
      </body>
    </html>
  );
}
