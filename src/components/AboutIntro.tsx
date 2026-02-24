"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutIntro() {
    const { language } = useLanguage();
    const container = useRef(null);

    const isRTL = language === 'ar';

    const content = {
        ar: {
            label: "من أنا",
            title: <>متخصص تسويق <br />إلكتروني وإعلانات ممولة</>,
            p1: <>أنا متخصص في التسويق الإلكتروني وتسويق الأداء، بشتغل على <strong className="text-white font-medium">إدارة الحملات الإعلانية</strong> بطريقة عملية تهدف لزيادة المبيعات وتقليل تكلفة العميل.</>,
            p2: <>اشتغلت مع شركات في مصر والخليج في مجالات زي <strong className="text-white">التجارة الإلكترونية، العقارات، والعيادات</strong>، وساعدتهم يحوّلوا الإعلان من تكلفة لاستثمار مربح.</>,
            p3: "ما بهتمش بعدد اللايكات أو المشاهدات، اللي يهمني هو: هل الإعلان دخل مبيعات؟ وهل التكلفة مناسبة؟",
            link: "اقرأ قصتي الكاملة"
        },
        en: {
            label: "Who I Am",
            title: <>Paid Ads &<br />Digital Marketing Specialist</>,
            p1: <>I specialize in digital marketing and paid ads, managing <strong className="text-white font-medium">ad campaigns</strong> with a practical approach focused on increasing sales and reducing cost per customer.</>,
            p2: <>I've worked with companies across Egypt & the Gulf in <strong className="text-white">e-commerce, real estate, and healthcare</strong>, helping them turn ad spend from a cost into a profitable investment.</>,
            p3: "I don't care about likes or views. What matters to me is: did the ad generate sales? And is the cost right?",
            link: "Read My Full Story"
        }
    };

    const t = content[language];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Line animation
            gsap.from(".intro-line", {
                scaleY: 0,
                duration: 1.2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                }
            });

            // Text animation
            gsap.from(".intro-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 90%",
                    once: true
                }
            });
        }, container);

        return () => ctx.revert();
    }, [language]);

    return (
        <section ref={container} className="py-24 md:py-32 container mx-auto px-6" dir={isRTL ? "rtl" : "ltr"}>
            <div className="grid lg:grid-cols-12 gap-12">
                {/* Left: Sticky Title */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32">
                        <span className="text-secondary font-mono uppercase tracking-widest text-sm mb-4 block">{t.label}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight intro-text">
                            {t.title}
                        </h2>
                    </div>
                </div>

                {/* Right: Content with Border Line */}
                <div className={`lg:col-span-8 relative ${isRTL ? "pr-10 md:pr-24 border-r" : "pl-10 md:pl-24 border-l"} border-border-subtle`}>
                    {/* Animated overlay border */}
                    <div className={`absolute top-0 ${isRTL ? "right-[-1px]" : "left-[-1px]"} w-[2px] h-full bg-secondary origin-top intro-line transform transition-transform duration-1000`} />

                    <div className="space-y-8 text-xl md:text-2xl text-white font-normal leading-relaxed">
                        <p className="intro-text">
                            {t.p1}
                        </p>
                        <p className="intro-text">
                            {t.p2}
                        </p>
                        <p className="intro-text">
                            {t.p3}
                        </p>

                        <div className="pt-8">
                            <Link href="/about" className="inline-flex items-center gap-3 text-white border-b border-secondary pb-1 hover:text-secondary transition-colors">
                                {t.link} <ArrowRight size={18} className={isRTL ? "rotate-180" : ""} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
