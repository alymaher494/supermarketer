"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { caseStudiesData } from "@/data/case-studies";
import { useLanguage } from "@/context/LanguageContext";

export default function SnapPortfolio() {
    const { language } = useLanguage();
    const container = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isRTL = language === 'ar';
    const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;
    const slides = caseStudiesData[language];

    const content = {
        ar: {
            label: "أعمال مميزة",
            viewCase: "عرض الحالة الدراسية"
        },
        en: {
            label: "Featured Work",
            viewCase: "View Case Study"
        }
    };
    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".portfolio-slide");

        // Create a pinning scroll effect
        const trigger = ScrollTrigger.create({
            trigger: container.current,
            start: "top top",
            end: `+=${sections.length * 100}%`,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            onUpdate: (self) => {
                const index = Math.round(self.progress * (sections.length - 1));
                setActiveIndex(index);
            },
            invalidateOnRefresh: true
        });

        return () => {
            trigger.kill();
        };
    }, [language, slides.length]); // Re-run if language changes

    return (
        <section className="relative bg-[#020617]" dir={isRTL ? "rtl" : "ltr"}>
            <div ref={container} className="h-screen w-full relative overflow-hidden flex items-center">

                {/* Background Static Text/Elements */}
                <div className={`absolute top-8 ${isRTL ? "left-8" : "right-8"} z-10 hidden md:block`}>
                    <span className="text-xs font-mono text-secondary uppercase tracking-widest">{t.label}</span>
                </div>

                {/* Slides Container */}
                <div className="w-full h-full relative">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`portfolio-slide absolute inset-0 w-full h-full transition-opacity duration-700 ${i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        >
                            {/* Big Number */}
                            <div className={`absolute top-[10%] ${isRTL ? "right-[5%] md:right-[15%]" : "left-[5%] md:left-[15%]"} z-20 mix-blend-overlay pointer-events-none`}>
                                <span className="text-[15vw] font-bold text-white opacity-20 leading-none block">
                                    00{i + 1}
                                </span>
                            </div>

                            {/* Main Visual */}
                            <div className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} w-full md:w-[65%] h-full`}>
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 bg-black/30 z-10" />
                                    <Image
                                        src={slide.image}
                                        alt={slide.client}
                                        fill
                                        className="object-cover"
                                        priority={i === 0}
                                    />
                                </div>
                            </div>

                            {/* Content Box */}
                            <div className={`absolute bottom-20 md:top-1/2 md:bottom-auto ${isRTL ? "right-6 md:right-24 md:-translate-y-1/2 text-right items-end" : "left-6 md:left-24 md:-translate-y-1/2 text-left items-start"} z-30 max-w-xl flex flex-col`}>
                                <div className="overflow-hidden mb-4">
                                    <h2 className={`text-5xl md:text-7xl font-bold text-white uppercase leading-tight transform transition-transform duration-700 ${i === activeIndex ? "translate-y-0" : "translate-y-full"}`}>
                                        {slide.client}
                                    </h2>
                                </div>

                                <div className="overflow-hidden mb-8">
                                    <div className={`flex flex-wrap gap-3 transform transition-transform duration-700 delay-100 ${i === activeIndex ? "translate-y-0" : "translate-y-full"}`}>
                                        {slide.tags?.map((tag, idx) => (
                                            <span key={idx} className="px-4 py-1 border border-white/20 rounded-full text-sm text-white bg-black/20 backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={`transform transition-all duration-700 delay-200 ${i === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                                    <Link href={`/case-studies/${slide.slug}`} className="inline-flex items-center gap-4 text-white hover:text-secondary transition-colors group">
                                        <span className="text-xl font-bold uppercase tracking-wider">{t.viewCase}</span>
                                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-black transition-all">
                                            <ArrowIcon size={20} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom Thumbnails/Indicatiors */}
                <div className={`absolute bottom-8 ${isRTL ? "left-8" : "right-8"} z-40 flex gap-4`}>
                    {slides.map((slide, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                // Scroll logic requires manipulating the scroll position of the pinned container, which is complex.
                                // For now, we leave it as an indicator or implement click-to-scroll later.
                            }}
                            className={`w-16 h-16 md:w-24 md:h-24 relative rounded border transition-all duration-300 overflow-hidden ${i === activeIndex ? "border-secondary opacity-100 scale-110" : "border-transparent opacity-50 grayscale"}`}
                        >
                            <Image src={slide.image} alt="thumb" fill className="object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
