"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
    const slider = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!slider.current) return;
            const totalWidth = slider.current.scrollWidth;
            const loop = gsap.to(slider.current, {
                x: -totalWidth / 2,
                duration: 60,
                ease: "none",
                repeat: -1,
            });
        }, slider);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-16 bg-[#020617] overflow-hidden border-t border-slate-900">
            <div className="container mx-auto px-6 mb-8 text-center md:text-left">
                <p className="text-secondary font-mono text-xs uppercase tracking-[0.2em] opacity-80">
                    Trusted by 50+ Partners
                </p>
            </div>

            <div className="flex gap-16 items-center w-max" ref={slider}>
                {/* Render twice for infinite loop */}
                {[...logoFiles, ...logoFiles].map((logo, i) => (
                    <div key={i} className="relative w-32 h-20 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 flex items-center justify-center shrink-0">
                        <Image
                            src={`/logos/${logo}`}
                            alt={`Partner Logo ${i}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 150px"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
