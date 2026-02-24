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
                title: "محمد – متخصص تسويق إلكتروني وإعلانات ممولة",
                desc: "بشتغل في مجال التسويق الإلكتروني وإدارة الحملات الإعلانية مع تركيز كامل على النتائج."
            },
            hero: {
                title: "زيادة المبيعات.\nوتقليل تكلفة الإعلان.",
                text1: { pre: "التسويق الحقيقي مش لايكات ومشاهدات. اللي يهمني هو", strong: "هل الإعلان جاب مبيعات؟", post: " بشتغل على إدارة الإعلانات الممولة بطريقة عملية تهدف لزيادة المبيعات وتقليل التكلفة." },
                text2: { pre: "بساعد الشركات في مصر والخليج", span: "تحوّل الإعلان من تكلفة لاستثمار مربح", post: " من خلال تحليل البيانات، اختبار الإعلانات، وتكبير الناجح منها." }
            },
            stats: [
                { label: "إنفاق إعلاني مُدار", value: "+$15M" },
                { label: "مبيعات تم تحقيقها", value: "+$40M" },
                { label: "متوسط العائد", value: "6.5x" },
                { label: "سنوات الخبرة", value: "+10" }
            ],
            values: {
                label: "ليه تشتغل معايا",
                title: "الفرق بيني وبين أي حد تاني",
                items: [
                    {
                        title: "بصلّح التتبع الأول",
                        desc: "لو مش قادر أقيس النتيجة بدقة، مش هصرف جنيه. التتبع الصح هو الأساس.",
                        points: ["تتبع سيرفر دقيق", "بيانات صحيحة", "تدقيق شامل"]
                    },
                    {
                        title: "مبيعات حقيقية مش أرقام شكلية",
                        desc: "ما بهتمش بعدد اللايكات. اللي يهمني هل الإعلان دخل فلوس وهل التكلفة مناسبة.",
                        points: ["تقليل تكلفة الإعلان", "زيادة المبيعات", "ربح حقيقي"]
                    },
                    {
                        title: "اختبار مستمر للإعلانات",
                        desc: "بختبر الإعلانات بالأرقام. بوقف الخسران وبكبر الناجح.",
                        points: ["اختبار A/B", "محتوى إعلاني قوي", "تحسين مستمر"]
                    }
                ]
            },
            marquee: "تسويق إلكتروني • إعلانات ممولة • زيادة مبيعات • نتائج حقيقية • ",
            clientsTitle: "شركات اشتغلت معاها"
        },
        en: {
            header: {
                subtitle: "About Me",
                title: "Mohamed — Paid Ads & Digital Marketing Specialist",
                desc: "I work in digital marketing and paid ads campaign management with a complete focus on results."
            },
            hero: {
                title: "Increase Sales.\nReduce Ad Costs.",
                text1: { pre: "Real marketing isn't about likes and views. What matters to me is", strong: "did the ad generate sales?", post: " I manage paid ads with a practical approach aimed at increasing sales and reducing costs." },
                text2: { pre: "I help businesses in Egypt and the Gulf", span: "turn ads from a cost into a profitable investment", post: " through data analysis, ad testing, and scaling what works." }
            },
            stats: [
                { label: "Managed Ad Spend", value: "+$15M" },
                { label: "Sales Generated", value: "+$40M" },
                { label: "Avg ROAS", value: "6.5x" },
                { label: "Years Experience", value: "+10" }
            ],
            values: {
                label: "Why Work With Me",
                title: "What Sets Me Apart",
                items: [
                    {
                        title: "I Fix Tracking First",
                        desc: "If I can't measure results accurately, I won't spend a penny. Proper tracking is the foundation.",
                        points: ["Server-Side Tracking", "Accurate Data", "Full Audit"]
                    },
                    {
                        title: "Real Sales, Not Vanity Metrics",
                        desc: "I don't care about likes count. What matters is: did the ad make money? Is the cost right?",
                        points: ["Reduce Ad Costs", "Increase Sales", "Real Profit"]
                    },
                    {
                        title: "Continuous Ad Testing",
                        desc: "I test ads by the numbers. I stop the losers and scale the winners.",
                        points: ["A/B Testing", "Strong Ad Creative", "Continuous Improvement"]
                    }
                ]
            },
            marquee: "Digital Marketing • Paid Ads • Sales Growth • Real Results • ",
            clientsTitle: "Companies I've Worked With"
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
                        src="/regional_growth_v3_1771881241616.png"
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


