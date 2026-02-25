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
            label: "نهج النمو",
            title: <>خبير في تسويق <br />الأداء والنمو الرقمي</>,
            p1: <>أنا محمد السيد، خبير متخصص في تسويق الأداء والنمو بخبرة تزيد عن <strong className="text-white font-medium">5 سنوات</strong> في مساعدة العلامات التجارية في مصر والخليج على التوسع بربحية.</>,
            p2: <>التركيز على بناء <strong className="text-white">أنظمة نمو متاكملة</strong>، وليس مجرد حملات: حيث يتم الجمع بين البيانات، واختبار الإبداع، واقتصاديات الوحدة الواضحة.</>,
            p3: "إدارة ميزانيات شهرية تتجاوز مليون ريال سعودي في مجالات التجارة الإلكترونية، العطور، العقارات، الخدمات، والأغذية والمشروبات — مع التركيز دائمًا على ROAS و CAC والربحية طويلة الأمد.",
            link: "اقرأ القصة الكاملة"
        },
        en: {
            label: "Growth Approach",
            title: <>Performance &<br />Growth Marketing Expert</>,
            p1: <>I am Mohamed Elsayed, specializing in performance & growth marketing with over <strong className="text-white font-medium">5 years of experience</strong> helping brands in Egypt and the GCC scale profitably.</>,
            p2: <>Focusing on <strong className="text-white">building systems</strong>, not just campaigns: combining data, creative testing, and clear unit economics.</>,
            p3: "Managing monthly budgets above 1M SAR across E-commerce, perfumes, real estate, services, and F&B — always with a clear focus on ROAS, CAC, and long-term payback.",
            link: "Read Full Story"
        }
    };

    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Line animation
            gsap.from(".intro-line", {
                scaleY: 0,
                duration: 1.2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                }
            });

            // Text animation
            gsap.from(".intro-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 90%",
                    once: true
                }
            });
        }, container);

        return () => ctx.revert();
    }, [language]);

    return (
        <section ref={container} className="py-24 md:py-32 container mx-auto px-6" dir={isRTL ? "rtl" : "ltr"}>
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
                <div className={`lg:col-span-8 relative ${isRTL ? "pr-10 md:pr-24 border-r" : "pl-10 md:pl-24 border-l"} border-border-subtle`}>
                    {/* Animated overlay border */}
                    <div className={`absolute top-0 ${isRTL ? "right-[-1px]" : "left-[-1px]"} w-[2px] h-full bg-secondary origin-top intro-line transform transition-transform duration-1000`} />

                    <div className="space-y-8 text-xl md:text-2xl text-white font-normal leading-relaxed">
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
