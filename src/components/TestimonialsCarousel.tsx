import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Shield } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const list: Testimonial[] = [
    {
      quote: "Worklynk saved our team 20+ hours every week. It's a total game changer! Our integration workflows trigger reliably every single second without fail.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "BrightPath Startup",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
    },
    {
      quote: "Super easy to set up and connects all our tools perfectly. Highly recommend! The custom webhooks allow us to build secondary pipelines seamlessly.",
      name: "Michael Chen",
      role: "Operations Manager",
      company: "TechNova",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
    },
    {
      quote: "The AI suggestions are incredibly smart. It feels like having an extra teammate that is continuously finding ways to save hours in our engineering schedules.",
      name: "Emily Davis",
      role: "COO",
      company: "ScaleUp Agency",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute bottom-5 left-1/4 w-[450px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] text-blue-400 bg-blue-900/15 border border-blue-500/20 px-3 py-1 rounded-full uppercase">
            Trusted by teams like yours
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mt-4">
            See What Our Customers Say
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
            Join thousands of fast-growing teams already using Worklynk to automate their systems.
          </p>
        </div>

        {/* Carousel Framework */}
        <div className="relative max-w-5xl mx-auto flex items-center gap-4">
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-slate-800 bg-slate-900/40 hover:bg-slate-900 text-slate-400 hover:text-white transition-all scale-90 md:scale-100 cursor-pointer shrink-0 shadow-lg"
            aria-label="Previous testimonial"
            id="testimonial-prev-btn"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonials Display Center Column */}
          <div className="flex-1 overflow-hidden py-4">
            {/* Desktop: Grid displays 3 side-by-side elements gracefully */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {list.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }}
                  className={`p-6 rounded-2xl border transition-all glass-panel-light flex flex-col justify-between h-[255px] ${
                    activeIndex === index
                      ? "ring-1 ring-blue-500 border-blue-500/50 bg-slate-900/40"
                      : "border-slate-800 bg-slate-900/20"
                  }`}
                >
                  <div>
                    <Quote className="w-6 h-6 text-blue-400 mb-4 opacity-50 shrink-0" />
                    <p className="text-[12.5px] text-slate-300 leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 mt-6 border-t border-slate-900/60 pt-4.5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full border border-slate-800 hover:border-blue-400 transition-colors"
                    />
                    <div className="text-left">
                      <p className="text-xs font-bold text-white leading-tight">{item.name}</p>
                      <p className="text-[10.5px] text-slate-400 font-medium mt-0.5">{item.role}, {item.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile View: Dynamic Slide Overlay Carousel */}
            <div className="md:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 flex flex-col justify-between h-[250px]"
                >
                  <div>
                    <Quote className="w-6 h-6 text-blue-400 mb-4 opacity-50" />
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{list[activeIndex].quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 mt-6 border-t border-slate-900/60 pt-4">
                    <img
                      src={list[activeIndex].avatar}
                      alt={list[activeIndex].name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full border border-slate-800"
                    />
                    <div className="text-left">
                      <p className="text-xs font-bold text-white leading-none">{list[activeIndex].name}</p>
                      <p className="text-[10px] text-slate-405 mt-1">{list[activeIndex].role}, {list[activeIndex].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-slate-800 bg-slate-900/40 hover:bg-slate-900 text-slate-400 hover:text-white transition-all scale-90 md:scale-100 cursor-pointer shrink-0 shadow-lg"
            aria-label="Next testimonial"
            id="testimonial-next-btn"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicator dots navigation navigation */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {list.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === index ? "w-6 bg-blue-500" : "w-1.5 bg-slate-800 hover:bg-slate-705"
              }`}
              aria-label={`Slide target index ${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
