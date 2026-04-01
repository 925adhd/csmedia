"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminShell from "@/components/admin/AdminShell";
import type { Service } from "@/lib/supabase/types";

const iconOptions = [
  { value: "camera", label: "Camera (Photography)" },
  { value: "video", label: "Video (Videography)" },
  { value: "drone", label: "Drone (Aerial)" },
  { value: "staging", label: "Image (Virtual Staging)" },
  { value: "edit", label: "Brush (Video Editing)" },
];

function ServiceIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  switch (name) {
    case "camera":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      );
    case "video":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      );
    case "drone":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      );
    case "staging":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21zM10.5 8.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      );
    case "edit":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      );
    default:
      return null;
  }
}

const emptyService: Omit<Service, "id" | "created_at" | "updated_at"> = {
  title: "",
  description: "",
  icon_name: "camera",
  sort_order: 0,
};

export default function ServicesAdmin() {
  const [items, setItems] = useState<Service[]>([]);
  const [editing, setEditing] = useState<Partial<Service> | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const supabase = createClient();

  useEffect(() => { load(); }, []);

  async function load() {
    const { data } = await supabase.from("services").select("*").order("sort_order", { ascending: true });
    setItems(data || []);
  }

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    setMessage("");

    const { id, created_at, updated_at, ...rest } = editing as Service;
    let hasError = false;

    if (id) {
      const { error } = await supabase.from("services").update(rest).eq("id", id);
      if (error) { setMessage(`Error: ${error.message}`); hasError = true; }
      else setMessage("Service updated!");
    } else {
      const { error } = await supabase.from("services").insert(rest);
      if (error) { setMessage(`Error: ${error.message}`); hasError = true; }
      else setMessage("Service created!");
    }

    setSaving(false);
    await load();
    if (!hasError) setTimeout(() => setEditing(null), 500);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this service? This will remove it from the homepage.")) return;
    await supabase.from("services").delete().eq("id", id);
    await load();
  }

  async function moveItem(id: string, direction: "up" | "down") {
    const idx = items.findIndex((i) => i.id === id);
    if (idx < 0) return;
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= items.length) return;

    const currentOrder = items[idx].sort_order;
    const swapOrder = items[swapIdx].sort_order;

    await Promise.all([
      supabase.from("services").update({ sort_order: swapOrder }).eq("id", items[idx].id),
      supabase.from("services").update({ sort_order: currentOrder }).eq("id", items[swapIdx].id),
    ]);
    await load();
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-2xl font-bold text-white">Services</h1>
          <p className="text-sm text-dark-300 mt-1">These show as cards on your homepage. Drag the arrows to reorder.</p>
        </div>
        <button
          onClick={() => setEditing({ ...emptyService, sort_order: items.length + 1 })}
          className="rounded-lg bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors"
        >
          + Add Service
        </button>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${message.startsWith("Error") ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-green-500/10 text-green-400 border border-green-500/20"}`}>
          {message}
        </div>
      )}

      {editing ? (
        <div className="space-y-5 rounded-xl bg-dark-800 border border-dark-500/30 p-6 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">{editing.id ? "Edit Service" : "New Service"}</h2>
            <button onClick={() => setEditing(null)} className="text-sm text-dark-300 hover:text-white">Cancel</button>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Service Name</label>
            <input
              value={editing.title || ""}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              placeholder="e.g., Photography, Drone, Video Editing"
              className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white placeholder-dark-400 focus:border-gold/50 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">Icon</label>
            <div className="flex flex-wrap gap-2">
              {iconOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setEditing({ ...editing, icon_name: opt.value })}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition-colors ${
                    editing.icon_name === opt.value
                      ? "bg-gold/10 border-gold/30 text-gold"
                      : "bg-dark-700 border-dark-500 text-dark-200 hover:border-dark-400"
                  }`}
                >
                  <ServiceIcon name={opt.value} className="w-4 h-4" />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Description</label>
            <textarea
              value={editing.description || ""}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              rows={3}
              placeholder="Brief description of this service..."
              className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white placeholder-dark-400 focus:border-gold/50 outline-none resize-none"
            />
            <p className="text-[10px] text-dark-400 mt-1">{(editing.description || "").length} characters</p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleSave}
              disabled={saving || !(editing.title && editing.description)}
              className="rounded-lg bg-gold/10 border border-gold/20 px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors disabled:opacity-50"
            >
              {saving ? "Saving..." : editing.id ? "Save Changes" : "Add Service"}
            </button>
            <button onClick={() => setEditing(null)} className="rounded-lg px-4 py-2.5 text-sm text-dark-300 hover:text-white transition-colors">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2 mt-4">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-xl bg-dark-800 border border-dark-500/30 p-4 hover:border-gold/20 transition-colors group"
            >
              {/* Reorder arrows */}
              <div className="flex flex-col gap-0.5 shrink-0">
                <button
                  onClick={() => moveItem(item.id, "up")}
                  disabled={idx === 0}
                  className="p-1 text-dark-400 hover:text-gold disabled:opacity-20 disabled:hover:text-dark-400 transition-colors"
                  title="Move up"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </button>
                <button
                  onClick={() => moveItem(item.id, "down")}
                  disabled={idx === items.length - 1}
                  className="p-1 text-dark-400 hover:text-gold disabled:opacity-20 disabled:hover:text-dark-400 transition-colors"
                  title="Move down"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold shrink-0">
                <ServiceIcon name={item.icon_name} className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-dark-300 mt-0.5 line-clamp-1">{item.description}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setEditing(item)}
                  className="rounded-lg p-2 text-dark-200 hover:text-gold hover:bg-dark-700 transition-colors"
                  title="Edit service"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="rounded-lg p-2 text-dark-300 hover:text-red-400 hover:bg-dark-700 transition-colors"
                  title="Delete service"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-center py-12 rounded-xl bg-dark-800 border border-dashed border-dark-500/30">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p className="text-sm text-dark-300">No services yet</p>
              <p className="text-xs text-dark-400 mt-1">Add your first service to show it on the homepage</p>
            </div>
          )}
        </div>
      )}
    </AdminShell>
  );
}
