-- Remove the $200 Photo Package SKU from page_content and rename Full Package — Standard/Pro → Standard Package / Pro Package.
-- Updates services.pricing.packages and contact.form.services.
-- The page_content_history trigger snapshots the prior values into content_history before each UPDATE.

UPDATE page_content
SET content = '{
  "tagline": "Pricing",
  "heading": "Real Estate Media Packages",
  "packages": [
    {
      "name": "Standard Package",
      "price": "$280",
      "popular": true,
      "features": ["25–40 professionally edited photos", "Drone photos (FAA Part 107 compliant)", "Interior + exterior coverage", "30–45 second listing video", "Basic transitions + music", "Optimized for social + MLS", "1 free revision included"]
    },
    {
      "name": "Pro Package",
      "price": "$380",
      "popular": false,
      "features": ["25–40 professionally edited photos", "Drone photos (FAA Part 107 compliant)", "Interior + exterior coverage", "60–90 second cinematic video", "Advanced editing + smooth motion shots", "Cinematic color grading", "Agent branding + higher-end feel", "2 free revisions included"]
    },
    {
      "name": "Interior + Exterior (No Drone)",
      "price": "$140",
      "popular": false,
      "features": ["25–40 professionally edited photos", "Interior + exterior coverage", "MLS-ready", "1 free revision included"]
    },
    {
      "name": "Aerial Only",
      "price": "$85",
      "popular": false,
      "features": ["5 high-quality drone photos", "Property + surrounding area highlights", "FAA Part 107 compliant", "1 free revision included"]
    }
  ],
  "fine_print": ["6% sales tax and 2-way mileage applied to final pricing.", "Mileage is determined by Google Maps distance for round trip from Leitchfield."]
}'::jsonb
WHERE page = 'services' AND section = 'pricing';

UPDATE page_content
SET content = jsonb_set(
  content,
  '{services}',
  '["--- Real Estate Packages ---", "Aerial Only ($85)", "Interior + Exterior, No Drone ($140)", "Standard Package ($280)", "Pro Package ($380)", "--- Other Services ---", "Video Production", "Event Photography", "Logo / Watermark Design", "Virtual Staging (standalone)", "Other / Not Sure"]'::jsonb
)
WHERE page = 'contact' AND section = 'form';
