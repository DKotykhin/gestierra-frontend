import { ReactNode } from "react";

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'es' }];
};

export default async function RootLayout({
    children, params: { locale }
}: {
    children: ReactNode,
    params: { locale: string },
}) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    };

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <header>
                <Header />
            </header>
            <main style={{ flexGrow: 1 }}>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </NextIntlClientProvider >
    );
};