"use client";
import React from "react";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface CaseStudyCardProps {
    slug: string;
    client: string;
    category: string;
    headline: string;
    metric: { label: string; value: string };
    image: string;
    delay?: number;
}

export default function CaseStudyCard({ slug, client, category, headline, metric, image }: CaseStudyCardProps) {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;
    const viewText = isRTL ? "عرض الحالة" : "View Case";

    return (
        <Link href={`/case-studies/${slug}`} className="block group">
            <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden rounded-sm mb-6 bg-slate-900 border border-slate-800">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-slate-800 transition-transform duration-1000 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Date/Tag Overlay */}
                <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span className="bg-secondary text-primary px-3 py-1 text-xs font-bold uppercase">{category}</span>
                </div>

                {/* Hover Reveal Content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4">
                        <ArrowIcon className="text-white w-6 h-6" />
                    </div>
                    <span className="text-white font-bold tracking-widest uppercase text-sm">{viewText}</span>
                </div>
            </div>

            <div className="flex justify-between items-start border-t border-slate-800 pt-4 group-hover:border-secondary transition-colors">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{client}</h3>
                    <p className="text-slate-500 text-sm">{headline}</p>
                </div>
                <div className={isRTL ? "text-left" : "text-right"}>
                    <span className="block text-xl font-bold text-white" dir="ltr">{metric.value}</span>
                    <span className="text-xs text-slate-500 uppercase">{metric.label}</span>
                </div>
            </div>
        </Link>
    );
}

