"use client";
import PageHeader from "@/components/ui/PageHeader";
import { Mail, MapPin, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

    const content = {
        ar: {
            title: "لنتحدث",
            detailsLabel: "بيانات التواصل",
            socialsLabel: "تواصل معنا",
            form: {
                name: "الاسم",
                company: "الشركة",
                email: "البريد الإلكتروني",
                interest: "الاهتمام",
                message: "الرسالة",
                btn: "إرسال الرسالة",
                options: ["تدقيق استراتيجي", "تسويق الأداء", "استشارة", "أخرى"],
                placeholders: {
                    name: "الاسم الكامل",
                    company: "اسم الشركة",
                    email: "email@example.com",
                    message: "أخبرنا عن مشروعك..."
                }
            },
            info: {
                location: "الرياض • القاهرة"
            }
        },
        en: {
            title: "Let's Talk",
            detailsLabel: "Contact Details",
            socialsLabel: "Socials",
            form: {
                name: "Your Name",
                company: "Company",
                email: "Email Address",
                interest: "Interest",
                message: "Message",
                btn: "Send Message",
                options: ["Strategy Audit", "Performance Marketing", "Consultation", "Other"],
                placeholders: {
                    name: "John Doe",
                    company: "Acme Inc.",
                    email: "john@example.com",
                    message: "Tell us about your project..."
                }
            },
            info: {
                location: "Riyadh • Cairo"
            }
        }
    };
    const t = content[language];

    return (
        <main className="min-h-screen bg-primary" dir={isRTL ? "rtl" : "ltr"}>
            <div className="pt-40 container mx-auto px-6 border-b border-slate-800 pb-12 mb-20">
                <h1 className="text-[12vw] md:text-[10vw] font-bold font-heading uppercase leading-none tracking-tighter text-white mb-8">
                    {t.title}
                </h1>
            </div>

            <div className="container mx-auto px-6 pb-32 grid lg:grid-cols-2 gap-20">
                <div className="space-y-16">
                    <div>
                        <h3 className="text-xl text-slate-400 mb-6 uppercase tracking-widest">{t.detailsLabel}</h3>
                        <div className="space-y-8 text-2xl md:text-3xl font-light text-white">
                            <a href="mailto:hello@supermarketer.net" className="block hover:text-secondary w-fit transition-colors">hello@supermarketer.net</a>
                            <a href="tel:+966500000000" className="block hover:text-secondary w-fit transition-colors" dir="ltr">+966 5X XXX XXXX</a>
                            <p className="text-slate-500">{t.info.location}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl text-slate-400 mb-6 uppercase tracking-widest">{t.socialsLabel}</h3>
                        <div className="flex flex-col gap-4 text-xl">
                            <a href="#" className="border-b border-slate-800 py-2 w-fit hover:border-white transition-colors">LinkedIn ↗</a>
                            <a href="#" className="border-b border-slate-800 py-2 w-fit hover:border-white transition-colors">Instagram ↗</a>
                            <a href="#" className="border-b border-slate-800 py-2 w-fit hover:border-white transition-colors">Twitter (X) ↗</a>
                        </div>
                    </div>
                </div>

                <form className="space-y-8 mt-8 lg:mt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-slate-500">{t.form.name}</label>
                            <input type="text" className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none placeholder-slate-700" placeholder={t.form.placeholders.name} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-slate-500">{t.form.company}</label>
                            <input type="text" className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none placeholder-slate-700" placeholder={t.form.placeholders.company} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-widest text-slate-500">{t.form.email}</label>
                        <input type="email" className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none placeholder-slate-700" placeholder={t.form.placeholders.email} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-widest text-slate-500">{t.form.interest}</label>
                        <select className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none appearance-none cursor-pointer">
                            {t.form.options.map((opt, i) => (
                                <option key={i} className="bg-primary text-slate-400">{opt}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-widest text-slate-500">{t.form.message}</label>
                        <textarea rows={4} className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none placeholder-slate-700" placeholder={t.form.placeholders.message}></textarea>
                    </div>

                    <button type="submit" className="group flex items-center gap-4 text-2xl font-bold uppercase hover:text-secondary transition-colors mt-12">
                        {t.form.btn} <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-black transition-all"><ArrowIcon /></div>
                    </button>
                </form>
            </div>
        </main>
    );
}

