"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPreviewList() {
    const { language } = useLanguage();
    const container = useRef(null);

    const isRTL = language === 'ar';

    const content = {
        ar: {
            label: "خبراتنا",
            title: "محركات النمو",
            services: [
                { num: "01", title: "الاستراتيجية والتخطيط", desc: "استراتيجيات متكاملة مصممة خصيصًا لاقتصاديات وحدتك." },
                { num: "02", title: "إدارة الإعلانات الممولة", desc: "تنفيذ حملات على ميتا، تيك توك، سناب شات، وجوجل." },
                { num: "03", title: "نمو التجارة الإلكترونية", desc: "توسيع المتاجر الإلكترونية من خلال تصميم العروض وتحسين مسار الشراء." },
                { num: "04", title: "التحليلات والتقارير", desc: "تقارير دقيقة حول الأرباح، ROAS، القيمة الدائمة للعميل، وفترات الاسترداد." },
            ]
        },
        en: {
            label: "Our Expertise",
            title: "Growth Engines",
            services: [
                { num: "01", title: "Strategy & Planning", desc: "Integrated strategies tailored to your unit economics." },
                { num: "02", title: "Paid Ads Management", desc: "Campaign execution on Meta, TikTok, Snap, and Google." },
                { num: "03", title: "E-commerce Growth", desc: "Scaling online stores through offer design and funnel optimization." },
                { num: "04", title: "Analytics & Reporting", desc: "Accurate reports on Profit, ROAS, LTV, and Payback periods." },
            ]
        }
    };

    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const rows = gsap.utils.toArray('.service-row');
            rows.forEach((row: any) => {
                gsap.fromTo(row,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: row,
                            start: 'top 85%',
                        }
                    }
                );
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-32 container mx-auto px-6" dir={isRTL ? "rtl" : "ltr"}>
            <div className="mb-16 border-b border-slate-800 pb-8">
                <span className="block text-secondary font-mono text-sm uppercase tracking-widest mb-2">{t.label}</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white uppercase">{t.title}</h2>
            </div>

            <div>
                {t.services.map((s, i) => (
                    <div key={i} className="service-row group relative py-12 border-b border-slate-800 transition-colors hover:bg-white/5 cursor-pointer">
                        <div className="flex flex-col md:flex-row items-baseline gap-6 md:gap-12 px-4 relative z-10">
                            <span className="text-xl font-mono text-slate-500 group-hover:text-secondary transition-colors">/{s.num}</span>
                            <h3 className={`text-3xl md:text-5xl font-bold text-white transition-all duration-300 flex-1 ${isRTL ? "group-hover:pr-4" : "group-hover:pl-4"}`}>
                                {s.title}
                            </h3>
                            <p className={`text-slate-400 max-w-md text-lg ${isRTL ? "md:text-left" : "md:text-right"} group-hover:text-white transition-colors`}>
                                {s.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
