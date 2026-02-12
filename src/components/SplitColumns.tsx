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
            ScrollTrigger.create({
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftCol.current,
                pinSpacing: false,
            });
        }, container);

        return () => ctx.revert();
    }, []);

    const content = {
        ar: {
            label: "منهجنا",
            headline: (
                <>
                    صياغة <br /> التميز <br /> <span className="text-outline-white text-transparent">الرقمي.</span>
                </>
            ),
            features: [
                {
                    title: "الاستراتيجية الموجهة بالبيانات",
                    desc: "قبل إطلاق أي حملة، نقوم بتحليل عميق للسوق والمنافسين وسلوك الجمهور المستهدف لضمان أقصى عائد.",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "الإبداع المؤثر",
                    desc: "تصميمات جذابة ورسائل إعلانية مقنعة تخاطب مشاعر الجمهور وتحفزهم على اتخاذ الإجراء.",
                    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                },
                {
                    title: "التحسين المستمر والتوسع",
                    desc: "مراقبة دقيقة للأداء، تجارب A/B مستمرة، وقرارات مبنية على الأرقام لتعظيم النتائج وتوسيع نطاق النجاح.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                }
            ]
        },
        en: {
            label: "Our Methodology",
            headline: (
                <>
                    Crafting <br /> Digital <br /> <span className="text-outline-white text-transparent">Excellence.</span>
                </>
            ),
            features: [
                {
                    title: "Data-Driven Strategy",
                    desc: "Before launching any campaign, we conduct deep analysis of the market, competitors, and audience behavior to ensure maximum ROI.",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "Impactful Creative",
                    desc: "Eye-catching designs and compelling ad copy that resonate with your audience and drive action.",
                    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                },
                {
                    title: "Optimization & Scaling",
                    desc: "Rigorous performance monitoring, continuous A/B testing, and data-backed decisions to maximize results and scale success.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                }
            ]
        }
    };

    const t = content[language];
    const isRTL = language === "ar";

    return (
        <section ref={container} className="relative bg-[#020617] border-t border-slate-900" dir={isRTL ? "rtl" : "ltr"}>
            <div className="flex flex-col lg:flex-row">
                {/* Fixed Content Side */}
                <div ref={leftCol} className="lg:w-1/2 h-screen flex flex-col justify-center px-12 lg:px-24 sticky top-0 bg-[#020617] z-10">
                    <span className="text-secondary font-mono uppercase tracking-widest mb-6 block">{t.label}</span>
                    <h2 className={`text-5xl md:text-7xl font-bold text-white mb-8 leading-tight ${isRTL ? "font-sans" : "font-sans"}`}>
                        {t.headline}
                    </h2>
                    <div className="h-1 w-24 bg-secondary" />
                </div>

                {/* Scrollable Content Side */}
                <div ref={rightCol} className="lg:w-1/2 bg-slate-900 border-l border-slate-800">
                    {t.features.map((feature, i) => (
                        <div key={i} className="min-h-screen flex flex-col justify-center px-12 lg:px-24 py-24 border-b border-slate-800 last:border-0 relative group hover:bg-[#0B1221] transition-colors duration-500">
                            <div className="relative aspect-[4/3] w-full mb-12 overflow-hidden rounded-sm">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-4 group-hover:translate-x-4 transition-transform duration-300 rtl:group-hover:-translate-x-4 ltr:group-hover:translate-x-4">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-md group-hover:text-slate-300 transition-colors">
                                {feature.desc}
                            </p>
                            <span className={`absolute top-12 ${isRTL ? "left-12" : "right-12"} text-8xl font-bold text-slate-800 opacity-20 pointer-events-none`}>0{i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


