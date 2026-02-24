"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { certificatesData } from "@/data/general";
import { useLanguage } from "@/context/LanguageContext";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import Link from "next/link";

interface CertificatesGalleryProps {
    limit?: number;
    showTitle?: boolean;
}

export default function CertificatesGallery({ limit, showTitle = true }: CertificatesGalleryProps) {
    const { language } = useLanguage();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const data = certificatesData[language];
    const displayData = limit ? data.slice(0, limit) : data;
    const isRTL = language === 'ar';

    const content = {
        ar: {
            title: "الشهادات والاعتمادات",
            subtitle: "التميز المهني",
            desc: "توثيق رسمي للخبرات والمهارات في مجالات التسويق وإدارة الأعمال من مؤسسات عالمية.",
            viewAll: "عرض جميع الشهادات"
        },
        en: {
            title: "Certifications & Credentials",
            subtitle: "Professional Excellence",
            desc: "Official documentation of expertise and skills in marketing and business management from global institutions.",
            viewAll: "View All Certificates"
        }
    };
    const t = content[language];

    if (!mounted) return null;

    return (
        <section className={`py-24 bg-[#0a0a0a] relative overflow-hidden ${!showTitle ? 'pt-0' : ''}`}>
            {/* Background decorative elements */}
            <div className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none`} />

            <div className="container mx-auto px-6 relative z-10">
                {showTitle && (
                    <div className="max-w-3xl mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-secondary font-mono text-sm uppercase tracking-widest">{t.subtitle}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">{t.title}</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {t.desc}
                        </p>
                    </div>
                )}

                <div className={`grid grid-cols-1 sm:grid-cols-2 ${limit === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
                    {displayData.map((cert, i) => (
                        <motion.div
                            key={`${language}-${cert.title}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-[#111111] border border-white/5 p-6 rounded-2xl hover:border-secondary/50 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="relative aspect-[4/3] w-full mb-6 rounded-lg overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                {cert.image ? (
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-contain p-2"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-3 text-slate-700">
                                        <Award size={64} className="opacity-20" />
                                        <span className="text-[10px] uppercase font-mono tracking-widest">Document Secured</span>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className={`flex-grow ${isRTL ? "text-right" : "text-left"}`}>
                                <div className={`flex justify-between items-start mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                                    <span className="text-[10px] font-mono text-secondary px-2 py-0.5 border border-secondary/30 rounded uppercase tracking-tighter">
                                        {cert.date}
                                    </span>
                                    <Award size={16} className="text-slate-600" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-secondary transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-500 text-sm">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {limit && data.length > limit && (
                    <div className="mt-16 text-center">
                        <Link
                            href="/certificates"
                            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-base font-bold uppercase hover:bg-secondary transition-colors"
                        >
                            {t.viewAll}
                            <ExternalLink size={18} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
