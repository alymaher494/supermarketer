"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

    const content = {
        ar: {
            headline: { part1: "لنطور", part2: "رؤيتك." },
            cta: "ابدأ مشروعاً",
            menuTitle: "القائمة",
            connectTitle: "تواصل",
            links: [
                { name: "الرئيسية", href: "/" },
                { name: "عني", href: "/about" },
                { name: "خدماتي", href: "/services" },
                { name: "أعمالي", href: "/case-studies" },
                { name: "تواصل معي", href: "/contact" }
            ],
            social: [
                { name: "لينكد إن", href: "#" },
                { name: "انستجرام", href: "#" },
                { name: "تويتر (X)", href: "#" }
            ],
            copyright: `© ${new Date().getFullYear()} محمد السيد. جميع الحقوق محفوظة.`,
            privacy: "سياسة الخصوصية",
            terms: "شروط الخدمة"
        },
        en: {
            headline: { part1: "Let's Scale", part2: "Your Vision." },
            cta: "Start a Project",
            menuTitle: "Menu",
            connectTitle: "Connect",
            links: [
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Work", href: "/case-studies" },
                { name: "Contact", href: "/contact" }
            ],
            social: [
                { name: "LinkedIn", href: "#" },
                { name: "Instagram", href: "#" },
                { name: "Twitter (X)", href: "#" }
            ],
            copyright: `© ${new Date().getFullYear()} Mohamed Elsayed. All Rights Reserved.`,
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        }
    };

    const t = content[language];

    return (
        <footer className="bg-primary text-white pt-24 pb-8 border-t border-slate-800 relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
                            {t.headline.part1} <br />
                            <span className="text-secondary">{t.headline.part2}</span>
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 text-xl md:text-2xl border-b border-white/30 pb-2 hover:border-white hover:gap-6 transition-all"
                        >
                            {t.cta} <ArrowIcon />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-transparent text-outline-white-sm uppercase tracking-wide mb-6 text-2xl font-bold">{t.menuTitle}</h4>
                            <ul className="space-y-4 text-slate-400">
                                {t.links.map((link, i) => (
                                    <li key={i}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-transparent text-outline-white-sm uppercase tracking-wide mb-6 text-2xl font-bold">{t.connectTitle}</h4>
                            <ul className="space-y-4 text-slate-400">
                                {t.social.map((social, i) => (
                                    <li key={i}><a href={social.href} className="hover:text-white transition-colors">{social.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 text-sm text-slate-500">
                    <p>{t.copyright}</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">{t.privacy}</a>
                        <a href="#" className="hover:text-white">{t.terms}</a>
                    </div>
                </div>
            </div>

            {/* Big Background Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                <h1 className="text-[10vw] font-bold leading-none text-center whitespace-nowrap">
                    SUPER MARKETER
                </h1>
            </div>
        </footer>
    );
}

