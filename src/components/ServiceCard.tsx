"use client";
import { ArrowRight, ArrowLeft, CheckCircle2, XCircle, Zap } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
}

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    type: string;
    details: {
        problem: string;
        solution: string;
        outcomes: string[];
    };
    delay?: number;
}

export default function ServiceCard({ id, title, description, type, details, delay = 0 }: ServiceCardProps) {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

    const content = {
        ar: {
            problem: "المشكلة",
            solution: "الحل",
            outcomes: "النتائج",
            explore: "استكشف الخدمة"
        },
        en: {
            problem: "Problem",
            solution: "Solution",
            outcomes: "Outcomes",
            explore: "Explore Service"
        }
    };
    const t = content[language];

    useGSAP(() => {
        gsap.from(cardRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: delay,
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 85%",
            },
        });
    }, { scope: cardRef });

    return (
        <div
            ref={cardRef}
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-secondary/50 transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Service Type Badge */}
            <span className={`absolute top-6 ${isRTL ? "left-6" : "right-6"} text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full`}>
                {type}
            </span>

            <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400">{description}</p>
            </div>

            {/* Expanded Details on Hover/Interaction (Simulated by always showing problem/solution for now, or accordion) */}
            <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                    <div>
                        <span className="text-sm font-bold text-red-400 block">{t.problem}</span>
                        <p className="text-sm text-slate-300">{details.problem}</p>
                    </div>
                </div>

                <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <div>
                        <span className="text-sm font-bold text-secondary block">{t.solution}</span>
                        <p className="text-sm text-slate-300">{details.solution}</p>
                    </div>
                </div>

                <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">{t.outcomes}</span>
                    <div className="flex flex-wrap gap-2">
                        {details.outcomes.map((outcome, idx) => (
                            <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded flex items-center gap-1">
                                <Zap className="w-3 h-3 text-yellow-400" /> {outcome}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <Link
                href={`/services/${id}`}
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
            >
                {t.explore} <ArrowIcon className="w-4 h-4" />
            </Link>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-secondary/5 rounded-2xl blur-xl transition-opacity duration-500 -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>
    );
}

