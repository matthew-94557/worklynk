import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Command, Check, Zap, ExternalLink, ArrowRight, Table, MessageSquare, BookOpen, Layers, Inbox, Cloud, Users } from "lucide-react";

interface IntegrationItem {
  name: string;
  category: "all" | "productivity" | "communication" | "storage" | "crm";
  desc: string;
  templates: string[];
  color: string;
  glowColor: string;
  iconBg: string;
}

export default function IntegrationsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "productivity" | "communication" | "storage" | "crm">("all");
  const [selectedIntegration, setSelectedIntegration] = useState<IntegrationItem | null>(null);

  const integrations: IntegrationItem[] = [
    {
      name: "Gmail",
      category: "productivity",
      desc: "Dispatch notifications, monitor thread replies, and parse custom lead attachments.",
      templates: ["Sync attachment to Google Drive folder", "Parse email coordinates and pass to Sheets"],
      color: "text-rose-450 border-rose-500/30",
      glowColor: "shadow-rose-500/10",
      iconBg: "bg-rose-500/10 text-rose-400"
    },
    {
      name: "Slack",
      category: "communication",
      desc: "Post structured messages, notify teams of incoming leads, and trigger bot queries.",
      templates: ["Notify design room on Trello comment", "Send daily analytics highlights report"],
      color: "text-indigo-400 border-indigo-505/30",
      glowColor: "shadow-indigo-505/10",
      iconBg: "bg-indigo-500/10 text-indigo-400"
    },
    {
      name: "Notion",
      category: "productivity",
      desc: "Keep client files organized, append database records, and sync historic notes.",
      templates: ["Append Stripe customer record in tab", "Create project item cards on calendars"],
      color: "text-slate-300 border-slate-700/50",
      glowColor: "shadow-slate-400/5",
      iconBg: "bg-slate-500/10 text-slate-300"
    },
    {
      name: "Google Sheets",
      category: "productivity",
      desc: "Create rows dynamically, calculate math formulas, and build database logs.",
      templates: ["Log Webhook entries instantly in columns", "Export historic logs automatically daily"],
      color: "text-emerald-400 border-emerald-500/30",
      glowColor: "shadow-emerald-500/10",
      iconBg: "bg-emerald-500/10 text-emerald-400"
    },
    {
      name: "Trello",
      category: "productivity",
      desc: "Manage cards in boards, transition column phases, and attach checklist items.",
      templates: ["Move lead card to 'Won' on Stripe success", "Create sub-cards on Github pull request"],
      color: "text-blue-400 border-blue-500/30",
      glowColor: "shadow-blue-500/10",
      iconBg: "bg-blue-500/10 text-blue-400"
    },
    {
      name: "Dropbox",
      category: "storage",
      desc: "Upload large assets, monitor folder additions, and sync backup parameters.",
      templates: ["Archive Gmail attachments directly", "Generate sharing links for Sheets rows"],
      color: "text-blue-500 border-blue-600/30",
      glowColor: "shadow-blue-600/10",
      iconBg: "bg-blue-600/10 text-blue-500"
    },
    {
      name: "HubSpot",
      category: "crm",
      desc: "Manage clients info, trigger automation emails, and schedule followups.",
      templates: ["Merge incoming Gmail contacts into CRM", "Sync custom forms triggers to Slack"],
      color: "text-amber-500 border-amber-600/30",
      glowColor: "shadow-amber-600/10",
      iconBg: "bg-amber-600/10 text-amber-505"
    }
  ];

  // Filters logic
  const filteredIntegrations = integrations.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Category items maps
  const categories = [
    { id: "all", label: "All Integrations" },
    { id: "productivity", label: "Productivity" },
    { id: "communication", label: "Communication" },
    { id: "storage", label: "Cloud Storage" },
    { id: "crm", label: "CRM & Sales" },
  ] as const;

  return (
    <section id="integrations" className="py-24 relative overflow-hidden bg-slate-950/20 border-y border-slate-900">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] text-blue-400 bg-blue-900/15 border border-blue-500/20 px-3 py-1 rounded-full uppercase">
            Works with the tools you love
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mt-4">
            100+ Integrations and Counting
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
            Worklynk plugs directly into your daily tool chain. Run actions, fetch records, and post notifications without complex setup codes.
          </p>
        </div>

        {/* Categories and Search Filter Hub */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4.5 mb-11">
          {/* Categories select pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 flex-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-blue-600 hover:bg-blue-500 text-white border-blue-500 shadow-md shadow-blue-500/10"
                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar inputs */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Filter integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-800/80 rounded-xl py-2 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all font-medium"
            />
          </div>
        </div>

        {/* Grid display items */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <AnimatePresence mode="popLayout animate">
            {filteredIntegrations.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedIntegration(item)}
                className={`group py-5 px-4 rounded-xl border bg-slate-900/20 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:-translate-y-1 hover:border-slate-800 shadow-md ${item.glowColor}`}
              >
                {/* Custom glowing icons maps */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-slate-800 mb-3.5 ${item.iconBg} transition-transform group-hover:scale-110`}>
                  {item.name === "Gmail" && <Inbox className="w-5 h-5" />}
                  {item.name === "Slack" && <MessageSquare className="w-5 h-5" />}
                  {item.name === "Notion" && <BookOpen className="w-5 h-5" />}
                  {item.name === "Google Sheets" && <Table className="w-5 h-5" />}
                  {item.name === "Trello" && <Layers className="w-5 h-5" />}
                  {item.name === "Dropbox" && <Cloud className="w-5 h-5" />}
                  {item.name === "HubSpot" && <Users className="w-5 h-5" />}
                </div>
                <p className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                  {item.name}
                </p>
                <span className="text-[10px] text-slate-500 font-semibold group-hover:text-blue-400 mt-1 transition-colors flex items-center gap-0.5">
                  See templates <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0" />
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Fallback empty states */}
        {filteredIntegrations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-sm text-slate-500">No integration keys matching your lookup filters.</p>
          </motion.div>
        )}

        {/* Small footer footnote */}
        <p className="text-center text-[10.5px] font-mono tracking-widest text-slate-500 uppercase mt-12">
          ...And Many More...
        </p>
      </div>

      {/* Templates preview Drawer Modal popup */}
      <AnimatePresence>
        {selectedIntegration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIntegration(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6.5"
            >
              <div className="flex items-center justify-between mb-4.5">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${selectedIntegration.iconBg} border border-slate-800`}>
                    {selectedIntegration.name === "Gmail" && <Inbox className="w-4.5 h-4.5" />}
                    {selectedIntegration.name === "Slack" && <MessageSquare className="w-4.5 h-4.5" />}
                    {selectedIntegration.name === "Notion" && <BookOpen className="w-4.5 h-4.5" />}
                    {selectedIntegration.name === "Google Sheets" && <Table className="w-4.5 h-4.5" />}
                    {selectedIntegration.name === "Trello" && <Layers className="w-4.5 h-4.5" />}
                    {selectedIntegration.name === "Dropbox" && <Cloud className="w-4.5 h-4.5" />}
                    {selectedIntegration.name === "HubSpot" && <Users className="w-4.5 h-4.5" />}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white tracking-tight">{selectedIntegration.name} Integration</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">PRE-BUILT TEMPLATES</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIntegration(null)}
                  className="p-1 px-2 text-slate-400 hover:text-white text-xs border border-slate-850 hover:bg-slate-900 rounded-md transition-all cursor-pointer"
                >
                  Esc
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {selectedIntegration.desc}
              </p>

              {/* Templates checklist items layout */}
              <div className="flex flex-col gap-3.5 mb-6.5">
                <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">Available Automations</span>
                {selectedIntegration.templates.map((tmpl) => (
                  <div key={tmpl} className="p-3 bg-slate-900/40 rounded-xl border border-slate-850/60 flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-200 flex-1 pr-3">{tmpl}</p>
                    <button
                      onClick={() => {
                        setSelectedIntegration(null);
                        alert(`"${tmpl}" successfully pushed to the active dashboard simulator sandbox workflows!`);
                      }}
                      className="px-2 py-1 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/25 text-[9.5px] font-bold rounded-md transition-all cursor-pointer"
                    >
                      Use State
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 text-xs leading-none">
                <a
                  href="#integrations-doc"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-semibold"
                >
                  Read spec API config <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
