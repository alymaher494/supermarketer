"use client";
import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import BlogSection from "@/components/BlogSection";
import MarqueeText from "@/components/ui/MarqueeText";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const content = {
        ar: {
            subtitle: "رؤى وأخبار",
            title: "أفكار تقود النمو",
            desc: "مقالات متعمقة في تسويق الأداء، تحليلات البيانات، ومستقبل التجارة الرقمية.",
            marquee: "اقرأ • تعلم • نفذ • انمو • "
        },
        en: {
            subtitle: "Insights & News",
            title: "Thinking That Drives Growth",
            desc: "Deep dives into performance marketing, data analytics, and the future of digital commerce.",
            marquee: "READ • LEARN • EXECUTE • GROW • "
        }
    };
    const t = content[language];

    return (
        <main className="min-h-screen bg-primary" dir={isRTL ? "rtl" : "ltr"}>
            <PageHeader
                subtitle={t.subtitle}
                title={t.title}
                description={t.desc}
            />

            {/* We can reuse the BlogSection component or create a more extensive grid here. 
          For now, reusing BlogSection but modifying it to show all posts if needed, 
          or just creating a similar grid structure here if BlogSection is limited.
          The current BlogSection is designed as a section. Let's make a dedicated grid here. 
      */}

            <div className="pt-0 pb-32">
                {/* Reusing the logic from BlogSection for consistency but without the section wrapper if preferred, 
             or simply including BlogSection here. 
             Since BlogSection has its own container/padding, let's just use it but maybe we want MORE posts here eventually.
             For now, let's render the BlogSection which shows the 'Latest Insights'.
             Ideally, BlogSection should be refactored to allow props for showing 'all' vs 'latest', 
             but for now default behavior is acceptable as per instructions to stick to structure.
         */}
                <BlogSection />
            </div>

            <MarqueeText text={t.marquee} />
        </main>
    );
}

