"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDownRight } from "lucide-react";

export default function HeroV2() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const container = useRef(null);

    const t = {
        ar: {
            eyebrow: "خبير نمو رقمي معتمد",
            title: ["أصنع", "نمواً", "لا يتوقف"],
            desc: "أحول الميزانيات الإعلانية إلى تدفقات نقدية مستدامة من خلال استراتيجيات علمية وأداء لا يقبل المنافسة.",
            cta: "ابدأ رحلة النمو"
        },
        en: {
            eyebrow: "CERTIFIED PERFORMANCE EXPERT",
            title: ["CRAFTING", "ENDLESS", "GROWTH"],
            desc: "Turning ad budgets into sustainable cash flow through scientific strategies and unbeatable performance.",
            cta: "START GROWTH JOURNEY"
        }
    }[language];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-line span", {
                y: "110%",
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out"
            })
                .from(".hero-desc", {
                    opacity: 0,
                    y: 20,
                    duration: 0.8
                }, "-=0.6")
                .from(".hero-image", {
                    scale: 1.2,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power2.out"
                }, 0);

            // Parallax mouse effect
            container.current.addEventListener("mousemove", (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 40;
                const y = (clientY / window.innerHeight - 0.5) * 40;
                gsap.to(".hero-image-inner", { x, y, duration: 1 });
            });
        }, container);
        return () => ctx.revert();
    }, [language]);

    return (
        <section ref={container} className="relative min-h-screen bg-black flex items-center overflow-hidden pt-20" dir={isRTL ? "rtl" : "ltr"}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 hero-image">
                <div className="relative w-full h-full hero-image-inner">
                    <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[120%] bg-gradient-to-l from-secondary/20 to-transparent blur-[120px] rounded-full" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl">
                    <span className="inline-block text-secondary font-mono text-sm tracking-[0.4em] mb-8 hero-desc opacity-100">
                        {t.eyebrow}
                    </span>

                    <div className="mb-12">
                        {t.title.map((line, i) => (
                            <div key={i} className="hero-line overflow-hidden mb-[-2vh]">
                                <h1 className={`text-[12vw] md:text-[10vw] font-black leading-[0.85] uppercase italic tracking-tighter ${i === 1 ? "text-transparent text-outline-white" : "text-white"}`}>
                                    <span className="inline-block">{line}</span>
                                </h1>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-end">
                        <div className="hero-desc">
                            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-10 max-w-lg">
                                {t.desc}
                            </p>
                            <button className="group relative flex items-center gap-6 text-white overflow-hidden">
                                <span className="text-2xl font-bold uppercase tracking-widest">{t.cta}</span>
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-black transition-all duration-500">
                                    <ArrowDownRight className="w-6 h-6" />
                                </div>
                            </button>
                        </div>

                        <div className="hidden md:flex justify-end hero-desc">
                            <div className="text-white/20 font-mono text-sm rotate-90 origin-right">
                                SCROLL TO DISCOVER — 2024 PORTFOLIO
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Labels */}
            <div className={`absolute bottom-20 ${isRTL ? "left-12" : "right-12"} hidden lg:block hero-desc`}>
                <div className="flex flex-col gap-4 text-xs font-mono text-slate-600">
                    <span>AGENCY LEVEL RESULTS</span>
                    <span>SCIENTIFIC ATTRIBUTION</span>
                    <span>ROI FOCUSED</span>
                </div>
            </div>
        </section>
    );
}
