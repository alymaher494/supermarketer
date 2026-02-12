"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ar');

    useEffect(() => {
        // Check local storage or default to Arabic
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang) {
            setLanguage(savedLang);
        }
        document.documentElement.dir = savedLang === 'en' ? 'ltr' : 'rtl';
        document.documentElement.lang = savedLang || 'ar';
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
        document.documentElement.lang = lang;
    };

    const toggleLanguage = () => {
        handleSetLanguage(language === 'ar' ? 'en' : 'ar');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
