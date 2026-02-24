"use client";
import React from "react";
import CertificatesGallery from "@/components/CertificatesGallery";
import PageHeader from "@/components/ui/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function CertificatesPage() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const content = {
        ar: {
            subtitle: "التميز المهني",
            title: "جميع الشهادات المعتمدة",
            desc: "فخور بحصولي على اعتمادات دولية من كبرى المنصات والجامعات، مما يعكس الشغف المستمر بالتعلم والتطوير في مجالات التسويق وإدارة الأعمال."
        },
        en: {
            subtitle: "Professional Excellence",
            title: "All Certified Credentials",
            desc: "Proud to hold international certifications from major platforms and universities, reflecting a continuous passion for learning and development in marketing and business management."
        }
    };
    const t = content[language];

    return (
        <main className="min-h-screen bg-primary pb-20" dir={isRTL ? "rtl" : "ltr"}>
            <PageHeader
                subtitle={t.subtitle}
                title={t.title}
                description={t.desc}
            />

            <CertificatesGallery showTitle={false} />

            {/* CTA for credibility */}
            <section className="container mx-auto px-6 py-20 text-center border-t border-white/5">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    {isRTL ? "نحو تحقيق نتائج حقيقية دائماً" : "Always Striving for Real Results"}
                </h2>
                <div className="flex justify-center gap-4">
                    <div className="w-16 h-1 bg-secondary rounded-full" />
                    <div className="w-4 h-1 bg-secondary/30 rounded-full" />
                    <div className="w-4 h-1 bg-secondary/30 rounded-full" />
                </div>
            </section>
        </main>
    );
}
