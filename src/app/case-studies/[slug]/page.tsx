"use client";
import React, { use } from "react";
import { caseStudiesData } from "@/data/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function CaseStudyDetail({ params }: PageProps) {
    const { slug } = use(params);
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const project = caseStudiesData[language].find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const t = {
        ar: {
            back: "العودة للأعمال",
            client: "العميل",
            challenge: "التحدي",
            solution: "الحل",
            tactics: "التكتيكات الرئيسية المنفذة:",
            cta: "هل أنت مستعد لتحقيق نتائج مماثلة؟",
            book: "احجز مكالمة استراتيجية",
            tactics_list: [
                "دمج هيكل الحملة للخروج من مرحلة التعلم بشكل أسرع.",
                "دورة اختبار إبداعية كل 7 أيام.",
                "تنفيذ التتبع من جانب السيرفر (CAPI) لتحسين الإسناد."
            ]
        },
        en: {
            back: "Back to Case Studies",
            client: "Client",
            challenge: "The Challenge",
            solution: "The Solution",
            tactics: "Key Tactics Implemented:",
            cta: "Ready to get similar results?",
            book: "Book Strategy Call",
            tactics_list: [
                "Consolidated campaign structure to exit learning phase faster.",
                "Creative iteration cycle every 7 days.",
                "Implemented server-side tracking (CAPI) for better attribution."
            ]
        }
    }[language];

    return (
        <main className="min-h-screen pt-32 pb-20 bg-primary" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-4">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={18} className={isRTL ? "rotate-180" : ""} /> {t.back}
                </Link>

                {/* Header */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="flex gap-4 mb-6">
                        <span className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                            {project.category}
                        </span>
                        {project.tags?.map(tag => (
                            <span key={tag} className="text-xs font-mono text-slate-400 border border-slate-700 px-3 py-1 rounded-full uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">{project.headline}</h1>
                    <p className="text-xl text-slate-400">
                        {t.client}: <span className="text-white font-semibold">{project.client}</span>
                    </p>
                </div>

                {/* Main Hero Image */}
                <div className="max-w-5xl mx-auto mb-20 aspect-video relative rounded-3xl overflow-hidden border border-slate-800">
                    <Image src={project.image} alt={project.client} fill className="object-cover" />
                </div>

                {/* Key Metrics Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {project.results.map((res, idx) => (
                        <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
                            <span className="block text-slate-500 text-sm uppercase tracking-wider mb-2">{res.label}</span>
                            <div className="text-3xl md:text-4xl font-bold text-white">
                                {res.value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto space-y-16">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{t.challenge}</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {project.challenge}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{t.solution}</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            {project.solution}
                        </p>
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <h3 className="font-semibold text-white mb-4">{t.tactics}</h3>
                            <ul className="space-y-3">
                                {t.tactics_list.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-slate-800 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-white">{t.cta}</h2>
                        <Link href="/contact" className="btn-primary inline-block">
                            {t.book}
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
