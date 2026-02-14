"use client";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const t = {
        ar: {
            title: "404 - الصفحة غير موجودة",
            desc: "يبدو أنك وصلت إلى مسار لا يؤدي إلى نمو. لنتحرك في الاتجاه الصحيح.",
            back: "العودة للرئيسية",
            contact: "تحدث معي"
        },
        en: {
            title: "404 - Page Not Found",
            desc: "It seems you've reached a path that doesn't lead to growth. Let's get you back on track.",
            back: "Back Home",
            contact: "Talk to Me"
        }
    }[language];

    return (
        <main className="min-h-screen bg-primary flex items-center justify-center px-6 overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="max-w-2xl w-full text-center relative z-10">
                <span className="text-secondary font-mono text-xl sm:text-2xl mb-8 block tracking-[0.2em] font-bold">ERROR // 404</span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                    {t.title}
                </h1>
                <p className="text-slate-400 text-xl md:text-2xl mb-12 font-light leading-relaxed">
                    {t.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/" className="btn-primary flex items-center justify-center gap-3">
                        <Home size={20} /> {t.back}
                    </Link>
                    <Link href="/contact" className="px-8 py-4 rounded-xl border border-slate-800 text-white font-bold hover:bg-white hover:text-black transition-all">
                        {t.contact}
                    </Link>
                </div>
            </div>
        </main>
    );
}
