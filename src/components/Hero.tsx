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
                    subtitle: "تسويق الأداء",
                    title: "حول الإنفاق",
                    title2: "إلى نمو",
                    desc: "متخصصون في رفع العائد على الإنفاق الإعلاني (ROAS)، تحسين تكلفة الاستحواذ (CAC)، واقتصاديات الوحدة. نساعد العلامات التجارية في مصر والخليج على التوسع بمنهجية.",
                    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                },
                {
                    subtitle: "استراتيجيات مبنية على البيانات",
                    title: "توسع مع",
                    title2: "ثقة تامة",
                    desc: "نحن لا نخمن. نحن نهندس تدفقات إيرادات يمكن التنبؤ بها للعلامات التجارية الطموحة.",
                    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
                },
                {
                    subtitle: "تركيز على مصر والخليج",
                    title: "بلا",
                    title2: "حدود",
                    desc: "خبرة واسعة في الأسواق السعودية، الإماراتية، والمصرية.",
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
                }
            ],
            cta: "ابدأ مشروعك",
            work: "أعمالنا"
        },
        en: {
            slides: [
                {
                    subtitle: "Performance Marketing",
                    title: "Turn Spend",
                    title2: "Into Growth",
                    desc: "Specializing in ROAS maximization, CAC reduction, and unit economics. We help brands in Egypt & GCC scale systematically.",
                    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                },
                {
                    subtitle: "Data-Driven Strategies",
                    title: "Scale With",
                    title2: "Confidence",
                    desc: "We don't guess. We engineer predictable revenue streams for ambitious brands.",
                    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
                },
                {
                    subtitle: "Egypt & Gulf Focus",
                    title: "No",
                    title2: "Limits",
                    desc: "Extensive experience in Saudi, UAE, and Egyptian markets.",
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
                }
            ],
            cta: "Start Project",
            work: "Our Work"
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
        <section className="relative h-screen w-full bg-primary overflow-hidden">
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
            <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center">
                <div className="max-w-4xl">
                    <span className="block text-secondary font-mono uppercase tracking-[0.2em] mb-4 pl-1">
                        {slides[currentSlide].subtitle}
                    </span>
                    <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] text-white uppercase mb-6 mix-blend-overlay">
                        <div className="overflow-hidden">
                            <span ref={title1Ref} className="block">{slides[currentSlide].title}</span>
                        </div>
                        <div className="overflow-hidden">
                            <span ref={title2Ref} className="block text-outline-white text-transparent">{slides[currentSlide].title2}</span>
                        </div>
                    </h1>
                    <p ref={descRef} className={`text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed mb-12 ${isRTL ? "border-r-2 pr-6" : "border-l-2 pl-6"} border-secondary`}>
                        {slides[currentSlide].desc}
                    </p>

                    <div className="flex items-center gap-6">
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
            <div className={`absolute bottom-12 ${isRTL ? "right-6 md:right-12" : "left-6 md:left-12"} z-30 flex gap-4`}>
                <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                    {isRTL ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
                </button>
                <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all">
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

