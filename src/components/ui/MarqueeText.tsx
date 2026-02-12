"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

type Props = {
    text?: string;
};

export default function MarqueeText({ text }: Props) {
    const container = useRef(null);
    const row1 = useRef(null);
    const row2 = useRef(null);

    // Parse text into items if provided
    const defaultItems1 = ["Brand", "Strategy", "Development", "Management"];
    const defaultItems2 = ["DATA", "Solutions", "Production", "Business"];

    const items = text ? text.split("•").filter(Boolean).map(s => s.trim()) : defaultItems1;
    const items1 = items;
    const items2 = text ? items : defaultItems2;

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(row1.current, { xPercent: -50, ease: "none", duration: 20, repeat: -1 });
            gsap.fromTo(row2.current, { xPercent: -50 }, { xPercent: 0, ease: "none", duration: 20, repeat: -1 });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-24 bg-[#020617] overflow-hidden flex flex-col gap-4 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <div className="flex w-max whitespace-nowrap" ref={row1}>
                {[...items1, ...items1, ...items1, ...items1].map((t, i) => (
                    <span key={i} className="text-6xl md:text-8xl font-bold uppercase mr-12 text-transparent text-outline-white-sm hover:text-outline-white transition-all">
                        {t} <span className="text-secondary mx-4">_</span>
                    </span>
                ))}
            </div>
            <div className="flex w-max whitespace-nowrap" ref={row2}>
                {[...items2, ...items2, ...items2, ...items2].map((t, i) => (
                    <span key={i} className="text-6xl md:text-8xl font-bold uppercase mr-12 text-transparent text-outline-white-sm hover:text-outline-white transition-all">
                        {t} <span className="text-secondary mx-4">_</span>
                    </span>
                ))}
            </div>
        </section>
    );
}
