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
    const row1 = useRef<HTMLDivElement>(null);
    const row2 = useRef<HTMLDivElement>(null);
    const isRTL = language === 'ar';

    const text = isRTL ? "أكثر من 50 شريك نجاح" : "Over 50 Success Partners";

    const firstHalf = logoFiles.slice(0, 25);
    const secondHalf = logoFiles.slice(25);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (row1.current) {
                gsap.to(row1.current, {
                    xPercent: -50,
                    duration: 120, // Slower for premium feel
                    ease: "none",
                    repeat: -1,
                });
            }

            if (row2.current) {
                // Reverse direction: start from -50% and go to 0
                gsap.fromTo(row2.current,
                    { xPercent: -50 },
                    {
                        xPercent: 0,
                        duration: 100, // Slightly different speed for variation
                        ease: "none",
                        repeat: -1,
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    const LogoBox = ({ logo, i }: { logo: string, i: number }) => (
        <div
            key={i}
            className="relative w-40 h-24 md:w-72 md:h-44 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center shrink-0 transition-all duration-500 hover:scale-105 hover:bg-white hover:border-white hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] group overflow-hidden p-8"
        >
            <Image
                src={`/logos/${logo}`}
                alt={`Partner Logo ${i}`}
                width={240}
                height={140}
                className="object-contain w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                sizes="(max-width: 768px) 160px, 280px"
            />
        </div>
    );

    return (
        <section className="py-24 bg-[#0a0a0a] overflow-hidden border-y border-white/5" dir="ltr">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <p className="text-secondary font-mono text-sm uppercase tracking-[0.3em] font-bold mb-2">
                            {isRTL ? "شركاء النجاح" : "Success Partners"}
                        </p>
                        <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            {text}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-12">
                {/* Row 1 */}
                <div className="flex gap-10 md:gap-14 items-center w-max" ref={row1}>
                    {[...firstHalf, ...firstHalf].map((logo, i) => (
                        <LogoBox key={`row1-${i}`} logo={logo} i={i} />
                    ))}
                </div>

                {/* Row 2 */}
                <div className="flex gap-10 md:gap-14 items-center w-max" ref={row2}>
                    {[...secondHalf, ...secondHalf].map((logo, i) => (
                        <LogoBox key={`row2-${i}`} logo={logo} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

