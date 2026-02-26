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
                    title: "التخطيط و الإستراتيجية",
                    desc: "استراتيجيات شاملة مصممة خصيصًا لتناسب ميزانيتك: وجماهيرك مع مؤشرات أداء رئيسية واضحة وخطط اختبار.",
                    icon: <Zap className="text-secondary group-hover:text-white transition-colors" size={24} />,
                    highlight: true
                },
                {
                    title: "إدارة الحملات الاعلانية",
                    desc: "تخطيط وإطلاق وتحسين الحملات على منصات Meta وTikTok وSnapchat وGoogle مع التركيز على الأداء أولاً.",
                    icon: <Target className="text-secondary group-hover:text-white transition-colors" size={24} />
                },
                {
                    title: "نمو التجارة الإلكترونية",
                    desc: "خدمة مخصصة لأصحاب المتاجر الإلكترونية لزيادة عدد الطلبات مقبال خفض التكلفة.",
                    icon: <TrendingUp className="text-secondary group-hover:text-white transition-colors" size={24} />
                },
                {
                    title: "الإستشارات و المراجعة",
                    desc: "مراجعة كاملة للحسابات الإعلانية لاكتشاف أسباب تسرب الميزانية وخفض التكاليف وإصلاح الأخطاء.",
                    icon: <Search className="text-secondary group-hover:text-white transition-colors" size={24} />
                },
                {
                    title: "اختبارات المحتوى الإعلاني",
                    desc: "الاعتماد على اختبار الفرضيات بشكل مستمر للوصول للرسالة التسويقية الأكثر تأثيراً وزيادة المبيعات.",
                    icon: <BarChart3 className="text-secondary group-hover:text-white transition-colors" size={24} />
                },
                {
                    title: "التحليلات والتقارير",
                    desc: "تقارير دقيقة ومفهومة توضح حجم الإنفاق، وما تم تحقيقه من نتائج، ومبنية على بيانات حقيقية.",
                    icon: <PieChart className="text-secondary group-hover:text-white transition-colors" size={24} />
                }
            ]
        },
        en: {
            label: "MY SERVICES",
            headline: "Digital Marketing Services",
            items: [
                {
                    title: "Planning & Strategy",
                    desc: "Comprehensive strategies tailored to your budget and audiences, with clear KPIs and testing plans.",
                    icon: <Zap className="text-secondary group-hover:text-white transition-colors" size={24} />,
                    highlight: true
                },
                {
                    title: "Ad Campaigns Management",
                    desc: "Planning, launching, and optimizing campaigns on Meta, TikTok, Snapchat, and Google with a performance-first approach.",
                    icon: <Target className="text-secondary group-hover:text-white transition-colors" size={24} />
                },
                {
                    title: "E-commerce Growth",
                    desc: "Dedicated service for online stores to increase orders and scale profitably.",
                    icon: <TrendingUp className="text-secondary group-hover:text-white transition-colors" size={24} />
                },
                {
                    title: "Consulting & Auditing",
                    desc: "Deep dive into current ad setups to find opportunities, reduce costs, and fix structural errors.",
                    icon: <Search className="text-secondary group-hover:text-white transition-colors" size={24} />
                },
                {
                    title: "Ad Creative Testing",
                    desc: "Systematic A/B testing of hypotheses to find the winning formula and most effective messaging.",
                    icon: <BarChart3 className="text-secondary group-hover:text-white transition-colors" size={24} />
                },
                {
                    title: "Analytics & Reporting",
                    desc: "Simple, clear reports that show you what was spent and the exact results achieved from accurate tracking.",
                    icon: <PieChart className="text-secondary group-hover:text-white transition-colors" size={24} />
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
                            className="service-card p-10 rounded-3xl border transition-all duration-500 group relative overflow-hidden bg-[#161616] border-white/10 hover:bg-secondary/15 hover:border-secondary/50 hover:shadow-[0_0_50px_-10px_rgba(165,7,7,0.4)]"
                            style={{ opacity: 1 }}
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
