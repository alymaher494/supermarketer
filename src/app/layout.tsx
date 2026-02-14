import type { Metadata } from 'next';
import Providers from "./Providers";
import "./globals.css";
import { Inter, Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic"
});

export const metadata: Metadata = {
  title: 'سوبر ماركتير | خبير الأداء والنمو الرقمي',
  description: 'أنا أساعد العلامات التجارية الطموحة على زيادة الإيرادات من خلال التسويق المبني على البيانات واختبار الإبداع العلمي.',
  openGraph: {
    title: 'سوبر ماركتير | خبير الأداء والنمو الرقمي',
    description: 'أنا أساعد العلامات التجارية الطموحة على زيادة الإيرادات من خلال التسويق المبني على البيانات.',
    url: 'https://supermarketer.net',
    siteName: 'SuperMarketer',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${inter.variable} ${manrope.variable} ${ibmPlexSansArabic.variable} font-arabic antialiased bg-primary text-foreground overflow-x-hidden selection:bg-secondary selection:text-primary`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
