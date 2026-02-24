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

            {/* Masonry-Style Grid */}
            <section className="container mx-auto px-6 pb-32">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filtered.map((study, index) => (
                        <Link
                            key={study.slug}
                            href={`/case-studies/${study.slug}`}
                            className="break-inside-avoid group block"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-border-subtle group-hover:border-secondary transition-all duration-500">
                                <div className={`${index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[2/3]'} relative`}>
                                    <Image
                                        src={study.image}
                                        alt={study.client}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                        priority={index < 6}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                                    {/* Metric Overlay */}
                                    <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} z-10 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs`}>
                                        <span className="text-secondary font-bold">{study.metric.value}</span> <span className="uppercase text-slate-300">{study.metric.label}</span>
                                    </div>

                                    <div className={`absolute bottom-0 inset-x-0 w-full p-6 ${isRTL ? "text-right" : "text-left"}`}>
                                        <span className="block text-secondary font-mono uppercase text-[10px] mb-1">{t.result}</span>
                                        <p className="text-white text-sm font-medium leading-tight group-hover:text-secondary transition-colors">{study.headline}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 px-2">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-xl font-bold text-white uppercase">{study.client}</h3>
                                    <span className="text-[10px] font-mono text-slate-500">0{index + 1}</span>
                                </div>
                                <p className="text-slate-500 text-[10px] uppercase tracking-widest">{study.category}</p>
                            </div>
                        </Link>
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

