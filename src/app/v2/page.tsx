"use client";
import React, { useRef } from "react";
import HeroV2 from "@/components/v2/HeroV2";
import PortfolioV2 from "@/components/v2/PortfolioV2";
import ExpertiseV2 from "@/components/v2/ExpertiseV2";
import NavbarV2 from "@/components/v2/NavbarV2";
import LogoTicker from "@/components/LogoTicker";
import CertificatesGallery from "@/components/CertificatesGallery";
import { useLanguage } from "@/context/LanguageContext";
import MarqueeText from "@/components/ui/MarqueeText";

export default function V2Page() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const container = useRef(null);

    const t = isRTL ? "اتصل بنا لنبدأ" : "LET'S START THE CONVERSATION";

    return (
        <main ref={container} className="bg-black min-h-screen selection:bg-secondary selection:text-black font-arabic" dir={isRTL ? "rtl" : "ltr"}>
            <NavbarV2 />

            <HeroV2 />

            <div className="bg-white text-black py-4 overflow-hidden mt-[-2px]">
                <MarqueeText text={isRTL ? "نتائج حقيقية • نمو مستدام • أداء معتمد •" : "REAL RESULTS • SUSTAINABLE GROWTH • CERTIFIED PERFORMANCE •"} />
            </div>

            <PortfolioV2 />

            <ExpertiseV2 />

            <div className="bg-[#050505]">
                <LogoTicker />
            </div>

            <CertificatesGallery limit={4} />

            {/* V2 CTA Section */}
            <section className="bg-white py-40 md:py-64 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-[10vw] md:text-[8vw] font-black text-black leading-[0.85] mb-20 italic">
                    {t}
                </h2>
                <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl justify-between border-t border-black/10 pt-20">
                    <div className={`${isRTL ? "text-right" : "text-left"}`}>
                        <span className="text-slate-400 font-mono text-xs uppercase mb-4 block">EMAIL</span>
                        <a href="mailto:hello@supermarketer.net" className="text-2xl md:text-3xl font-bold hover:text-secondary transition-colors underline decoration-2 underline-offset-8">
                            hello@supermarketer.net
                        </a>
                    </div>
                    <div className={`${isRTL ? "text-right" : "text-left"}`}>
                        <span className="text-slate-400 font-mono text-xs uppercase mb-4 block">SOCIAL</span>
                        <div className="flex gap-6 text-2xl font-bold">
                            <a href="#" className="hover:text-secondary transition-colors underline decoration-2 underline-offset-8">LINKEDIN</a>
                            <a href="#" className="hover:text-secondary transition-colors underline decoration-2 underline-offset-8">INSTAGRAM</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
