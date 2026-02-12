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
            if (!slider.current) return;

            const totalWidth = slider.current.scrollWidth;
            const windowWidth = window.innerWidth;

            const xValue = isRTL
                ? (totalWidth - windowWidth + 100)
                : -(totalWidth - windowWidth + 100);

            gsap.to(slider.current, {
                x: xValue,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: () => `+=${totalWidth / 2}`,
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                }
            });
        }, container);

        return () => ctx.revert();
    }, [isRTL]);

    const content = {
        ar: {
            label: "قطاعات نتميز بها",
            title: "خبرات صناعية",
            industries: [
                {
                    title: "العقارات",
                    desc: "توليد عملاء محتملين ذوي جودة عالية للمطورين والمشاريع الضخمة.",
                    icon: Building2,
                    stats: "$150M+ مبيعات",
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "التجارة الإلكترونية",
                    desc: "توسيع العلامات التجارية في مجالات العود، الأزياء، والإلكترونيات.",
                    icon: ShoppingBag,
                    stats: "6.5x عائد إعلاني",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "المجال الطبي",
                    desc: "استراتيجيات جذب المرضى للعيادات والمستشفيات.",
                    icon: Stethoscope,
                    stats: "+40% حجوزات",
                    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                },
                {
                    title: "المطاعم والكافيهات",
                    desc: "زيادة حركة الزوار والطلبات عبر الإنترنت.",
                    icon: Utensils,
                    stats: "أحجام ضخمة",
                    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "الأثاث والديكور",
                    desc: "تحسين الإنفاق الإعلاني للمنتجات المنزلية عالية القيمة.",
                    icon: Sofa,
                    stats: "+45% كفاءة",
                    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "الخدمات القانونية",
                    desc: "ترسيخ مكانة مكاتب المحاماة كمرجع في السوق.",
                    icon: Scale,
                    stats: "بناء السلطة",
                    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "البرمجيات (SaaS)",
                    desc: "توليد عملاء B2B وتحسين مسار التحويل.",
                    icon: Code2,
                    stats: "عملاء مؤهلين",
                    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "الأزياء",
                    desc: "حملات مدفوعة بالاتجاهات (Trends) للملابس والإكسسوارات.",
                    icon: Shirt,
                    stats: "توسع العلامة",
                    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
                },
                {
                    title: "القطاع الحكومي",
                    desc: "حملات توعية وطنية مع وصول ضخم.",
                    icon: Landmark,
                    stats: "3M+ وصول",
                    image: "https://images.unsplash.com/photo-1558486012-818148f97521?q=80&w=2066&auto=format&fit=crop"
                },
                {
                    title: "التعليم",
                    desc: "زيادة الالتحاق بالكليات والبرامج المتخصصة.",
                    icon: GraduationCap,
                    stats: "+20% تسجيلات",
                    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                }
            ],
            impact: "الأثر",
        },
        en: {
            label: "Industries We Master",
            title: "Industrial Expertise",
            industries: [
                {
                    title: "Real Estate",
                    desc: "High-quality lead gen for developers and mega-projects.",
                    icon: Building2,
                    stats: "$150M+ Sales",
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "E-commerce",
                    desc: "Scaling brands in Oud, Fashion, and Electronics.",
                    icon: ShoppingBag,
                    stats: "6.5x ROAS",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "Medical",
                    desc: "Patient acquisition strategies for clinics and hospitals.",
                    icon: Stethoscope,
                    stats: "+40% Bookings",
                    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                },
                {
                    title: "Restaurants & Cafes",
                    desc: "Driving footfall and online orders.",
                    icon: Utensils,
                    stats: "High Volume",
                    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "Furniture & Decor",
                    desc: "Optimizing ad spend for high-ticket home products.",
                    icon: Sofa,
                    stats: "+45% Efficiency",
                    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "Legal Services",
                    desc: "Positioning law firms as market authorities.",
                    icon: Scale,
                    stats: "Authority Building",
                    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "SaaS",
                    desc: "B2B lead gen and funnel optimization.",
                    icon: Code2,
                    stats: "Qualified Leads",
                    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "Fashion",
                    desc: "Trend-driven campaigns for apparel and accessories.",
                    icon: Shirt,
                    stats: "Brand Expansion",
                    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
                },
                {
                    title: "Government",
                    desc: "National awareness campaigns with massive reach.",
                    icon: Landmark,
                    stats: "3M+ Reach",
                    image: "https://images.unsplash.com/photo-1558486012-818148f97521?q=80&w=2066&auto=format&fit=crop"
                },
                {
                    title: "Education",
                    desc: "Boosting enrollment for colleges and specialized programs.",
                    icon: GraduationCap,
                    stats: "+20% Enrollments",
                    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                }
            ],
            impact: "Impact"
        }
    };

    const t = content[language];


    return (
        <section ref={container} className="relative min-h-screen bg-[#050b1d] overflow-hidden flex flex-col justify-center py-20" dir={isRTL ? "rtl" : "ltr"}>

            <div className={`absolute top-10 ${isRTL ? "right-6 md:right-24 text-right" : "left-6 md:left-24 text-left"} z-10 w-full max-w-lg mb-10`}>
                <span className="text-secondary font-mono text-xs uppercase tracking-widest block mb-4">
                    {t.label}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-heading text-white bg-clip-text">
                    {t.title}
                </h2>
            </div>

            <div ref={slider} className="flex gap-8 ps-6 md:ps-24 pe-24 items-center h-[600px] mt-20 md:mt-0 w-max">
                {t.industries.map((ind, i) => (
                    <div
                        key={i}
                        className={`relative w-[350px] md:w-[450px] h-[500px] md:h-[600px] rounded-2xl border border-slate-800 overflow-hidden group hover:border-secondary transition-all duration-500`}
                    >
                        {/* Background Image */}
                        <Image
                            src={ind.image}
                            alt={ind.title}
                            fill
                            className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-colors">
                                    <ind.icon size={28} />
                                </div>
                                <span className="text-6xl font-bold text-transparent text-outline-white opacity-40">
                                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                </span>
                            </div>

                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-bold text-white mb-2">{ind.title}</h3>
                                <p className="text-slate-300 mb-6 font-light leading-relaxed">
                                    {ind.desc}
                                </p>
                                <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                                    <span className="text-xs uppercase tracking-widest text-slate-400">{t.impact}</span>
                                    <span className="font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">{ind.stats}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

