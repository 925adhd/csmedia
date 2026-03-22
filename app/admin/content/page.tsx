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
  "home:hero": "Homepage — Hero",
  "home:services": "Homepage — Services Section",
  "home:staging": "Homepage — Virtual Staging",
  "home:recent_work": "Homepage — Recent Work",
  "home:testimonials": "Homepage — Testimonials",
  "home:stats": "Homepage — Stats Bar",
  "about:header": "About — Page Header",
  "about:bio": "About — Bio Section",
  "about:trust_points": "About — Trust Points",
  "about:cta": "About — Call to Action",
  "services:header": "Services — Page Header",
  "services:pricing": "Services — Pricing Packages",
  "services:videography": "Services — Videography",
  "services:editing": "Services — Video Editing",
  "services:staging": "Services — Virtual Staging",
  "services:cta": "Services — Call to Action",
  "contact:header": "Contact — Page Header",
  "contact:sidebar": "Contact — Sidebar Info",
  "contact:form": "Contact — Form Settings",
};

const fieldLabels: Record<string, Record<string, string>> = {
  "home:hero": {
    tagline: "Top Tagline",
    heading_line1: "Heading Line 1",
    heading_line2: "Heading Line 2 (gold)",
    heading_line3: "Heading Line 3",
    subtext: "Subtitle Text",
    phone: "Phone Number",
  },
  "home:services": {
    tagline: "Section Tagline",
    heading: "Heading",
    heading_gold: "Heading (gold text)",
  },
  "home:staging": {
    tagline: "Section Tagline",
    heading: "Heading",
    heading_gold: "Heading (gold text)",
    description: "Description",
    features: "Feature List",
    cta_text: "Button Text",
  },
  "home:recent_work": {
    tagline: "Section Tagline",
    heading: "Section Heading",
    view_all_text: "View All Link Text",
    view_full_text: "View Full Portfolio Link Text",
  },
  "home:testimonials": {
    tagline: "Section Tagline",
    heading: "Section Heading",
    rating: "Star Rating Text",
  },
  "about:header": {
    tagline: "Page Tagline",
    heading: "Heading",
    heading_gold: "Heading (gold text)",
  },
  "about:bio": {
    tagline: "Section Tagline",
    heading: "Heading",
    heading_gold: "Name (gold text)",
    paragraphs: "Bio Paragraphs",
    phone: "Phone Number",
  },
  "about:trust_points": {
    tagline: "Section Tagline",
    heading: "Section Heading",
    points: "Trust Points",
  },
  "about:cta": {
    heading: "Heading",
    subheading: "Subheading",
  },
  "services:header": {
    tagline: "Page Tagline",
    heading: "Heading",
    subtext: "Subtitle Text",
  },
  "services:pricing": {
    tagline: "Section Tagline",
    heading: "Section Heading",
    packages: "Pricing Packages",
    fine_print: "Fine Print Notes",
  },
  "services:videography": {
    heading: "Heading",
    description: "Description",
    price_text: "Price Text",
    included: "What's Included",
    ideal_for: "Ideal For",
  },
  "services:editing": {
    heading: "Heading",
    description: "Description",
    price_text: "Price Text",
    included: "What's Included",
    ideal_for: "Ideal For",
  },
  "services:staging": {
    heading: "Heading",
    description: "Description",
    price_text: "Price Text",
    included: "What's Included",
    ideal_for: "Ideal For",
  },
  "services:cta": {
    heading: "Heading",
    subheading: "Subheading",
    button_text: "Button Text",
  },
  "contact:header": {
    tagline: "Page Tagline",
    heading: "Heading",
    subtext: "Subtitle Text",
    phone: "Phone Number",
  },
  "contact:sidebar": {
    phone: "Phone Number",
    email: "Email Address",
    services: "Services List",
    response_time: "Response Time",
    company_name: "Company Name",
    company_type: "Company Type",
  },
  "contact:form": {
    success_heading: "Success Heading",
    success_message: "Success Message",
    submit_text: "Submit Button Text",
    services: "Service Options (dropdown)",
  },
};

