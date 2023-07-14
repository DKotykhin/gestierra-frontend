import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { generalMetaData } from 'metadata/metadata';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = generalMetaData;

export default function RootLayout({
    children, params: { locale }
}: {
    children: React.ReactNode,
    params: { locale: string },
}) {
    return (
        <html lang={locale} suppressHydrationWarning={true}>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
