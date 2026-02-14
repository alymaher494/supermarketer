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
                subtitle: "الوكالة",
                title: "أنا مهندس النمو",
                desc: "أنا استشاري متخصص في تسويق الأداء، أشارك العلامات التجارية الطموحة لهندسة نمو إيرادات يمكن التنبؤ به."
            },
            hero: {
                title: "مهووس بالنتائج.\nموجه بالبيانات.",
                text1: { pre: "التسويق لم يعد مبنياً على \"التخمين\". إنه يتعلق", strong: "بالبنية التحتية", post: ". أؤمن بأن النمو المستدام يأتي من نظام دقيق للاختبار، ودقة تتبع من جانب السيرفر، والنمذجة المالية." },
                text2: { pre: "أعمل في النقطة التي", span: "يلتقي فيها الإبداع بالحسابات", post: ". أحدد بدقة الروافع التي تحول الإنفاق الإعلاني إلى أرباح لشركائي في جميع أنحاء منطقة الشرق الأوسط." }
            },
            stats: [
                { label: "إنفاق إعلاني مدار", value: "+$15M" },
                { label: "إيرادات محققة", value: "+$40M" },
                { label: "متوسط عائد الإنفاق", value: "6.5x" },
                { label: "سنوات الخبرة", value: "+10" }
            ],
            values: {
                label: "حمضي النووي",
                title: "لماذا تختارني العلامات التجارية؟",
                items: [
                    {
                        title: "التحليل الجنائي للبيانات",
                        desc: "أصلح التتبع أولاً. إذا لم أتمكن من قياسه بدقة (من جانب السيرفر)، فلن أنفق دولاراً واحداً عليه.",
                        points: ["إعداد CAPI", "نمذجة الإسناد", "تدقيق شامل"]
                    },
                    {
                        title: "الربح > عائد الإنفاق",
                        desc: "لا أهتم بمقاييس الغرور. أنا أحسن من أجل هامش المساهمة، القيمة الدائمة للعميل، والأموال الفعلية في البنك.",
                        points: ["اقتصاديات الوحدة", "تحليل الأرباح والخسائر", "التوسع المدروس"]
                    },
                    {
                        title: "الإبداع العلمي",
                        desc: "أختبر الإعلانات بشكل منهجي. أكرر العمل بناءً على بيانات الأداء، وليس الآراء الشخصية.",
                        points: ["اختبار A/B", "محتوى من إنشاء المستخدم", "إنتاج عالي الجودة"]
                    }
                ]
            },
            marquee: "خبير معتمد • معايير عالمية • نتائج حقيقية • ",
            clientsTitle: "موثوق بي من قادة الصناعة"
        },
        en: {
            header: {
                subtitle: "The Agency",
                title: "I Am a Growth Engineer",
                desc: "I am a specialist performance marketing consultant, partnering with ambitious brands to engineer predictable revenue growth."
            },
            hero: {
                title: "Results Obsessed.\nData Driven.",
                text1: { pre: "Marketing is no longer about 'guessing'. It's about", strong: "Infrastructure", post: ". I believe sustainable growth comes from a rigorous system of testing, server-side tracking accuracy, and financial modeling." },
                text2: { pre: "I operate where", span: "Creativity meets Calculus", post: ". I pinpoint the exact levers that turn ad spend into profit for my partners across the MENA region." }
            },
            stats: [
                { label: "Managed Ad Spend", value: "+$15M" },
                { label: "Generated Revenue", value: "+$40M" },
                { label: "Avg ROAS", value: "6.5x" },
                { label: "Years Experience", value: "+10" }
            ],
            values: {
                label: "My DNA",
                title: "Why Brands Choose Me?",
                items: [
                    {
                        title: "Forensic Data Analysis",
                        desc: "I fix tracking first. If I can't measure it accurately (Server-Side), I won't spend a dollar on it.",
                        points: ["CAPI Setup", "Attribution Modeling", "Comprehensive Audit"]
                    },
                    {
                        title: "Profit > ROAS",
                        desc: "I don't care about vanity metrics. I optimize for Contribution Margin, LTV, and actual cash in the bank.",
                        points: ["Unit Economics", "P&L Analysis", "Thoughtful Scaling"]
                    },
                    {
                        title: "Scientific Creativity",
                        desc: "I test ads systematically. I iterate based on performance data, not personal opinions.",
                        points: ["A/B Testing", "UGC Content", "High Quality Production"]
                    }
                ]
            },
            marquee: "Certified Expert • Global Standards • Real Results • ",
            clientsTitle: "Trusted by Industry Leaders"
        }
    };

    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate Image Reveal
        gsap.from(".about-image", {
            scale: 1.2,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-hero",
                start: "top center",
            }
        });
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
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Strategy Session"
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
            <section className="border-y border-slate-800 py-20 bg-[#0B1221]">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {t.stats.map((stat, i) => (
                        <div key={i}>
                            <span className="block text-4xl md:text-6xl font-bold text-white mb-2" dir="ltr">{stat.value}</span>
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
                        <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-secondary transition-colors group">
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


