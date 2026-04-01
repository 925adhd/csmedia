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

const propertyTypes = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "land", label: "Land" },
  { value: "aerial", label: "Aerial" },
  { value: "promo", label: "Promo" },
  { value: "event", label: "Event" },
];

export default function PortfolioAdmin() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [editing, setEditing] = useState<Partial<PortfolioProject> | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [dragImgIdx, setDragImgIdx] = useState<number | null>(null);
  const [dragOverImgIdx, setDragOverImgIdx] = useState<number | null>(null);

  const supabase = createClient();

  useEffect(() => { loadProjects(); }, []);

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
    let hasError = false;

    if (id) {
      const { error } = await supabase.from("portfolio_projects").update(rest).eq("id", id);
      if (error) { setMessage(`Error: ${error.message}`); hasError = true; }
      else setMessage("Project updated!");
    } else {
      const { error } = await supabase.from("portfolio_projects").insert(rest);
      if (error) { setMessage(`Error: ${error.message}`); hasError = true; }
      else setMessage("Project created!");
    }

    setSaving(false);
    await loadProjects();
    if (!hasError) setTimeout(() => setEditing(null), 500);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this project? This cannot be undone.")) return;
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

  function handleImageDrop(targetIdx: number) {
    if (dragImgIdx === null || dragImgIdx === targetIdx || !editing) {
      setDragImgIdx(null); setDragOverImgIdx(null); return;
    }
    const images = [...(editing.images || [])];
    const [moved] = images.splice(dragImgIdx, 1);
    images.splice(targetIdx, 0, moved);
    setEditing({ ...editing, images });
    setDragImgIdx(null);
    setDragOverImgIdx(null);
  }

  async function handleDrop(targetId: string) {
    if (!dragId || dragId === targetId) { setDragId(null); setDragOverId(null); return; }

    const fromIdx = projects.findIndex((p) => p.id === dragId);
    const toIdx = projects.findIndex((p) => p.id === targetId);
    if (fromIdx < 0 || toIdx < 0) return;

    // Reorder locally first for instant feedback
    const reordered = [...projects];
    const [moved] = reordered.splice(fromIdx, 1);
    reordered.splice(toIdx, 0, moved);
    setProjects(reordered);
    setDragId(null);
    setDragOverId(null);

    // Save new sort order to database
    await Promise.all(
      reordered.map((p, i) =>
        supabase.from("portfolio_projects").update({ sort_order: i + 1 }).eq("id", p.id)
      )
    );
    await loadProjects();
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          <p className="text-sm text-dark-200 mt-1">Manage your portfolio projects. These appear on the homepage and portfolio page.</p>
        </div>
        <button
          onClick={() => setEditing({ ...emptyProject, sort_order: projects.length + 1 })}
          className="rounded-lg bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors shrink-0"
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
        <div className="rounded-xl bg-dark-800 border border-dark-500/30 p-6 mt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">
              {editing.id ? "Edit Project" : "New Project"}
            </h2>
            <button onClick={() => setEditing(null)} className="text-sm text-dark-300 hover:text-white">Cancel</button>
          </div>

          {/* Basic info */}
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Project Title</label>
                <input
                  value={editing.title || ""}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  placeholder="e.g., Stone Estate Aerial"
                  className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white placeholder-dark-400 focus:border-gold/50 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">URL Slug</label>
                <input
                  value={editing.slug || ""}
                  onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                  placeholder="stone-estate-aerial"
                  className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white placeholder-dark-400 focus:border-gold/50 outline-none font-mono text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Type</label>
                <div className="flex flex-wrap gap-2">
                  {propertyTypes.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setEditing({ ...editing, property_type: t.value })}
                      className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                        editing.property_type === t.value
                          ? "bg-gold/10 border-gold/30 text-gold"
                          : "bg-dark-700 border-dark-500 text-dark-200 hover:border-dark-400"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Location</label>
                <input
                  value={editing.location || ""}
                  onChange={(e) => setEditing({ ...editing, location: e.target.value })}
                  placeholder="Kentucky"
                  className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white placeholder-dark-400 focus:border-gold/50 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Description</label>
              <textarea
                value={editing.description || ""}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                rows={3}
                placeholder="Describe this project..."
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white placeholder-dark-400 focus:border-gold/50 outline-none resize-none"
              />
            </div>

            {/* Hero image */}
            <div className="border-t border-dark-500/30 pt-5">
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Cover Photo</label>
              <p className="text-xs text-dark-300 mb-3">Main thumbnail shown on the portfolio grid and project page header</p>
              <ImageUpload
                value={editing.hero_image || ""}
                onChange={(url) => setEditing({ ...editing, hero_image: url })}
              />
            </div>

            {/* Gallery */}
            <div className="border-t border-dark-500/30 pt-5">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em]">Gallery Photos</label>
                <button onClick={addImage} className="text-xs text-gold hover:text-gold-light">+ Add Photo</button>
              </div>
              {(editing.images || []).length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(editing.images || []).map((img, i) => (
                    <div
                      key={i}
                      draggable={!!img}
                      onDragStart={() => setDragImgIdx(i)}
                      onDragOver={(e) => { e.preventDefault(); setDragOverImgIdx(i); }}
                      onDragLeave={() => setDragOverImgIdx(null)}
                      onDrop={() => handleImageDrop(i)}
                      onDragEnd={() => { setDragImgIdx(null); setDragOverImgIdx(null); }}
                      className={`relative group rounded-lg overflow-hidden bg-dark-700 border transition-colors ${
                        dragOverImgIdx === i && dragImgIdx !== i
                          ? "border-gold/50 ring-2 ring-gold/20"
                          : dragImgIdx === i
                            ? "opacity-40 border-dark-500/30"
                            : "border-dark-500/30"
                      }`}
                    >
                      {img ? (
                        <div className="relative aspect-[4/3] cursor-grab active:cursor-grabbing">
                          <img src={img} alt="" className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2 rounded-full bg-dark-900/70 px-1.5 py-0.5 text-[9px] text-dark-200 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                            {i + 1}
                          </div>
                          <button
                            onClick={() => removeImage(i)}
                            className="absolute top-2 right-2 rounded-full bg-dark-900/80 p-1.5 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Remove photo"
                          >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="aspect-[4/3] flex flex-col items-center justify-center gap-2 p-4">
                          <ImageUpload value="" onChange={(url) => updateImage(i, url)} />
                          <button
                            onClick={() => removeImage(i)}
                            className="text-[10px] text-red-400 hover:text-red-300"
                          >
                            Remove slot
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-dark-400 py-4 text-center border border-dashed border-dark-500/30 rounded-lg">
                  No gallery photos yet. Click &quot;+ Add Photo&quot; to start.
                </p>
              )}
            </div>

            {/* Videos */}
            <div className="border-t border-dark-500/30 pt-5">
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">Videos (optional)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-dark-300 mb-2">Desktop Video</p>
                  <VideoUpload
                    value={editing.video_src || ""}
                    onChange={(url) => setEditing({ ...editing, video_src: url || null })}
                  />
                </div>
                <div>
                  <p className="text-xs text-dark-300 mb-2">Mobile Video</p>
                  <VideoUpload
                    value={editing.mobile_video_src || ""}
                    onChange={(url) => setEditing({ ...editing, mobile_video_src: url || null })}
                  />
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="border-t border-dark-500/30 pt-5">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={editing.featured || false}
                  onChange={(e) => setEditing({ ...editing, featured: e.target.checked })}
                  className="rounded border-dark-500 bg-dark-700 text-gold focus:ring-gold/30 w-5 h-5"
                />
                <div>
                  <span className="text-sm font-medium text-white">Featured on homepage</span>
                  <p className="text-xs text-dark-300">This project will appear in the homepage portfolio section</p>
                </div>
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-3 border-t border-dark-500/30">
              <button
                onClick={handleSave}
                disabled={saving || !(editing.title && editing.slug)}
                className="rounded-lg bg-gold/10 border border-gold/20 px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors disabled:opacity-50"
              >
                {saving ? "Saving..." : editing.id ? "Save Changes" : "Add Project"}
              </button>
              <button onClick={() => setEditing(null)} className="rounded-lg px-4 py-2.5 text-sm text-dark-300 hover:text-white transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-2 mt-4">
          {projects.map((project) => (
            <div
              key={project.id}
              draggable
              onDragStart={() => setDragId(project.id)}
              onDragOver={(e) => { e.preventDefault(); setDragOverId(project.id); }}
              onDragLeave={() => setDragOverId(null)}
              onDrop={() => handleDrop(project.id)}
              onDragEnd={() => { setDragId(null); setDragOverId(null); }}
              className={`flex items-center gap-3 rounded-xl bg-dark-800 border p-3 transition-colors group ${
                dragOverId === project.id && dragId !== project.id
                  ? "border-gold/50 bg-gold/5"
                  : dragId === project.id
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

              {/* Thumbnail */}
              {project.hero_image && (
                <div className="relative w-20 h-14 rounded-lg overflow-hidden bg-dark-700 shrink-0">
                  <img src={project.hero_image} alt="" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white truncate">{project.title}</p>
                  {project.featured && (
                    <span className="rounded-full bg-gold/10 border border-gold/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-gold shrink-0">
                      Featured
                    </span>
                  )}
                  {project.video_src && (
                    <span className="rounded-full bg-dark-600 px-2 py-0.5 text-[9px] font-medium text-dark-200 shrink-0">
                      Video
                    </span>
                  )}
                </div>
                <p className="text-xs text-dark-300 mt-0.5">
                  {project.property_type} · {project.location} · {project.images.length} photos
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setEditing(project)}
                  className="rounded-lg p-2 text-dark-200 hover:text-gold hover:bg-dark-700 transition-colors"
                  title="Edit"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
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
          {projects.length === 0 && (
            <div className="text-center py-12 rounded-xl bg-dark-800 border border-dashed border-dark-500/30">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p className="text-sm text-dark-300">No projects yet</p>
              <p className="text-xs text-dark-400 mt-1">Add your first project to show it on the site</p>
            </div>
          )}
        </div>
      )}
    </AdminShell>
  );
}
