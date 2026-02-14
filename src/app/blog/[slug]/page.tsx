"use client";
import React, { use } from "react";
import { blogData } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import MarqueeText from "@/components/ui/MarqueeText";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function BlogPostDetail({ params }: PageProps) {
    const { slug } = use(params);
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const post = blogData[language].find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const t = {
        ar: {
            back: "العودة للمدونة",
            share: "مشاركة",
            readTime: "5 دقائق قراءة",
            related: "مقالات ذات صلة",
            marquee: "رؤى • استراتيجية • نمو • نتائج • ",
            newsletter: "اشترك في نشرتي الإخبارية",
            news_desc: "احصل على أفضل استراتيجيات النمو الأسبوعية مباشرة في بريدك.",
            subscribe: "اشترك الآن"
        },
        en: {
            back: "Back to Blog",
            share: "Share",
            readTime: "5 min read",
            related: "Related Articles",
            marquee: "INSIGHTS • STRATEGY • GROWTH • RESULTS • ",
            newsletter: "Subscribe to My Newsletter",
            news_desc: "Get the best weekly growth strategies delivered directly to your inbox.",
            subscribe: "Subscribe Now"
        }
    }[language];

    return (
        <main className="min-h-screen pt-32 bg-primary" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-4 md:px-6">
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-colors">
                    <ArrowLeft size={18} className={isRTL ? "rotate-180" : ""} /> {t.back}
                </Link>

                <article className="max-w-4xl mx-auto pb-40">
                    {/* Category & Date */}
                    <div className="flex items-center gap-6 mb-8 text-sm font-mono uppercase tracking-widest text-slate-500">
                        <span className="text-secondary">{post.category}</span>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2 hidden sm:flex">
                            <Clock size={14} />
                            {t.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-[1.1] text-white">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-16 border-l-2 border-secondary pl-6 italic">
                        {post.excerpt}
                    </p>

                    {/* Featured Image */}
                    <div className="aspect-[21/9] relative rounded-3xl overflow-hidden mb-20 border border-slate-800">
                        <Image src={post.image!} alt={post.title} fill className="object-cover" priority />
                    </div>

                    {/* Placeholder Content */}
                    <div className="prose prose-invert prose-slate max-w-none text-slate-400 text-lg leading-relaxed space-y-8">
                        <p>
                            {isRTL
                                ? "في المشهد الرقمي المتطور اليوم، لم يعد تسويق الأداء مجرد خيار، بل أصبح شريان الحياة للعلامات التجارية الطموحة. مع استمرار تغير الخوارزميات وصعوبة جذب انتباه العملاء، تبرز الحاجة إلى استراتيجيات مبنية على البيانات والتحليل العميق."
                                : "In today's evolving digital landscape, performance marketing is no longer just an option—it's the lifeblood of ambitious brands. As algorithms continue to shift and capturing customer attention becomes harder, the need for data-driven strategies and deep analysis stands out."
                            }
                        </p>

                        <h2 className="text-3xl font-bold text-white pt-8">
                            {isRTL ? "لماذا تحتاج إلى إعادة التفكير في استراتيجيتك؟" : "Why You Need to Rethink Your Strategy?"}
                        </h2>

                        <p>
                            {isRTL
                                ? "المشكلة ليست في كمية الإعلانات التي تطلقها، بل في جودة البيانات التي تغذي بها هذه الحملات. الإسناد (Attribution) هو التحدي الأكبر الذي يواجه المعلنين حالياً، خاصة مع قيود الخصوصية المتزايدة."
                                : "The problem isn't the quantity of ads you run, but the quality of the data driving those campaigns. Attribution is the biggest challenge advertisers face today, especially with increasing privacy constraints."
                            }
                        </p>

                        <div className="bg-[#0B1221] p-8 rounded-3xl border border-slate-800 my-12">
                            <h3 className="text-xl font-bold text-white mb-4">
                                {isRTL ? "نصيحة الخبير:" : "Expert Tip:"}
                            </h3>
                            <p className="italic">
                                {isRTL
                                    ? "التتبع من جانب السيرفر (Server-Side Tracking) هو الحل الوحيد لضمان دقة البيانات وضمان أن خوارزميات المنصات تحصل على الإشارات الصحيحة للتحسين."
                                    : "Server-side tracking is the only way to ensure data accuracy and make sure platform algorithms get the right signals for optimization."
                                }
                            </p>
                        </div>

                        <p>
                            {isRTL
                                ? "الخطوات القادمة واضحة: ركز على اختبار الإبداع (Creative Testing) بشكل منهجي، ولا تعتمد فقط على الاستهداف الجماهيري. الجمهور سيأتي عندما يكون المحتوى مناسباً والرسالة قوية."
                                : "The next steps are clear: focus on systematic creative testing, and don't rely solely on audience targeting. The audience will come when the content is relevant and the message is strong."
                            }
                        </p>
                    </div>

                    {/* Share & Call to Action */}
                    <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-between items-center gap-8">
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 px-6 py-3 rounded-full transition-colors text-white">
                                <Share2 size={18} /> {t.share}
                            </button>
                        </div>
                        <Link href="/contact" className="btn-primary">
                            {isRTL ? "تحدث معي عن مشروعك" : "Talk to Me About Your Project"}
                        </Link>
                    </div>
                </article>
            </div>

            {/* Newsletter Section */}
            <section className="py-24 bg-slate-900/50 border-y border-slate-800">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t.newsletter}</h2>
                    <p className="text-slate-400 text-lg mb-10">{t.news_desc}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder={isRTL ? "بريدك الإلكتروني" : "Your email address"}
                            className="bg-primary border border-slate-800 px-6 py-4 rounded-xl flex-1 text-white focus:outline-none focus:border-secondary transition-colors"
                        />
                        <button className="bg-secondary text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors">
                            {t.subscribe}
                        </button>
                    </div>
                </div>
            </section>

            <MarqueeText text={t.marquee} />
        </main>
    );
}
