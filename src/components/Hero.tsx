"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { language } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const descRef = useRef(null);
    const imgRef = useRef(null);

    const isRTL = language === 'ar';

    const content = {
        ar: {
            slides: [
                
                {
                    subtitle: "خبرة في الأسواق الإقليمية",
                    title: "خبير تسويق",
                    title2: "في مصر والخليج",
                    desc: "أكثر من 9 سنوات من الخبرة في مساعدة العلامات التجارية على التوسع في مجالات التجارة الإلكترونية، العقارات، المجالات الطبية، والأغذية والمشروبات.",
                    image: "/hero_regional_expertise_ai_1771881203665.png"
                },
                {
                    subtitle: "خبرة في الأسواق الإقليمية",
                    title: "خبير تسويق",
                    title2: "في مصر والخليج",
                    desc: "أكثر من 9 سنوات من الخبرة في مساعدة العلامات التجارية على التوسع في مجالات التجارة الإلكترونية، العقارات، المجالات الطبية، والأغذية والمشروبات.",
                    image: "/hero_regional_expertise_ai_1771881203665.png"
                },
                {
                    subtitle: "خبير في تسويق الالكتروني والنمو",
                    title: "بناء أنظمة",
                    title2: "نمو مربحة ومستدامة",
                    desc: "بناء وتحسين أنظمة تسويق الأداء عبر Meta و TikTok و Snapchat و Google - مع التركيز على ROAS و CAC والـ Payback.",
                    image: "/hero_performance_v3_1771881226946.png"
                },
                {
                    subtitle: "إدارة إعلانات مبنية على النتائج",
                    title: "تحويل الإنفاق",
                    title2: "إلى نمو واستثمار",
                    desc: "مساعدة العلامات التجارية في مصر والخليج على النمو وتحقيق الربحية. إدارة ميزانيات شهرية تتجاوز مليون ريال سعودي مع التركيز على اقتصاديات الوحدة.",
                    image: "/strategy_blueprint_v3_1771881257824.png"
                }
            ],
            cta: "ابدأ الآن",
            work: "شاهد أعمالي"
        },
        en: {
            slides: [
                {
                    subtitle: "Performance Marketing Expert",
                    title: "Building Profitable",
                    title2: "Growth Systems",
                    desc: "Building and optimizing performance marketing systems across Meta, TikTok, Snapchat, and Google — focusing on ROAS, CAC, and payback.",
                    image: "/hero_performance_v3_1771881226946.png"
                },
                {
                    subtitle: "Media Buying & Optimization",
                    title: "Turn Ad Spend",
                    title2: "Into Growth",
                    desc: "Helping brands across Egypt & the GCC turn ad spend into profitable growth. Managing monthly budgets above 1M SAR with a clear focus on unit economics.",
                    image: "/strategy_blueprint_v3_1771881257824.png"
                },
                {
                    subtitle: "Regional Expertise",
                    title: "Egypt & GCC",
                    title2: "Market Growth",
                    desc: "Over 9 years of experience helping brands scale profitably across E-commerce, Real Estate, Medical Fields, and F&B sectors.",
                    image: "/hero_regional_expertise_ai_1771881203665.png"
                }
            ],
            cta: "Start Your Project",
            work: "View My Work"
        }
    };

    const t = content[language];
    const slides = t.slides;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const tl = gsap.timeline();

        // Reset Elements
        gsap.set([title1Ref.current, title2Ref.current, descRef.current], { y: 50, opacity: 0 });
        gsap.set(imgRef.current, { scale: 1.2, opacity: 0 });

        // Animate In
        tl.to(imgRef.current, { opacity: 0.4, scale: 1, duration: 1.5, ease: "power2.out" })
            .to(title1Ref.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=1.2")
            .to(title2Ref.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
            .to(descRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");

    }, [currentSlide]);

    return (
        <section className="relative min-h-screen md:h-[110vh] w-full bg-primary overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    ref={imgRef}
                    src={slides[currentSlide].image}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center pt-32 md:pt-36 pb-32 md:pb-16">
                <div className="max-w-4xl">
                    <span className="block text-secondary font-mono uppercase tracking-[0.2em] mb-4 ps-1">
                        {slides[currentSlide].subtitle}
                    </span>
                    <h1 className="text-[8vw] md:text-[5vw] font-bold leading-[0.95] text-white uppercase mb-4">
                        <div className="overflow-hidden">
                            <span ref={title1Ref} className="block">{slides[currentSlide].title}</span>
                        </div>
                        <div className="overflow-hidden">
                            <span ref={title2Ref} className="block text-outline-white text-transparent">{slides[currentSlide].title2}</span>
                        </div>
                    </h1>
                    <p ref={descRef} className={`text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-[1.8] mb-8 border-secondary overflow-hidden ${isRTL ? "border-r-[3px] pr-8 text-right" : "border-l-[3px] pl-8 text-left"}`}>
                        {slides[currentSlide].desc}
                    </p>

                    <div className={`flex flex-wrap items-center gap-6 justify-start mb-8`}>
                        <Link href="/contact" className="btn-primary flex items-center gap-2 group">
                            {t.cta} <ArrowRight className={`group-hover:${isRTL ? "-translate-x-1" : "translate-x-1"} transition-transform ${isRTL ? "rotate-180" : ""}`} />
                        </Link>
                        <Link href="/case-studies" className="px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all">
                            {t.work}
                        </Link>
                    </div>

                    <div className={`flex gap-4 w-full md:max-w-md mt-6 ${isRTL ? "justify-end md:pr-12" : "justify-center md:pl-4"}`}>
                        <button onClick={prevSlide} className="w-14 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                            {isRTL ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
                        </button>
                        <button onClick={nextSlide} className="w-14 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                            {isRTL ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}


            {/* Slide Indicators */}
            <div className={`absolute bottom-16 md:bottom-20 ${isRTL ? "left-6 md:left-12" : "right-6 md:right-12"} z-30 flex gap-4 items-end`}>
                <span className="text-4xl font-bold text-white">0{currentSlide + 1}</span>
                <span className="text-xl text-slate-500 mb-1">/ 0{slides.length}</span>
            </div>
        </section>
    );
}

