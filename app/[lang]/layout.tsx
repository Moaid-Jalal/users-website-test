import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

import { getDictionary } from '@/lib/dictionary';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}


const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'KYT Group',
  description: 'Professional construction and engineering services',
  icons: {
    icon: '/websitelogo.jpg',
    shortcut: '/websitelogo.jpg',
    apple: '/websitelogo.jpg',
  },
};

export default async function LangLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { lang: string };
  }) {
    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    forcedTheme="dark"
                >
                    <div className="min-h-screen flex flex-col">
                        <Navbar currentLang={params.lang} />
                        <main className="flex-grow">
                            {children}
                            <Toaster />
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

