'use client';

import { Instagram, TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-lg">Covapadi</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
           Covapadi is a microinsurance distribution platform making gadget protection more accessible in Nigeria.

            </p>
          </div>

          {/* Social Icons - Left aligned on mobile, right on desktop */}
          <div className="md:text-right">
            <div className="flex gap-4 md:justify-end">
              <a href="#instagram" className="text-primary-foreground hover:text-accent transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#tiktok" className="text-primary-foreground hover:text-accent transition">
                <TrendingUp className="w-5 h-5" />
              </a>
              <a href="#linkedin" className="text-primary-foreground hover:text-accent transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 my-8"></div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a href="#home" className="text-primary-foreground/70 hover:text-primary-foreground transition text-sm">Home</a>
          <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition text-sm">About</a>
          <a href="#features" className="text-primary-foreground/70 hover:text-primary-foreground transition text-sm">Features</a>
          <a href="#faq" className="text-primary-foreground/70 hover:text-primary-foreground transition text-sm">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
