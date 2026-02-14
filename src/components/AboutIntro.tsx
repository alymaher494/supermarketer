"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutIntro() {
    const { language } = useLanguage();
    const container = useRef(null);

    const isRTL = language === 'ar';

    const content = {
        ar: {
            label: "من أنا",
            title: <>مهندس <br /> النمو.</>,
            p1: <>معظم الوكالات تخمن. أنا <strong className="text-white font-medium">أحسب</strong>.</>,
            p2: <>أساعد العلامات التجارية في مصر والخليج على التوسع بمنهجية من خلال التركيز على ما يهم: <strong className="text-white">ROAS، CAC، واقتصاديات الوحدة</strong>.</>,
            p3: "استبدلت \"مقاييس الغرور\" بالنماذج المالية. استبدلت \"المشاعر\" بالتتبع من جانب السيرفر. قمت ببناء نظام حيث يتم توجيه الإبداع بواسطة البيانات، وليس العكس.",
            link: "اقرأ قصتي الكاملة"
        },
        en: {
            label: "Who I Am",
            title: <>Growth <br /> Engineer.</>,
            p1: <>Most agencies guess. I <strong className="text-white font-medium">calculate</strong>.</>,
            p2: <>I help brands scale systematically by focusing on what matters: <strong className="text-white">ROAS, CAC, and Unit Economics</strong>.</>,
            p3: "I replaced \"vanity metrics\" with financial models. I replaced \"feelings\" with server-side tracking. I built a system where creative is directed by data, not the other way around.",
            link: "Read My Full Story"
        }
    };

    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".intro-line", {
            scaleY: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            }
        });

        gsap.from(".intro-text", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%", // Revealed earlier
                toggleActions: "play none none none"
            }
        });
    }, [language]);

    return (
        <section ref={container} className="py-32 container mx-auto px-6" dir={isRTL ? "rtl" : "ltr"}>
            <div className="grid lg:grid-cols-12 gap-12">
                {/* Left: Sticky Title */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32">
                        <span className="text-secondary font-mono uppercase tracking-widest text-sm mb-4 block">{t.label}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight intro-text">
                            {t.title}
                        </h2>
                    </div>
                </div>

                {/* Right: Content with Border Line */}
                <div className={`lg:col-span-8 relative ${isRTL ? "pr-8 md:pr-16 border-r" : "pl-8 md:pl-16 border-l"} border-slate-800`}>
                    {/* Animated overlay border */}
                    <div className={`absolute top-0 ${isRTL ? "right-[-1px]" : "left-[-1px]"} w-[2px] h-full bg-secondary origin-top intro-line transform transition-transform duration-1000`} />

                    <div className="space-y-8 text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                        <p className="intro-text">
                            {t.p1}
                        </p>
                        <p className="intro-text">
                            {t.p2}
                        </p>
                        <p className="intro-text">
                            {t.p3}
                        </p>

                        <div className="pt-8">
                            <Link href="/about" className="inline-flex items-center gap-3 text-white border-b border-secondary pb-1 hover:text-secondary transition-colors">
                                {t.link} <ArrowRight size={18} className={isRTL ? "rotate-180" : ""} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
