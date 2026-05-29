import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  GitBranch,
  Puzzle,
  Lightbulb,
  History as HistoryIcon,
  Settings as SettingsIcon,
  Play,
  RotateCcw,
  CheckCircle,
  Plus,
  Trash2,
  Cpu,
  ArrowRight,
  Database,
  ExternalLink,
  Mail,
  FileSpreadsheet,
  MessageSquare,
  AlertCircle
} from "lucide-react";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "workflows" | "integrations" | "suggestions" | "history" | "settings">("dashboard");
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [tasksCount, setTasksCount] = useState(1248);
  const [timeSaved, setTimeSaved] = useState(32.5);
  
  // Simulation workflows state
  const [workflows, setWorkflows] = useState([
    { id: "1", name: "New Lead → Notion + Slack", status: "Active" },
    { id: "2", name: "Gmail Attachments → Drive", status: "Active" },
    { id: "3", name: "Form Submission → Trello", status: "Active" },
    { id: "4", name: "Invoice → QuickBooks", status: "Active" },
  ]);

  // Handle simulations
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      setActiveStep(0);
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= 3) {
            clearInterval(timer);
            setIsPlaying(false);
            setTasksCount((t) => t + 1);
            setTimeSaved((h) => Number((h + 0.1).toFixed(1)));
            return -1;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      setActiveStep(-1);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Sidebar navigation options
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "workflows", label: "Workflows", icon: GitBranch },
    { id: "integrations", label: "Integrations", icon: Puzzle, badge: "12" },
    { id: "suggestions", label: "AI Suggestions", icon: Lightbulb, badge: "New" },
    { id: "history", label: "History", icon: HistoryIcon },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ] as const;

  // Render sub-screens based on selected sidebar item
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full overflow-y-auto pr-1">
            {/* Stat Cards Row */}
            <div className="lg:col-span-12 grid grid-cols-3 gap-3.5">
              <div className="bg-slate-900/60 border border-slate-800/60 p-3.5 rounded-xl hover:border-slate-800 transition-colors">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Workflows</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl md:text-2xl font-semibold text-white tracking-tight">{workflows.length}</span>
                  <span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded-md">+12%</span>
                </div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800/60 p-3.5 rounded-xl hover:border-slate-800 transition-colors">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Tasks Automated</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {tasksCount.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded-md">+18%</span>
                </div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800/60 p-3.5 rounded-xl hover:border-slate-800 transition-colors">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Time Saved</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl md:text-2xl font-semibold text-white tracking-tight">{timeSaved} hrs</span>
                  <span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded-md">+15%</span>
                </div>
              </div>
            </div>

            {/* Left Col: Recent Workflows */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="bg-slate-900/40 border border-slate-800/40 p-4 rounded-xl flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-white">Recent Workflows</span>
                  <button
                    onClick={() => setActiveTab("workflows")}
                    className="text-blue-400 hover:text-blue-300 text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    View active <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
                <div className="grid gap-2">
                  {workflows.slice(0, 4).map((wf) => (
                    <div
                      key={wf.id}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/50 border border-slate-900/80 hover:border-slate-800 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animation-pulse" />
                        <span className="text-[11px] font-medium text-slate-200">{wf.name}</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-sm">
                        {wf.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Instant Live Builder Simulator */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-slate-900/40 border border-slate-800/40 p-4 rounded-xl flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-white">Workflow Builder</span>
                  <button
                    onClick={() => {
                      if (!isPlaying) setIsPlaying(true);
                    }}
                    disabled={isPlaying}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-tight transition-all cursor-pointer ${
                      isPlaying
                        ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/10"
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <span className="relative flex h-1.5 w-1.5 mr-0.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-2.5 h-2.5 fill-current" /> Run Workflow
                      </>
                    )}
                  </button>
                </div>

                {/* Workflow Simulation Steps Wrapper */}
                <div className="relative pl-3 border-l border-slate-800 flex-1 flex flex-col justify-between py-1 gap-3">
                  {/* Step 1 */}
                  <div className="relative">
                    {/* Active state line glow */}
                    <div
                      className={`absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-slate-900 transition-colors ${
                        activeStep >= 0 ? "bg-blue-400 shadow-[0_0_8px_rgb(96,165,250)]" : "bg-slate-600"
                      }`}
                    />
                    <div
                      className={`p-2 rounded-lg border flex items-center gap-2.5 transition-all ${
                        activeStep === 0
                          ? "bg-blue-950/40 border-blue-500/60 ring-1 ring-blue-500/30"
                          : activeStep > 0
                          ? "bg-slate-900/60 border-emerald-500/30 text-slate-300"
                          : "bg-slate-950/40 border-slate-900/60 text-slate-400"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-md bg-rose-500/10 flex items-center justify-center text-rose-450 border border-rose-500/20">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[10px] font-bold text-white">New Lead in Gmail</p>
                        <p className="text-[9px] text-slate-400">Trigger: On email received</p>
                      </div>
                      {activeStep > 0 && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div
                      className={`absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-slate-900 transition-colors ${
                        activeStep >= 1 ? "bg-blue-400 shadow-[0_0_8px_rgb(96,165,250)]" : "bg-slate-600"
                      }`}
                    />
                    <div
                      className={`p-2 rounded-lg border flex items-center gap-2.5 transition-all ${
                        activeStep === 1
                          ? "bg-blue-950/40 border-blue-500/60 ring-1 ring-blue-500/30"
                          : activeStep > 1
                          ? "bg-slate-900/60 border-emerald-500/30 text-slate-300"
                          : "bg-slate-950/40 border-slate-900/60 text-slate-400"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-455 border border-amber-500/20">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[10px] font-bold text-white">Extract Layout Data</p>
                        <p className="text-[9px] text-slate-400">Action: AI parsing parser</p>
                      </div>
                      {activeStep > 1 && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div
                      className={`absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-slate-900 transition-colors ${
                        activeStep >= 2 ? "bg-blue-400 shadow-[0_0_8px_rgb(96,165,250)]" : "bg-slate-600"
                      }`}
                    />
                    <div
                      className={`p-2 rounded-lg border flex items-center gap-2.5 transition-all ${
                        activeStep === 2
                          ? "bg-blue-950/40 border-blue-500/60 ring-1 ring-blue-500/30"
                          : activeStep > 2
                          ? "bg-slate-900/60 border-emerald-500/30 text-slate-300"
                          : "bg-slate-950/40 border-slate-900/60 text-slate-400"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-450 border border-emerald-500/20">
                        <FileSpreadsheet className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[10px] font-bold text-white">Add to Google Sheet</p>
                        <p className="text-[9px] text-slate-400">Action: Create row</p>
                      </div>
                      {activeStep > 2 && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    <div
                      className={`absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-slate-900 transition-colors ${
                        activeStep >= 3 ? "bg-blue-400 shadow-[0_0_8px_rgb(96,165,250)]" : "bg-slate-600"
                      }`}
                    />
                    <div
                      className={`p-2 rounded-lg border flex items-center gap-2.5 transition-all ${
                        activeStep === 3
                          ? "bg-blue-950/40 border-blue-500/60 ring-1 ring-blue-500/30"
                          : activeStep > 3
                          ? "bg-slate-900/60 border-emerald-500/30 text-slate-300"
                          : "bg-slate-950/40 border-slate-900/60 text-slate-400"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-md bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[10px] font-bold text-white">Notify in Slack</p>
                        <p className="text-[9px] text-slate-400">Action: Post message</p>
                      </div>
                      {activeStep > 3 && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "workflows":
        return (
          <div className="h-full flex flex-col gap-4 overflow-y-auto pr-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-white">Active Workflows</h3>
                <p className="text-[10px] text-slate-400">Build and manage your automated triggers.</p>
              </div>
              <button
                onClick={() => {
                  const newName = prompt("Enter a name for your new automated workflow:");
                  if (newName) {
                    setWorkflows([{ id: String(Date.now()), name: newName, status: "Active" }, ...workflows]);
                  }
                }}
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-md cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Create Workflow
              </button>
            </div>
            <div className="grid gap-2">
              {workflows.map((wf) => (
                <div
                  key={wf.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-805 text-blue-400">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-200">{wf.name}</p>
                      <p className="text-[10px] text-slate-400">Triggered instantly • Runs automatically</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setWorkflows(
                          workflows.map((w) =>
                            w.id === wf.id ? { ...w, status: w.status === "Active" ? "Inactive" : "Active" } : w
                          )
                        );
                      }}
                      className={`text-[9px] font-bold px-2 py-1 rounded-md transition-colors ${
                        wf.status === "Active"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {wf.status}
                    </button>
                    <button
                      onClick={() => setWorkflows(workflows.filter((w) => w.id !== wf.id))}
                      className="text-slate-500 hover:text-red-400 p-1.5 hover:bg-slate-950 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "integrations":
        return (
          <div className="h-full flex flex-col gap-4 overflow-y-auto pr-1">
            <div>
              <h3 className="text-xs font-bold text-white">Integrated Applications</h3>
              <p className="text-[10px] text-slate-400">Connect the tools you use every day in 1 click.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pb-3">
              {[
                { name: "Gmail", desc: "Sync threads & extract leads", isConnected: true, color: "bg-rose-500/10 text-rose-450 border-rose-500/20" },
                { name: "Slack", desc: "Automate chats & pings", isConnected: true, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
                { name: "Google Sheets", desc: "Push & pull dynamic datasets", isConnected: true, color: "bg-emerald-500/10 text-emerald-450 border-emerald-500/20" },
                { name: "Notion", desc: "Save notes & client logs", isConnected: true, color: "bg-slate-500/10 text-slate-200 border-slate-500/20" },
                { name: "Trello", desc: "Modify card steps dynamically", isConnected: false, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                { name: "HubSpot", desc: "Update contacts list in CRM", isConnected: false, color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
              ].map((app) => (
                <div key={app.name} className="bg-slate-900/40 border border-slate-800/40 rounded-xl p-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold text-white">{app.name}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-semibold ${
                        app.isConnected ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-850/60 text-slate-400"
                      }`}>
                        {app.isConnected ? "Linked" : "Disconnected"}
                      </span>
                    </div>
                    <p className="text-[9px] text-slate-400 leading-tight">{app.desc}</p>
                  </div>
                  <button className="text-center mt-3 text-[9px] font-semibold py-1 bg-slate-950/80 hover:bg-slate-950 hover:text-white transition-colors border border-slate-800 rounded-md cursor-pointer">
                    Configure
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case "suggestions":
        return (
          <div className="h-full flex flex-col gap-4 overflow-y-auto pr-1">
            <div className="flex items-center gap-2">
              <Cpu className="text-blue-400 w-4 h-4" />
              <div>
                <h3 className="text-xs font-bold text-white">AI Suggestion Intelligence</h3>
                <p className="text-[10px] text-slate-400">Custom automated suggestions parsed from your workflow patterns.</p>
              </div>
            </div>
            <div className="grid gap-3">
              {[
                { title: "Sync Gmail attachments to Google Drive folder", time: "Save ~4 hrs/wk", match: "98% Match" },
                { title: "When Stripe invoice completes, auto-update Notion client card", time: "Save ~2 hrs/wk", match: "94% Match" },
                { title: "Daily summary of unresolved Jira issues forwarded and pinged to Slack", time: "Save ~3 hrs/wk", match: "89% Match" },
              ].map((sug, i) => (
                <div key={i} className="bg-slate-900/40 border border-slate-800/40 p-3.5 rounded-xl flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-emerald-450 font-mono tracking-tight">{sug.match}</span>
                    <span className="text-[9px] text-slate-400 font-medium">{sug.time}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-200">{sug.title}</p>
                  <div className="flex items-center justify-end gap-2.5">
                    <button className="text-[9.5px] font-medium text-slate-450 hover:text-white cursor-pointer">Decline</button>
                    <button
                      onClick={() => {
                        setWorkflows([{ id: String(Date.now()), name: sug.title, status: "Active" }, ...workflows]);
                        alert(`AI Suggested workflow successfully installed under "Workflows" tab!`);
                      }}
                      className="text-[9.5px] font-semibold text-blue-400 hover:text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md cursor-pointer"
                    >
                      Approve & Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "history":
        return (
          <div className="h-full flex flex-col gap-4 overflow-y-auto pr-1">
            <div>
              <h3 className="text-xs font-bold text-white">Automation Logs</h3>
              <p className="text-[10px] text-slate-400">Full audit trail of all actions initiated in the last 24 hours.</p>
            </div>
            <div className="grid gap-1.5">
              {[
                { flow: "Gmail → Sheets", msg: "Successfully inserted lead: Sarah J.", time: "12 mins ago" },
                { flow: "Form → Trello", msg: "Created task card in 'Inbound'", time: "42 mins ago" },
                { flow: "Gmail → Drive", msg: "Uploaded invoice_8842.pdf (142 KB)", time: "2 hrs ago" },
                { flow: "Invoice → Mail", msg: "Dispatched client review confirmation", time: "4 hrs ago" },
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-center p-2 rounded-lg bg-slate-900/20 border border-slate-900/60 font-mono text-[9.5px]">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-medium">{log.flow}</span>
                    <span className="text-slate-400 truncate max-w-[180px]">{log.msg}</span>
                  </div>
                  <span className="text-slate-500 shrink-0">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="h-full flex flex-col gap-4 overflow-y-auto pr-1 text-xs">
            <div>
              <h3 className="text-xs font-bold text-white">Platform Settings</h3>
              <p className="text-[10px] text-slate-400">Configure your security, credentials, and details.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-400 font-bold">User Profile Name</label>
                <input
                  type="text"
                  defaultValue="Alex"
                  className="bg-slate-950 border border-slate-800 text-slate-200 rounded px-2 py-1 text-[11px] focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-400 font-bold">Default Timezone</label>
                <select className="bg-slate-950 border border-slate-800 text-slate-200 rounded px-2 py-1 text-[11px] focus:outline-none">
                  <option>UTC (GMT+0)</option>
                  <option>EST (GMT-5)</option>
                  <option>PST (GMT-8)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-400 font-bold">Security Token Key</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value="••••••••••••••••"
                    disabled
                    className="bg-slate-905/60 border border-slate-900 text-slate-500 rounded px-2 py-1 flex-1 text-[11px]"
                  />
                  <button className="bg-slate-800 hover:bg-slate-700 text-white text-[10px] px-2.5 rounded transition-all cursor-pointer">
                    Reveal
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full relative rounded-2xl glass-panel border border-slate-800/80 shadow-[0_0_50px_rgba(59,130,246,0.12)] overflow-hidden flex flex-col h-[320px] md:h-[400px]">
      {/* Top OS Window Bar */}
      <div className="bg-slate-950/80 border-b border-slate-900/60 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-850 border border-slate-700/50 flex items-center justify-center">
            <svg className="w-2 h-2 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 12V4h8m8 8v8h-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[10.5px] font-display font-semibold text-slate-300">Worklynk Dashboard</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-semibold text-slate-400">Simulator Active</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar Menu */}
        <aside className="w-[110px] md:w-[150px] shrink-0 bg-slate-950/40 border-r border-slate-900/50 p-2 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[10.5px] font-medium transition-all text-left cursor-pointer group ${
                    isActive
                      ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
                      : "text-slate-400 hover:text-slate-200 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-3.5 h-3.5 shrink-0 transition-transform group-hover:scale-105 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {"badge" in item && (
                    <span className={`text-[8px] font-semibold px-1 rounded transform scale-90 ${
                      item.badge === "New" ? "bg-blue-500 text-white animate-pulse" : "bg-slate-800 text-slate-400"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          
          <div className="p-1 px-2 border-t border-slate-900/40">
            <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">User Plan</p>
            <p className="text-[9.5px] text-blue-400 font-semibold truncate">Free Trial Sandbox</p>
          </div>
        </aside>

        {/* Dynamic Content Panel View */}
        <main className="flex-1 p-4.5 bg-slate-950/20 flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="flex-1 overflow-hidden"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
