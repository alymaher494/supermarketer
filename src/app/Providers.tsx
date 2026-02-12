"use client";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScrollLayout from "@/components/SmoothScrollLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <Navbar />
            <SmoothScrollLayout>
                {children}
            </SmoothScrollLayout>
            <Footer />
        </LanguageProvider>
    );
}
