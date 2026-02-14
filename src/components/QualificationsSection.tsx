"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificatesData } from "@/data/general";
import { Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function QualificationsSection() {
    const { language } = useLanguage();
    const container = useRef(null);
    const data = certificatesData[language];
    const isRTL = language === 'ar';

    const content = {
        ar: {
            label: "خبرة مثبتة",
            headline: { part1: "شريك", part2: "معتمد." },
            desc: "استراتيجياتي مدعومة بشهادات رسمية من منصات الإعلان الرائدة في العالم. ألتزم بالقواعد لتحقيق انتصارات كبيرة.",
            stats: {
                years: "سنوات الخبرة",
                clients: "عملاء نشطين"
            }
        },
        en: {
            label: "Proven Experience",
            headline: { part1: "Certified", part2: "Partner." },
            desc: "My strategies are backed by official certifications from leading ad platforms. I play by the rules to win big.",
            stats: {
                years: "Years Experience",
                clients: "Active Clients"
            }
        }
    };
    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".cert-item", {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                }
            });
        }, container);

        return () => ctx.revert();
    }, [language]); // Re-run animation if language/content changes

    return (
        <section ref={container} className="py-24 bg-[#020617] relative border-t border-slate-900 mb-0" dir={isRTL ? "rtl" : "ltr"}> {/* Ensure no margin bottom to avoid gap */}

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Content */}
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                    <Award size={24} />
                                </div>
                                <span className="text-secondary font-mono text-sm uppercase tracking-widest">{t.label}</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                {t.headline.part1} <br />  <span className="text-slate-600">{t.headline.part2}</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                {t.desc}
                            </p>

                            <div className="flex gap-8 border-t border-slate-800 pt-8">
                                <div>
                                    <span className="block text-4xl font-bold text-white mb-1">10+</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">{t.stats.years}</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-white mb-1">50+</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">{t.stats.clients}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid (Certificates) - Better Styling */}
                    <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
                        {data.map((cert, i) => (
                            <div key={i} className="cert-item bg-[#0B1221] border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all group relative overflow-hidden">
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    {/* Logo Placeholder - In a real app use <Image /> */}
                                    <div className="h-10 w-10 flex items-center justify-center bg-white rounded-md text-black font-bold">
                                        {cert.issuer[0]}
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
                                        {cert.date}
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{cert.title}</h3>
                                    <p className="text-slate-500 text-sm">{cert.issuer}</p>
                                </div>

                                <div className={`absolute bottom-4 ${isRTL ? "left-4" : "right-4"} opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300`}>
                                    <CheckCircle2 size={20} className="text-secondary" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

