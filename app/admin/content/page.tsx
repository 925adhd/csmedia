"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminShell from "@/components/admin/AdminShell";

interface ContentSection {
  id: string;
  page: string;
  section: string;
  content: Record<string, unknown>;
}

const sectionLabels: Record<string, string> = {
  "home:hero": "Hero Banner",
  "home:services": "Services Section",
  "home:staging": "Virtual Staging",
  "home:recent_work": "Recent Work",
  "home:testimonials": "Testimonials",
  "home:stats": "Stats Bar",
  "about:header": "Page Header",
  "about:bio": "Bio Section",
  "about:trust_points": "Trust Points",
  "about:cta": "Call to Action",
  "services:header": "Page Header",
  "services:pricing": "Pricing Packages",
  "services:videography": "Videography",
  "services:editing": "Video Editing",
  "services:staging": "Virtual Staging",
  "services:cta": "Call to Action",
  "contact:header": "Page Header",
  "contact:sidebar": "Sidebar Info",
  "contact:form": "Form Settings",
};

const sectionDescriptions: Record<string, string> = {
  "home:hero": "Main headline, tagline, and subtitle visitors see first",
  "home:services": "Section heading above your service cards",
  "home:staging": "Before/after staging section text and features",
  "home:recent_work": "Portfolio preview section heading and links",
  "home:testimonials": "Reviews section heading and rating display",
  "home:stats": "The 4 stat numbers (FAA, turnaround, etc.)",
  "about:header": "Top of the About page",
  "about:bio": "Your personal bio and story",
  "about:trust_points": "Why choose us differentiators",
  "about:cta": "Bottom call-to-action banner",
  "services:header": "Top of the Services page",
  "services:pricing": "Photography package names, prices, and features",
  "services:videography": "Videography service details and pricing",
  "services:editing": "Video editing service details and pricing",
  "services:staging": "Virtual staging service details and pricing",
  "services:cta": "Bottom call-to-action banner",
  "contact:header": "Top of the Contact page",
  "contact:sidebar": "Contact info shown beside the form",
  "contact:form": "Form success message and dropdown options",
};

const pageConfig: { key: string; label: string; icon: React.ReactNode; description: string }[] = [
  {
    key: "home",
    label: "Homepage",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    description: "Hero, services preview, staging, portfolio, testimonials, stats",
  },
  {
    key: "about",
    label: "About",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    description: "Your story, bio, and trust points",
  },
  {
    key: "services",
    label: "Services",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    description: "Pricing, videography, editing, staging details",
  },
  {
    key: "contact",
    label: "Contact",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    description: "Form settings, sidebar info, page header",
  },
];

const fieldLabels: Record<string, Record<string, string>> = {
  "home:hero": { tagline: "Top Tagline", heading_line1: "Heading Line 1", heading_line2: "Heading Line 2 (gold)", heading_line3: "Heading Line 3", subtext: "Subtitle Text", phone: "Phone Number" },
  "home:services": { tagline: "Section Tagline", heading: "Heading", heading_gold: "Heading (gold text)" },
  "home:staging": { tagline: "Section Tagline", heading: "Heading", heading_gold: "Heading (gold text)", description: "Description", features: "Feature List", cta_text: "Button Text" },
  "home:recent_work": { tagline: "Section Tagline", heading: "Section Heading", view_all_text: "View All Link Text", view_full_text: "View Full Portfolio Link Text" },
  "home:testimonials": { tagline: "Section Tagline", heading: "Section Heading", rating: "Star Rating Text" },
  "about:header": { tagline: "Page Tagline", heading: "Heading", heading_gold: "Heading (gold text)" },
  "about:bio": { tagline: "Section Tagline", heading: "Heading", heading_gold: "Name (gold text)", paragraphs: "Bio Paragraphs", phone: "Phone Number" },
  "about:trust_points": { tagline: "Section Tagline", heading: "Section Heading", points: "Trust Points" },
  "about:cta": { heading: "Heading", subheading: "Subheading" },
  "services:header": { tagline: "Page Tagline", heading: "Heading", subtext: "Subtitle Text" },
  "services:pricing": { tagline: "Section Tagline", heading: "Section Heading", packages: "Pricing Packages", fine_print: "Fine Print Notes" },
  "services:videography": { heading: "Heading", description: "Description", price_text: "Price Text", included: "What's Included", ideal_for: "Ideal For" },
  "services:editing": { heading: "Heading", description: "Description", price_text: "Price Text", included: "What's Included", ideal_for: "Ideal For" },
  "services:staging": { heading: "Heading", description: "Description", price_text: "Price Text", included: "What's Included", ideal_for: "Ideal For" },
  "services:cta": { heading: "Heading", subheading: "Subheading", button_text: "Button Text" },
  "contact:header": { tagline: "Page Tagline", heading: "Heading", subtext: "Subtitle Text", phone: "Phone Number" },
  "contact:sidebar": { phone: "Phone Number", email: "Email Address", services: "Services List", response_time: "Response Time", company_name: "Company Name", company_type: "Company Type" },
  "contact:form": { success_heading: "Success Heading", success_message: "Success Message", submit_text: "Submit Button Text", services: "Service Options (dropdown)" },
};

