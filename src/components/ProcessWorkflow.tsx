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
                { num: "01", title: "التدقيق | والاستراتيجية", desc: "تدقيق الحسابات الإعلانية الحالية لاكتشاف التسريبات والفرص." },
                { num: "02", title: "اختبار | الإبداع", desc: "اختبار منهجي A/B للصور، والخطافات، والنصوص الإعلانية." },
                { num: "03", title: "التنفيذ | والتوسع", desc: "إطلاق الحملات عبر ميتا، تيك توك، سناب شات، وجوجل." },
                { num: "04", title: "التحسين | المستمر", desc: "تحسين مستمر للعائد على الإنفاق واقتصاديات الوحدة." },
            ],
            cta: "لا تتردد في التعاون مع الخبراء",
            btn: "لنبدأ الحديث"
        },
        en: {
            steps: [
                { num: "01", title: "Audit | & Strategy", desc: "Audit existing ad accounts to discover leaks and opportunities." },
                { num: "02", title: "Creative | Testing", desc: "Systematic A/B testing of visuals, hooks, and ad copy." },
                { num: "03", title: "Execution | & Scaling", desc: "Launching campaigns across Meta, TikTok, Snap, and Google." },
                { num: "04", title: "Continuous | Optimization", desc: "Continuous improvement of ROAS and Unit Economics." },
            ],
            cta: "Ready to Scale?",
            btn: "Let's Talk"
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

                <div className="text-center border-t border-slate-800 pt-12">
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

