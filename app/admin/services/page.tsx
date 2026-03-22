"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminShell from "@/components/admin/AdminShell";
import type { Service } from "@/lib/supabase/types";

const iconOptions = ["camera", "video", "drone", "staging", "edit"];

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

    if (id) {
      const { error } = await supabase.from("services").update(rest).eq("id", id);
      setMessage(error ? `Error: ${error.message}` : "Service updated!");
    } else {
      const { error } = await supabase.from("services").insert(rest);
      setMessage(error ? `Error: ${error.message}` : "Service created!");
    }

    setSaving(false);
    await load();
    if (!message.startsWith("Error")) setTimeout(() => setEditing(null), 500);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this service?")) return;
    await supabase.from("services").delete().eq("id", id);
    await load();
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Services</h1>
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
        <div className="space-y-4 rounded-xl bg-dark-800 border border-dark-500/30 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">{editing.id ? "Edit Service" : "New Service"}</h2>
            <button onClick={() => setEditing(null)} className="text-sm text-dark-300 hover:text-white">Cancel</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Title</label>
              <input
                value={editing.title || ""}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Icon</label>
              <select
                value={editing.icon_name || "camera"}
                onChange={(e) => setEditing({ ...editing, icon_name: e.target.value })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              >
                {iconOptions.map((icon) => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Description</label>
            <textarea
              value={editing.description || ""}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              rows={3}
              className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Sort Order</label>
            <input
              type="number"
              value={editing.sort_order || 0}
              onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
              className="w-24 rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-gold/10 border border-gold/20 px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Service"}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl bg-dark-800 border border-dark-500/30 p-4 hover:border-gold/20 transition-colors">
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-dark-300 mt-0.5">{item.icon_name} &middot; Order: {item.sort_order}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setEditing(item)} className="rounded-lg px-3 py-1.5 text-xs text-dark-200 hover:text-gold hover:bg-dark-700 transition-colors">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="rounded-lg px-3 py-1.5 text-xs text-dark-300 hover:text-red-400 hover:bg-dark-700 transition-colors">Delete</button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-sm text-dark-300 py-8 text-center">No services yet. Click &quot;Add Service&quot; to get started.</p>
          )}
        </div>
      )}
    </AdminShell>
  );
}
