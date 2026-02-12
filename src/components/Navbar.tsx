"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const content = {
        ar: {
            links: [
                { name: "الرئيسية", href: "/" },
                { name: "من نحن", href: "/about" },
                { name: "خدماتنا", href: "/services" },
                { name: "أعمالنا", href: "/case-studies" }, // Changed href to match real page
                { name: "المدونة", href: "/blog" },
            ],
            contact: "تواصل معنا",
            langBtn: "EN"
        },
        en: {
            links: [
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Work", href: "/case-studies" },
                { name: "Blog", href: "/blog" },
            ],
            contact: "Let's Talk",
            langBtn: "عربي"
        }
    };

    const t = content[language];
    const isRTL = language === 'ar';

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-[#020617]/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"}`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-black text-xl"> S </div>
                        <span className="text-2xl font-bold text-white tracking-tight">
                            {language === 'ar' ? "سوبر" : "Super"}
                            <span className="font-light text-slate-400">
                                {language === 'ar' ? "ماركتير." : "Marketer."}
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-sm">
                        {t.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors ${pathname === link.href ? "text-white" : "text-slate-400"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + Mobile Trigger */}
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden md:inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase hover:bg-secondary transition-colors">
                            {t.contact}
                            <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
                        </Link>

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white font-mono text-xs hover:bg-white hover:text-black transition-all"
                            aria-label="Change Language"
                        >
                            {t.langBtn}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden w-12 h-12 bg-white/10 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black transition-all z-50"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#020617] z-40 flex items-center justify-center md:hidden">
                    <nav className="flex flex-col gap-8 text-center">
                        {t.links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-bold text-white hover:text-secondary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}

