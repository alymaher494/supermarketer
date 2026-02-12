"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialSlider() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const [current, setCurrent] = useState(0);

    const testimonialsData = {
        ar: [
            {
                id: 1,
                text: "محمد حول استراتيجية الاستحواذ لدينا. النتائج تتحدث عن نفسها.",
                author: "أحمد ك.",
                role: "الرئيس التنفيذي، تيك ستارت"
            },
            {
                id: 2,
                text: "مزيج نادر من الاستراتيجية الإبداعية والتنفيذ الموجه بالبيانات.",
                author: "سارة م.",
                role: "مديرة التسويق"
            },
            {
                id: 3,
                text: "ضاعف إيراداتنا 3 مرات في 4 أشهر فقط. أنصح به بشدة.",
                author: "عمر ي.",
                role: "مؤسس متجر إلكتروني"
            }
        ],
        en: [
            {
                id: 1,
                text: "Moe turned our acquisition strategy around. The results speak for themselves.",
                author: "Ahmed K.",
                role: "CEO, TechStart"
            },
            {
                id: 2,
                text: "A rare blend of creative strategy and data-driven execution.",
                author: "Sarah M.",
                role: "Marketing Director"
            },
            {
                id: 3,
                text: "Tripled our revenue in just 4 months. Highly recommended.",
                author: "Omar Y.",
                role: "Founder, E-com Store"
            }
        ]
    };

    const testimonials = testimonialsData[language];
    const title = isRTL ? "ماذا يقول العملاء" : "What Clients Say";

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20 relative" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16">{title}</h2>

                <div className="relative max-w-3xl mx-auto h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl relative"
                        >
                            <Quote className={`w-12 h-12 text-secondary/20 absolute top-6 ${isRTL ? "right-6" : "left-6"}`} />
                            <p className="text-xl md:text-2xl text-slate-300 mb-6 italic relative z-10">
                                "{testimonials[current].text}"
                            </p>
                            <div>
                                <h4 className="font-bold text-white">{testimonials[current].author}</h4>
                                <span className="text-sm text-slate-500">{testimonials[current].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    {/* Left Button (Physical Left) */}
                    <button
                        onClick={isRTL ? next : prev}
                        className={`absolute top-1/2 -translate-y-1/2 p-3 bg-slate-800 rounded-full hover:bg-secondary hover:text-primary transition-all left-0 md:-left-12`}
                    >
                        <ChevronLeft />
                    </button>

                    {/* Right Button (Physical Right) */}
                    <button
                        onClick={isRTL ? prev : next}
                        className={`absolute top-1/2 -translate-y-1/2 p-3 bg-slate-800 rounded-full hover:bg-secondary hover:text-primary transition-all right-0 md:-right-12`}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

