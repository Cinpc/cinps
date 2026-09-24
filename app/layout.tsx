import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Geist_Mono, Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPageMetadata } from '@/i18n/metadata';

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

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageMetadata('home');

  return {
    metadataBase: new URL('https://cinpc.com'),
    title: page.title,
    description: page.description,
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
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${satoshi.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
