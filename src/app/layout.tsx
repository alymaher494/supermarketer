import type { Metadata } from 'next';
import SmoothScrollLayout from "@/components/SmoothScrollLayout";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: 'SuperMarketer | Performance & Growth Agency',
  description: 'We help ambitious brands scale revenue through data-driven performance marketing and scientific creative testing.',
  openGraph: {
    title: 'SuperMarketer | Performance & Growth Agency',
    description: 'We help ambitious brands scale revenue through data-driven performance marketing.',
    url: 'https://supermarketer.net',
    siteName: 'SuperMarketer',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-primary text-foreground overflow-x-hidden selection:bg-secondary selection:text-primary`}>
        <SmoothScrollLayout>
          {children}
        </SmoothScrollLayout>
      </body>
    </html>
  );
}
