"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
    const container = useRef(null);

    useEffect(() => {
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
    }, []);

    return (
        <section ref={container} className="relative pt-40 pb-20 container mx-auto px-6 border-b border-slate-800 mb-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            {subtitle && (
                <span className="block text-secondary font-mono text-sm uppercase tracking-widest mb-6 relative z-10">
                    {subtitle}
                </span>
            )}

            <h1 className="relative z-10 text-6xl md:text-8xl lg:text-9xl font-bold font-heading uppercase leading-[0.9] mb-12 tracking-tight break-words">
                {title.split(" ").map((word, i) => (
                    <span key={i} className="inline-block mr-4 md:mr-8 overflow-hidden">
                        <span className="inline-block page-title-char">{word}</span>
                    </span>
                ))}
            </h1>

            {description && (
                <div className="relative z-10 grid md:grid-cols-2">
                    <div /> {/* Spacer */}
                    <p className="page-desc text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                        {description}
                    </p>
                </div>
            )}
        </section>
    );
}
