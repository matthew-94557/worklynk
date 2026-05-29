import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Sparkles, Shield, Loader2, PartyPopper, CheckCircle } from "lucide-react";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"form" | "provisioning" | "success">("form");
  const [loadingText, setLoadingText] = useState("Securing pipeline...");

  const handleOnboarding = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStep("provisioning");

    // Cycle descriptive provisioning logs to make loading premium
    const logs = [
      "Securing pipeline...",
      "Connecting sandbox nodes...",
      "Generating workspace credentials...",
      "Starting Worklynk active engine..."
    ];

    logs.forEach((txt, idx) => {
      setTimeout(() => {
        setLoadingText(txt);
        if (idx === logs.length - 1) {
          setTimeout(() => {
            setLoading(false);
            setStep("success");
          }, 800);
        }
      }, idx * 600);
    });
  };

  return (
    <section className="py-20 relative overflow-hidden" id="pricing">
      {/* Visual background lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Core CTA Box framed by blue glowing ambient lighting */}
        <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 md:p-14 text-center overflow-hidden shadow-2xl shadow-blue-500/5 uppercase-title">
          {/* Radial light backdrop */}
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Banner Contents */}
          <div className="relative max-w-2xl mx-auto flex flex-col items-center">
            <AnimatePresence mode="wait">
              {step === "form" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full flex flex-col items-center"
                >
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-blue-400 bg-blue-900/15 border border-blue-500/20 px-3 py-1 rounded-full uppercase">
                    Start instantly in 60 seconds
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mt-5 leading-tight">
                    Ready to Automate Your Workflow?
                  </h2>
                  
                  <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-xl">
                    Join thousands of teams saving time and getting more done with Worklynk. Sign up for a free trial sandbox today.
                  </p>

                  {/* Inline Email Submission Container */}
                  <form onSubmit={handleOnboarding} className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-950/90 border border-slate-800/80 hover:border-slate-705 text-xs text-white placeholder-slate-500 rounded-xl px-4 py-3 pb-3 flex-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all font-medium"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-505 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-500/15 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      id="cta-submit-btn"
                    >
                      Start Free Trial <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </form>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10.5px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-blue-400" /> 14-Day Free Trial
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-blue-400" /> No Credit Card Required
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-blue-400" /> Cancel Anytime
                    </span>
                  </div>
                </motion.div>
              )}

              {step === "provisioning" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 flex flex-col items-center"
                >
                  <Loader2 className="w-10 h-10 text-blue-400 animate-spin mb-4" />
                  <p className="text-sm font-semibold text-white tracking-tight">{loadingText}</p>
                  <p className="text-[10.5px] text-slate-500 font-mono mt-1.5 uppercase tracking-widest">PROVISIONING WORKSPACE</p>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <PartyPopper className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-white tracking-tight">Your Sandbox Is Provisioned!</h3>
                  <p className="text-xs text-slate-400 mt-2 max-w-sm">
                    We've provisioned an active developer workspace linked to <span className="text-blue-400 font-semibold">{email}</span>. Click below to enter your dashboard or configure integrations.
                  </p>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center">
                    <button
                      onClick={() => {
                        setEmail("");
                        setStep("form");
                      }}
                      className="px-5 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Refactor Onboarding
                    </button>
                    <button
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setStep("form");
                        setEmail("");
                      }}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Enter Interactive Sandbox <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
