import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Infinitix Global - Digital Marketing & AI Solutions',
  description: 'Transform your digital presence with Infinitix Global. We provide modern websites, AI solutions, and digital marketing services.',
  keywords: 'digital marketing, web development, AI solutions, branding, video editing, healthcare software',
  openGraph: {
    title: 'Infinitix Global - Digital Marketing & AI Solutions',
    description: 'Transform your digital presence with Infinitix Global',
    type: 'website',
    url: 'https://infinitixglobal.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}