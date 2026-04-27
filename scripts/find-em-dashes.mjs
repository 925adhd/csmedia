// Scan all CMS-stored text in Supabase for em dashes (—) and report where each one lives.
// Run: node scripts/find-em-dashes.mjs

import { createClient } from "@supabase/supabase-js";
import { readFile } from "node:fs/promises";
import path from "node:path";

const EM_DASH = "—";

// Load NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY from .env.local
const envText = await readFile(path.resolve(".env.local"), "utf8");
const env = Object.fromEntries(
  envText
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^['"]|['"]$/g, "")];
    })
);

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Recursively walk an object/array/string looking for em dashes.
// Yields { path, snippet } for every string field that contains one.
function* walkForDashes(value, pathParts = []) {
  if (typeof value === "string") {
    if (value.includes(EM_DASH)) {
      yield { path: pathParts.join("."), snippet: snippetAround(value) };
    }
    return;
  }
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      yield* walkForDashes(value[i], [...pathParts, `[${i}]`]);
    }
    return;
  }
  if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      yield* walkForDashes(v, [...pathParts, k]);
    }
  }
}

// Trim a long string to ~100 chars centered on the em dash, with surrounding context.
function snippetAround(text) {
  const idx = text.indexOf(EM_DASH);
  const start = Math.max(0, idx - 50);
  const end = Math.min(text.length, idx + 50);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";
  return prefix + text.slice(start, end).replace(/\s+/g, " ") + suffix;
}

let totalFound = 0;
const sources = [
  {
    table: "page_content",
    fields: "page, section, content",
    label: (row) => `page=${row.page}, section=${row.section}`,
    walkFields: (row) => walkForDashes(row.content, ["content"]),
  },
  {
    table: "testimonials",
    fields: "id, name, quote, badge, service",
    label: (row) => `name="${row.name}"`,
    walkFields: (row) => walkForDashes({ quote: row.quote, badge: row.badge, service: row.service }),
  },
  {
    table: "services",
    fields: "id, title, description, icon_name",
    label: (row) => `title="${row.title}"`,
    walkFields: (row) => walkForDashes({ title: row.title, description: row.description }),
  },
  {
    table: "portfolio_projects",
    fields: "id, slug, title, description, location, property_type",
    label: (row) => `slug="${row.slug}"`,
    walkFields: (row) =>
      walkForDashes({
        title: row.title,
        description: row.description,
        location: row.location,
        property_type: row.property_type,
      }),
  },
];

for (const src of sources) {
  const { data, error } = await supabase.from(src.table).select(src.fields);
  if (error) {
    console.error(`\n[${src.table}] error: ${error.message}`);
    continue;
  }
  const hits = [];
  for (const row of data || []) {
    for (const found of src.walkFields(row)) {
      hits.push({ row, ...found });
    }
  }
  if (hits.length === 0) {
    console.log(`\n[${src.table}] clean`);
    continue;
  }
  console.log(`\n[${src.table}] ${hits.length} em dash${hits.length === 1 ? "" : "es"}:`);
  for (const hit of hits) {
    console.log(`  ${src.label(hit.row)}`);
    console.log(`    ${hit.path}: "${hit.snippet}"`);
    totalFound++;
  }
}

console.log(`\n${totalFound === 0 ? "✓ No em dashes found." : `Total: ${totalFound} em dash${totalFound === 1 ? "" : "es"}`}`);
