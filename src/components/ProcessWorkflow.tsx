"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessWorkflow() {
    const { language } = useLanguage();
    const container = useRef(null);
    const isRTL = language === 'ar';

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".process-item",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    const content = {
        ar: {
            steps: [
                { num: "01", title: "التحليل | والتخطيط", desc: "بنحلل الحسابات الإعلانية والتتبع عشان نعرف فين المشكلة وفين الفرصة." },
                { num: "02", title: "اختبار | الإعلانات", desc: "بنجرب إعلانات مختلفة ونشوف بالأرقام إيه اللي بيجيب مبيعات." },
                { num: "03", title: "التشغيل | والتوسع", desc: "بنشغل الحملات على فيسبوك، جوجل، تيك توك، وسناب شات ونكبر الناجح." },
                { num: "04", title: "التحسين | المستمر", desc: "بنوقف الخسران، نكرر الناجح، ونحسن النتائج باستمرار." },
            ],
            cta: "محتاج تزوّد مبيعاتك وتقلل تكلفة الإعلان؟",
            btn: "ابدأ دلوقتي"
        },
        en: {
            steps: [
                { num: "01", title: "Analysis | & Planning", desc: "We analyze ad accounts and tracking to find where the problem is and where the opportunity lies." },
                { num: "02", title: "Ad | Testing", desc: "We test different ads and see by the numbers what actually generates sales." },
                { num: "03", title: "Launch | & Scale", desc: "We run campaigns on Facebook, Google, TikTok, and Snapchat — scaling what works." },
                { num: "04", title: "Continuous | Optimization", desc: "We stop the losers, repeat the winners, and keep improving results." },
            ],
            cta: "Need to increase sales and reduce ad costs?",
            btn: "Get Started Now"
        }
    };

    const t = content[language];

    return (
        <section ref={container} className="process-section py-32 bg-primary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {t.steps.map((step, i) => (
                        <div key={i} className="process-item text-center group">
                            <span className="inline-block text-2xl font-bold text-slate-700 mb-8 font-mono group-hover:text-secondary transition-colors">
                                {'{'} {step.num} {'}'}
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                                {step.title.split("|").map((part, idx) => (
                                    <React.Fragment key={idx}>
                                        {part} {idx === 0 && step.title.includes("|") && <br />}
                                    </React.Fragment>
                                ))}
                            </h3>
                            <p className="text-slate-400 leading-relaxed opacity-80">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center border-t border-border-subtle pt-12">
                    <p className="text-xl text-white font-medium inline-flex items-center gap-4 flex-col md:flex-row">
                        {t.cta}
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase hover:bg-secondary transition-colors">
                            {t.btn}
                            <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

