"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Building2, ShoppingBag, Stethoscope, Utensils,
    Sofa, Scale, Code2, Shirt, Landmark, GraduationCap
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function IndustriesSection() {
    const { language } = useLanguage();
    const container = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    const isRTL = language === 'ar';

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            if (!slider.current || !container.current) return;

            const totalWidth = slider.current.scrollWidth;
            const viewportWidth = window.innerWidth;

            // Calculate how much we need to scroll
            const scrollAmount = totalWidth - viewportWidth + (viewportWidth * 0.1);

            const xValue = isRTL ? scrollAmount : -scrollAmount;

            gsap.to(slider.current, {
                x: xValue,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });
        }, container);

        return () => ctx.revert();
    }, [isRTL, language]); // Re-run on language change to recalculate widths

    const content = {
        ar: {
            label: "قطاعات أتميز بها",
            title: "خبرات صناعية",
            industries: [
                {
                    title: "العقارات",
                    desc: "توليد عملاء محتملين ذوي جودة عالية للمطورين والمشاريع الضخمة.",
                    icon: Building2,
                    stats: "$150M+ مبيعات",
                    image: "/industries/real-estate.jpg"
                },
                {
                    title: "التجارة الإلكترونية",
                    desc: "توسيع العلامات التجارية في مجالات العود، الأزياء، والإلكترونيات.",
                    icon: ShoppingBag,
                    stats: "6.5x عائد إعلاني",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
                },
                {
                    title: "المجال الطبي",
                    desc: "استراتيجيات جذب المرضى للعيادات والمستشفيات.",
                    icon: Stethoscope,
                    stats: "+40% حجوزات",
                    image: "/industries/medical.jpg"
                },
                {
                    title: "المطاعم والكافيهات",
                    desc: "زيادة حركة الزوار والطلبات عبر الإنترنت.",
                    icon: Utensils,
                    stats: "أحجام ضخمة",
                    image: "/industries/restaurants.jpg"
                },
                {
                    title: "الأثاث والديكور",
                    desc: "تحسين الإنفاق الإعلاني للمنتجات المنزلية عالية القيمة.",
                    icon: Sofa,
                    stats: "+45% كفاءة",
                    image: "/industries/furniture.jpg"
                },
                {
                    title: "الخدمات القانونية",
                    desc: "ترسيخ مكانة مكاتب المحاماة كمرجع في السوق.",
                    icon: Scale,
                    stats: "بناء السلطة",
                    image: "/industries/legal.jpg"
                },
                {
                    title: "البرمجيات (SaaS)",
                    desc: "توليد عملاء B2B وتحسين مسار التحويل.",
                    icon: Code2,
                    stats: "عملاء مؤهلين",
                    image: "/industries/saas.jpg"
                },
                {
                    title: "الأزياء",
                    desc: "حملات مدفوعة بالاتجاهات (Trends) للملابس والإكسسوارات.",
                    icon: Shirt,
                    stats: "توسع العلامة",
                    image: "/industries/fashion.jpg"
                },
                {
                    title: "القطاع الحكومي",
                    desc: "حملات توعية وطنية مع وصول ضخم.",
                    icon: Landmark,
                    stats: "3M+ وصول",
                    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
                },
                {
                    title: "التعليم",
                    desc: "زيادة الالتحاق بالكليات والبرامج المتخصصة.",
                    icon: GraduationCap,
                    stats: "+20% تسجيلات",
                    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200"
                }
            ],
            impact: "الأثر",
        },
        en: {
            label: "Industries I Master",
            title: "Industrial Expertise",
            industries: [
                {
                    title: "Real Estate",
                    desc: "High-quality lead gen for developers and mega-projects.",
                    icon: Building2,
                    stats: "$150M+ Sales",
                    image: "/industries/real-estate.jpg"
                },
                {
                    title: "E-commerce",
                    desc: "Scaling brands in Oud, Fashion, and Electronics.",
                    icon: ShoppingBag,
                    stats: "6.5x ROAS",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
                },
                {
                    title: "Medical",
                    desc: "Patient acquisition strategies for clinics and hospitals.",
                    icon: Stethoscope,
                    stats: "+40% Bookings",
                    image: "/industries/medical.jpg"
                },
                {
                    title: "Restaurants & Cafes",
                    desc: "Driving footfall and online orders.",
                    icon: Utensils,
                    stats: "High Volume",
                    image: "/industries/restaurants.jpg"
                },
                {
                    title: "Furniture & Decor",
                    desc: "Optimizing ad spend for high-ticket home products.",
                    icon: Sofa,
                    stats: "+45% Efficiency",
                    image: "/industries/furniture.jpg"
                },
                {
                    title: "Legal Services",
                    desc: "Positioning law firms as market authorities.",
                    icon: Scale,
                    stats: "Authority Building",
                    image: "/industries/legal.jpg"
                },
                {
                    title: "SaaS",
                    desc: "B2B lead gen and funnel optimization.",
                    icon: Code2,
                    stats: "Qualified Leads",
                    image: "/industries/saas.jpg"
                },
                {
                    title: "Fashion",
                    desc: "Trend-driven campaigns for apparel and accessories.",
                    icon: Shirt,
                    stats: "Brand Expansion",
                    image: "/industries/fashion.jpg"
                },
                {
                    title: "Government",
                    desc: "National awareness campaigns with massive reach.",
                    icon: Landmark,
                    stats: "3M+ Reach",
                    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
                },
                {
                    title: "Education",
                    desc: "Boosting enrollment for colleges and specialized programs.",
                    icon: GraduationCap,
                    stats: "+20% Enrollments",
                    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200"
                }
            ],
            impact: "Impact"
        }
    };

    const t = content[language];


    return (
        <section ref={container} className="relative min-h-screen bg-primary overflow-hidden flex flex-col justify-center py-16 md:py-24" dir={isRTL ? "rtl" : "ltr"}>

            <div className="container mx-auto px-6 md:px-24 mb-12">
                <span className="text-secondary font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-2 font-bold opacity-80">
                    {t.label}
                </span>
                <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                    {t.title}
                </h2>
            </div>

            <div ref={slider} className="flex gap-6 md:gap-8 ps-6 md:ps-24 pe-24 items-center h-[480px] md:h-[580px] w-max">
                {t.industries.map((ind, i) => (
                    <div
                        key={i}
                        className={`relative w-[300px] md:w-[480px] h-full rounded-2xl md:rounded-3xl border border-border-subtle/50 overflow-hidden group hover:border-secondary transition-all duration-700 bg-card/50`}
                    >
                        {/* Background Image */}
                        <Image
                            src={ind.image}
                            alt={ind.title}
                            fill
                            className="object-cover opacity-20 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

                        <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-950/80 backdrop-blur border border-border-subtle flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-500">
                                    <ind.icon size={28} />
                                </div>
                                <span className="text-5xl md:text-7xl font-bold text-transparent text-outline-white opacity-5">
                                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                </span>
                            </div>

                            <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">{ind.title}</h3>
                                <p className="text-slate-400 mb-6 md:mb-8 font-light leading-relaxed text-sm md:text-base line-clamp-3">
                                    {ind.desc}
                                </p>
                                <div className="border-t border-white/5 pt-4 md:pt-6 flex justify-between items-center">
                                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">{t.impact}</span>
                                    <span className="font-bold text-secondary text-base md:text-lg">{ind.stats}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

