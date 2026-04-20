-- Full site content migration
-- Run this in your Supabase SQL editor to add all editable text

-- Delete old partial content
delete from page_content;

-- Homepage
insert into page_content (page, section, content) values
('home', 'hero', '{
  "tagline": "Licensed to Drone",
  "heading_line1": "Elevated",
  "heading_line2": "Real Estate",
  "heading_line3": "Media",
  "subtext": "Professional drone photography, cinematic video & expert editing. Quality work. Quick turnaround.",
  "phone": "(270) 307-0173"
}'),
('home', 'services', '{
  "tagline": "What We Do",
  "heading": "Services Built for",
  "heading_gold": "Results"
}'),
('home', 'staging', '{
  "tagline": "Virtual Staging",
  "heading": "Empty Rooms?",
  "heading_gold": "We''ll Fix That.",
  "description": "Our edited virtual staging transforms empty, hard-to-visualize spaces into fully furnished rooms that help buyers see the potential. Realistic furniture, decor, and styling — digitally placed to sell the lifestyle, not just the square footage.",
  "features": ["Realistic digitally furnished rooms", "Multiple style options available", "Fraction of the cost of physical staging", "24-48 hour turnaround"],
  "cta_text": "Get a Quote"
}'),
('home', 'recent_work', '{
  "tagline": "Recent Work",
  "heading": "Featured Projects",
  "view_all_text": "View All",
  "view_full_text": "View Full Portfolio"
}'),
('home', 'testimonials', '{
  "tagline": "Reviews",
  "heading": "What Clients Say",
  "rating": "5.0"
}'),
('home', 'stats', '[
  {"value": "Part 107", "label": "FAA Certified"},
  {"value": "24hr", "label": "Turnaround"},
  {"value": "1.1K+", "label": "Followers"},
  {"value": "100%", "label": "Recommended"}
]'),

-- About page
('about', 'header', '{
  "tagline": "About",
  "heading": "The Person Behind",
  "heading_gold": "the Lens"
}'),
('about', 'bio', '{
  "tagline": "My Story",
  "heading": "Hi, I''m Cheris —",
  "heading_gold": "CS Media",
  "paragraphs": [
    "I started CS MEDIA, LLC with a passion for capturing properties and businesses in the best possible light. As a solo operator, I bring a level of personal attention and consistency that larger companies simply can''t match.",
    "I''m FAA Part 107 certified and specialize in photography, videography, drone work, and video editing. From real estate listings to promo videos and logo design, I handle it all — start to finish.",
    "When you work with me, you get the same person every time. Someone who learns your style, understands what you need, and delivers consistent quality project after project. No runaround, no random contractors.",
    "Quality edits. Quick turnaround. And the best prices you''ll find for professional media services. That''s the CS Media promise."
  ],
  "phone": "(270) 307-0173"
}'),
('about', 'trust_points', '{
  "tagline": "Why CS Media",
  "heading": "What Sets Us Apart",
  "points": [
    {"title": "FAA Part 107", "description": "Fully licensed and insured. Every drone flight is legal, safe, and professional."},
    {"title": "Quick Turnaround", "description": "Most projects delivered within 24-48 hours. Rush delivery available when you need it."},
    {"title": "Lowest Prices", "description": "Professional quality at the best rates. No hidden fees, no surprises. Just great work."},
    {"title": "One Operator", "description": "Same person every time. I learn your style and deliver consistent results, shoot after shoot."}
  ]
}'),
('about', 'cta', '{
  "heading": "Let''s Work Together",
  "subheading": "Text or call for your next project. Quality media, fast turnaround, best prices."
}'),

-- Services page
('services', 'header', '{
  "tagline": "What We Do",
  "heading": "Our Services",
  "subtext": "Professional real estate media packages. Quality work, quick turnaround, and the best prices you''ll find."
}'),
('services', 'pricing', '{
  "tagline": "Pricing",
  "heading": "Real Estate Media Packages",
  "packages": [
    {
      "name": "Photo Package",
      "price": "$200",
      "popular": false,
      "features": ["25–40 professionally edited photos", "Interior + exterior coverage", "Drone photos (FAA Part 107 compliant)", "MLS-ready delivery", "1 free revision included"]
    },
    {
      "name": "Full Package — Standard",
      "price": "$280",
      "popular": true,
      "features": ["Everything in Photo Package", "30–45 second listing video", "Basic transitions + music", "Optimized for social + MLS", "1 free revision included"]
    },
    {
      "name": "Full Package — Pro",
      "price": "$380",
      "popular": false,
      "features": ["Everything in Photo Package", "60–90 second cinematic video", "Advanced editing + smooth motion shots", "Cinematic color grading", "Agent branding + higher-end feel", "2 free revisions included"]
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
}'),
('services', 'staging', '{
  "heading": "Virtual Staging",
  "description": "Empty rooms don''t sell. Our edited virtual staging digitally furnishes vacant spaces with realistic furniture and decor, helping buyers visualize the potential of every room.",
  "price_text": "+$25 per photo · +$50 per video scene",
  "included": ["Realistic furniture placement", "Multiple style options", "High-res MLS-ready files", "Fast 24-48hr turnaround", "Revision rounds included"],
  "ideal_for": ["Vacant listings", "New construction", "Flips & renovations", "Rental properties"]
}'),
('services', 'cta', '{
  "heading": "Not Sure Which Package You Need?",
  "subheading": "Text or call and we''ll recommend the perfect option for your project.",
  "button_text": "Request a Quote"
}'),

-- Contact page
('contact', 'header', '{
  "tagline": "Get in Touch",
  "heading": "Book a Shoot",
  "subtext": "Fill out the form or text and I''ll get back to you within 24 hours.",
  "phone": "(270) 307-0173"
}'),
('contact', 'sidebar', '{
  "phone": "(270) 307-0173",
  "email": "cscreatesmediallc@gmail.com",
  "services": ["Photography", "Drone Pilot (Part 107)", "Listing Video", "Virtual Staging", "Logo & Watermark Design"],
  "response_time": "Within 24 hours",
  "company_name": "CS MEDIA, LLC",
  "company_type": "Advertising / Marketing"
}'),
('contact', 'form', '{
  "success_heading": "Message Sent!",
  "success_message": "Thanks for reaching out. I''ll get back to you within 24 hours.",
  "submit_text": "Send Message",
  "services": ["Photo Package ($200)", "Full Package — Standard ($280)", "Full Package — Pro ($380)", "Interior + Exterior, No Drone ($140)", "Aerial Only ($85)", "Virtual Staging (add-on)", "Logo / Watermark Design", "Other / Not Sure"]
}');
