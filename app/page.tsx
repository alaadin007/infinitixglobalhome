"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AIShowcase from "@/components/sections/AIShowcase";
import ClientShowcase from "@/components/sections/ClientShowcase";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const id = link.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <AIShowcase />
      <ClientShowcase />
      <ContactCTA />
    </>
  );
}