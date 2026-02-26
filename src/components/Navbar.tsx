"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
                { name: "عني", href: "/about" },
                { name: "خدماتي", href: "/services" },
                { name: "أعمالي", href: "/case-studies" },
                { name: "الشهادات", href: "/certificates" },
                { name: "المدونة", href: "/blog" },
            ],
            contact: "تواصل الآن",
            langBtn: "EN"
        },
        en: {
            links: [
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Work", href: "/case-studies" },
                { name: "Certificates", href: "/certificates" },
                { name: "Blog", href: "/blog" },
            ],
            contact: "Contact Now",
            langBtn: "عربي"
        }
    };

    const t = content[language];
    const isRTL = language === 'ar';

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3 bg-[#161616]/80 backdrop-blur-md border-b border-white/5" : "py-4 md:py-6 bg-transparent"}`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-4 group">
                        <div className="relative w-60 h-60 flex items-center justify-center -my-8">
                            <Image
                                src="/logo.png"
                                alt="Mohamed El-Sayed Logo"
                                width={500}
                                height={500}
                                className="object-contain group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10 bg-white/5 px-10 py-4 rounded-full border border-white/10 backdrop-blur-sm">
                        {t.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg font-bold uppercase tracking-wider hover:text-secondary transition-colors ${pathname === link.href ? "text-white" : "text-slate-400"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + Mobile Trigger */}
                    <div className="flex items-center gap-6">
                        <Link href="/contact" className="hidden md:inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-base font-bold uppercase hover:bg-secondary transition-colors">
                            {t.contact}
                            <ArrowRight size={18} className={isRTL ? "rotate-180" : ""} />
                        </Link>

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white font-mono text-sm hover:bg-white hover:text-black transition-all"
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
                <div className="fixed inset-0 bg-[#161616] z-40 flex items-center justify-center md:hidden">
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
