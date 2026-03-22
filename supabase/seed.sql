-- Seed data for CS Media CMS
-- Run this AFTER schema.sql in your Supabase SQL editor

-- Portfolio Projects
insert into portfolio_projects (slug, title, property_type, location, description, hero_image, images, video_src, mobile_video_src, featured, sort_order) values
('stone-estate-aerial', 'Stone Estate Aerial', 'residential', 'Kentucky', 'A stunning stone estate captured from above, showcasing the full scope of the property''s driveway approach, landscaping, and architectural details that ground-level photos simply can''t convey.', '/images/aerialhome1.jpg', ARRAY['/images/aerialhome1.jpg', '/images/stone.jpg', '/images/stoneaireal.jpg', '/images/stoneinterior.jpg'], null, null, true, 1),
('modern-farmhouse', 'Modern Farmhouse', 'residential', 'Kentucky', 'A beautiful modern farmhouse on sprawling acreage, photographed from both ground and aerial perspectives. The combination of drone and traditional photography captured the property''s connection to the surrounding landscape.', '/images/home2.jpg', ARRAY['/images/home2.jpg', '/images/home3.jpg', '/images/interior2.jpg', '/images/interior1.jpg'], null, null, true, 2),
('country-home-acreage', 'Country Home on Acreage', 'residential', 'Kentucky', 'A charming country home on open acreage featuring a covered pavilion, wraparound porch, and beautifully finished interiors. Aerial drone photography captures the full property layout while interior shots showcase the living spaces and loft.', '/images/home5.jpg', ARRAY['/images/home5.jpg', '/images/porch.jpg', '/images/interior3.jpg', '/images/interior4.jpg'], null, null, false, 3),
('twilight-showcase', 'Twilight Showcase', 'residential', 'Kentucky', 'A dramatic twilight photography session capturing warm interior lighting against the dusk sky. Twilight shots create an emotional connection with buyers and make listings stand out on every platform.', '/images/nighthome.jpg', ARRAY['/images/nighthome.jpg', '/images/twilight1.jpg'], null, null, false, 4),
('drone-property-tour', 'Drone Property Tour', 'aerial', 'Kentucky', 'A cinematic aerial property tour showcasing a home and its surrounding landscape from above. Smooth drone footage captures the full scope of the property, giving potential buyers an immersive experience before ever stepping foot on site.', '/images/drone.jpg', ARRAY['/images/drone.jpg'], '/videos/desktop.mp4', '/videos/mobilevid.mp4', false, 5),
('local-business-promo', 'Local Business Promo', 'promo', 'Kentucky', 'A high-energy promotional video for a local business, capturing the brand''s personality and energy. Fast cuts, vibrant color grading, and a custom soundtrack bring the business to life in under 60 seconds.', '/images/truck.png', ARRAY['/images/truck.png'], '/videos/truckpromo.mp4', null, false, 6),
('town-events-coverage', 'Town Events Highlights', 'event', 'Kentucky', 'Dynamic event coverage capturing the energy and atmosphere of local community events. Edited with cinematic transitions, music, and color grading to deliver a polished recap that event organizers can use for marketing and social media.', '/images/town.png', ARRAY['/images/town.png'], '/videos/towneventsexample.mp4', null, false, 7);

-- Testimonials
insert into testimonials (quote, name, badge, service, sort_order) values
('We couldn''t be happier with a promo video she shot for us! She made it so much fun, can''t wait to do another!!!!', 'Snow Dogs Food Truck', 'Recommends CS MEDIA, LLC', 'Video Production', 1),
('OH MY GOSH!!!! I can''t even say how amazing she is. She designed my watermark and logo and did absolutely AMAZING!!!!! I 100% recommend her for any design needs you may have.', 'Jared Clouse - Bary', 'Recommends CS MEDIA, LLC', 'Logo & Design', 2);

-- Services
insert into services (title, description, icon_name, sort_order) values
('Photography', 'Interior and exterior real estate photography with professional lighting, composition, and HDR processing.', 'camera', 1),
('Videography', 'Cinematic property walkthroughs and promo videos that capture attention and drive engagement.', 'video', 2),
('Drone (Part 107)', 'FAA-certified aerial photography and video. Stunning perspectives from above.', 'drone', 3),
('Virtual Staging', 'Digitally furnish empty rooms with realistic furniture and decor. Sell the lifestyle, not just the space.', 'staging', 4),
('Video Editing', 'Polished, branded videos with music, transitions, color grading, and graphics.', 'edit', 5);

-- Page Content
insert into page_content (page, section, content) values
('home', 'hero', '{"tagline": "Licensed to Drone", "heading_line1": "Elevated", "heading_line2": "Real Estate", "heading_line3": "Media", "subtext": "Professional drone photography, cinematic video & expert editing. Quality work. Quick turnaround.", "phone": "(270) 307-0173"}'),
('home', 'stats', '[{"value": "Part 107", "label": "FAA Certified"}, {"value": "24hr", "label": "Turnaround"}, {"value": "1.1K+", "label": "Followers"}, {"value": "100%", "label": "Recommended"}]'),
('home', 'staging', '{"heading": "Empty Rooms?", "heading_gold": "We''ll Fix That.", "description": "Our edited virtual staging transforms empty, hard-to-visualize spaces into fully furnished rooms that help buyers see the potential. Realistic furniture, decor, and styling — digitally placed to sell the lifestyle, not just the square footage.", "features": ["Realistic digitally furnished rooms", "Multiple style options available", "Fraction of the cost of physical staging", "24-48 hour turnaround"]}'),
('about', 'bio', '{"name": "CS Media", "description": "Professional drone photography, video, and editing services for real estate agents and property owners."}');
