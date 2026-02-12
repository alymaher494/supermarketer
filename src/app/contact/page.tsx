"use client";
import PageHeader from "@/components/ui/PageHeader";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-primary">
            <div className="pt-40 container mx-auto px-6 border-b border-slate-800 pb-12 mb-20">
                <h1 className="text-[12vw] md:text-[10vw] font-bold font-heading uppercase leading-none tracking-tighter text-white mb-8">
                    Let's Talk
                </h1>
            </div>

            <div className="container mx-auto px-6 pb-32 grid lg:grid-cols-2 gap-20">
                <div className="space-y-16">
                    <div>
                        <h3 className="text-xl text-slate-400 mb-6 uppercase tracking-widest">Contact Details</h3>
                        <div className="space-y-8 text-2xl md:text-3xl font-light text-white">
                            <a href="mailto:hello@supermarketer.net" className="block hover:text-secondary w-fit transition-colors">hello@supermarketer.net</a>
                            <a href="tel:+966500000000" className="block hover:text-secondary w-fit transition-colors">+966 5X XXX XXXX</a>
                            <p className="text-slate-500">Riyadh • Cairo</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl text-slate-400 mb-6 uppercase tracking-widest">Socials</h3>
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
                            <label className="text-sm uppercase tracking-widest text-slate-500">Your Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none placeholder-slate-700" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-slate-500">Company</label>
                            <input type="text" className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none placeholder-slate-700" placeholder="Acme Inc." />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-widest text-slate-500">Email Address</label>
                        <input type="email" className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none placeholder-slate-700" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-widest text-slate-500">Interest</label>
                        <select className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none appearance-none cursor-pointer">
                            <option className="bg-primary text-slate-400">Strategy Audit</option>
                            <option className="bg-primary text-slate-400">Performance Marketing</option>
                            <option className="bg-primary text-slate-400">Consultation</option>
                            <option className="bg-primary text-slate-400">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-widest text-slate-500">Message</label>
                        <textarea rows={4} className="w-full bg-transparent border-b border-slate-700 py-4 text-xl text-white focus:border-secondary focus:outline-none transition-colors rounded-none placeholder-slate-700" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button type="submit" className="group flex items-center gap-4 text-2xl font-bold uppercase hover:text-secondary transition-colors mt-12">
                        Send Message <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-black transition-all"><ArrowRight /></div>
                    </button>
                </form>
            </div>
        </main>
    );
}
