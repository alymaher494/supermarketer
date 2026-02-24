"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ExpertiseV2() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const services = {
        ar: [
            { id: "01", title: "إدارة إعلانات ميتا", category: "BRAND GROWTH", image: "/images/results/meta/تارا.png" },
            { id: "02", title: "إعلانات جوجل البحثية", category: "CONVERSION", image: "/images/results/meta/سبائك الماسة.png" },
            { id: "03", title: "سناب شات وتيك توك", category: "VIRAL REACH", image: "/images/results/snapchat/s دكان بليلة.PNG" },
            { id: "04", title: "إدارة المتاجر المتكاملة", category: "OPERATIONS", image: "/images/stores/عذبة.png" }
        ],
        en: [
            { id: "01", title: "META ADS MANAGEMENT", category: "BRAND GROWTH", image: "/images/results/meta/تara.png" },
            { id: "02", title: "GOOGLE SEARCH ADS", category: "CONVERSION", image: "/images/results/meta/سبائك الماسة.png" },
            { id: "03", title: "SNAPCHAT & TIKTOK", category: "VIRAL REACH", image: "/images/results/snapchat/s دكان بليلة.PNG" },
            { id: "04", title: "STORE MANAGEMENT", category: "OPERATIONS", image: "/images/stores/عذبة.png" }
        ]
    }[language];

    const [activeImg, setActiveImg] = useState<string | null>(null);

    return (
        <section className="bg-black py-32 border-t border-white/5" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-6 mb-24">
                <span className="text-secondary font-mono text-sm tracking-widest block mb-4 uppercase">
                    {isRTL ? "الخدمات الاحترافية" : "CORE EXPERTISE"}
                </span>
                <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85]">
                    {isRTL ? "خدمات مصممة" : "SERVICES BUILT"} <br />
                    <span className="text-transparent text-outline-white">{isRTL ? "للنمو السريع" : "FOR VELOCITY"}</span>
                </h2>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col border-t border-white/10">
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            href="/services"
                            onMouseEnter={() => setActiveImg(service.image)}
                            onMouseLeave={() => setActiveImg(null)}
                            className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 transition-all duration-500 hover:bg-white/5 px-4 md:px-12 relative"
                        >
                            <div className="flex items-center gap-12 z-10">
                                <span className="text-xl md:text-2xl font-mono text-slate-700 group-hover:text-secondary transition-colors">
                                    {service.id}
                                </span>
                                <h3 className="text-4xl md:text-7xl font-bold text-white uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="flex flex-col items-end gap-2 mt-4 md:mt-0 z-10">
                                <span className="text-secondary font-mono text-sm tracking-widest">{service.category}</span>
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Hover Floating Image Logic could be added here for extra premium feel */}
        </section>
    );
}