export default function ContentAdmin() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [editing, setEditing] = useState<ContentSection | null>(null);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [expandedPages, setExpandedPages] = useState<Set<string>>(new Set(["home"]));

  const supabase = createClient();

  useEffect(() => { load(); }, []);

  async function load() {
    const { data } = await supabase.from("page_content").select("*").order("page");
    setSections(data || []);
  }

  function togglePage(page: string) {
    setExpandedPages((prev) => {
      const next = new Set(prev);
      if (next.has(page)) next.delete(page);
      else next.add(page);
      return next;
    });
  }

  function startEdit(section: ContentSection) {
    setEditing(section);
    setFormData(JSON.parse(JSON.stringify(section.content)));
    setMessage("");
  }

  function updateField(key: string, value: unknown) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function updateListItem(key: string, index: number, value: string) {
    const list = [...(formData[key] as string[])];
    list[index] = value;
    setFormData((prev) => ({ ...prev, [key]: list }));
  }

  function addListItem(key: string) {
    const list = [...(formData[key] as string[]), ""];
    setFormData((prev) => ({ ...prev, [key]: list }));
  }

  function removeListItem(key: string, index: number) {
    const list = [...(formData[key] as string[])];
    list.splice(index, 1);
    setFormData((prev) => ({ ...prev, [key]: list }));
  }

  function updateStatField(index: number, field: string, value: string) {
    const stats = [...(formData as unknown as Array<Record<string, string>>)];
    stats[index] = { ...stats[index], [field]: value };
    setFormData(Object.assign([], stats) as unknown as Record<string, unknown>);
  }

  function updateObjectListField(key: string, index: number, field: string, value: unknown) {
    const list = [...(formData[key] as Array<Record<string, unknown>>)];
    list[index] = { ...list[index], [field]: value };
    setFormData((prev) => ({ ...prev, [key]: list }));
  }

  function updateObjectListNestedItem(key: string, index: number, field: string, itemIndex: number, value: string) {
    const list = [...(formData[key] as Array<Record<string, unknown>>)];
    const arr = [...(list[index][field] as string[])];
    arr[itemIndex] = value;
    list[index] = { ...list[index], [field]: arr };
    setFormData((prev) => ({ ...prev, [key]: list }));
  }

  function addObjectListNestedItem(key: string, index: number, field: string) {
    const list = [...(formData[key] as Array<Record<string, unknown>>)];
    const arr = [...(list[index][field] as string[]), ""];
    list[index] = { ...list[index], [field]: arr };
    setFormData((prev) => ({ ...prev, [key]: list }));
  }

  function removeObjectListNestedItem(key: string, index: number, field: string, itemIndex: number) {
    const list = [...(formData[key] as Array<Record<string, unknown>>)];
    const arr = [...(list[index][field] as string[])];
    arr.splice(itemIndex, 1);
    list[index] = { ...list[index], [field]: arr };
    setFormData((prev) => ({ ...prev, [key]: list }));
  }

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    setMessage("");

    const { error } = await supabase
      .from("page_content")
      .update({ content: formData })
      .eq("id", editing.id);

    setMessage(error ? `Error: ${error.message}` : "Content updated!");
    setSaving(false);
    await load();
    if (!error) setTimeout(() => setEditing(null), 500);
  }

  const sectionKey = editing ? `${editing.page}:${editing.section}` : "";
  const labels = fieldLabels[sectionKey] || {};
  const isStats = sectionKey === "home:stats";

  function renderField(key: string, value: unknown) {
    const label = labels[key] || key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    // Array of objects with title/description (trust points)
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object" && value[0] !== null && "title" in value[0] && "description" in value[0] && !("price" in value[0])) {
      return (
        <div key={key}>
          <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">{label}</label>
          <div className="space-y-3">
            {(formData[key] as Array<Record<string, string>>).map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-dark-700/50 border border-dark-500/20 space-y-3">
                <div>
                  <label className="block text-[10px] font-semibold text-dark-300 uppercase tracking-wider mb-1">Title</label>
                  <input value={item.title || ""} onChange={(e) => updateObjectListField(key, i, "title", e.target.value)} className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-dark-300 uppercase tracking-wider mb-1">Description</label>
                  <textarea value={item.description || ""} onChange={(e) => updateObjectListField(key, i, "description", e.target.value)} rows={2} className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none resize-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Array of pricing packages
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object" && value[0] !== null && "price" in value[0]) {
      return (
        <div key={key}>
          <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">{label}</label>
          <div className="space-y-4">
            {(formData[key] as Array<Record<string, unknown>>).map((pkg, i) => (
              <div key={i} className="p-4 rounded-lg bg-dark-700/50 border border-dark-500/20 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-dark-300 uppercase tracking-wider mb-1">Package Name</label>
                    <input value={(pkg.name as string) || ""} onChange={(e) => updateObjectListField(key, i, "name", e.target.value)} className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-dark-300 uppercase tracking-wider mb-1">Price</label>
                    <input value={(pkg.price as string) || ""} onChange={(e) => updateObjectListField(key, i, "price", e.target.value)} className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none" />
                  </div>
                </div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={(pkg.popular as boolean) || false} onChange={(e) => updateObjectListField(key, i, "popular", e.target.checked)} className="rounded border-dark-500 bg-dark-700 text-gold focus:ring-gold/30" />
                  <span className="text-xs text-dark-200">Mark as Popular</span>
                </label>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[10px] font-semibold text-dark-300 uppercase tracking-wider">Features</label>
                    <button onClick={() => addObjectListNestedItem(key, i, "features")} className="text-xs text-gold hover:text-gold-light">+ Add</button>
                  </div>
                  <div className="space-y-2">
                    {((pkg.features as string[]) || []).map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2">
                        <input value={feat} onChange={(e) => updateObjectListNestedItem(key, i, "features", fi, e.target.value)} className="flex-1 rounded-lg bg-dark-700 border border-dark-500 px-3 py-2 text-sm text-white focus:border-gold/50 outline-none" />
                        <button onClick={() => removeObjectListNestedItem(key, i, "features", fi)} className="text-xs text-red-400 hover:text-red-300 px-2">Remove</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Array of strings
    if (Array.isArray(value) && (value.length === 0 || typeof value[0] === "string")) {
      return (
        <div key={key}>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em]">{label}</label>
            <button onClick={() => addListItem(key)} className="text-xs text-gold hover:text-gold-light">+ Add Item</button>
          </div>
          <div className="space-y-2">
            {(value as string[]).map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <input value={item} onChange={(e) => updateListItem(key, i, e.target.value)} className="flex-1 rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none" />
                <button onClick={() => removeListItem(key, i)} className="text-xs text-red-400 hover:text-red-300 px-2">Remove</button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Long text
    if (typeof value === "string" && value.length > 80) {
      return (
        <div key={key}>
          <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">{label}</label>
          <textarea value={formData[key] as string} onChange={(e) => updateField(key, e.target.value)} rows={3} className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none resize-none" />
        </div>
      );
    }

    // Short text
    if (typeof value === "string") {
      return (
        <div key={key}>
          <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">{label}</label>
          <input value={formData[key] as string} onChange={(e) => updateField(key, e.target.value)} className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none" />
        </div>
      );
    }

    return null;
  }

  function renderStatsEditor() {
    const stats = formData as unknown as Array<Record<string, string>>;
    if (!Array.isArray(stats)) return null;

    return (
      <div className="space-y-4">
        {stats.map((stat, i) => (
          <div key={i} className="grid grid-cols-2 gap-3 p-4 rounded-lg bg-dark-700/50 border border-dark-500/20">
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Value</label>
              <input value={stat.value || ""} onChange={(e) => updateStatField(i, "value", e.target.value)} className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none" placeholder="e.g., Part 107" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Label</label>
              <input value={stat.label || ""} onChange={(e) => updateStatField(i, "label", e.target.value)} className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none" placeholder="e.g., FAA Certified" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Group sections by page
  const sectionsByPage = sections.reduce<Record<string, ContentSection[]>>((acc, s) => {
    (acc[s.page] = acc[s.page] || []).push(s);
    return acc;
  }, {});

  return (
    <AdminShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Page Content</h1>
        <p className="text-sm text-dark-300 mt-1">Edit text, headlines, and copy across the site. Click a page to expand its sections.</p>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${message.startsWith("Error") ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-green-500/10 text-green-400 border border-green-500/20"}`}>
          {message}
        </div>
      )}

      {editing ? (
        <div className="space-y-5 rounded-xl bg-dark-800 border border-dark-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-dark-300 font-mono uppercase tracking-wider">
                {editing.page}
              </p>
              <h2 className="text-lg font-bold text-white">
                {sectionLabels[sectionKey] || editing.section}
              </h2>
            </div>
            <button onClick={() => setEditing(null)} className="text-sm text-dark-300 hover:text-white">Cancel</button>
          </div>

          <div className="space-y-5">
            {isStats ? renderStatsEditor() : Object.entries(editing.content).map(([key, value]) => renderField(key, value))}
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-dark-500/30">
            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-lg bg-gold/10 border border-gold/20 px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button onClick={() => setEditing(null)} className="rounded-lg px-4 py-2.5 text-sm text-dark-300 hover:text-white transition-colors">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {pageConfig.map((page) => {
            const pageSections = sectionsByPage[page.key] || [];
            if (pageSections.length === 0) return null;
            const isExpanded = expandedPages.has(page.key);

            return (
              <div key={page.key} className="rounded-xl bg-dark-800 border border-dark-500/30 overflow-hidden">
                {/* Page header */}
                <button
                  onClick={() => togglePage(page.key)}
                  className="w-full flex items-center gap-4 p-4 hover:bg-dark-700/50 transition-colors text-left"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold shrink-0">
                    {page.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">{page.label}</p>
                    <p className="text-xs text-dark-200 mt-0.5">{page.description}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] text-dark-300 font-mono">{pageSections.length} sections</span>
                    <svg
                      className={`w-4 h-4 text-dark-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                {/* Sections list */}
                {isExpanded && (
                  <div className="border-t border-dark-500/20">
                    {pageSections.map((section) => {
                      const key = `${section.page}:${section.section}`;
                      return (
                        <button
                          key={section.id}
                          onClick={() => startEdit(section)}
                          className="w-full flex items-center justify-between px-5 py-3 hover:bg-dark-700/30 transition-colors text-left border-b border-dark-500/10 last:border-b-0"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <svg className="w-3.5 h-3.5 text-dark-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <div>
                              <p className="text-sm text-white">{sectionLabels[key] || section.section}</p>
                              <p className="text-[11px] text-dark-200 mt-0.5">{sectionDescriptions[key] || `${Object.keys(section.content).length} fields`}</p>
                            </div>
                          </div>
                          <svg className="w-4 h-4 text-dark-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {sections.length === 0 && (
            <div className="text-center py-12 rounded-xl bg-dark-800 border border-dashed border-dark-500/30">
              <p className="text-sm text-dark-300">No content sections found.</p>
              <p className="text-xs text-dark-400 mt-1">Run the seed SQL to populate default content.</p>
            </div>
          )}
        </div>
      )}
    </AdminShell>
  );
}
