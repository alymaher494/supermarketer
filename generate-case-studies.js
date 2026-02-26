const fs = require('fs');

const lists = JSON.parse(fs.readFileSync('images_list.json', 'utf-8'));

const platformMap = {
    ar: { google: 'جوجل', meta: 'ميتا', snapchat: 'سناب شات', tiktok: 'تيك توك', stores: 'متاجر' },
    en: { google: 'Google', meta: 'Meta', snapchat: 'Snapchat', tiktok: 'TikTok', stores: 'Stores' }
};

const getBaseName = (filename) => filename.replace(/\.[^/.]+$/, '');

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || Math.random().toString(36).substring(7);

const generateData = (lang) => {
    const data = [];
    for (const [platform, files] of Object.entries(lists)) {
        for (const file of files) {
            if (file.startsWith('.')) continue;
            const baseName = getBaseName(file);
            const slug = (slugify(baseName) || Math.random().toString(36).substring(7)) + '-' + platform + '-' + Math.random().toString(36).substring(7);
            const imagePath = platform === 'stores'
                ? `/images/stores/${file}`
                : `/images/results/${platform}/${file}`;

            data.push({
                slug,
                client: baseName,
                category: platformMap[lang][platform],
                headline: lang === 'ar' ? `نتائج متميزة لـ ${baseName} عبر ${platformMap.ar[platform]}` : `Outstanding results for ${baseName} via ${platformMap.en[platform]}`,
                metric: { label: lang === 'ar' ? 'نمو' : 'Growth', value: 'High' },
                image: imagePath,
                challenge: lang === 'ar' ? 'تحقيق أهداف التسويق وسط منافسة قوية.' : 'Achieving marketing goals amidst strong competition.',
                solution: lang === 'ar' ? 'إطلاق حملات مخصصة واختبارات لزيادة الأداء بناءً على تحليل البيانات.' : 'Launching tailored campaigns and testing to increase performance based on data analysis.',
                results: [
                    { label: lang === 'ar' ? 'التحويلات' : 'Conversions', value: 'Excellent' },
                    { label: lang === 'ar' ? 'معدل النقر' : 'CTR', value: 'High' },
                    { label: lang === 'ar' ? 'وصول' : 'Reach', value: 'Maximized' }
                ],
                tags: [platformMap[lang][platform], "أعمال"]
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
console.log("case-studies.ts generated successfully.");
