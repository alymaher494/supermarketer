const fs = require('fs');

const lists = JSON.parse(fs.readFileSync('images_list.json', 'utf-8'));

const platformMap = {
    ar: { google: 'جوجل', meta: 'ميتا', snapchat: 'سناب شات', tiktok: 'تيك توك', stores: 'متاجر' },
    en: { google: 'Google', meta: 'Meta', snapchat: 'Snapchat', tiktok: 'TikTok', stores: 'Stores' }
};

const getBaseName = (filename) => filename.replace(/\.[^/.]+$/, '');

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || Math.random().toString(36).substring(7);

const getIndustry = (filename, lang) => {
    const name = filename.toLowerCase();

    if (name.includes('عود') || name.includes('عطور') || name.includes('ليجاسي') || name.includes('legacy') || name.includes('شمروخ') || name.includes('perfume')) {
        return lang === 'ar' ? 'قطاع العطور' : 'Perfumes Sector';
    }
    if (name.includes('عقار') || name.includes('ركائز') || name.includes('انج') || name.includes('عمار') || name.includes('املاك') || name.includes('اصول') || name.includes('ميراث') || name.includes('سهم') || name.includes('yasoob')) {
        return lang === 'ar' ? 'قطاع العقارات' : 'Real Estate Sector';
    }
    if (name.includes('طبي') || name.includes('عناية') || name.includes('مستوصف') || name.includes('عياد') || name.includes('inaya') || name.includes('medical')) {
        return lang === 'ar' ? 'القطاع الطبي' : 'Medical Sector';
    }
    if (name.includes('كلي') || name.includes('مدرس') || name.includes('مكتب') || name.includes('تعليم')) {
        return lang === 'ar' ? 'قطاع التعليم' : 'Education Sector';
    }
    if (name.includes('تارا') || name.includes('tara') || name.includes('ميسرا') || name.includes('misra') || name.includes('تجميل') || name.includes('بشرة') || name.includes('glory') || name.includes('agate') || name.includes('اسرار') || name.includes('asrar')) {
        return lang === 'ar' ? 'قطاع التجميل' : 'Beauty & Cosmetics Sector';
    }
    if (name.includes('بليل') || name.includes('ارابيكا') || name.includes('arabica') || name.includes('مطعم') || name.includes('كافي') || name.includes('اغذي') || name.includes('سكري') || name.includes('تمور') || name.includes('miniyum')) {
        return lang === 'ar' ? 'قطاع الأغذية والمشروبات' : 'F&B Sector';
    }
    if (name.includes('اتصالات') || name.includes('موبايل')) {
        return lang === 'ar' ? 'قطاع الاتصالات' : 'Telecommunications Sector';
    }
    if (name.includes('سيار') || name.includes('مركب')) {
        return lang === 'ar' ? 'قطاع السيارات' : 'Automotive Sector';
    }
    if (name.includes('ملابس') || name.includes('عبايا') || name.includes('ازياء') || name.includes('elegant')) {
        return lang === 'ar' ? 'قطاع الأزياء' : 'Fashion Sector';
    }
    if (name.includes('تسديد') || name.includes('سداد') || name.includes('قروض')) {
        return lang === 'ar' ? 'القطاع المالي' : 'Financial Services Sector';
    }
    if (name.includes('مناديل')) {
        return lang === 'ar' ? 'قطاع السلع الاستهلاكية' : 'FMCG Sector';
    }

    return lang === 'ar' ? 'تجارة إلكترونية' : 'E-commerce';
};

const generateData = (lang) => {
    const data = [];
    for (const [platform, files] of Object.entries(lists)) {
        for (const file of files) {
            if (file.startsWith('.')) continue;

            const baseName = getBaseName(file);
            const industryName = getIndustry(baseName, lang);

            const slug = (slugify(platform + '-' + industryName) || Math.random().toString(36).substring(7)) + '-' + Math.random().toString(36).substring(7);
            const imagePath = platform === 'stores'
                ? `/images/stores/${file}`
                : `/images/results/${platform}/${file}`;

            data.push({
                slug,
                client: industryName,
                category: platformMap[lang][platform],
                headline: lang === 'ar' ? `نتائج متميزة لعميل في ${industryName} عبر ${platformMap.ar[platform]}` : `Outstanding results for a client in ${industryName} via ${platformMap.en[platform]}`,
                metric: { label: lang === 'ar' ? 'نمو' : 'Growth', value: 'High' },
                image: imagePath,
                challenge: lang === 'ar' ? 'تحقيق أهداف التسويق وسط منافسة قوية في السوق.' : 'Achieving marketing goals amidst strong competition in the market.',
                solution: lang === 'ar' ? 'إطلاق حملات مخصصة واختبارات لزيادة الأداء بناءً على تحليل البيانات.' : 'Launching tailored campaigns and testing to increase performance based on data analysis.',
                results: [
                    { label: lang === 'ar' ? 'التحويلات' : 'Conversions', value: 'Excellent' },
                    { label: lang === 'ar' ? 'معدل النقر' : 'CTR', value: 'High' },
                    { label: lang === 'ar' ? 'وصول' : 'Reach', value: 'Maximized' }
                ],
                tags: [platformMap[lang][platform], industryName, "أعمال"]
            });
        }
    }
    return data;
};

const finalData = {
    ar: generateData('ar'),
    en: generateData('en')
};

const fileContent = `export const caseStudiesData = ${JSON.stringify(finalData, null, 4)};\n\nexport const industries = [
    "عقارات", "تجارة إلكترونية (عود، أزياء، أجهزة)", "عناية بالبشرة وتجميل",
    "طبي (عيادات ومستشفيات)", "أغذية ومشروبات (F&B)", "أثاث منزلي",
    "قانوني (مكاتب محاماة)", "برمجيات / SaaS", "ملابس نسائية",
    "حكومي / قطاع عام", "تعليم"
];\n`;

fs.writeFileSync('src/data/case-studies.ts', fileContent);
console.log("case-studies.ts generated successfully with protected client names.");
