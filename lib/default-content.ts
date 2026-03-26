// Default page content — used by "Reset to Defaults" in admin
// This matches the migrate-full-content.sql values exactly

export const defaultContent: Record<string, Record<string, unknown>> = {
  home: {
    hero: {
      tagline: "Licensed to Drone",
      heading_line1: "Elevated",
      heading_line2: "Real Estate",
      heading_line3: "Media",
      subtext: "Professional drone photography, cinematic video & expert editing. Quality work. Quick turnaround.",
      phone: "(270) 307-0173",
    },
    services: {
      tagline: "What We Do",
      heading: "Services Built for",
      heading_gold: "Results",
    },
    staging: {
      tagline: "Virtual Staging",
      heading: "Empty Rooms?",
      heading_gold: "We'll Fix That.",
      description: "Our edited virtual staging transforms empty, hard-to-visualize spaces into fully furnished rooms that help buyers see the potential. Realistic furniture, decor, and styling — digitally placed to sell the lifestyle, not just the square footage.",
      features: ["Realistic digitally furnished rooms", "Multiple style options available", "Fraction of the cost of physical staging", "24-48 hour turnaround"],
      cta_text: "Get a Quote",
    },
    recent_work: {
      tagline: "Recent Work",
      heading: "Featured Projects",
      view_all_text: "View All",
      view_full_text: "View Full Portfolio",
    },
    testimonials: {
      tagline: "Reviews",
      heading: "What Clients Say",
      rating: "5.0",
    },
    stats: [
      { value: "Part 107", label: "FAA Certified" },
      { value: "24hr", label: "Turnaround" },
      { value: "1.1K+", label: "Followers" },
      { value: "100%", label: "Recommended" },
    ],
  },
  about: {
    header: {
      tagline: "About",
      heading: "The Person Behind",
      heading_gold: "the Lens",
    },
    bio: {
      tagline: "My Story",
      heading: "Hi, I'm Cheris —",
      heading_gold: "CS Media",
      paragraphs: [
        "I started CS MEDIA, LLC with a passion for capturing properties and businesses in the best possible light. As a solo operator, I bring a level of personal attention and consistency that larger companies simply can't match.",
        "I'm FAA Part 107 certified and specialize in photography, videography, drone work, and video editing. From real estate listings to promo videos and logo design, I handle it all — start to finish.",
        "When you work with me, you get the same person every time. Someone who learns your style, understands what you need, and delivers consistent quality project after project. No runaround, no random contractors.",
        "Quality edits. Quick turnaround. And the best prices you'll find for professional media services. That's the CS Media promise.",
      ],
      phone: "(270) 307-0173",
    },
    trust_points: {
      tagline: "Why CS Media",
      heading: "What Sets Us Apart",
      points: [
        { title: "FAA Part 107", description: "Fully licensed and insured. Every drone flight is legal, safe, and professional." },
        { title: "Quick Turnaround", description: "Most projects delivered within 24-48 hours. Rush delivery available when you need it." },
        { title: "Lowest Prices", description: "Professional quality at the best rates. No hidden fees, no surprises. Just great work." },
        { title: "One Operator", description: "Same person every time. I learn your style and deliver consistent results, shoot after shoot." },
      ],
    },
    cta: {
      heading: "Let's Work Together",
      subheading: "Text or call for your next project. Quality media, fast turnaround, best prices.",
    },
  },
  services: {
    header: {
      tagline: "What We Do",
      heading: "Our Services",
      subtext: "Professional real estate media packages. Quality work, quick turnaround, and the best prices you'll find.",
    },
    pricing: {
      tagline: "Pricing",
      heading: "Real Estate Media Packages",
      packages: [
        { name: "Interior Only", price: "$150", popular: false, features: ["All interior living spaces", "Professional lighting & HDR", "Edited & color corrected", "MLS-ready formatting", "24-48 hour turnaround"] },
        { name: "Interior + Exterior", price: "$200", popular: true, features: ["All interior living spaces", "6 exterior shots", "Professional lighting & HDR", "Edited & color corrected", "MLS-ready formatting", "24-48 hour turnaround"] },
        { name: "The Holy-Moley", price: "$300", popular: false, features: ["Full interior & exterior package", "Drone photos", "Hyperlapse video for social media", "Professional lighting & HDR", "Edited & color corrected", "MLS-ready formatting", "24-48 hour turnaround"] },
      ],
      fine_print: ["Taxes and mileage fee will be applied to final price.", "Mileage is determined by Google Maps distance for round trip."],
    },
    videography: {
      heading: "Videography",
      description: "Cinematic property walkthroughs, promo videos, and social content. From listing tours to branded business videos, we capture footage that drives engagement and gets results.",
      price_text: "Contact for pricing",
      included: ["60-90 second edited video", "4K resolution", "Licensed background music", "Color grading & transitions", "Social media formats"],
      ideal_for: ["Property tours", "Business promo videos", "Social media reels", "Agent marketing"],
    },
    editing: {
      heading: "Video Editing",
      description: "Already have footage? We'll transform your raw clips into polished, branded content. From simple cuts to full productions with graphics, music, and effects.",
      price_text: "Contact for pricing",
      included: ["Full edit from raw footage", "Music & sound design", "Text overlays & branding", "Logo/watermark design", "Multiple export formats"],
      ideal_for: ["Agent walkthrough footage", "Social media content", "Compilation videos", "Brand & marketing videos"],
    },
    staging: {
      heading: "Virtual Staging",
      description: "Empty rooms don't sell. Our edited virtual staging digitally furnishes vacant spaces with realistic furniture and decor, helping buyers visualize the potential of every room.",
      price_text: "Starting at $25/room",
      included: ["Realistic furniture placement", "Multiple style options", "High-res MLS-ready files", "Fast 24-48hr turnaround", "Revision rounds included"],
      ideal_for: ["Vacant listings", "New construction", "Flips & renovations", "Rental properties"],
    },
    cta: {
      heading: "Not Sure Which Package You Need?",
      subheading: "Text or call and we'll recommend the perfect option for your project.",
      button_text: "Request a Quote",
    },
  },
  contact: {
    header: {
      tagline: "Get in Touch",
      heading: "Book a Shoot",
      subtext: "Fill out the form, call or text (270) 307-0173. I'll get back to you within 24 hours.",
      phone: "(270) 307-0173",
    },
    sidebar: {
      phone: "(270) 307-0173",
      email: "cscreatesmediallc@gmail.com",
      services: ["Photography", "Videography", "Drone Pilot (Part 107)", "Video Editing Services", "Logo & Watermark Design"],
      response_time: "Within 24 hours",
      company_name: "CS MEDIA, LLC",
      company_type: "Advertising / Marketing",
    },
    form: {
      success_heading: "Message Sent!",
      success_message: "Thanks for reaching out. I'll get back to you within 24 hours.",
      submit_text: "Send Message",
      services: ["Photography", "Videography", "Drone (Part 107)", "Video Editing", "Logo / Watermark Design", "Full Package"],
    },
  },
};
