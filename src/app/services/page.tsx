"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft, Check } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const container = useRef(null);
    const services = servicesData[language];
    const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

    const content = {
        ar: {
            header: {
                subtitle: "خبراتنا",
                title: "وحدات النمو",
                desc: "لا نبيع باقات عامة. نحن ننشر وحدات نمو متخصصة مصممة خصيصاً لأهداف إيراداتك."
            },
            labels: {
                fix: "الحل",
                outcomes: "النتائج",
                start: "ابدأ المشروع"
            },
            cta: "احجز مكالمة استراتيجية"
        },
        en: {
            header: {
                subtitle: "Our Expertise",
                title: "Growth Modules",
                desc: "We don't sell generic packages. We deploy specialized growth modules tailored to your revenue goals."
            },
            labels: {
                fix: "The Fix",
                outcomes: "Outcomes",
                start: "Start Project"
            },
            cta: "Book a Strategy Call"
        }
    };
    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Clear any existing triggers to avoid duplication on re-renders
        ScrollTrigger.getAll().forEach(t => t.kill());

        const cards = gsap.utils.toArray(".service-card");

        cards.forEach((card: any, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top top+=120", // Pin starts a bit lower to show header
                end: "bottom bottom",
                pin: true,
                pinSpacing: false,
                markers: false,
                id: `card-${index}`
            });
        });

        // Refresh to calculate positions correctly
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [language]); // Re-run when language changes due to layout shift

    return (
        <main className="min-h-screen bg-primary" dir={isRTL ? "rtl" : "ltr"}>
            <PageHeader
                subtitle={t.header.subtitle}
                title={t.header.title}
                description={t.header.desc}
            />

            <div ref={container} className="pb-40 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
                {services.map((service, i) => (
                    <div
                        key={service.id}
                        className="service-card sticky top-32 min-h-[600px] bg-[#0B1221] border border-slate-800 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl flex flex-col md:flex-row gap-12 overflow-hidden"
                        // Z-index ensures correct stacking order
                        style={{ zIndex: i + 1 }}
                    >
                        {/* Visual / Number Side */}
                        <div className="md:w-1/3 flex flex-col justify-between relative z-10">
                            <div>
                                <span className="text-8xl md:text-9xl font-bold text-transparent text-outline-white opacity-10 leading-none" dir="ltr">
                                    0{i + 1}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 uppercase leading-tight">
                                    {service.title}
                                </h2>
                            </div>
                            <div className="hidden md:block mt-8">
                                <span className="inline-block px-4 py-2 border border-secondary text-secondary rounded-full text-sm font-bold uppercase tracking-wider">
                                    {service.type}
                                </span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="md:w-2/3 flex flex-col justify-center relative z-10">
                            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12">
                                {service.description} {service.content}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 border-t border-slate-700/50 pt-10">
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4">{t.labels.fix}</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-300">
                                            <Check className="text-secondary shrink-0 mt-1" size={18} />
                                            <span>{service.details.solution}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4">{t.labels.outcomes}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.details.outcomes.map((o, idx) => (
                                            <span key={idx} className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300 border border-slate-700">
                                                {o}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 md:hidden">
                                <Link href="/contact" className="btn-primary w-full text-center block">{t.labels.start}</Link>
                            </div>
                        </div>

                        {/* Background Gradient Blob specific to color theme, keeping it dark/navy */}
                        <div className={`absolute top-0 ${isRTL ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"} w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-0 -translate-y-1/2`} />
                    </div>
                ))}
            </div>

            <section className="py-20 text-center bg-primary border-t border-slate-900">
                <Link href="/contact" className="text-4xl md:text-6xl font-bold text-white hover:text-secondary transition-colors inline-flex items-center gap-6 group">
                    {t.cta}
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-black group-hover:border-secondary transition-all">
                        <ArrowIcon size={40} />
                    </div>
                </Link>
            </section>
        </main>
    );
}

