"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesBentoGrid() {
    const { language } = useLanguage();
    const container = useRef(null);
    const isRTL = language === 'ar';

    const content = {
        ar: {
            label: "خبراتنا",
            headline: <>وحدات نمو <br /> <span className="text-slate-500">شاملة.</span></>,
            viewAll: "عرض جميع الخدمات",
            items: [
                {
                    num: "01",
                    title: "تسويق الأداء",
                    desc: "إدارة الوسائط المدفوعة الموجهة بالبيانات عبر ميتا، جوجل، تيك توك، وسناب لتوسيع الإيرادات بشكل موثوق."
                },
                {
                    num: "02",
                    title: "الاستراتيجية الإبداعية",
                    desc: "إبداعات إعلانية عالية التحويل مصممة بناءً على بيانات الأداء."
                },
                {
                    num: "03",
                    title: "SEO والتحليلات",
                    desc: "تتبع من جانب السيرفر وبنية تحتية للنمو العضوي."
                },
                {
                    num: "04",
                    title: "استشارات",
                    desc: "تدقيق استراتيجي وتدريب الفرق الداخلية."
                }
            ]
        },
        en: {
            label: "Our Expertise",
            headline: <>Holistic Growth <br /> <span className="text-slate-500">Units.</span></>,
            viewAll: "View All Services",
            items: [
                {
                    num: "01",
                    title: "Performance Marketing",
                    desc: "Data-driven paid media management across Meta, Google, TikTok, and Snap to scale revenue reliably."
                },
                {
                    num: "02",
                    title: "Creative Strategy",
                    desc: "High-converting ad creatives designed based on performance data."
                },
                {
                    num: "03",
                    title: "SEO & Analytics",
                    desc: "Server-side tracking and organic growth infrastructure."
                },
                {
                    num: "04",
                    title: "Consulting",
                    desc: "Strategic auditing and internal team training."
                }
            ]
        }
    };

    const t = content[language];
    const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".bento-item", {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            }
        });

    }, []);

    return (
        <section ref={container} className="py-32 bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-mono uppercase tracking-widest mb-4 block">{t.label}</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            {t.headline}
                        </h2>
                    </div>
                    <Link href="/services" className="hidden md:flex items-center gap-2 text-white hover:text-secondary transition-colors group">
                        {t.viewAll}
                        <div className="bg-white/10 p-2 rounded-full group-hover:bg-secondary group-hover:text-black transition-all">
                            <ArrowIcon size={20} />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {/* Card 1: Large Feature */}
                    <div className="bento-item md:col-span-2 row-span-1 bg-[#0B1221] rounded-3xl p-10 border border-slate-800 relative overflow-hidden group hover:border-secondary transition-colors">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6">{t.items[0].num}</div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">{t.items[0].title}</h3>
                                <p className="text-slate-400 text-lg max-w-md">{t.items[0].desc}</p>
                            </div>
                            <div className={`absolute ${isRTL ? "left-10" : "right-10"} bottom-10 opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? "-translate-x-4" : "translate-x-4"} group-hover:translate-x-0 duration-300`}>
                                <ArrowIcon className="text-white w-12 h-12" />
                            </div>
                        </div>
                        {/* Abstract Background Shape */}
                        <div className={`absolute top-0 ${isRTL ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} w-[400px] h-[400px] bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl -translate-y-1/2`} />
                    </div>

                    {/* Card 2: Vertical */}
                    <div className="bento-item md:col-span-1 row-span-1 md:row-span-2 bg-[#0F172A] rounded-3xl p-10 border border-slate-800 relative overflow-hidden group hover:border-secondary transition-colors flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">{t.items[1].num}</div>
                            <h3 className="text-3xl font-bold text-white mb-4">{t.items[1].title}</h3>
                            <p className="text-slate-400 text-lg">{t.items[1].desc}</p>
                        </div>
                        <div className="mt-8 relative h-64 w-full rounded-2xl overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1626785774573-4b7993143a2d?q=80&w=2070&auto=format&fit=crop" alt="Creative" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Card 3: Standard */}
                    <div className="bento-item md:col-span-1 bg-[#0B1221] rounded-3xl p-10 border border-slate-800 relative overflow-hidden group hover:border-secondary transition-colors">
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">{t.items[2].num}</div>
                        <h3 className="text-2xl font-bold text-white mb-3">{t.items[2].title}</h3>
                        <p className="text-slate-400">{t.items[2].desc}</p>
                    </div>

                    {/* Card 4: Standard */}
                    <div className="bento-item md:col-span-1 bg-[#0B1221] rounded-3xl p-10 border border-slate-800 relative overflow-hidden group hover:border-secondary transition-colors">
                        <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">{t.items[3].num}</div>
                        <h3 className="text-2xl font-bold text-white mb-3">{t.items[3].title}</h3>
                        <p className="text-slate-400">{t.items[3].desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

