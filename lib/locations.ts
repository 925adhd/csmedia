export interface LocationData {
  slug: string;
  city: string;
  county: string;
  state: string;
  tagline: string;
  headline: string;
  intro: string;
  /** What makes this specific market tick — not generic "we're great" */
  marketContext: string;
  whyUs: string;
  droneDetails: string;
  /** What types of properties are common here and how we approach them */
  propertyTypes: { name: string; description: string }[];
  /** Specific to this city — what a seller/agent should know */
  localInsight: string;
  closingPitch: string;
  faqs: { q: string; a: string }[];
  nearbyAreas: string[];
  distanceFromBase: string;
  /** Whether mileage applies */
  mileageNote: string;
  /** Gallery images to display on the location page */
  galleryImages: { src: string; alt: string }[];
}

export const locations: LocationData[] = [
  {
    slug: "leitchfield",
    city: "Leitchfield",
    county: "Grayson County",
    state: "KY",
    tagline: "Your Local Drone Photography Team",
    headline: "Real Estate Photography & Drone Media in Leitchfield, Grayson County KY",
    intro:
      "CS Media is headquartered in Leitchfield, Kentucky — this is our home market. That means zero travel fees, the fastest turnaround in the county, and a photographer who actually knows Grayson County. We've shot everything from starter homes off Highway 62 to hundred-acre farms along the Western Kentucky Parkway. If it's in Grayson County, we've probably driven past it.",
    marketContext:
      "Leitchfield's real estate market is a mix of in-town residential, rural acreage, and a growing number of Airbnb and short-term rental properties near Rough River Dam State Resort Park. Buyers searching in this area are often looking at land, not just houses — and that changes what listing photos need to communicate. A ground-level shot of a fence line doesn't tell the story of a 40-acre property. Drone photography does.",
    whyUs:
      "We're not driving in from Louisville or Bowling Green and charging you for the trip. CS Media is based here, which means we can often shoot within days of booking — sometimes same-day for urgent listings. Every shoot gets professional editing, HDR processing, and color correction. We don't hand you raw files and call it done.",
    droneDetails:
      "Grayson County's terrain is what makes aerial photography essential here. The rolling hills, tree lines, creeks, and mixed-use land don't photograph well from the ground — you lose all sense of scale. Our drone captures property boundaries, outbuildings, pond locations, road frontage, and the relationship between the house and the land around it. For agents listing rural properties, this is the difference between a buyer understanding what they're looking at and scrolling past.",
    propertyTypes: [
      {
        name: "Farms & Acreage",
        description:
          "Grayson County has no shortage of farm listings. Drone photography shows total acreage, fence lines, barn locations, creek access, and timber stands in a single frame. We shoot at angles that emphasize the usable land, not just the house.",
      },
      {
        name: "Residential Listings",
        description:
          "For in-town homes in Leitchfield, our interior/exterior packages cover every room with professional lighting and HDR. We photograph what matters to buyers: kitchen, living areas, bathrooms, and curb appeal — not hallways and closets.",
      },
      {
        name: "Rough River Area Rentals",
        description:
          "The short-term rental market near Rough River Dam is growing. We help Airbnb and VRBO hosts create listings that actually compete — professional photos that show the property, the setting, and the proximity to the lake.",
      },
    ],
    localInsight:
      "One thing agents in Grayson County deal with is showing properties where the land is the main selling point. A 3-bedroom house on 50 acres needs to communicate the acreage first — that's what the buyer is paying for. We prioritize drone shots and wide exterior coverage on these listings because that's what drives the sale. Interior photos matter too, but the aerial perspective is what stops buyers mid-scroll.",
    closingPitch:
      "Ready to get your Leitchfield listing or project professionally captured? Packages start at $85 with 24-48 hour turnaround. No mileage fees anywhere in Grayson County.",
    faqs: [
      {
        q: "How much does real estate photography cost in Leitchfield?",
        a: "Aerial-only is $85 and Interior + Exterior (no drone) is $140. Our Photo Package with drone is $200, and full packages with cinematic listing video run $280–$380. No mileage fees apply anywhere in Grayson County.",
      },
      {
        q: "Do you charge travel fees for Leitchfield shoots?",
        a: "No. CS Media is based in Leitchfield, so there are zero travel or mileage fees for shoots in Leitchfield, Caneyville, Clarkson, or anywhere in Grayson County.",
      },
      {
        q: "Can you fly drones in Leitchfield?",
        a: "Yes. Leitchfield is in uncontrolled (Class G) airspace with no FAA restrictions. We're FAA Part 107 certified and include drone shots on every applicable shoot at no extra charge.",
      },
      {
        q: "How quickly can you schedule a shoot in Leitchfield?",
        a: "Since we're local, we can often shoot within 1-3 days of booking. For urgent listings, same-day shoots may be available — text us at 270-307-0173 to check availability.",
      },
      {
        q: "Do you photograph land and farms, or just houses?",
        a: "Both. A large portion of our work in Grayson County is rural property — farms, acreage, and land listings where drone photography is essential to show what the property actually includes.",
      },
      {
        q: "What file formats do I get?",
        a: "All photos are delivered as high-resolution JPEGs, edited, color-corrected, and formatted for MLS upload. Videos are delivered as MP4 files optimized for web and social media.",
      },
    ],
    nearbyAreas: ["Caneyville", "Clarkson", "Shrewsbury", "Big Clifty", "Falls of Rough"],
    distanceFromBase: "Home base",
    mileageNote: "No mileage fees",
    galleryImages: [
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Aerial overhead drone shot of stone estate in Grayson County, Kentucky" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Rustic kitchen interior photography with wood beams and island" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Kentucky" },
      { src: "/images/stone-estate-living-room-fireplace.webp", alt: "Professional living room photography with stone fireplace" },
      { src: "/images/white-farmhouse-aerial-drone-kentucky.webp", alt: "Aerial drone photography of a white farmhouse on Kentucky acreage" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior photo of a Kentucky home" },
    ],
  },
  {
    slug: "elizabethtown",
    city: "Elizabethtown",
    county: "Hardin County",
    state: "KY",
    tagline: "Real Estate Media for Hardin County",
    headline: "Real Estate Photography & Drone Media in Elizabethtown, Hardin County KY",
    intro:
      "CS Media provides real estate photography, drone video, and virtual staging for agents and property owners in Elizabethtown and Hardin County. E-town sits at the crossroads of I-65 and the Western Kentucky Parkway, making it one of central Kentucky's most active real estate markets — and one where professional listing media is the standard, not the exception.",
    marketContext:
      "Elizabethtown's housing market is driven by a few key factors: proximity to Fort Knox and the Gold Vault, a growing population that commutes to Louisville, and steady new construction on the city's south and east sides. Military relocations bring a constant flow of buyers who are house-hunting from out of state — often making decisions based entirely on listing photos before they ever visit in person. That makes the quality of your listing media a direct factor in whether your property gets a showing.",
    whyUs:
      "Louisville photographers charge Louisville prices. We offer the same professional quality — HDR interiors, drone aerials, edited walkthroughs — at significantly lower rates, and we deliver within 24-48 hours. We shoot in E-town regularly and know the neighborhoods, the light conditions, and what buyers in this market expect to see.",
    droneDetails:
      "Aerial photography in Elizabethtown serves a specific purpose: it shows context. Buyers relocating for Fort Knox want to see how close the house is to post. Families want to see the neighborhood layout, nearby schools, and whether the backyard borders woods or another subdivision. Our drone shots answer these questions visually, without the buyer having to dig through Google Maps.",
    propertyTypes: [
      {
        name: "New Construction",
        description:
          "E-town's south side has seen significant new development. We photograph new builds during and after construction — drone shots are especially effective for showing lot placement within a development and the surrounding infrastructure.",
      },
      {
        name: "Military Relocation Listings",
        description:
          "PCS families are shopping online before they arrive. Your listing photos are the first showing. We make sure the photos communicate the full picture: layout, condition, natural light, and neighborhood context through aerials.",
      },
      {
        name: "Established Neighborhoods",
        description:
          "Homes near Freeman Lake, Helmwood Heights, and along Dixie Highway have mature trees and character that photographs beautifully with the right approach. We use professional lighting to handle the shadows that large trees cast on exteriors.",
      },
    ],
    localInsight:
      "A reality of shooting in parts of Elizabethtown is Fort Knox airspace. The northern portions of E-town fall under restricted zones where drone flights require advance authorization through LAANC. We check every address before we book and will let you know upfront if there are any restrictions. Most of E-town is clear, but properties near Radcliff or directly north toward Fort Knox may have altitude limitations. This is something hobbyist photographers often don't check — but we do, every time.",
    closingPitch:
      "We shoot in Elizabethtown regularly and can often batch multiple properties per trip. Packages start at $85 plus 2-way mileage. Text or call to get your listing scheduled.",
    faqs: [
      {
        q: "How much does drone photography cost in Elizabethtown?",
        a: "Aerial-only is $85, the Photo Package with drone is $200, and full packages with listing video run $280–$380, all plus 6% sales tax and 2-way mileage from Leitchfield (about 40 minutes). Contact us for an exact quote for your property.",
      },
      {
        q: "Are there drone restrictions near Fort Knox?",
        a: "Some areas of Elizabethtown, particularly north of town near Radcliff, fall under Fort Knox restricted airspace. We verify LAANC authorization for every address before booking. Most of E-town proper is in unrestricted airspace, but we'll confirm for your specific property.",
      },
      {
        q: "How far is CS Media from Elizabethtown?",
        a: "About 40 minutes via the Western Kentucky Parkway. We shoot in E-town regularly and can often schedule same-week appointments. We also batch multiple properties per trip to keep mileage costs down for agents with several listings.",
      },
      {
        q: "Can you photograph new construction in Elizabethtown?",
        a: "Yes. We work with builders and developers on both progress documentation and final listing photography. Drone shots are particularly valuable for showing lot placement, proximity to amenities, and development progress.",
      },
      {
        q: "Do out-of-state buyers really care about photo quality?",
        a: "Military families PCSing to Fort Knox are often choosing homes sight-unseen based on listing photos. Professional photography and drone aerials that show neighborhood context, proximity to post, and property condition are directly tied to whether your listing gets a showing or gets skipped.",
      },
    ],
    nearbyAreas: ["Radcliff", "Vine Grove", "Hodgenville", "Rineyville", "Cecilia"],
    distanceFromBase: "~40 min from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/real-estate-aerial-drone-leitchfield-ky.webp", alt: "Aerial drone real estate photography in Elizabethtown, Hardin County KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a kitchen in Elizabethtown, Kentucky" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Elizabethtown, KY" },
      { src: "/images/living-room-sectional-dark-floors.webp", alt: "Professional interior photography of a modern living room in Elizabethtown, KY" },
      { src: "/images/white-farmhouse-front-exterior-kentucky.webp", alt: "Exterior photography of a white farmhouse in Hardin County, Kentucky" },
      { src: "/images/stone-estate-front-exterior-walkway.webp", alt: "Stone estate exterior real estate photography in Elizabethtown, KY" },
    ],
  },
  {
    slug: "bowling-green",
    city: "Bowling Green",
    county: "Warren County",
    state: "KY",
    tagline: "Serving South Central Kentucky",
    headline: "Real Estate Photography & Drone Media in Bowling Green, Warren County KY",
    intro:
      "CS Media serves real estate agents, Airbnb hosts, and property managers across Bowling Green and Warren County. As Kentucky's third-largest city — and home to Western Kentucky University — Bowling Green has a real estate market that moves fast and attracts buyers from Nashville, Louisville, and beyond. Professional listing media isn't a luxury here; it's how you compete.",
    marketContext:
      "Bowling Green's market has a few dynamics that make professional photography especially important. The city's growth along the Scottsville Road and Louisville Road corridors has created a competitive environment where new listings appear daily. WKU drives a strong rental and investment property market. And the city's position on I-65 between Nashville and Louisville means buyers are often comparing BG listings against those two metro markets — where professional photos are already the standard.",
    whyUs:
      "We bring the same quality that Louisville and Nashville photographers deliver, without the metro-area price tag. Every shoot includes professional HDR editing, color correction, and MLS-ready formatting. Drone photography is included on our full package — not billed as a separate add-on. We deliver within 24-48 hours so your listing doesn't sit waiting for photos.",
    droneDetails:
      "Bowling Green's layout makes drone photography valuable for almost every listing type. Suburban neighborhoods benefit from aerial context that shows nearby parks, schools, and shopping. Rural Warren County properties need aerials to convey acreage and land features. Even downtown investment properties photograph better from above — drone shots can show parking, roof condition, and proximity to WKU's campus.",
    propertyTypes: [
      {
        name: "WKU Area Investment Properties",
        description:
          "The rental market around Western Kentucky University is competitive. We photograph duplexes, student housing, and small multi-family properties with a focus on what investors and renters care about: layout, condition, and location relative to campus.",
      },
      {
        name: "Suburban Neighborhoods",
        description:
          "Developments along Scottsville Road, Veterans Memorial Lane, and the Lovers Lane corridor are where most residential transactions happen. Drone shots show neighborhood maturity, lot sizes, and proximity to BG's commercial core.",
      },
      {
        name: "Rural Warren County",
        description:
          "Once you get outside city limits, Warren County has significant agricultural and rural residential listings. These properties need aerial photography to show the full scope — fence lines, outbuildings, road access, and overall land use.",
      },
    ],
    localInsight:
      "Something we've noticed shooting in Bowling Green: listings in the $150K-$250K range often skip professional photography because agents assume the budget doesn't justify it. But that price range is exactly where BG's market is most competitive — there are dozens of similar listings at any given time. The ones with professional photos and drone shots consistently get more clicks and faster showings. Our $200 Photo Package with drone pays for itself if it shaves even a few days off market time.",
    closingPitch:
      "We serve Bowling Green and Warren County regularly. Packages start at $85 plus 2-way mileage. Let's get your listing photographed the way it deserves.",
    faqs: [
      {
        q: "Do you serve Bowling Green, KY?",
        a: "Yes. We travel to Bowling Green and Warren County regularly for real estate shoots. We're about an hour from BG via I-65 from our Leitchfield headquarters.",
      },
      {
        q: "What's included in your Bowling Green photography packages?",
        a: "All packages include professionally edited, MLS-ready photos delivered within 24-48 hours. The Photo Package ($200 + mileage) covers 25–40 interior + exterior shots plus drone aerials. The Full Package — Standard ($280 + mileage) adds a 30–45 second listing video, and Full Package — Pro ($380 + mileage) upgrades to a 60–90 second cinematic video with advanced editing and color grading.",
      },
      {
        q: "Can you photograph rental and investment properties in Bowling Green?",
        a: "Yes. We work with landlords, property managers, and investors — not just residential agents. Whether it's a student rental near WKU or a multi-family property, we tailor the shoot to highlight what matters to your target buyer or renter.",
      },
      {
        q: "Do you offer volume discounts for multiple Bowling Green listings?",
        a: "We can batch multiple properties into a single trip, which reduces the per-property mileage cost. If you have 2-3 listings in the BG area, contact us and we'll work out a package deal.",
      },
      {
        q: "Is there anything drone photography can't cover in Bowling Green?",
        a: "Bowling Green-Warren County Regional Airport has a small controlled airspace zone. Properties directly adjacent to the airport may have altitude restrictions. We check authorization for every address and will let you know in advance if any limitations apply.",
      },
    ],
    nearbyAreas: ["Alvaton", "Smiths Grove", "Oakland", "Plum Springs", "Rich Pond"],
    distanceFromBase: "~1 hour from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Overhead aerial drone real estate photography in Bowling Green, Warren County KY" },
      { src: "/images/rustic-bathroom-brick-double-vanity.webp", alt: "Interior real estate photography of a bathroom in Bowling Green, Kentucky" },
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photo of a country home on acreage in Warren County, KY" },
      { src: "/images/stone-estate-living-room-fireplace.webp", alt: "Professional living room real estate photography in Bowling Green, KY" },
      { src: "/images/upper-level-loft-staircase-landing.webp", alt: "Interior real estate photography of a loft staircase in Bowling Green, KY" },
      { src: "/images/twilight-ranch-aerial-drone-dusk.webp", alt: "Twilight aerial drone photography of a ranch property in Warren County, KY" },
    ],
  },
  {
    slug: "owensboro",
    city: "Owensboro",
    county: "Daviess County",
    state: "KY",
    tagline: "Real Estate Media for Western Kentucky",
    headline: "Real Estate Photography & Drone Media in Owensboro, Daviess County KY",
    intro:
      "CS Media provides drone photography, real estate videography, and virtual staging services to agents and property owners throughout Owensboro and Daviess County. Owensboro sits along the Ohio River with a downtown that's been revitalized over the past decade and residential neighborhoods that stretch from the riverfront to the farmland south of town. It's a market with real variety — and each property type needs a different photographic approach.",
    marketContext:
      "Owensboro's real estate market has changed significantly in recent years. The downtown riverfront redevelopment around Smothers Park and the Blue Bridge brought new interest to the city's core. Meanwhile, the east side of town along Highway 54 continues to see new construction and commercial growth. Agents here are dealing with a mix of historic homes, modern subdivisions, and rural properties — often within the same week. Professional photography that adapts to each property type isn't optional anymore.",
    whyUs:
      "We approach every Owensboro shoot based on what that specific property needs. A historic home near Griffith Avenue gets different treatment than a new build in the Heartland Crossing area. We adjust our lighting setup, drone flight plan, and editing style based on the property — not a one-size-fits-all checklist. That's the difference between photos that look professional and photos that actually sell the listing.",
    droneDetails:
      "Owensboro's Ohio River setting creates aerial photography opportunities you won't find anywhere else in western Kentucky. For riverfront properties, drone shots capture the water views that buyers are paying a premium for. For the broader market, aerials show Owensboro's layout — how close a property is to downtown, the Owensboro Health Regional Hospital, or the city's expanding east side. On rural Daviess County listings, drone photography is the only way to convey the full scope of the land.",
    propertyTypes: [
      {
        name: "Riverfront & Downtown Properties",
        description:
          "The revitalized downtown and Ohio River corridor attract buyers looking for walkability and river views. Drone photography is essential here — it's the only way to show a property's relationship to the riverfront, Smothers Park, and downtown Owensboro from the buyer's perspective.",
      },
      {
        name: "Historic Neighborhoods",
        description:
          "Owensboro's Griffith Avenue area and surrounding historic districts have homes with architectural character that deserves careful photography. We use professional lighting to handle ornate interiors and tall ceilings, and exterior shots that highlight period details.",
      },
      {
        name: "East Side New Construction",
        description:
          "The Highway 54 corridor and surrounding developments are where most new residential construction is happening. For these properties, drone shots show lot placement, development progress, and proximity to shopping and dining along the commercial corridor.",
      },
      {
        name: "Daviess County Rural Properties",
        description:
          "Outside Owensboro, Daviess County has significant agricultural land and rural residential listings. These need the same aerial treatment as any rural Kentucky listing — showing acreage, outbuildings, road frontage, and land features that ground-level photos can't communicate.",
      },
    ],
    localInsight:
      "Owensboro agents have told us that listings with drone photos showing Ohio River proximity get noticeably more engagement than those without — even when the listing description mentions it. Buyers are visual. Telling them the river is nearby doesn't have the same impact as showing them an aerial where they can see the water from above the property. If you're listing anything within a mile of the riverfront, drone photography should be non-negotiable.",
    closingPitch:
      "We travel to Owensboro regularly and can batch multiple properties per trip to keep costs down. Packages start at $85 plus 2-way mileage.",
    faqs: [
      {
        q: "How far do you travel to Owensboro?",
        a: "CS Media is about an hour from Owensboro via the Western Kentucky Parkway. We schedule Owensboro shoots regularly and can batch multiple properties in a single trip to reduce per-listing mileage costs.",
      },
      {
        q: "Can you fly drones near the Ohio River in Owensboro?",
        a: "Most of Owensboro is in uncontrolled (Class G) airspace that permits drone flights. The Owensboro-Daviess County Regional Airport has a small controlled zone on the west side of town. We verify airspace authorization for every address before booking.",
      },
      {
        q: "Do you offer virtual staging for Owensboro listings?",
        a: "Yes. Virtual staging is available as an add-on at $25 per photo (or $50 per video scene) with 24-48 hour turnaround. It doesn't require a separate visit — we can digitally stage photos from any shoot. This is especially popular for vacant listings and new construction.",
      },
      {
        q: "What if I have multiple listings in Owensboro?",
        a: "We offer reduced mileage when batching properties. If you have 2-3 listings in the Owensboro area, let us know and we'll schedule them together. This is common for agents with active inventory in Daviess County.",
      },
      {
        q: "Do you photograph commercial properties in Owensboro?",
        a: "Yes. We work with commercial property owners, Airbnb hosts, property managers, and businesses — not just residential agents. Drone photography is particularly valuable for commercial properties where you need to show parking, roof condition, and surrounding infrastructure.",
      },
    ],
    nearbyAreas: ["Whitesville", "Maceo", "Philpot", "Utica", "Calhoun"],
    distanceFromBase: "~1 hour from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/white-farmhouse-aerial-drone-kentucky.webp", alt: "Aerial drone real estate photography of a farmhouse in Owensboro, Daviess County KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a kitchen in Owensboro, Kentucky" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch-style home in Owensboro, KY" },
      { src: "/images/stone-estate-front-exterior-walkway.webp", alt: "Professional exterior real estate photography in Owensboro, Daviess County KY" },
      { src: "/images/living-room-sectional-dark-floors.webp", alt: "Interior real estate photography of a living room in Owensboro, KY" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior photography of an Owensboro, Kentucky home" },
    ],
  },
  {
    slug: "bardstown",
    city: "Bardstown",
    county: "Nelson County",
    state: "KY",
    tagline: "Real Estate Media for Nelson County",
    headline: "Real Estate Photography & Drone Media in Bardstown, Nelson County KY",
    intro:
      "CS Media provides real estate photography, drone video, and virtual staging in Bardstown and Nelson County. Bardstown has been named the Most Beautiful Small Town in America, and it lives up to that reputation — which means the real estate photography needs to live up to it too. Whether you're listing a home on East Stephen Foster Avenue, a farm on the outskirts of town, or a property in the bourbon tourism corridor, we know how to capture what makes it sell.",
    marketContext:
      "Bardstown's real estate market is unlike anywhere else in Kentucky. The bourbon tourism industry drives significant investment — buyers aren't just looking for houses, they're looking for properties with character, acreage for event venues, and proximity to the distillery trail. At the same time, Bardstown has a strong local residential market with historic homes, established neighborhoods, and growing new development. The common thread is that properties here have story and charm, and listing photos need to communicate that — not just document square footage.",
    whyUs:
      "We don't take the same photos at every house. Bardstown's character demands a photographer who reads the property first and shoots second. A Federal-style historic home gets different composition and lighting than a modern farmhouse on 20 acres. We spend time understanding what makes each listing special before we start shooting, and our editing reflects that — warm tones for historic charm, clean and bright for modern builds.",
    droneDetails:
      "Bardstown's rolling Nelson County landscape is some of the most photogenic terrain in Kentucky — and it's made for drone photography. Aerial shots capture the patchwork of farmland, bourbon distilleries, and wooded hillsides that define the area. For residential listings, drone photography shows how a property relates to its surroundings: is it on a quiet country road? Next to a creek? Within sight of My Old Kentucky Home State Park? These are details that ground-level photos can't communicate.",
    propertyTypes: [
      {
        name: "Historic Downtown Properties",
        description:
          "Bardstown's historic district has some of the finest residential architecture in Kentucky. We use professional interior lighting to handle high ceilings, period trim work, and the mix of natural and artificial light that historic homes present. Exterior shots emphasize architectural details and streetscape context.",
      },
      {
        name: "Bourbon Trail & Tourism Properties",
        description:
          "The bourbon tourism industry has created demand for event venues, bed-and-breakfasts, and short-term rentals. These properties need photography that tells a story — not just a set of room-by-room shots. Drone flyovers showing the grounds, surrounding countryside, and proximity to distilleries are essential.",
      },
      {
        name: "Nelson County Farms & Estates",
        description:
          "Nelson County's rolling farmland and estate properties are among the most visually striking in the state. These listings require extensive drone coverage to show total acreage, fence lines, barn locations, and the overall character of the land. We fly at multiple altitudes to capture both the property overview and specific features.",
      },
      {
        name: "New Construction & Modern Builds",
        description:
          "Bardstown's growth areas are seeing new residential construction. For these properties, we focus on clean, bright interiors, exterior landscaping progress, and drone shots that show the lot and surrounding development.",
      },
    ],
    localInsight:
      "Something unique about the Bardstown market: many buyers are from out of state, drawn by the bourbon trail tourism or looking for Kentucky horse country lifestyle at a more accessible price point than Lexington. These buyers are comparing Bardstown listings against properties in other states — often markets where professional photography is standard. If your Bardstown listing has cell phone photos while a comparable property in Tennessee has professional drone shots and a video walkthrough, you've already lost that buyer's attention.",
    closingPitch:
      "We serve Bardstown and Nelson County with the same quality and turnaround as our local Grayson County shoots. Packages start at $85 plus 2-way mileage.",
    faqs: [
      {
        q: "Do you photograph properties in Bardstown?",
        a: "Yes. CS Media serves Bardstown and all of Nelson County. We're about an hour away and schedule shoots there regularly, often batching multiple properties per trip.",
      },
      {
        q: "Can you photograph distillery and tourism properties?",
        a: "Absolutely. We work with all property types including event venues, bed-and-breakfasts, Airbnb properties, and commercial real estate — not just residential listings. Drone photography and video walkthroughs are especially valuable for tourism and hospitality properties.",
      },
      {
        q: "How do you handle historic home photography?",
        a: "Historic homes require a different approach than modern builds. We bring professional lighting equipment to handle tall ceilings, period details, and mixed lighting conditions. Our editing preserves the warm, authentic character of the property rather than making everything look sterile and white.",
      },
      {
        q: "What's your turnaround for Bardstown shoots?",
        a: "All shoots receive edited, MLS-ready deliverables within 24-48 hours, regardless of location. Videos and virtual staging follow the same timeline.",
      },
      {
        q: "Can you shoot aerial video of farms and large estates?",
        a: "Yes. For larger properties we fly at multiple altitudes — a high-altitude overview to show total acreage and boundaries, then lower passes to highlight specific features like barns, ponds, fencing, and road frontage. We can also create cinematic drone flyover videos for premium listings.",
      },
      {
        q: "Do you offer virtual staging for vacant Bardstown listings?",
        a: "Yes. Virtual staging is available as an add-on at $25 per photo and is popular for vacant historic homes and new construction. We digitally furnish rooms with style-appropriate furniture — we're not putting modern minimalist furniture in a Federal-style dining room.",
      },
    ],
    nearbyAreas: ["Bloomfield", "New Haven", "Cox's Creek", "Boston", "Chaplin"],
    distanceFromBase: "~1 hour from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Overhead aerial drone real estate photography in Bardstown, Nelson County KY" },
      { src: "/images/rustic-bathroom-brick-double-vanity.webp", alt: "Interior real estate photography of a historic bathroom in Bardstown, Kentucky" },
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photography of a country home on acreage in Nelson County, KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Professional kitchen real estate photography in Bardstown, KY" },
      { src: "/images/white-farmhouse-front-exterior-kentucky.webp", alt: "Exterior real estate photography of a farmhouse in Bardstown, Nelson County KY" },
      { src: "/images/twilight-ranch-aerial-drone-dusk.webp", alt: "Twilight aerial real estate photography of a Bardstown, KY property" },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
