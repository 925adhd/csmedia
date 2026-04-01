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
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

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
    let hasError = false;

    if (id) {
      const { error } = await supabase.from("testimonials").update(rest).eq("id", id);
      if (error) { setMessage(`Error: ${error.message}`); hasError = true; }
      else setMessage("Testimonial updated!");
    } else {
      const { error } = await supabase.from("testimonials").insert(rest);
      if (error) { setMessage(`Error: ${error.message}`); hasError = true; }
      else setMessage("Testimonial created!");
    }

    setSaving(false);
    await load();
    if (!hasError) setTimeout(() => setEditing(null), 500);
  }

  async function handleDrop(targetId: string) {
    if (!dragId || dragId === targetId) { setDragId(null); setDragOverId(null); return; }

    const fromIdx = items.findIndex((i) => i.id === dragId);
    const toIdx = items.findIndex((i) => i.id === targetId);
    if (fromIdx < 0 || toIdx < 0) return;

    const reordered = [...items];
    const [moved] = reordered.splice(fromIdx, 1);
    reordered.splice(toIdx, 0, moved);
    setItems(reordered);
    setDragId(null);
    setDragOverId(null);

    await Promise.all(
      reordered.map((item, i) =>
        supabase.from("testimonials").update({ sort_order: i + 1 }).eq("id", item.id)
      )
    );
    await load();
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
            <div
              key={item.id}
              draggable
              onDragStart={() => setDragId(item.id)}
              onDragOver={(e) => { e.preventDefault(); setDragOverId(item.id); }}
              onDragLeave={() => setDragOverId(null)}
              onDrop={() => handleDrop(item.id)}
              onDragEnd={() => { setDragId(null); setDragOverId(null); }}
              className={`flex items-center gap-3 rounded-xl bg-dark-800 border p-4 transition-colors group ${
                dragOverId === item.id && dragId !== item.id
                  ? "border-gold/50 bg-gold/5"
                  : dragId === item.id
                    ? "opacity-40 border-dark-500/30"
                    : "border-dark-500/30 hover:border-gold/20"
              }`}
            >
              {/* Drag handle */}
              <div className="shrink-0 text-dark-500 hover:text-dark-300 cursor-grab active:cursor-grabbing">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">&ldquo;{item.quote.slice(0, 80)}...&rdquo;</p>
                <p className="text-xs text-dark-300 mt-1">{item.name} &middot; {item.service}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setEditing(item)}
                  className="rounded-lg p-2 text-dark-200 hover:text-gold hover:bg-dark-700 transition-colors"
                  title="Edit"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="rounded-lg p-2 text-dark-300 hover:text-red-400 hover:bg-dark-700 transition-colors"
                  title="Delete"
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
              <p className="text-sm text-dark-300">No testimonials yet</p>
              <p className="text-xs text-dark-400 mt-1">Add your first testimonial to show it on the homepage</p>
            </div>
          )}
        </div>
      )}
    </AdminShell>
  );
}
