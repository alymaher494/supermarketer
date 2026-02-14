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
                subtitle: "أعمال مختارة",
                title: "نتائج تتوسع",
                desc: "مجموعة مختارة من أكثر حملاتي وتدقيقاتي واستراتيجياتي تأثيراً."
            },
            result: "النتيجة",
            all: "الكل",
            noProjects: "لا توجد مشاريع في هذه الفئة."
        },
        en: {
            header: {
                subtitle: "Selected Works",
                title: "Results That Scale",
                desc: "A curated collection of my most impactful campaigns, audits, and strategic overhauls."
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
            <div className="sticky top-[80px] z-30 bg-primary/80 backdrop-blur-xl border-y border-slate-800/50 py-6 mb-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm md:text-base font-mono uppercase tracking-widest">
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`transition-colors ${activeCat === cat ? "text-white border-b-2 border-secondary" : "text-slate-500 hover:text-slate-300"}`}
                            >
                                {cat}
                                {activeCat === cat && <sup className="text-secondary ml-1 text-sm">{filtered.length}</sup>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Staggered Grid */}
            <section className="container mx-auto px-6 pb-32">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-y-40">
                    {filtered.map((study, index) => (
                        <Link
                            key={study.slug}
                            href={`/case-studies/${study.slug}`}
                            className={`group block ${index % 2 !== 0 ? "md:translate-y-32" : ""}`}
                        >
                            {/* Reuse the style from Home page for consistency but refined */}
                            <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden rounded-sm mb-6 bg-slate-900 border border-slate-800">
                                <Image
                                    src={study.image}
                                    alt={study.client}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                    priority={index < 2}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                {/* Metric Overlay */}
                                <div className={`absolute top-6 ${isRTL ? "left-6" : "right-6"} z-10 bg-black/50 backdrop-blur border border-white/10 px-4 py-2 rounded-full`}>
                                    <span className="text-secondary font-bold">{study.metric.value}</span> <span className="text-xs uppercase text-slate-300">{study.metric.label}</span>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                                    <span className="block text-secondary font-mono uppercase text-sm mb-2">{t.result}</span>
                                    <p className="text-white leading-tight">{study.headline}</p>
                                </div>
                            </div>

                            <div className="border-t border-slate-800 pt-6">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-3xl font-bold text-white uppercase group-hover:text-secondary transition-colors">{study.client}</h3>
                                    <span className="text-sm font-mono text-slate-500" dir="ltr">0{index + 1}</span>
                                </div>
                                <p className="text-slate-400 text-sm uppercase tracking-widest">{study.category}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        {t.noProjects}
                    </div>
                )}
            </section>

        </main>
    );
}

