"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminShell from "@/components/admin/AdminShell";
import ImageUpload from "@/components/admin/ImageUpload";
import VideoUpload from "@/components/admin/VideoUpload";
import type { PortfolioProject } from "@/lib/supabase/types";

const emptyProject: Omit<PortfolioProject, "id" | "created_at" | "updated_at"> = {
  slug: "",
  title: "",
  property_type: "residential",
  location: "",
  description: "",
  hero_image: "",
  images: [],
  video_src: null,
  mobile_video_src: null,
  featured: false,
  sort_order: 0,
};

const propertyTypes = ["residential", "commercial", "land", "video", "aerial", "promo", "event"];

export default function PortfolioAdmin() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [editing, setEditing] = useState<Partial<PortfolioProject> | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const supabase = createClient();

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const { data } = await supabase
      .from("portfolio_projects")
      .select("*")
      .order("sort_order", { ascending: true });
    setProjects(data || []);
  }

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    setMessage("");

    const { id, created_at, updated_at, ...rest } = editing as PortfolioProject;

    if (id) {
      const { error } = await supabase
        .from("portfolio_projects")
        .update(rest)
        .eq("id", id);
      if (error) setMessage(`Error: ${error.message}`);
      else setMessage("Project updated!");
    } else {
      const { error } = await supabase
        .from("portfolio_projects")
        .insert(rest);
      if (error) setMessage(`Error: ${error.message}`);
      else setMessage("Project created!");
    }

    setSaving(false);
    await loadProjects();
    if (!message.startsWith("Error")) setTimeout(() => setEditing(null), 500);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this project?")) return;
    await supabase.from("portfolio_projects").delete().eq("id", id);
    await loadProjects();
  }

  function addImage() {
    if (!editing) return;
    setEditing({ ...editing, images: [...(editing.images || []), ""] });
  }

  function updateImage(index: number, url: string) {
    if (!editing) return;
    const images = [...(editing.images || [])];
    images[index] = url;
    setEditing({ ...editing, images });
  }

  function removeImage(index: number) {
    if (!editing) return;
    const images = [...(editing.images || [])];
    images.splice(index, 1);
    setEditing({ ...editing, images });
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        <button
          onClick={() => setEditing({ ...emptyProject, sort_order: projects.length + 1 })}
          className="rounded-lg bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors"
        >
          + Add Project
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
            <h2 className="text-lg font-bold text-white">
              {editing.id ? "Edit Project" : "New Project"}
            </h2>
            <button onClick={() => setEditing(null)} className="text-sm text-dark-300 hover:text-white">
              Cancel
            </button>
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
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Slug</label>
              <input
                value={editing.slug || ""}
                onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                placeholder="auto-generated-from-title"
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Property Type</label>
              <select
                value={editing.property_type || "residential"}
                onChange={(e) => setEditing({ ...editing, property_type: e.target.value })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Location</label>
              <input
                value={editing.location || ""}
                onChange={(e) => setEditing({ ...editing, location: e.target.value })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              />
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
            <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Hero Image</label>
            <ImageUpload
              value={editing.hero_image || ""}
              onChange={(url) => setEditing({ ...editing, hero_image: url })}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em]">Gallery Images</label>
              <button onClick={addImage} className="text-xs text-gold hover:text-gold-light">+ Add Image</button>
            </div>
            <div className="space-y-3">
              {(editing.images || []).map((img, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-1">
                    <ImageUpload value={img} onChange={(url) => updateImage(i, url)} />
                  </div>
                  <button onClick={() => removeImage(i)} className="mt-1 text-xs text-red-400 hover:text-red-300">Remove</button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Video (optional)</label>
              <VideoUpload
                value={editing.video_src || ""}
                onChange={(url) => setEditing({ ...editing, video_src: url || null })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Mobile Video (optional)</label>
              <VideoUpload
                value={editing.mobile_video_src || ""}
                onChange={(url) => setEditing({ ...editing, mobile_video_src: url || null })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Sort Order</label>
              <input
                type="number"
                value={editing.sort_order || 0}
                onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editing.featured || false}
                  onChange={(e) => setEditing({ ...editing, featured: e.target.checked })}
                  className="rounded border-dark-500 bg-dark-700 text-gold focus:ring-gold/30"
                />
                <span className="text-sm text-dark-200">Featured on homepage</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-gold/10 border border-gold/20 px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Project"}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between rounded-xl bg-dark-800 border border-dark-500/30 p-4 hover:border-gold/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                {project.hero_image && (
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-dark-700 shrink-0">
                    <img src={project.hero_image} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-white">{project.title}</p>
                  <p className="text-xs text-dark-300">{project.property_type} &middot; {project.location}</p>
                </div>
                {project.featured && (
                  <span className="rounded-full bg-gold/10 border border-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gold">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditing(project)}
                  className="rounded-lg px-3 py-1.5 text-xs text-dark-200 hover:text-gold hover:bg-dark-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="rounded-lg px-3 py-1.5 text-xs text-dark-300 hover:text-red-400 hover:bg-dark-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <p className="text-sm text-dark-300 py-8 text-center">No projects yet. Click &quot;Add Project&quot; to get started.</p>
          )}
        </div>
      )}
    </AdminShell>
  );
}
