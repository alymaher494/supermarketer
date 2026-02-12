"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
    text?: string;
};

export default function MarqueeText({ text }: Props) {
    const { language } = useLanguage();
    const container = useRef(null);
    const row1 = useRef(null);
    const row2 = useRef(null);

    // Default items based on language
    const defaultAr = ["علامة تجارية", "استراتيجية", "تطوير", "إدارة"];
    const defaultEn = ["Branding", "Strategy", "Development", "Management"];
    const defaultItems = language === 'ar' ? defaultAr : defaultEn;

    // Parse text into items if provided
    const items = text ? text.split("•").filter(Boolean).map(s => s.trim()) : defaultItems;

    // Reverse items for Arabic to ensure correct reading order in LTR container
    const finalItems = language === 'ar' ? [...items].reverse() : items;

    // Create enough duplicates to ensure smooth looping
    // For short lists, we might need more duplication, but 4x is usually safe for this length
    const displayItems = [...finalItems, ...finalItems, ...finalItems, ...finalItems];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Row 1: Moves Left
            gsap.to(row1.current, { xPercent: -50, ease: "none", duration: 20, repeat: -1 });

            // Row 2: Moves Right
            gsap.fromTo(row2.current, { xPercent: -50 }, { xPercent: 0, ease: "none", duration: 20, repeat: -1 });
        }, container);
        return () => ctx.revert();
    }, [language]);

    return (
        <section ref={container} className="py-24 bg-[#020617] overflow-hidden flex flex-col gap-4 opacity-80" dir="ltr">
            {/* Row 1 */}
            <div className="flex w-max whitespace-nowrap gap-12 md:gap-24" ref={row1}>
                {displayItems.map((t, i) => (
                    <span key={i} className="text-6xl md:text-8xl font-bold uppercase text-transparent text-outline-white-sm hover:text-outline-white transition-all flex items-center gap-12 md:gap-24">
                        {t} <span className="text-secondary">_</span>
                    </span>
                ))}
            </div>

            {/* Row 2 */}
            <div className="flex w-max whitespace-nowrap gap-12 md:gap-24" ref={row2}>
                {displayItems.map((t, i) => (
                    <span key={i} className="text-6xl md:text-8xl font-bold uppercase text-transparent text-outline-white-sm hover:text-outline-white transition-all flex items-center gap-12 md:gap-24">
                        {t} <span className="text-secondary">_</span>
                    </span>
                ))}
            </div>
        </section>
    );
}

