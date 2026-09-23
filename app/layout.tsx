import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const satoshi = localFont({
  src: '../public/fonts/Satoshi-Regular.woff2',
  variable: '--font-satoshi',
  weight: '400',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cinpc.com'),
  title: 'Call Center Outsourcing Services | Cinpc',
  description:
    'Outsource customer support and financial BPO operations with Cinpc. Get flexible call center support built around your business workflows.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    images: ['/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/meta.png'],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
