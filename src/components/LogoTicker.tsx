"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Generate array of logo paths (1-51)
// Mixing jpg and png based on file list
const logoFiles = [
    "1.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.png", "9.png", "10.png",
    "11.png", "12.jpeg", "13.jpg", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png",
    "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png",
    "31.png", "32.png", "33.png", "34.png", "35.png", "36.png", "37.png", "38.png", "39.png", "40.png",
    "41.png", "42.png", "43.png", "44.png", "45.png", "46.png", "47.png", "48.png", "49.png", "50.png", "51.png"
];

export default function LogoTicker() {
    const { language } = useLanguage();
    const slider = useRef<HTMLDivElement>(null);
    const isRTL = language === 'ar';

    const text = isRTL ? "أكثر من 50 شريك نجاح" : "Over 50 Success Partners";

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!slider.current) return;

            // For infinite marquee, we move by half since we duplicated the items
            gsap.to(slider.current, {
                xPercent: -50,
                duration: 40,
                ease: "none",
                repeat: -1,
            });
        }, slider);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 bg-[#020617] overflow-hidden border-y border-slate-900" dir="ltr">
            <div className={`container mx-auto px-6 mb-12 text-center ${isRTL ? "md:text-right" : "md:text-left"}`}>
                <p className="text-secondary font-mono text-sm uppercase tracking-[0.3em] font-bold">
                    {text}
                </p>
            </div>

            <div className="flex gap-12 md:gap-20 items-center w-max" ref={slider}>
                {/* Render twice for infinite loop */}
                {[...logoFiles, ...logoFiles].map((logo, i) => (
                    <div key={i} className="relative w-28 h-12 md:w-40 md:h-20 grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 flex items-center justify-center shrink-0">
                        <Image
                            src={`/logos/${logo}`}
                            alt={`Partner Logo ${i}`}
                            fill
                            className="object-contain"
                            sizes="200px"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

