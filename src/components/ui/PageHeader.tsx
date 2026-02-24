"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { useLanguage } from "@/context/LanguageContext";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
    const container = useRef(null);
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(".page-title-char",
                { y: 100, opacity: 0, rotate: 5 },
                { y: 0, opacity: 1, rotate: 0, stagger: 0.05, duration: 1, ease: "power4.out" }
            );
            tl.fromTo(".page-desc",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.5"
            );
        }, container);

        return () => ctx.revert();
    }, [title, description]);

    return (
        <section ref={container} className="relative pt-48 pb-24 container mx-auto px-6 border-b border-border-subtle mb-24 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            {subtitle && (
                <span className={`block text-secondary font-mono text-sm uppercase tracking-widest mb-6 relative z-10 ${isRTL ? "text-right" : "text-left"}`}>
                    {subtitle}
                </span>
            )}

            <h1 className={`relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold font-heading uppercase leading-[0.9] mb-12 tracking-tight break-words ${isRTL ? "text-right" : "text-left"}`}>
                {title.split(" ").map((word, i) => (
                    <span key={i} className={`inline-block ${isRTL ? "ms-4 md:ms-8" : "me-4 md:me-8"} overflow-hidden`}>
                        <span className="inline-block page-title-char">{word}</span>
                    </span>
                ))}
            </h1>

            {description && (
                <div className="relative z-10 grid md:grid-cols-2">
                    {isRTL ? (
                        <>
                            <p className="page-desc text-xl md:text-2xl text-slate-200 font-light leading-relaxed text-right">
                                {description}
                            </p>
                            <div /> {/* Spacer */}
                        </>
                    ) : (
                        <>
                            <div /> {/* Spacer */}
                            <p className="page-desc text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                                {description}
                            </p>
                        </>
                    )}
                </div>
            )}
        </section>
    );
}
