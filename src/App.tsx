import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CreditCard,
  CheckCircle,
  ClipboardX,
  Play,
  ArrowRight,
  Shield,
  Loader2,
  Lock,
  Mail,
  X,
  Sparkles,
  Zap,
  Check,
  Video
} from "lucide-react";
import Navbar from "./components/Navbar";
import DashboardPreview from "./components/DashboardPreview";
import FeaturesSection from "./components/FeaturesSection";
import IntegrationsSection from "./components/IntegrationsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showTour, setShowTour] = useState(false);
  
  // Modal forms state
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authState, setAuthState] = useState<"form" | "loading" | "success">("form");

  // Smooth scroll helper
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleAuthSubmit = (e: React.FormEvent, type: "signup" | "login") => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthState("loading");

    setTimeout(() => {
      setAuthLoading(false);
      setAuthState("success");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600/30 overflow-x-hidden relative">
      {/* Absolute Ambient Glowing Spheres */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-100px] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-200px] w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Persistent global floating navigation */}
      <Navbar
        onOpenSignUp={() => {
          setAuthState("form");
          setShowSignUp(true);
        }}
        onOpenLogIn={() => {
          setAuthState("form");
          setShowLogIn(true);
        }}
        onScrollToSection={handleScrollToSection}
      />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 dot-grid pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Hero Column: Narrative and Primary Triggers */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/15 border border-blue-500/25 text-[10.5px] font-mono font-bold tracking-[0.08em] text-blue-400 uppercase leading-none"
            >
              <Sparkles className="w-3.5 h-3.5" /> 14-Day Free Trial – No Credit Card Required
            </motion.div>

            {/* Main Title Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.05] mt-6.5"
            >
              Automate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 font-bold">
                Daily Workflow
              </span> <br />
              in Minutes.
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-405 mt-6.5 leading-relaxed max-w-lg"
            >
              Worklynk connects your apps, automates repetitive tasks, and helps your team get more done—without writing a single line of code.
            </motion.p>

            {/* Form actions row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-8.5 w-full sm:w-auto"
            >
              <button
                onClick={() => {
                  setAuthState("form");
                  setShowSignUp(true);
                }}
                className="w-full sm:w-auto px-7 py-3 py-3 px-7 rounded-xl bg-blue-600 hover:bg-blue-550 text-xs font-bold text-white shadow-xl shadow-blue-500/15 hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="hero-signup-btn"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowTour(true)}
                className="w-full sm:w-auto px-7 py-3 whitespace-nowrap rounded-xl bg-slate-900 hover:bg-slate-850 text-xs font-bold text-slate-200 hover:text-white border border-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                id="hero-tour-btn"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> See How It Works
              </button>
            </motion.div>

            {/* Quick trust metrics row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5.5 mt-10 md:mt-12 w-full pt-8.5 border-t border-slate-900"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl border border-slate-850 bg-slate-900/40 flex items-center justify-center text-blue-405 shrink-0">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-none">14-Day Free Trial</p>
                  <p className="text-[10px] text-slate-400 mt-1">No credit card</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl border border-slate-850 bg-slate-900/40 flex items-center justify-center text-blue-450 shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-none font-medium">Easy Setup</p>
                  <p className="text-[10px] text-slate-400 mt-1">Get started in minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl border border-slate-850 bg-slate-900/40 flex items-center justify-center text-blue-405 shrink-0">
                  <ClipboardX className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-none">Cancel Anytime</p>
                  <p className="text-[10px] text-slate-400 mt-1">No commitments</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Column: Fully Interactive SaaS Dashboard Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative w-full"
            id="hero-preview-container"
          >
            {/* Visual background loop glows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full aspect-square bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <DashboardPreview />
          </motion.div>
        </div>
      </section>

      {/* Structured Sections Grid */}
      <FeaturesSection />
      
      <IntegrationsSection />
      
      <TestimonialsCarousel />
      
      <CTABanner />
      
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenLogIn={() => {
          setAuthState("form");
          setShowLogIn(true);
        }}
        onOpenSignUp={() => {
          setAuthState("form");
          setShowSignUp(true);
        }}
      />

      {/* Global Modals Portal Layout */}
      <AnimatePresence>
        {/* SIGN UP MODAL */}
        {showSignUp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSignUp(false)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
              id="signup-backdrop"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-sm bg-slate-950 rounded-2xl border border-slate-850 p-6 md:p-8 shadow-2xl"
              id="signup-modal-box"
            >
              <button
                onClick={() => setShowSignUp(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {authState === "form" && (
                <form onSubmit={(e) => handleAuthSubmit(e, "signup")} className="flex flex-col gap-4">
                  <div className="text-center mb-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 bg-blue-950/40 border border-blue-900/50 px-2.5 py-1 rounded">
                      NO CREDIT CARD REQUIRED
                    </span>
                    <h3 className="text-xl font-display font-semibold text-white mt-4.5">Create your Free Sandbox</h3>
                    <p className="text-[11px] text-slate-405 mt-1">Get 14 days of full Enterprise features access</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-450 font-bold uppercase tracking-wider font-mono">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-850 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-550 focus:ring-1 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-450 font-bold uppercase tracking-wider font-mono">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-850 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-550 focus:ring-1 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2.5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-blue-500/15 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    Generate Workspace <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[10.5px] text-slate-500 font-medium">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setShowSignUp(false);
                        setShowLogIn(true);
                      }}
                      className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                    >
                      Log in here
                    </button>
                  </p>
                </form>
              )}

              {authState === "loading" && (
                <div className="py-12 flex flex-col items-center">
                  <Loader2 className="w-10 h-10 text-blue-405 animate-spin mb-4.5" />
                  <p className="text-xs font-semibold text-white">Generating node variables...</p>
                  <p className="text-[9.5px] text-slate-505 font-mono tracking-widest uppercase mt-1">Worklynk Provisioner</p>
                </div>
              )}

              {authState === "success" && (
                <div className="py-6 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <Check className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white tracking-tight">Setup Completed!</h3>
                  <p className="text-xs text-slate-400 mt-2">
                    Sandbox environment for <span className="text-blue-400 font-semibold">{authEmail}</span> is live. Dispatched secure keys.
                  </p>
                  <button
                    onClick={() => setShowSignUp(false)}
                    className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold border border-slate-800 rounded-lg text-xs cursor-pointer"
                  >
                    Enter Live Preview
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* LOG IN MODAL */}
        {showLogIn && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogIn(false)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
              id="login-backdrop"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-sm bg-slate-950 rounded-2xl border border-slate-850 p-6 md:p-8 shadow-2xl"
              id="login-modal-box"
            >
              <button
                onClick={() => setShowLogIn(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {authState === "form" && (
                <form onSubmit={(e) => handleAuthSubmit(e, "login")} className="flex flex-col gap-4">
                  <div className="text-center mb-1">
                    <h3 className="text-xl font-display font-semibold text-white">Log in to Worklynk</h3>
                    <p className="text-[11px] text-slate-405 mt-1">Access your saved triggers, nodes and history logs</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-450 font-bold uppercase tracking-wider font-mono">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-850 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-550 focus:ring-1 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-450 font-bold uppercase tracking-wider font-mono">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-850 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-550 focus:ring-1 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2.5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-blue-500/15 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    Sign In <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[10.5px] text-slate-500 font-medium">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setShowLogIn(false);
                        setShowSignUp(true);
                      }}
                      className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                    >
                      Sign up for free
                    </button>
                  </p>
                </form>
              )}

              {authState === "loading" && (
                <div className="py-12 flex flex-col items-center">
                  <Loader2 className="w-10 h-10 text-blue-405 animate-spin mb-4.5" />
                  <p className="text-xs font-semibold text-white">Verifying authorization token...</p>
                </div>
              )}

              {authState === "success" && (
                <div className="py-6 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <Check className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white tracking-tight">Welcome Back, Alex!</h3>
                  <p className="text-xs text-slate-400 mt-2">Connecting secure tunnel to your workflows workspace.</p>
                  <button
                    onClick={() => setShowLogIn(false)}
                    className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold border border-slate-800 rounded-lg text-xs cursor-pointer"
                  >
                    Enter Live Preview
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* TOUR MODAL (See How It Works) */}
        {showTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTour(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              id="tour-backdrop"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6.5 flex flex-col"
              id="tour-dialog-box"
            >
              <button
                onClick={() => setShowTour(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors cursor-pointer animate-pulse"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="mb-4">
                <span className="text-[9px] font-mono tracking-[0.25em] font-bold text-blue-400 bg-blue-990/15 border border-blue-500/20 px-2.5 py-1 rounded-md">
                  INTERACTIVE PLATFORM VIDEO TOUR
                </span>
                <h3 className="text-xl font-display font-medium text-white mt-3.5 flex items-center gap-2">
                  <Video className="w-5 h-5 text-blue-400" /> Watch Worklynk in Action
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Learn how you can link Slack, Google Sheets, Notion, and CRM tools securely down below.
                </p>
              </div>

              {/* Simulated video playback frame */}
              <div className="relative aspect-video bg-slate-900 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center group shadow-inner">
                {/* Simulated video play placeholder graph */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/20 opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Floating automated path graph circles inside video */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full border border-blue-500/20 bg-blue-500/5 flex items-center justify-center text-blue-400 animate-pulse">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full border border-cyan-505/20 bg-cyan-505/5 flex items-center justify-center text-cyan-400 animate-pulse delay-700">
                  <Check className="w-5 h-5" />
                </div>

                <div className="relative z-10 text-center p-6 max-w-xs flex flex-col items-center">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      alert("Playing simulated product walkthrough tour! Take a look around our active landing page elements for live builders.");
                      setShowTour(false);
                    }}
                    className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl hover:shadow-blue-500/30 cursor-pointer mb-4 transition-transform group-hover:rotate-12 duration-300"
                  >
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </motion.button>
                  <p className="text-xs font-bold text-white tracking-tight">Play Walkthrough video Tour</p>
                  <p className="text-[10px] text-slate-400 mt-1.5">No login credentials needed. Play instantly (1:45 mins)</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900/60">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-505">
                  <Shield className="w-4 h-4 text-emerald-500" /> Secure SSL media transport active.
                </div>
                <button
                  onClick={() => {
                    setShowTour(false);
                    setAuthState("form");
                    setShowSignUp(true);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-lg hover:shadow-blue-500/15 cursor-pointer"
                >
                  Create Trial Setup Free
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
