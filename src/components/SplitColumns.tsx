"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function SplitColumns() {
    const { language } = useLanguage();
    const container = useRef(null);
    const leftCol = useRef(null);
    const rightCol = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: leftCol.current,
                    pinSpacing: false,
                });
            });
        }, container);

        return () => ctx.revert();
    }, []);

    const content = {
        ar: {
            label: "منهجيتي",
            headline: (
                <>
                    تحليل قبل  <br />الإعلان <br /><span className="text-outline-white text-transparent">الإعلانات؟</span>
                </>
            ),
            features: [
                {
                    title: "تحليل قبل الإعلان",
                    desc: "قبل ما نصرف جنيه واحد، بنحلل السوق، المنافسين، والجمهور المستهدف عشان الإعلان يجيب نتيجة.",
                    image: "/strategy_blueprint_v3_1771881257824.png"
                },
                {
                    title: "تشغيل واختبار الحملات",
                    desc: "إعلانات مختلفة على فيسبوك، إنستجرام، جوجل، وتيك توك ونشوف بالأرقام إيه اللي بيبيع فعلًا.",
                    image: "/hero_data_strategy_ai_1771881188950.png"
                },
                {
                    title: "تحسين مستمر",
                    desc: "نوقف الحملات الخسرانة، نكرر الناجح، ونكبر الميزانية بشكل ذكي.",
                    image: "/hero_performance_v3_1771881226946.png"
                }
            ]
        },
        en: {
            label: "My Methodology",
            headline: (
                <>
                    How I Manage <br />Your Ad <br /><span className="text-outline-white text-transparent">Campaigns</span>
                </>
            ),
            features: [
                {
                    title: "Analysis Before Spending",
                    desc: "Before spending a single dollar, I analyze the market, competitors, and target audience to ensure ads deliver results.",
                    image: "/strategy_blueprint_v3_1771881257824.png"
                },
                {
                    title: "Launch & Test Campaigns",
                    desc: "Different ads on Facebook, Instagram, Google, and TikTok — then we see by the numbers what actually sells.",
                    image: "/hero_data_strategy_ai_1771881188950.png"
                },
                {
                    title: "Continuous Optimization",
                    desc: "Stop losing campaigns, repeat winners, and scale the budget smartly.",
                    image: "/hero_performance_v3_1771881226946.png"
                }
            ]
        }
    };

    const t = content[language];
    const isRTL = language === "ar";

    return (
        <section ref={container} className="relative bg-[#161616] border-t border-slate-900" dir={isRTL ? "rtl" : "ltr"}>
            <div className="flex flex-col lg:flex-row">
                {/* Fixed Content Side (Desktop) / Header (Mobile) */}
                <div ref={leftCol} className="lg:w-1/2 min-h-[50vh] lg:h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-[#161616] z-10 transition-all duration-300">
                    <span className="text-secondary font-mono uppercase tracking-widest mb-6 block">{t.label}</span>
                    <h2 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]`}>
                        {t.headline}
                    </h2>
                    <div className="h-1 w-24 bg-secondary" />
                </div>

                {/* Content Side */}
                <div ref={rightCol} className="lg:w-1/2 bg-card lg:border-s border-border-subtle">
                    {t.features.map((feature, i) => (
                        <div key={i} className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 lg:py-24 border-b border-border-subtle last:border-0 relative group hover:bg-primary-light transition-colors duration-500">
                            <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full mb-8 lg:mb-12 overflow-hidden rounded-3xl">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-secondary transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-lg lg:text-xl font-light leading-relaxed max-w-md group-hover:text-slate-300 transition-colors">
                                {feature.desc}
                            </p>
                            <span className={`absolute top-8 lg:top-12 ${isRTL ? "left-6 lg:left-12" : "right-6 lg:right-12"} text-6xl lg:text-8xl font-bold text-slate-800 opacity-20 pointer-events-none`}>0{i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


