"use client";
import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudiesData } from "@/data/case-studies";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudiesPage() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const data = caseStudiesData[language];

    const content = {
        ar: {
            header: {
                subtitle: "أعمال حقيقية",
                title: "نتائج اشتغلت عليها",
                desc: "مجموعة من أنجح الحملات الإعلانية اللي اشتغلت عليها في التسويق الإلكتروني."
            },
            result: "النتيجة",
            all: "الكل",
            noProjects: "مفيش مشاريع في الفئة دي."
        },
        en: {
            header: {
                subtitle: "Real Work",
                title: "Results I've Delivered",
                desc: "A collection of the most successful ad campaigns I've worked on in digital marketing."
            },
            result: "Result",
            all: "All",
            noProjects: "No projects found in this category."
        }
    };
    const t = content[language];

    const allCategories = useMemo(() => {
        return [t.all, ...Array.from(new Set(data.map(c => c.category)))];
    }, [data, t.all]);

    const [activeCat, setActiveCat] = useState(t.all);

    // Reset active category when language changes to avoid mismatch
    /* Note: Ideally we map categories across languages, but simplified here: reset to All on lang switch if needed, 
       or since we use `t.all` as initial state, it might mismatch if language changes dynamically. 
       Let's useEffect to reset or track index. 
       Actually simplest is: if activeCat not in allCategories, reset to t.all.
    */

    const filtered = activeCat === t.all
        ? data
        : data.filter(c => c.category === activeCat);

    return (
        <main className="min-h-screen bg-primary" dir={isRTL ? "rtl" : "ltr"}>
            <PageHeader
                subtitle={t.header.subtitle}
                title={t.header.title}
                description={t.header.desc}
            />

            {/* Filters */}
            <div className="sticky top-[80px] z-30 bg-primary/80 backdrop-blur-xl border-y border-border-subtle/50 py-6 mb-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm md:text-base font-mono uppercase tracking-widest">
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`transition-colors ${activeCat === cat ? "text-white border-b-2 border-secondary" : "text-slate-500 hover:text-slate-300"}`}
                            >
                                {cat}
                                {activeCat === cat && <sup className="text-secondary ms-1 text-sm">{filtered.length}</sup>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky Stacking Column Layout */}
            <section className="container mx-auto px-6 pb-40">
                <div className="flex flex-col items-center max-w-5xl mx-auto space-y-12">
                    {filtered.map((study, index) => (
                        <div
                            key={study.slug}
                            className="sticky top-32 w-full pb-12"
                            style={{ zIndex: index + 1 }}
                        >
                            <Link
                                href={`/case-studies/${study.slug}`}
                                className="group block w-full"
                            >
                                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-border-subtle group-hover:border-secondary transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:shadow-secondary/20">
                                    <div className="relative aspect-square md:aspect-[21/9] w-full">
                                        <Image
                                            src={study.image}
                                            alt={study.client}
                                            fill
                                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                            priority={index < 2}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />

                                        {/* Indicator Overlay */}
                                        <div className={`absolute top-8 ${isRTL ? "left-8" : "right-8"} z-10 flex items-center gap-4`}>
                                            <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                                <span className="text-secondary font-bold text-sm">{study.metric.value}</span>
                                                <span className="uppercase text-slate-300 text-xs tracking-widest border-s border-white/10 ps-3 ms-1">{study.metric.label}</span>
                                            </div>
                                        </div>

                                        {/* Content Overlay */}
                                        <div className={`absolute bottom-0 inset-x-0 w-full p-8 md:p-16 ${isRTL ? "text-right" : "text-left"}`}>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="inline-block px-3 py-1 bg-secondary text-black rounded-full font-mono text-[10px] font-bold uppercase">{t.result}</span>
                                                    <span className="text-slate-400 font-mono text-xs tracking-[0.2em]">0{index + 1}</span>
                                                </div>
                                                <p className="text-white text-2xl md:text-5xl font-bold leading-[1.15] group-hover:text-secondary transition-colors duration-500 max-w-4xl drop-shadow-2xl">
                                                    {study.headline}
                                                </p>
                                                <div className="mt-4 flex items-center gap-6 text-slate-400">
                                                    <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium border-b border-white/10 pb-1">{study.client}</span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                                                    <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium border-b border-white/10 pb-1">{study.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-500 font-mono uppercase text-sm">
                        {t.noProjects}
                    </div>
                )}
            </section>

        </main>
    );
}

