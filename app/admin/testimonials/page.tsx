"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminShell from "@/components/admin/AdminShell";
import type { Testimonial } from "@/lib/supabase/types";

const emptyTestimonial: Omit<Testimonial, "id" | "created_at" | "updated_at"> = {
  quote: "",
  name: "",
  badge: "Recommends CS MEDIA, LLC",
  service: "",
  sort_order: 0,
};

export default function TestimonialsAdmin() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [editing, setEditing] = useState<Partial<Testimonial> | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const supabase = createClient();

  useEffect(() => { load(); }, []);

  async function load() {
    const { data } = await supabase.from("testimonials").select("*").order("sort_order", { ascending: true });
    setItems(data || []);
  }

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    setMessage("");

    const { id, created_at, updated_at, ...rest } = editing as Testimonial;

    if (id) {
      const { error } = await supabase.from("testimonials").update(rest).eq("id", id);
      setMessage(error ? `Error: ${error.message}` : "Testimonial updated!");
    } else {
      const { error } = await supabase.from("testimonials").insert(rest);
      setMessage(error ? `Error: ${error.message}` : "Testimonial created!");
    }

    setSaving(false);
    await load();
    if (!message.startsWith("Error")) setTimeout(() => setEditing(null), 500);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    await supabase.from("testimonials").delete().eq("id", id);
    await load();
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Testimonials</h1>
        <button
          onClick={() => setEditing({ ...emptyTestimonial, sort_order: items.length + 1 })}
          className="rounded-lg bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors"
        >
          + Add Testimonial
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
            <h2 className="text-lg font-bold text-white">{editing.id ? "Edit Testimonial" : "New Testimonial"}</h2>
            <button onClick={() => setEditing(null)} className="text-sm text-dark-300 hover:text-white">Cancel</button>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Quote</label>
            <textarea
              value={editing.quote || ""}
              onChange={(e) => setEditing({ ...editing, quote: e.target.value })}
              rows={4}
              className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Name</label>
              <input
                value={editing.name || ""}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Service</label>
              <input
                value={editing.service || ""}
                onChange={(e) => setEditing({ ...editing, service: e.target.value })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
                placeholder="e.g., Video Production"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Badge Text</label>
              <input
                value={editing.badge || ""}
                onChange={(e) => setEditing({ ...editing, badge: e.target.value })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Sort Order</label>
              <input
                type="number"
                value={editing.sort_order || 0}
                onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-gold/10 border border-gold/20 px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Testimonial"}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl bg-dark-800 border border-dark-500/30 p-4 hover:border-gold/20 transition-colors">
              <div className="flex-1 min-w-0 mr-4">
                <p className="text-sm text-white truncate">&ldquo;{item.quote.slice(0, 80)}...&rdquo;</p>
                <p className="text-xs text-dark-300 mt-1">{item.name} &middot; {item.service}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => setEditing(item)} className="rounded-lg px-3 py-1.5 text-xs text-dark-200 hover:text-gold hover:bg-dark-700 transition-colors">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="rounded-lg px-3 py-1.5 text-xs text-dark-300 hover:text-red-400 hover:bg-dark-700 transition-colors">Delete</button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-sm text-dark-300 py-8 text-center">No testimonials yet. Click &quot;Add Testimonial&quot; to get started.</p>
          )}
        </div>
      )}
    </AdminShell>
  );
}
