import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GitBranch, Puzzle, Sparkles, Check, ArrowRight, X, Play, Shield, Code, Zap } from "lucide-react";

interface FeatureDetail {
  id: string;
  title: string;
  badge: string;
  desc: string;
  highlights: string[];
  graphicTitle: string;
}

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);

  const features: FeatureDetail[] = [
    {
      id: "builder",
      title: "Workflow Builder",
      badge: "DRAG-AND-DROP NO-CODE",
      desc: "Drag, drop, and connect your apps. Build powerful workflows in minutes—no code needed. Design branching log files, conditional statements, and robust steps visually.",
      highlights: [
        "Visual visual editor with auto-aligning paths",
        "Conditional branching ('If / Else' rules)",
        "Support for massive loop steps and multi-step tasks",
        "Action error fallback filters so workflows never halt"
      ],
      graphicTitle: "Visual Steps Builder Interface"
    },
    {
      id: "integrations",
      title: "100+ App Integrations",
      badge: "ONE-CLICK API SYNC",
      desc: "Connect with the tools you already use. From Gmail to Notion, Slack to Trello, and many more. Worklynk handles all native API handshakes securely in the background.",
      highlights: [
        "Direct Slack, Gmail, Trello, Sheets integrations out-of-the-box",
        "OAuth 2.0 secured credentials for instant handshakes",
        "Support for raw Webhook parameters for custom webapps",
        "Automatic rate-limit retry engine preventing token blocks"
      ],
      graphicTitle: "Universal Connect Hub"
    },
    {
      id: "ai-suggestions",
      title: "AI Task Suggestions",
      badge: "INTELLIGENT INTEGRATION ENGINE",
      desc: "Let AI suggest smart automations based on your habits and save even more time. Deep-learning algorithms analyze your repetitive tasks and propose robust automations.",
      highlights: [
        "Dynamic behavior mining mapping system workflow actions",
        "One-button installations for suggested paths",
        "Predicted weekly time savings calculator diagnostics",
        "Semantic matching suggesting alternate integration routes"
      ],
      graphicTitle: "Worklynk AI Core Insights"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden dot-grid">
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] text-blue-400 bg-blue-900/15 border border-blue-500/20 px-3 py-1 rounded-full uppercase">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mt-4">
            Everything You Need to Work Smarter
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
            Worklynk takes the busywork off your plate so you can focus on what matters most. No coding required.
          </p>
        </div>

        {/* Features Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Workflow Builder */}
          <motion.div
            whileHover={{ y: -6, borderColor: "rgba(59, 130, 246, 0.45)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedFeature(features[0])}
            className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/60 p-6 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-blue-505/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform mb-5">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white group-hover:text-blue-200 transition-colors">
                Workflow Builder
              </h3>
              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                Drag, drop, and connect your apps. Build powerful workflows in minutes —no code needed.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300">
              Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 2: 100+ App Integrations */}
          <motion.div
            whileHover={{ y: -6, borderColor: "rgba(34, 211, 238, 0.45)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedFeature(features[1])}
            className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/60 p-6 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-cyan-505/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform mb-5">
                <Puzzle className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white group-hover:text-cyan-200 transition-colors">
                100+ App Integrations
              </h3>
              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                Connect with the tools you already use. From Gmail to Notion, Slack to Trello, and many more.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300">
              Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: AI Task Suggestions */}
          <motion.div
            whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.45)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedFeature(features[2])}
            className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/60 p-6 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-indigo-505/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white group-hover:text-indigo-200 transition-colors">
                AI Task Suggestions
              </h3>
              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                Let AI suggest smart automations based on your habits and save even more time.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300">
              Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Details Modal Popup Overlay */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              id="feature-modal-backdrop"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6 md:p-8 flex flex-col max-h-[90vh] overflow-y-auto"
              id="feature-modal-content"
            >
              {/* Reset button top-right */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
                id="feature-modal-close-btn"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <span className="text-[9px] font-mono tracking-[0.25em] font-bold text-blue-400 bg-blue-950/40 border border-blue-900/60 px-2.5 py-1 rounded-md">
                  {selectedFeature.badge}
                </span>
                <h3 className="text-2xl font-display font-semibold text-white mt-4">
                  {selectedFeature.title}
                </h3>
                <p className="text-xs text-slate-450 mt-2 leading-relaxed">
                  {selectedFeature.desc}
                </p>
              </div>

              {/* Highlights & Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Highlights List */}
                <div className="flex flex-col gap-3.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Key capabilities Include:
                  </h4>
                  {selectedFeature.highlights.map((hlt) => (
                    <div key={hlt} className="flex gap-2.5">
                      <div className="w-4.5 h-4.5 shrink-0 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                        <Check className="w-3 h-3" />
                      </div>
                      <p className="text-xs text-slate-300 leading-tight">{hlt}</p>
                    </div>
                  ))}
                </div>

                {/* Simulated Core Diagnostic Preview Widget */}
                <div className="rounded-xl bg-slate-900/50 border border-slate-850 p-4.5 font-mono text-[10.5px]">
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-2 mb-3">
                    <span className="text-slate-500 text-[10px] font-bold">{selectedFeature.graphicTitle}</span>
                    <span className="text-[8.5px] bg-slate-950 px-1.5 py-0.5 rounded text-blue-400 font-bold">V1.4</span>
                  </div>
                  {selectedFeature.id === "builder" && (
                    <div className="grid gap-2 text-slate-450 text-[10px]">
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>rule_engine_loaded</span>
                        <span className="text-emerald-400">TRUE</span>
                      </div>
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>schema_validation_type</span>
                        <span className="text-cyan-400">"strict"</span>
                      </div>
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>auto_repair_fallback</span>
                        <span className="text-indigo-400">"enabled"</span>
                      </div>
                    </div>
                  )}
                  {selectedFeature.id === "integrations" && (
                    <div className="grid gap-2 text-slate-450 text-[10px]">
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>handshake_encryption</span>
                        <span className="text-cyan-400">AES_256_GCM</span>
                      </div>
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>token_refresh_interval</span>
                        <span className="text-amber-400">3600s</span>
                      </div>
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>webhook_timeout_limit</span>
                        <span className="text-emerald-405">800ms</span>
                      </div>
                    </div>
                  )}
                  {selectedFeature.id === "ai-suggestions" && (
                    <div className="grid gap-2 text-slate-450 text-[10px]">
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>suggestion_deep_mining</span>
                        <span className="text-emerald-400">ACTIVE</span>
                      </div>
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>confidence_threshold</span>
                        <span className="text-cyan-400">85%</span>
                      </div>
                      <div className="flex justify-between p-1 bg-slate-950 rounded">
                        <span>ai_engine_model</span>
                        <span className="text-indigo-450">gemini-3.5-flash</span>
                      </div>
                    </div>
                  )}
                  <button className="w-full mt-4 bg-slate-950 hover:bg-slate-950 text-slate-300 font-semibold py-1.5 rounded-lg border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                    <Play className="w-3 h-3 fill-current" /> Initialize Diagnostics
                  </button>
                </div>
              </div>

              {/* Action Button bottom */}
              <div className="mt-8 pt-4 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                  <Shield className="w-4 h-4 text-emerald-500" /> End-to-end sandbox configured.
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
                >
                  Close Exploration
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
