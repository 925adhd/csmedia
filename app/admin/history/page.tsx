"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminShell from "@/components/admin/AdminShell";
import { defaultContent } from "@/lib/default-content";

interface HistoryEntry {
  id: string;
  page: string;
  section: string;
  content: Record<string, unknown>;
  changed_at: string;
}

const sectionLabels: Record<string, string> = {
  "home:hero": "Homepage — Hero",
  "home:services": "Homepage — Services",
  "home:staging": "Homepage — Staging",
  "home:recent_work": "Homepage — Recent Work",
  "home:testimonials": "Homepage — Testimonials",
  "home:stats": "Homepage — Stats",
  "about:header": "About — Header",
  "about:bio": "About — Bio",
  "about:trust_points": "About — Trust Points",
  "about:cta": "About — CTA",
  "services:header": "Services — Header",
  "services:pricing": "Services — Pricing",
  "services:videography": "Services — Videography",
  "services:editing": "Services — Editing",
  "services:staging": "Services — Staging",
  "services:cta": "Services — CTA",
  "contact:header": "Contact — Header",
  "contact:sidebar": "Contact — Sidebar",
  "contact:form": "Contact — Form",
};

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [resetting, setResetting] = useState(false);
  const [restoring, setRestoring] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);
  const [filter, setFilter] = useState("all");

  const supabase = createClient();

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    const { data } = await supabase
      .from("content_history")
      .select("*")
      .order("changed_at", { ascending: false })
      .limit(100);
    setHistory(data || []);
    setLoading(false);
  }

  async function restoreVersion(entry: HistoryEntry) {
    if (!confirm(`Restore ${sectionLabels[`${entry.page}:${entry.section}`] || `${entry.page}:${entry.section}`} to this version?`)) return;

    setRestoring(entry.id);
    const { error } = await supabase
      .from("page_content")
      .update({ content: entry.content })
      .eq("page", entry.page)
      .eq("section", entry.section);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Restored successfully! Refresh the page to see changes.");
      await loadHistory();
    }
    setRestoring(null);
  }

  async function resetToDefaults() {
    setResetting(true);
    setMessage("");

    let errors = 0;
    for (const [page, sections] of Object.entries(defaultContent)) {
      for (const [section, content] of Object.entries(sections)) {
        const { error } = await supabase
          .from("page_content")
          .update({ content })
          .eq("page", page)
          .eq("section", section);

        if (error) {
          // Row might not exist, try upsert
          const { error: upsertError } = await supabase
            .from("page_content")
            .upsert({ page, section, content }, { onConflict: "page,section" });
          if (upsertError) errors++;
        }
      }
    }

    setResetting(false);
    setConfirmReset(false);

    if (errors > 0) {
      setMessage(`Reset completed with ${errors} errors.`);
    } else {
      setMessage("All content reset to defaults! Refresh the site to see changes.");
    }
    await loadHistory();
  }

  const pages = [...new Set(history.map((h) => h.page))];
  const filtered = filter === "all" ? history : history.filter((h) => h.page === filter);

  function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return new Date(dateStr).toLocaleDateString();
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Content History</h1>
        {confirmReset ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-red-400">Reset ALL content to original?</span>
            <button
              onClick={resetToDefaults}
              disabled={resetting}
              className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-50"
            >
              {resetting ? "Resetting..." : "Yes, Reset"}
            </button>
            <button
              onClick={() => setConfirmReset(false)}
              className="rounded-lg px-3 py-2 text-sm text-dark-300 hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmReset(true)}
            className="rounded-lg bg-dark-700 border border-dark-500/50 px-4 py-2 text-sm font-semibold text-dark-200 hover:text-white hover:border-red-500/30 transition-colors"
          >
            Reset to Defaults
          </button>
        )}
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${message.startsWith("Error") ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-green-500/10 text-green-400 border border-green-500/20"}`}>
          {message}
        </div>
      )}

      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
            filter === "all" ? "bg-gold/10 text-gold border border-gold/20" : "text-dark-300 hover:text-white"
          }`}
        >
          All
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setFilter(page)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors capitalize whitespace-nowrap ${
              filter === page ? "bg-gold/10 text-gold border border-gold/20" : "text-dark-300 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-sm text-dark-300 py-8 text-center">Loading history...</p>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-dark-300 text-sm">No edit history yet.</p>
          <p className="text-dark-400 text-xs mt-1">History is saved automatically every time content is edited.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl bg-dark-800 border border-dark-500/30 p-4 hover:border-gold/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">
                    {sectionLabels[`${entry.page}:${entry.section}`] || `${entry.page} — ${entry.section}`}
                  </p>
                  <p className="text-xs text-dark-400 mt-0.5">{timeAgo(entry.changed_at)}</p>
                  <div className="mt-2 max-h-20 overflow-hidden relative">
                    <pre className="text-xs text-dark-300 font-mono whitespace-pre-wrap break-all">
                      {JSON.stringify(entry.content, null, 2).slice(0, 200)}
                      {JSON.stringify(entry.content, null, 2).length > 200 && "..."}
                    </pre>
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-dark-800 to-transparent" />
                  </div>
                </div>
                <button
                  onClick={() => restoreVersion(entry)}
                  disabled={restoring === entry.id}
                  className="shrink-0 rounded-lg bg-dark-700 border border-dark-500/50 px-3 py-1.5 text-xs text-dark-200 hover:text-gold hover:border-gold/30 transition-colors disabled:opacity-50"
                >
                  {restoring === entry.id ? "Restoring..." : "Restore"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
