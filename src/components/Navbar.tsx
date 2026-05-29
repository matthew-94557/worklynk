import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight, Shield, Zap, Sparkles, LogIn } from "lucide-react";

interface NavbarProps {
  onOpenSignUp: () => void;
  onOpenLogIn: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenSignUp, onOpenLogIn, onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for glass navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-900 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onScrollToSection("hero")}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-lg group-hover:bg-blue-500/30 transition-all duration-300" />
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-blue-500/50 flex items-center justify-center relative">
                <svg
                  className="w-5 h-5 text-blue-450 group-hover:rotate-12 transition-transform duration-350"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M4 12V4h8m8 8v8h-8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3" className="fill-blue-550/20" />
                  <circle cx="4" cy="4" r="1.5" className="fill-cyan-400" />
                  <circle cx="20" cy="20" r="1.5" className="fill-cyan-400" />
                </svg>
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
              Worklynk
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onScrollToSection("features")}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              id="nav-features-btn"
            >
              Features
            </button>
            <button
              onClick={() => onScrollToSection("integrations")}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              id="nav-integrations-btn"
            >
              Integrations
            </button>
            <button
              onClick={() => onScrollToSection("how-it-works")}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              id="nav-how-it-works-btn"
            >
              How It Works
            </button>
            <button
              onClick={() => onScrollToSection("pricing")}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              id="nav-pricing-btn"
            >
              Pricing
            </button>

            {/* Resources Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                id="nav-resources-btn"
              >
                Resources <ChevronDown className={`w-4 h-4 transition-transform ${showResources ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showResources && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 z-50"
                  >
                    <div className="glass-panel p-2.5 rounded-xl shadow-2xl border border-slate-800/80 bg-slate-950/95">
                      <div className="grid gap-0.5">
                        <a
                          href="#tutorials"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-900 transition-colors text-slate-300 hover:text-white group"
                        >
                          <Zap className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-xs font-semibold">Tutorials</p>
                            <p className="text-[10px] text-slate-400">Step by step guides</p>
                          </div>
                        </a>
                        <a
                          href="#templates"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-900 transition-colors text-slate-300 hover:text-white group"
                        >
                          <Shield className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-xs font-semibold">Templates</p>
                            <p className="text-[10px] text-slate-400">Pre-built configurations</p>
                          </div>
                        </a>
                        <a
                          href="#help-center"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-900 transition-colors text-slate-300 hover:text-white group"
                        >
                          <Sparkles className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-xs font-semibold">Help Center</p>
                            <p className="text-[10px] text-slate-400">Documentation & support</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Area Controls */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenLogIn}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              id="nav-login-btn-link"
            >
              Log In
            </button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenSignUp}
              className="px-5 py-2 rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all flex items-center gap-1.5 cursor-pointer"
              id="nav-cta-btn"
            >
              Start Free Trial
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            id="nav-mobile-menu-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-b border-slate-900 bg-slate-950/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onScrollToSection("features");
                  }}
                  className="text-left py-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onScrollToSection("integrations");
                  }}
                  className="text-left py-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  Integrations
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onScrollToSection("how-it-works");
                  }}
                  className="text-left py-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onScrollToSection("pricing");
                  }}
                  className="text-left py-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  Pricing
                </button>
                <hr className="border-slate-9 0 border-slate-900" />
                <div className="flex flex-col gap-4.5 pt-1">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenLogIn();
                    }}
                    className="py-2.5 rounded-lg border border-slate-800 text-slate-300 font-medium hover:text-white text-center hover:bg-slate-900 flex items-center justify-center gap-2"
                  >
                    <LogIn className="w-4 h-4" /> Log In
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenSignUp();
                    }}
                    className="py-3 rounded-lg bg-blue-600 font-semibold text-white text-center hover:bg-blue-500 shadow-xl flex items-center justify-center gap-1.5"
                  >
                    Start Free Trial <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
