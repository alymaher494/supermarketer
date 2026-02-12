"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { caseStudiesData } from "@/data/case-studies";
import { useLanguage } from "@/context/LanguageContext";

export default function SelectedWorkList() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const container = useRef(null);
    const cursor = useRef<HTMLDivElement>(null);
    const data = caseStudiesData[language];
    const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

    const content = {
        ar: {
            label: "المعرض",
            title: { part1: "أعمال", part2: "مختارة" },
            link: "عرض جميع المشاريع",
            cursor: "عرض المشروع"
        },
        en: {
            label: "Gallery",
            title: { part1: "Selected", part2: "Work" },
            link: "View All Projects",
            cursor: "View Project"
        }
    };
    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Fade in list items
        gsap.from(".project-item", {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            }
        });

        // Custom Project Cursor Logic
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [language]); // Re-run if locale changes might affect layout/selectors (though probably not for this effect)

    const handleMouseEnter = (imageSrc: string) => {
        if (cursor.current) {
            // Create visual indicator inside cursor
            const cursorContent = cursor.current.querySelector('.cursor-content');
            if (cursorContent) {
                cursorContent.innerHTML = `<img src="${imageSrc}" class="w-full h-full object-cover" />`;
            }
            gsap.to(cursor.current, { scale: 1, autoAlpha: 1, duration: 0.3 });
        }
    };

    const handleMouseLeave = () => {
        gsap.to(cursor.current, { scale: 0, autoAlpha: 0, duration: 0.3 });
    };

    return (
        <section ref={container} className="py-32 bg-slate-950 relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
            {/* Background noise/grain could go here */}

            {/* Custom Cursor Element for Project Preview */}
            <div ref={cursor} className="fixed top-0 left-0 w-[400px] h-[300px] bg-slate-800 rounded-lg pointer-events-none z-[100] opacity-0 scale-0 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 border border-slate-600 shadow-2xl hidden md:block">
                <div className="cursor-content w-full h-full relative">
                    {/* Image injected via JS */}
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white text-black px-4 py-2 font-bold uppercase tracking-widest text-sm rounded-full">
                        {t.cursor}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                    <div>
                        <span className="block text-secondary font-mono text-sm uppercase tracking-widest mb-4">{t.label}</span>
                        <h2 className="text-5xl md:text-8xl font-bold uppercase text-white leading-none">
                            {t.title.part1} <br /> {t.title.part2}
                        </h2>
                    </div>

                    <Link href="/case-studies" className="hidden md:flex items-center gap-2 text-xl hover:text-secondary transition-colors group mt-8 md:mt-0">
                        {t.link}
                        <div className="bg-white/10 p-2 rounded-full group-hover:bg-secondary group-hover:text-black transition-all">
                            <ArrowIcon size={20} />
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col">
                    {data.slice(0, 5).map((study, i) => (
                        <Link
                            key={study.slug}
                            href={`/case-studies/${study.slug}`}
                            className="project-item group relative py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-baseline hover:bg-white/5 transition-colors px-4"
                            onMouseEnter={() => handleMouseEnter(study.image)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="md:w-1/3 z-10 pointer-events-none">
                                <span className="text-xs font-mono text-slate-500 mb-2 block transition-colors group-hover:text-secondary">0{i + 1} — {study.category}</span>
                                <h3 className={`text-4xl md:text-5xl font-bold text-white transition-transform duration-500 ${isRTL ? "group-hover:-translate-x-4" : "group-hover:translate-x-4"}`}>
                                    {study.client}
                                </h3>
                            </div>

                            <div className="md:w-1/3 mt-4 md:mt-0 z-10 pointer-events-none">
                                <p className="text-slate-500 text-lg max-w-sm group-hover:text-white transition-colors duration-300">
                                    {study.headline}
                                </p>
                            </div>

                            <div className={`md:w-auto mt-6 md:mt-0 z-10 pointer-events-none ${isRTL ? "text-left" : "text-right"}`}>
                                <span className="block text-3xl font-bold text-secondary">{study.metric.value}</span>
                                <span className="text-xs uppercase tracking-widest text-slate-500">{study.metric.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link href="/case-studies" className="btn-outline">{t.link}</Link>
                </div>
            </div>
        </section>
    );

}

