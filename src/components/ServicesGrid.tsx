"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import {
    TrendingUp,
    Target,
    BarChart3,
    Search,
    Zap,
    PieChart
} from "lucide-react";

export default function ServicesGrid() {
    const { language } = useLanguage();
    const container = useRef(null);
    const isRTL = language === 'ar';

    const content = {
        ar: {
            label: "خدماتي",
            headline: "خدمات التسويق الإلكتروني",
            items: [
                {
                    title: "إدارة الإعلانات الممولة",
                    desc: "إدارة حملات إعلانية على فيسبوك، إنستجرام، جوجل، تيك توك، وسناب شات بهدف زيادة المبيعات.",
                    icon: <Target className="text-secondary" size={24} />
                },
                {
                    title: "نمو التجارة الإلكترونية",
                    desc: "خدمة مخصصة لأصحاب المتاجر الإلكترونية لزيادة عدد الطلبات وتقليل تكلفة الإعلان.",
                    icon: <TrendingUp className="text-secondary" size={24} />
                },
                {
                    title: "التخطيط والاستراتيجية",
                    desc: "خطة تسويق إلكتروني واضحة بدل التجارب العشوائية وتضييع الميزانية.",
                    icon: <Zap className="text-secondary" size={24} />,
                    highlight: true
                },
                {
                    title: "تدقيق الحملات الإعلانية",
                    desc: "مراجعة كاملة للحسابات الإعلانية لمعرفة فين المشكلة وفين الهدر وإزاي تتحسن النتائج.",
                    icon: <Search className="text-secondary" size={24} />
                },
                {
                    title: "اختبارات المحتوى الإعلاني",
                    desc: "تجربة صور وفيديوهات مختلفة عشان نعرف أنهي إعلان بيجيب مبيعات أكتر.",
                    icon: <BarChart3 className="text-secondary" size={24} />
                },
                {
                    title: "التحليلات والتقارير",
                    desc: "تقارير بسيطة ومفهومة تعرفك صرفت كام، دخلت كام، تكمل ولا تغيّر.",
                    icon: <PieChart className="text-secondary" size={24} />
                }
            ]
        },
        en: {
            label: "MY SERVICES",
            headline: "Digital Marketing Services",
            items: [
                {
                    title: "Paid Ads Management",
                    desc: "Managing ad campaigns on Facebook, Instagram, Google, TikTok, and Snapchat to increase sales.",
                    icon: <Target className="text-secondary" size={24} />
                },
                {
                    title: "E-commerce Growth",
                    desc: "Dedicated service for online stores to increase orders and reduce ad costs.",
                    icon: <TrendingUp className="text-secondary" size={24} />
                },
                {
                    title: "Strategy & Planning",
                    desc: "A clear digital marketing plan instead of random experiments and wasted budget.",
                    icon: <Zap className="text-secondary" size={24} />,
                    highlight: true
                },
                {
                    title: "Campaign Auditing",
                    desc: "Full review of ad accounts to find where the problems and waste are.",
                    icon: <Search className="text-secondary" size={24} />
                },
                {
                    title: "Ad Creative Testing",
                    desc: "Testing different images and videos to find which ads drive the most sales.",
                    icon: <BarChart3 className="text-secondary" size={24} />
                },
                {
                    title: "Analytics & Reporting",
                    desc: "Simple, clear reports that show you how much you spent, how much you made, and what to do next.",
                    icon: <PieChart className="text-secondary" size={24} />
                }
            ]
        }
    };

    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "circ.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%"
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-32 bg-primary" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-6">
                <div className={`flex flex-col mb-16 ${isRTL ? "items-start text-right" : "items-start text-left"}`}>
                    <span className="text-secondary font-mono uppercase tracking-[0.3em] text-sm mb-4 block">
                        {t.label}
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        {t.headline}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((item, i) => (
                        <div
                            key={i}
                            className={`service-card p-10 rounded-3xl border transition-all duration-500 group relative overflow-hidden
                                ${item.highlight
                                    ? "bg-secondary/15 border-secondary/50 shadow-[0_0_50px_-10px_rgba(165,7,7,0.4)]"
                                    : "bg-[#161616] border-white/10 hover:border-secondary/30"
                                }`}
                            style={{ opacity: 1 }} // Ensure visible by default
                        >
                            {/* Decorative background glow */}
                            <div className={`absolute -top-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isRTL ? "-left-20" : "-right-20"}`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-4xl font-bold text-white opacity-10 group-hover:opacity-20 transition-opacity" dir="ltr">
                                        0{i + 1}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-secondary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-200 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
