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
                    subtitle: "متخصص تسويق إلكتروني وإعلانات ممولة",
                    title: "زيادة المبيعات",
                    title2: "وتقليل تكلفة الإعلان",
                    desc: "بساعد الشركات وأصحاب البيزنس يحققوا مبيعات حقيقية من خلال إدارة الإعلانات الممولة على فيسبوك، إنستجرام، جوجل، وتيك توك. التركيز دايمًا على الربح، مش الأرقام الوهمية.",
                    image: "/hero_performance_v3_1771881226946.png"
                },
                {
                    subtitle: "إدارة حملات إعلانية باحترافية",
                    title: "نتائج حقيقية",
                    title2: "مش أرقام وهمية",
                    desc: "بحلل البيانات، بختبر الإعلانات، وبكبر الناجح منها. كل قرش بيتصرف بهدف واضح: زيادة المبيعات وتقليل تكلفة الإعلان.",
                    image: "/strategy_blueprint_v3_1771881257824.png"
                },
                {
                    subtitle: "خبرة في مصر والخليج",
                    title: "تسويق إلكتروني",
                    title2: "يجيب مبيعات",
                    desc: "خبرة في التسويق الإلكتروني في مصر والسعودية والإمارات للتجارة الإلكترونية، العقارات، والخدمات. +10 سنوات وإدارة ميزانيات تجاوزت 15 مليون دولار.",
                    image: "/regional_growth_v3_1771881241616.png"
                }
            ],
            cta: "ابدأ مشروعك",
            work: "شاهد أعمالي"
        },
        en: {
            slides: [
                {
                    subtitle: "Paid Ads & Digital Marketing Specialist",
                    title: "Increase Sales",
                    title2: "& Reduce Ad Cost",
                    desc: "I help businesses achieve real sales through paid ads management on Facebook, Instagram, Google, and TikTok. Always focused on profit, not vanity metrics.",
                    image: "/hero_performance_v3_1771881226946.png"
                },
                {
                    subtitle: "Professional Campaign Management",
                    title: "Real Results",
                    title2: "Not Fake Numbers",
                    desc: "I analyze data, test ads, and scale what works. Every dollar is spent with a clear goal: increase sales and reduce ad cost.",
                    image: "/strategy_blueprint_v3_1771881257824.png"
                },
                {
                    subtitle: "Experience Across Egypt & Gulf",
                    title: "Digital Marketing",
                    title2: "That Drives Sales",
                    desc: "Digital marketing expertise across Egypt, Saudi Arabia & UAE for e-commerce, real estate, and services. 10+ years managing $15M+ in ad budgets.",
                    image: "/regional_growth_v3_1771881241616.png"
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
            <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center pt-40 md:pt-48 pb-40 md:pb-20">
                <div className="max-w-4xl">
                    <span className="block text-secondary font-mono uppercase tracking-[0.2em] mb-4 ps-1">
                        {slides[currentSlide].subtitle}
                    </span>
                    <h1 className="text-[8vw] md:text-[5vw] font-bold leading-[0.95] text-white uppercase mb-8">
                        <div className="overflow-hidden">
                            <span ref={title1Ref} className="block">{slides[currentSlide].title}</span>
                        </div>
                        <div className="overflow-hidden">
                            <span ref={title2Ref} className="block text-outline-white text-transparent">{slides[currentSlide].title2}</span>
                        </div>
                    </h1>
                    <p ref={descRef} className={`text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-[1.8] mb-14 border-secondary overflow-hidden ${isRTL ? "border-r-[3px] pr-8 text-right" : "border-l-[3px] pl-8 text-left"}`}>
                        {slides[currentSlide].desc}
                    </p>

                    <div className={`flex items-center gap-6 justify-start`}>
                        <Link href="/contact" className="btn-primary flex items-center gap-2 group">
                            {t.cta} <ArrowRight className={`group-hover:${isRTL ? "-translate-x-1" : "translate-x-1"} transition-transform ${isRTL ? "rotate-180" : ""}`} />
                        </Link>
                        <Link href="/case-studies" className="px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all">
                            {t.work}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Slider Controls */}
            <div className={`absolute bottom-10 ${isRTL ? "right-6 md:right-12" : "left-6 md:left-12"} z-30 flex gap-4`}>
                <button onClick={prevSlide} className="w-14 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                    {isRTL ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
                </button>
                <button onClick={nextSlide} className="w-14 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                    {isRTL ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                </button>
            </div>

            {/* Slide Indicators */}
            <div className={`absolute bottom-12 ${isRTL ? "left-6 md:left-12" : "right-6 md:right-12"} z-30 flex gap-4 items-end`}>
                <span className="text-4xl font-bold text-white">0{currentSlide + 1}</span>
                <span className="text-xl text-slate-500 mb-1">/ 0{slides.length}</span>
            </div>
        </section>
    );
}

