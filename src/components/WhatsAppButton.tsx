"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "201025414469";
    const message = "مرحباً، أود الاستفسار عن خدماتك.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={32} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-gray-100">
                تواصل معنا عبر واتساب
            </span>
        </a>
    );
}
