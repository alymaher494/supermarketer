"use client";
import PageHeader from "@/components/ui/PageHeader";
import CaseStudyCard from "@/components/CaseStudyCard"; // We'll update the card styling too later if needed, but the layout changes heavily here
import { caseStudiesData } from "@/data/case-studies";
import { useState } from "react";
import { ArrowDown } from "lucide-react";

const allCategories = ["All", ...Array.from(new Set(caseStudiesData.map(c => c.category)))];

export default function CaseStudiesPage() {
    const [activeCat, setActiveCat] = useState("All");

    const filtered = activeCat === "All"
        ? caseStudiesData
        : caseStudiesData.filter(c => c.category === activeCat);

    return (
        <main className="min-h-screen bg-primary">
            <PageHeader
                subtitle="Selected Works"
                title="Results That Scale"
                description="A curated collection of our most impactful campaigns, audits, and strategic overhauls."
            />

            {/* Filters */}
            <div className="container mx-auto px-6 mb-20 sticky top-24 z-30 mix-blend-difference">
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-xl md:text-2xl font-bold uppercase">
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

            {/* Staggered Grid */}
            <section className="container mx-auto px-6 pb-32">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-y-40">
                    {filtered.map((study, index) => (
                        <div key={study.slug} className={`group ${index % 2 !== 0 ? "md:translate-y-32" : ""}`}>
                            {/* Reuse the style from Home page for consistency but refined */}
                            <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden rounded-sm mb-6 bg-slate-900 border border-slate-800">
                                <div className="absolute inset-0 bg-slate-800 transition-transform duration-1000 ease-out group-hover:scale-105" />
                                {/* Metric Overlay */}
                                <div className="absolute top-6 right-6 z-10 bg-black/50 backdrop-blur border border-white/10 px-4 py-2 rounded-full">
                                    <span className="text-secondary font-bold">{study.metric.value}</span> <span className="text-xs uppercase text-slate-300">{study.metric.label}</span>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="block text-secondary font-mono uppercase text-sm mb-2">Result</span>
                                    <p className="text-white leading-tight">{study.headline}</p>
                                </div>
                            </div>

                            <div className="border-t border-slate-800 pt-6">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-3xl font-bold text-white uppercase group-hover:text-secondary transition-colors">{study.client}</h3>
                                    <span className="text-sm font-mono text-slate-500">0{index + 1}</span>
                                </div>
                                <p className="text-slate-400 text-sm uppercase tracking-widest">{study.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        No projects found in this category.
                    </div>
                )}
            </section>

        </main>
    );
}
