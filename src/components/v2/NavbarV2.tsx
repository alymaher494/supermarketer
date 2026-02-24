"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NavbarV2() {
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="relative z-50">
                    <Image src="/logo.png" alt="Logo" width={180} height={180} className="w-16 h-16 object-contain" />
                </Link>

                <nav className="hidden md:flex items-center gap-12">
                    {["WORK", "SERVICES", "CERTIFICATES", "BLOG"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(" ", "-")}`}
                            className="text-xs font-mono text-slate-400 hover:text-white tracking-[0.2em] transition-colors"
                        >
                            {isRTL ? (item === "WORK" ? "أعمالي" : item === "SERVICES" ? "خدماتي" : item === "CERTIFICATES" ? "الشهادات" : "المدونة") : item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-8">
                    <button
                        onClick={toggleLanguage}
                        className="text-xs font-mono text-secondary border border-secondary/20 px-4 py-2 rounded hover:bg-secondary hover:text-black transition-all"
                    >
                        {language === 'ar' ? "ENGLISH" : "عربي"}
                    </button>

                    <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-secondary transition-colors">
                        {isRTL ? "تواصل" : "LET'S TALK"}
                    </Link>
                </div>
            </div>
        </header>
    );
}
