"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "@/components/ui/PageHeader";
import MarqueeText from "@/components/ui/MarqueeText";
import { clientsData } from "@/data/general";
import Image from "next/image";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const clients = clientsData[language];

    const content = {
        ar: {
            header: {
                subtitle: "عني",
                title: "خبير تسويق الأداء والنمو",
                desc: "توسع العلامات التجارية في مصر والخليج بربحية من خلال بناء أنظمة تسويق متكاملة تعتمد على البيانات."
            },
            hero: {
                title: "بناء أنظمة.\nنمو مستدامة.",
                text1: { pre: "أنا محمد السيد، متخصص في تسويق الأداء والنمو بخبرة تزيد عن", strong: "5 سنوات", post: " في مساعدة الشركات على التوسع بربحية من خلال دمج البيانات واختبار الإبداع واقتصاديات الوحدة." },
                text2: { pre: "قمت بإدارة ميزانيات شهرية تتجاوز", span: "مليون ريال سعودي", post: " في قطاعات متنوعة مثل التجارة الإلكترونية، العقارات، والأغذية والمشروبات." }
            },
            stats: [
                { label: "ميزانيات مُدارة", value: "+1M SAR" },
                { label: "سنوات الخبرة", value: "+5" },
                { label: "عائد إعلاني (ROAS)", value: "مرتفع" },
                { label: "قطاعات السوق", value: "متاجر/عقارات" }
            ],
            values: {
                label: "نهج النمو",
                title: "كيفية تحقيق النتائج",
                items: [
                    {
                        title: "بناء أنظمة لا حملات فقط",
                        desc: "التركيز على بناء بنية تحتية للنمو تجمع بين تتبع البيانات واختبار المحتوى الإعلاني لضمان استدامة النتائج.",
                        points: ["تتبع دقيق", "اختبار الإبداع", "أنظمة قابلة للتوسع"]
                    },
                    {
                        title: "التركيز على اقتصاديات الوحدة",
                        desc: "كل قرار يعتمد على ROAS و CAC والـ Payback لضمان أن كل ريال يُنفق يحقق ربحاً حقيقياً.",
                        points: ["ROAS عالي", "خفض CAC", "ربحية مستدامة"]
                    },
                    {
                        title: "خبرة إقليمية واسعة",
                        desc: "فهم عميق لأسواق مصر والسعودية والخليج، مما يساعد في تصميم استراتيجيات تناسب ثقافة وسلوك المستهلك.",
                        points: ["سوق مصر", "سوق الخليج", "تحليل المنافسين"]
                    }
                ]
            },
            marquee: "تسويق الأداء • إعلانات ممولة • نمو المبيعات • نتائج حقيقية • ",
            clientsTitle: "شركات ساعدتها على النمو"
        },
        en: {
            header: {
                subtitle: "About Me",
                title: "Performance Marketing Expert",
                desc: "Helping brands across Egypt & the GCC turn ad spend into profitable growth through data-driven systems."
            },
            hero: {
                title: "Building Systems.\nNot Just Campaigns.",
                text1: { pre: "I am Mohamed Elsayed, specializing in performance & growth marketing with over", strong: "5 years of experience", post: " helping brands scale profitably by combining data, creative testing, and clear unit economics." },
                text2: { pre: "Managing monthly budgets above", span: "1M SAR", post: " across E-commerce, perfumes, real estate, services, and F&B sectors." }
            },
            stats: [
                { label: "Monthly Budget", value: "+1M SAR" },
                { label: "Years Experience", value: "+5" },
                { label: "ROAS Focus", value: "High" },
                { label: "Sectors", value: "E-com/RE" }
            ],
            values: {
                label: "Growth Approach",
                title: "How Results are Driven",
                items: [
                    {
                        title: "System-First Mindset",
                        desc: "Focusing on building growth systems that combine data tracking and creative testing to ensure long-term success.",
                        points: ["Data Tracking", "Creative Testing", "Scalable Systems"]
                    },
                    {
                        title: "Unit Economics Driven",
                        desc: "Every decision is based on ROAS, CAC, and payback periods to ensure profitable scaling.",
                        points: ["High ROAS", "Lower CAC", "Sustainable Profit"]
                    },
                    {
                        title: "Regional Expertise",
                        desc: "Deep understanding of Egypt and GCC markets, tailoring strategies to local consumer behavior.",
                        points: ["Egypt Market", "GCC Market", "Competitor Analysis"]
                    }
                ]
            },
            marquee: "Performance Marketing • Paid Ads • Sales Growth • Real Results • ",
            clientsTitle: "Companies I've Helped Scale"
        }
    };

    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate Image Reveal
        gsap.fromTo(".about-image",
            { scale: 1.2, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-hero",
                    start: "top bottom",
                }
            }
        );
    }, [language]);

    return (
        <main className="min-h-screen bg-primary" dir={isRTL ? "rtl" : "ltr"}>
            <PageHeader
                subtitle={t.header.subtitle}
                title={t.header.title}
                description={t.header.desc}
            />

            {/* Hero Section with Large Visual */}
            <section className="about-hero container mx-auto px-6 mb-32">
                <div className="relative aspect-video w-full overflow-hidden rounded-3xl mb-16">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <Image
                        src="/hero_performance_marketing_ai_1771881173104.png"
                        alt="Growth Strategy"
                        fill
                        className="about-image object-cover"
                    />
                    <div className={`absolute bottom-8 ${isRTL ? "right-8 text-right md:right-16" : "left-8 text-left md:left-16"} md:bottom-16 z-20 max-w-2xl`}>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 whitespace-pre-line">
                            {t.hero.title}
                        </h2>
                    </div>
                </div>

                <div className={`grid md:grid-cols-2 gap-16 text-lg md:text-xl text-slate-300 font-light leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                    <p>
                        {t.hero.text1.pre} <strong className="text-white">{t.hero.text1.strong}</strong>{t.hero.text1.post}
                    </p>
                    <p>
                        {t.hero.text2.pre} <span className="text-secondary border-b border-secondary/30">{t.hero.text2.span}</span>{t.hero.text2.post}
                    </p>
                </div>
            </section>

            {/* Stats Row */}
            <section className="border-y border-border-subtle py-20 bg-primary">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {t.stats.map((stat, i) => (
                        <div key={i}>
                            <span className={`block font-bold text-white mb-2 ${isRTL ? "text-3xl lg:text-5xl" : "text-4xl md:text-6xl"}`} dir="auto">{stat.value}</span>
                            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Cards */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-secondary font-mono uppercase tracking-widest mb-4 block">{t.values.label}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">{t.values.title}</h2>
                </div>

                <div className={`grid md:grid-cols-3 gap-8 ${isRTL ? "text-right" : "text-left"}`}>
                    {t.values.items.map((item, i) => (
                        <div key={i} className="bg-card/50 border border-border-subtle rounded-2xl p-8 hover:border-secondary transition-colors group">
                            <span className={`text-6xl font-bold text-slate-800 mb-6 block group-hover:text-secondary/20 transition-colors ${isRTL ? "text-left" : "text-right"}`} dir="ltr">0{i + 1}</span>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed h-24">{item.desc}</p>
                            <ul className="space-y-2">
                                {item.points.map((p, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                        <Check size={14} className="text-secondary" /> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <MarqueeText text={t.marquee} />

            {/* Clients Cloud */}
            <section className="py-32 container mx-auto px-6 text-center">
                <h2 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-16">{t.clientsTitle}</h2>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-80">
                    {clients.map((client, i) => (
                        <span key={i} className="text-xl md:text-2xl font-bold text-slate-500 hover:text-white transition-colors cursor-default select-none">
                            {client.name}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    );
}