export default function ContentAdmin() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [editing, setEditing] = useState<ContentSection | null>(null);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const supabase = createClient();

  useEffect(() => { load(); }, []);

  async function load() {
    const { data } = await supabase.from("page_content").select("*").order("page");
    setSections(data || []);
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
                  <input
                    value={item.title || ""}
                    onChange={(e) => updateObjectListField(key, i, "title", e.target.value)}
                    className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-dark-300 uppercase tracking-wider mb-1">Description</label>
                  <textarea
                    value={item.description || ""}
                    onChange={(e) => updateObjectListField(key, i, "description", e.target.value)}
                    rows={2}
                    className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none resize-none"
                  />
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
                    <input
                      value={(pkg.name as string) || ""}
                      onChange={(e) => updateObjectListField(key, i, "name", e.target.value)}
                      className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-dark-300 uppercase tracking-wider mb-1">Price</label>
                    <input
                      value={(pkg.price as string) || ""}
                      onChange={(e) => updateObjectListField(key, i, "price", e.target.value)}
                      className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
                    />
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={(pkg.popular as boolean) || false}
                    onChange={(e) => updateObjectListField(key, i, "popular", e.target.checked)}
                    className="rounded border-dark-500 bg-dark-700 text-gold focus:ring-gold/30"
                  />
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
                        <input
                          value={feat}
                          onChange={(e) => updateObjectListNestedItem(key, i, "features", fi, e.target.value)}
                          className="flex-1 rounded-lg bg-dark-700 border border-dark-500 px-3 py-2 text-sm text-white focus:border-gold/50 outline-none"
                        />
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

    // Array of strings (feature lists, etc.)
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
                <input
                  value={item}
                  onChange={(e) => updateListItem(key, i, e.target.value)}
                  className="flex-1 rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
                />
                <button onClick={() => removeListItem(key, i)} className="text-xs text-red-400 hover:text-red-300 px-2">Remove</button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Long text (description, subtext)
    if (typeof value === "string" && value.length > 80) {
      return (
        <div key={key}>
          <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">{label}</label>
          <textarea
            value={formData[key] as string}
            onChange={(e) => updateField(key, e.target.value)}
            rows={3}
            className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none resize-none"
          />
        </div>
      );
    }

    // Short text
    if (typeof value === "string") {
      return (
        <div key={key}>
          <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">{label}</label>
          <input
            value={formData[key] as string}
            onChange={(e) => updateField(key, e.target.value)}
            className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
          />
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
              <input
                value={stat.value || ""}
                onChange={(e) => updateStatField(i, "value", e.target.value)}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
                placeholder="e.g., Part 107"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-1">Label</label>
              <input
                value={stat.label || ""}
                onChange={(e) => updateStatField(i, "label", e.target.value)}
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2.5 text-sm text-white focus:border-gold/50 outline-none"
                placeholder="e.g., FAA Certified"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <AdminShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Page Content</h1>
        <p className="text-sm text-dark-300 mt-1">Edit text, headlines, and copy across the site</p>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${message.startsWith("Error") ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-green-500/10 text-green-400 border border-green-500/20"}`}>
          {message}
        </div>
      )}

      {editing ? (
        <div className="space-y-5 rounded-xl bg-dark-800 border border-dark-500/30 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">
              {sectionLabels[sectionKey] || `${editing.page} / ${editing.section}`}
            </h2>
            <button onClick={() => setEditing(null)} className="text-sm text-dark-300 hover:text-white">Cancel</button>
          </div>

          {isStats ? (
            renderStatsEditor()
          ) : (
            Object.entries(editing.content).map(([key, value]) => renderField(key, value))
          )}

          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-gold/10 border border-gold/20 px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Content"}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex items-center justify-between rounded-xl bg-dark-800 border border-dark-500/30 p-4 hover:border-gold/20 transition-colors cursor-pointer"
              onClick={() => startEdit(section)}
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  {sectionLabels[`${section.page}:${section.section}`] || `${section.page} / ${section.section}`}
                </p>
                <p className="text-xs text-dark-300 mt-0.5">
                  {Object.keys(section.content).length} fields
                </p>
              </div>
              <button className="rounded-lg px-3 py-1.5 text-xs text-dark-200 hover:text-gold hover:bg-dark-700 transition-colors">
                Edit
              </button>
            </div>
          ))}
          {sections.length === 0 && (
            <p className="text-sm text-dark-300 py-8 text-center">No content sections found. Run the seed SQL first.</p>
          )}
        </div>
      )}
    </AdminShell>
  );
}
