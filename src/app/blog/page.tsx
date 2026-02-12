"use client";
import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import BlogSection from "@/components/BlogSection";
import MarqueeText from "@/components/ui/MarqueeText";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-primary">
            <PageHeader
                subtitle="Insights & News"
                title="Thinking That Drives Growth"
                description="Deep dives into performance marketing, data analytics, and the future of digital commerce."
            />

            {/* We can reuse the BlogSection component or create a more extensive grid here. 
          For now, reusing BlogSection but modifying it to show all posts if needed, 
          or just creating a similar grid structure here if BlogSection is limited.
          The current BlogSection is designed as a section. Let's make a dedicated grid here. 
      */}

            <div className="pt-0 pb-32">
                {/* Reusing the logic from BlogSection for consistency but without the section wrapper if preferred, 
             or simply including BlogSection here. 
             Since BlogSection has its own container/padding, let's just use it but maybe we want MORE posts here eventually.
             For now, let's render the BlogSection which shows the 'Latest Insights'.
         */}
                <BlogSection />
            </div>

            <MarqueeText text="READ • LEARN • EXECUTE • GROW •" />
        </main>
    );
}
