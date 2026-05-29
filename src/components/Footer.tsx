import React, { useState } from "react";
import { Twitter, Linkedin, Facebook, Shield, Heart, ArrowRight, Loader2, Calendar, ClipboardX, Check } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenLogIn: () => void;
  onOpenSignUp: () => void;
}

export default function Footer({ onScrollToSection, onOpenLogIn, onOpenSignUp }: FooterProps) {
  const [showDemo, setShowDemo] = useState(false);
  const [demoState, setDemoState] = useState<"form" | "loading" | "success">("form");
  const [demoDate, setDemoDate] = useState("");
  const [demoName, setDemoName] = useState("");

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoState("loading");
    setTimeout(() => {
      setDemoState("success");
    }, 1200);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand Information Column */}
        <div className="md:col-span-4 flex flex-col gap-4.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-blue-500/50 flex items-center justify-center relative">
              <svg className="w-4.5 h-4.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 12V4h8m8 8v8h-8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">Worklynk</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            The simplest way to automate your workflows and connect your favorite apps. Increase efficiency without writing a line of code.
          </p>
          <div className="flex items-center gap-2.5 mt-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg border border-slate-900 bg-slate-950 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-800 transition-colors"
              aria-label="Twitter Social link"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg border border-slate-900 bg-slate-950 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-800 transition-colors"
              aria-label="LinkedIn Social link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg border border-slate-900 bg-slate-950 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-800 transition-colors"
              aria-label="Facebook Social link"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Column 1: PRODUCT */}
        <div className="md:col-span-2 text-left">
          <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">Product</h4>
          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => onScrollToSection("features")}
              className="text-left text-xs text-slate-405 hover:text-white transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => onScrollToSection("integrations")}
              className="text-left text-xs text-slate-405 hover:text-white transition-colors cursor-pointer"
            >
              Integrations
            </button>
            <button
              onClick={() => onScrollToSection("how-it-works")}
              className="text-left text-xs text-slate-405 hover:text-white transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => onScrollToSection("pricing")}
              className="text-left text-xs text-slate-405 hover:text-white transition-colors cursor-pointer"
            >
              Pricing
            </button>
          </div>
        </div>

        {/* Links Column 2: RESOURCES */}
        <div className="md:col-span-2 text-left">
          <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">Resources</h4>
          <div className="flex flex-col gap-2.5 text-xs text-slate-400">
            <a href="#tutorials" className="hover:text-white transition-colors">Tutorials</a>
            <a href="#templates" className="hover:text-white transition-colors font-medium">Templates Hub</a>
            <a href="#help-center" className="hover:text-white transition-colors">Help Center</a>
            <a href="#blog" className="hover:text-white transition-colors">Platform Blog</a>
          </div>
        </div>

        {/* Links Column 3: COMPANY */}
        <div className="md:col-span-2 text-left">
          <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">Company</h4>
          <div className="flex flex-col gap-2.5 text-xs text-slate-400">
            <a href="#about-us" className="hover:text-white transition-colors">About Us</a>
            <a href="#careers" className="hover:text-white transition-colors font-medium">Careers <span className="bg-blue-600/10 text-blue-400 text-[8px] px-1 py-0.5 rounded font-mono ml-1">HIRING</span></a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Links Column 4: GET IN TOUCH */}
        <div className="md:col-span-2 text-left flex flex-col items-start gap-4">
          <div>
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-1 text-xs">
              <span className="text-slate-400">Email:</span>
              <a href="mailto:hello@worklynk.ai" className="font-semibold text-white hover:text-blue-400 transition-colors">
                hello@worklynk.ai
              </a>
            </div>
          </div>
          <button
            onClick={() => {
              setDemoState("form");
              setShowDemo(true);
            }}
            className="px-4.5 py-2 whitespace-nowrap bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 text-slate-300 text-[11px] font-semibold rounded-lg transition-all flex items-center gap-1 cursor-pointer"
          >
            Book a Demo
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-slate-500">
          © 2026 Worklynk. All rights reserved. Registered Trademark.
        </p>
        <span className="flex items-center gap-1.5 text-[10.5px] text-slate-650">
          Made for engineers and builders worldwide. <Shield className="w-3.5 h-3.5 text-emerald-500" /> Secure Sandbox Verified
        </span>
      </div>

      {/* Book a Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div onClick={() => setShowDemo(false)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-sm bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6">
            {demoState === "form" && (
              <form onSubmit={handleDemoSubmit} className="flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-display font-bold text-white tracking-tight">Schedule Your Worklynk Demo</h3>
                  <p className="text-[10.5px] text-slate-400 mt-1">Book a personalized, 15-minute screen-share on automating your stacks.</p>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-450 font-bold uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    required-placeholder="Full Name"
                    value={demoName}
                    onChange={(e) => setDemoName(e.target.value)}
                    className="bg-slate-900 border border-slate-850 text-xs rounded-xl p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-450 font-bold uppercase tracking-wider">Date Preference</label>
                  <input
                    type="date"
                    required
                    value={demoDate}
                    onChange={(e) => setDemoDate(e.target.value)}
                    className="bg-slate-900 border border-slate-850 text-xs rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2.5 mt-2">
                  <button
                    type="button"
                    onClick={() => setShowDemo(false)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-850 rounded-lg text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Confirm Booking <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {demoState === "loading" && (
              <div className="py-8 flex flex-col items-center">
                <Loader2 className="w-8 h-8 text-blue-400 animate-spin mb-3" />
                <p className="text-xs font-semibold text-white">Scheduling slot...</p>
              </div>
            )}

            {demoState === "success" && (
              <div className="py-4 text-center flex flex-col items-center">
                <Check className="w-10 h-10 text-emerald-400 bg-emerald-500/15 rounded-full p-2 mb-3.5" />
                <h3 className="text-sm font-bold text-white">Demo Scheduled successfully!</h3>
                <p className="text-[11px] text-slate-400 mt-2 max-w-xs">
                  We've successfully synced with your calendar. A confirmation link and invite notes have been dispatched for <span className="text-blue-400 font-semibold">{demoDate}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setShowDemo(false)}
                  className="mt-6 w-full py-2 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 rounded-lg text-xs cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
