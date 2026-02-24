"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { caseStudiesData } from "@/data/case-studies";
import { useLanguage } from "@/context/LanguageContext";
import { MoveRight, Plus } from "lucide-react";

export default function PortfolioV2() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const container = useRef(null);
    const slides = caseStudiesData[language].slice(0, 5);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray(".v2-card");
        const ctx = gsap.context(() => {
            cards.forEach((card, i) => {
                if (i === cards.length - 1) return;

                ScrollTrigger.create({
                    trigger: card as any,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    invalidateOnRefresh: true,
                });
            });
        }, container);

        return () => ctx.revert();
    }, [language]);

    const t = isRTL ? "مشاريع مختارة" : "SELECTED WORKS";

    return (
        <section ref={container} className="bg-black py-32" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-6 mb-24">
                <div className="flex justify-between items-end border-b border-white/10 pb-12">
                    <h2 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase">
                        {t}
                    </h2>
                    <span className="text-secondary font-mono text-sm mb-4">01 — 05</span>
                </div>
            </div>

            <div className="space-y-0">
                {slides.map((project, i) => (
                    <div
                        key={project.slug}
                        className="v2-card h-screen w-full flex items-center justify-center p-4 md:p-12 sticky top-0"
                    >
                        <div className="w-full h-full bg-[#0d0d0d] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/5 relative group">
                            {/* Content */}
                            <div className="absolute inset-0 z-10 flex flex-col md:flex-row p-8 md:p-20">
                                <div className="md:w-1/2 flex flex-col justify-between">
                                    <div>
                                        <div className="flex gap-3 mb-6">
                                            {project.tags?.slice(0, 2).map((tag, idx) => (
                                                <span key={idx} className="text-[10px] font-mono border border-white/20 px-3 py-1 rounded-full text-slate-400 uppercase">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-5xl md:text-8xl font-bold text-white uppercase italic leading-none mb-8">
                                            {project.client}
                                        </h3>
                                        <p className="text-lg md:text-2xl text-slate-400 font-light max-w-md mb-12">
                                            {project.headline}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-8">
                                        <div className="text-center">
                                            <span className="block text-4xl md:text-6xl font-black text-secondary">{project.metric.value}</span>
                                            <span className="text-[10px] font-mono text-slate-500 uppercase">{project.metric.label}</span>
                                        </div>
                                        <Link
                                            href={`/case-studies/${project.slug}`}
                                            className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:bg-secondary transition-all duration-500"
                                        >
                                            <MoveRight className={isRTL ? "rotate-180" : ""} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="hidden md:flex md:w-1/2 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-secondary/5 blur-[100px] rounded-full" />
                                    <div className="relative w-full h-[80%] my-auto">
                                        <Image
                                            src={project.image}
                                            alt={project.client}
                                            fill
                                            className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Background */}
                            <div className="absolute bottom-[-10%] right-[-10%] text-[30vw] font-black text-white/[0.02] italic leading-none pointer-events-none uppercase">
                                0{i + 1}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-6 py-32 text-center">
                <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-4 text-4xl md:text-6xl font-bold text-white hover:text-secondary transition-colors"
                >
                    <Plus className="w-12 h-12" />
                    {isRTL ? "شاهد كل النتائج" : "EXPLORE ALL RESULTS"}
                </Link>
            </div>
        </section>
    );
}
