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
  /** Short list (5) used in the intro "Also Serving Nearby Areas" copy */
  nearbyAreas: string[];
  /**
   * Full hyper-local town/community list (10–15) for the SEO-focused
   * comma-separated paragraph at the bottom of the city page.
   */
  nearbyTowns: string[];
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
    nearbyTowns: [
      "Leitchfield",
      "Caneyville",
      "Clarkson",
      "Big Clifty",
      "Falls of Rough",
      "Shrewsbury",
      "Millwood",
      "Centertown",
      "Spring Lick",
      "McDaniels",
      "Madrid",
      "Cub Run",
      "Olaton",
    ],
    distanceFromBase: "Home base",
    mileageNote: "No mileage fees",
    galleryImages: [
      { src: "/images/aerial-drone-brick-home-grayson-county-ky.webp", alt: "Aerial drone real estate photo of a brick home in Grayson County, Kentucky" },
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
    nearbyTowns: [
      "Elizabethtown",
      "Radcliff",
      "Vine Grove",
      "Cecilia",
      "Glendale",
      "Sonora",
      "Upton",
      "White Mills",
      "Rineyville",
      "West Point",
      "Stephensburg",
      "Hodgenville",
    ],
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
    nearbyTowns: [
      "Bowling Green",
      "Smiths Grove",
      "Plum Springs",
      "Oakland",
      "Rich Pond",
      "Alvaton",
      "Rockfield",
      "Woodburn",
      "Hadley",
      "Memphis",
      "Reedyville",
      "Browning",
    ],
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
    nearbyTowns: [
      "Owensboro",
      "Whitesville",
      "Maceo",
      "Philpot",
      "Utica",
      "Habit",
      "Sorgho",
      "Stanley",
      "Knottsville",
      "Curdsville",
      "Pleasant Ridge",
      "Yelvington",
      "Calhoun",
    ],
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
    nearbyTowns: [
      "Bardstown",
      "Bloomfield",
      "New Haven",
      "Cox's Creek",
      "Boston",
      "Chaplin",
      "Fairfield",
      "Deatsville",
      "Howardstown",
      "Loretto",
      "Nazareth",
    ],
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
  {
    slug: "radcliff",
    city: "Radcliff",
    county: "Hardin County",
    state: "KY",
    tagline: "Real Estate Media for the Fort Knox Area",
    headline: "Real Estate Photography & Drone Media in Radcliff, Hardin County KY",
    intro:
      "CS Media serves real estate agents and property owners in Radcliff, just north of Elizabethtown and directly bordering Fort Knox. Radcliff's market is shaped almost entirely by the post — military families rotating in, transitioning out, or stationed long-term make up a huge share of buyers and renters. That means a steady stream of out-of-state house-hunters who are deciding from listing photos alone, before they ever set foot in Kentucky.",
    marketContext:
      "Radcliff's housing market moves with the rhythm of Fort Knox PCS cycles. Spring and summer bring waves of incoming families looking to buy or rent quickly; fall and winter are heavier on outgoing listings. Time on market matters more here than in most Kentucky towns because PCS deadlines don't wait. Listings that don't get attention in the first week often sit. Professional photos and drone shots that load fast on phones and tell the full story upfront are the difference between a quick offer and a price reduction.",
    whyUs:
      "We understand the Fort Knox airspace map better than most photographers — we have to. Significant portions of Radcliff fall under controlled airspace that requires LAANC authorization for any drone flight, and parts are restricted entirely. We check every address before booking and won't waste your time with flights that can't legally happen.",
    droneDetails:
      "When drone photography is permitted in Radcliff, it's especially valuable for showing proximity to post — a major decision factor for incoming military families. Aerial shots can show how close a property is to gate access, schools serving Fort Knox families, and the commercial corridor along North Dixie Boulevard. For properties where airspace is restricted, we lean heavier on exterior coverage from elevated angles using poles and ladder mounts.",
    propertyTypes: [
      {
        name: "Military Family Rentals",
        description:
          "Properties marketed to PCS families need to communicate practical information visually: layout, condition, yard size, and proximity to gates. We photograph with that audience in mind — clean, well-lit, and informative rather than artsy.",
      },
      {
        name: "New Construction Subdivisions",
        description:
          "Radcliff's residential growth has produced steady new construction. We photograph builds at completion and document development progress. Drone shots, where airspace allows, show the full subdivision context.",
      },
      {
        name: "Investment & Income Properties",
        description:
          "Long-standing rental demand from Fort Knox makes Radcliff an active investment market. We photograph multi-family properties, duplexes, and SFR rentals with a focus on what investors and tenants need to see.",
      },
    ],
    localInsight:
      "If you're listing in Radcliff, factor PCS season into your marketing timing. Listings that go live in March and April catch the wave of summer movers and tend to move fastest. Listings that drop in October sit. Professional photography is especially worth it during peak season — when the most buyers are searching, you want your listing standing out, not blending in with iPhone shots.",
    closingPitch:
      "We serve Radcliff regularly and check airspace before every booking so you know up front what we can legally capture. Packages start at $85 plus 2-way mileage.",
    faqs: [
      {
        q: "Can you photograph properties in Radcliff with Fort Knox airspace restrictions?",
        a: "Yes — but it depends on the address. Some Radcliff properties fall under Fort Knox restricted airspace where drone flights aren't permitted; others fall in zones where we can fly with LAANC authorization. We check every address before booking. If aerials aren't possible at your property, we'll let you know and adjust the package accordingly.",
      },
      {
        q: "How far is Radcliff from CS Media?",
        a: "About 50 minutes via the Western Kentucky Parkway and Highway 31W. We shoot in the Hardin County area regularly and can often batch Radcliff shoots with Elizabethtown, Vine Grove, or Hodgenville to reduce mileage costs.",
      },
      {
        q: "Do you understand the military relocation market?",
        a: "Yes. A significant portion of Radcliff buyers and renters are PCS families house-hunting from out of state. We photograph with that audience in mind — clear layouts, accurate representation, and aerial context where airspace allows.",
      },
      {
        q: "What's the best time of year to photograph a Radcliff listing?",
        a: "Spring (March–May) catches the wave of summer PCS moves and is when listings tend to move fastest. We can shoot year-round, but if you have flexibility on listing timing, peak PCS season is when professional photography pays for itself fastest.",
      },
      {
        q: "Do you photograph properties in nearby Vine Grove or Fort Knox?",
        a: "Yes. We serve all of Hardin County and frequently shoot in Vine Grove, Fort Knox housing areas (where allowed), and surrounding communities. Vine Grove airspace has fewer restrictions than central Radcliff.",
      },
    ],
    nearbyAreas: ["Vine Grove", "Fort Knox", "Muldraugh", "West Point", "Stephensburg"],
    nearbyTowns: [
      "Radcliff",
      "Vine Grove",
      "Fort Knox",
      "Muldraugh",
      "West Point",
      "Stephensburg",
      "Elizabethtown",
      "Cecilia",
      "Rineyville",
      "Brandenburg",
      "Doe Valley",
    ],
    distanceFromBase: "~50 min from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/real-estate-aerial-drone-leitchfield-ky.webp", alt: "Aerial drone real estate photography in Radcliff, Hardin County KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a kitchen in Radcliff, Kentucky" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Radcliff, KY" },
      { src: "/images/living-room-sectional-dark-floors.webp", alt: "Interior real estate photography of a living room in Radcliff, KY" },
      { src: "/images/white-farmhouse-front-exterior-kentucky.webp", alt: "Exterior real estate photography of a home in Hardin County, KY" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior photography of a Radcliff, Kentucky home" },
    ],
  },
  {
    slug: "hodgenville",
    city: "Hodgenville",
    county: "LaRue County",
    state: "KY",
    tagline: "Real Estate Media for LaRue County",
    headline: "Real Estate Photography & Drone Media in Hodgenville, LaRue County KY",
    intro:
      "CS Media provides real estate photography and drone video for agents and property owners in Hodgenville and LaRue County. Best known as the birthplace of Abraham Lincoln, Hodgenville is a small Kentucky town where most listings are residential homes, farmland, and rural acreage. Properties here often need aerial photography to do them justice — the land is part of the story.",
    marketContext:
      "Hodgenville's market is steady rather than fast-moving. Most buyers are local or relocating from nearby Hardin and Nelson counties, looking for rural living within commuting distance of Elizabethtown or Bardstown. Farms, hobby acreage, and country homes are the heart of LaRue County listings, and these are exactly the property types where drone photography makes the biggest difference. A 5-acre property looks the same as a 50-acre property in ground-level photos. From the air, the difference is obvious.",
    whyUs:
      "Most photographers serving LaRue County are based in Louisville or Lexington and treat Hodgenville as a side trip. We're 45 minutes away and treat it as part of our home territory. That means competitive pricing, fast scheduling, and someone who actually understands what rural Kentucky listings need to communicate.",
    droneDetails:
      "Aerial photography is essential for the kind of properties that dominate the LaRue County market. Our drone shots show acreage, fence lines, woods, ponds, and the relationship between the house and the surrounding land. For Lincoln Heritage Trail tourism properties, drone footage captures the rolling Kentucky countryside that draws visitors here.",
    propertyTypes: [
      {
        name: "Farms & Rural Acreage",
        description:
          "LaRue County is farm country. Drone photography captures the full scope of these properties — total acreage, pasture vs. timber, water features, outbuildings, and road frontage. We shoot at angles that make the land the focus.",
      },
      {
        name: "Country Residential",
        description:
          "Many Hodgenville-area listings are 1-5 acre residential properties on rural roads. These need a balanced approach: interior photos that highlight the home and aerial shots that show the lot and setting.",
      },
      {
        name: "Lincoln Heritage Tourism Properties",
        description:
          "Hodgenville's Lincoln Birthplace National Historical Park draws tourists year-round. Bed-and-breakfasts, Airbnb properties, and tourism-related real estate benefit from drone footage that captures the area's rural Kentucky character.",
      },
    ],
    localInsight:
      "Rural property listings in LaRue County often underperform because they're photographed like in-town houses — close-up exteriors, backyard shots from the patio, no sense of scale. The whole reason someone is buying acreage is the acreage itself. If your photos don't make it the star, you're underselling the property. Even a single drone shot of total land area can change how a listing feels online.",
    closingPitch:
      "Whether you're listing a Hodgenville residential property, a LaRue County farm, or a tourism-related rental, we can help. Packages start at $85 plus 2-way mileage from Leitchfield.",
    faqs: [
      {
        q: "Do you photograph farms and acreage in LaRue County?",
        a: "Yes. Farm and rural acreage listings are some of the most common shoots we do. Our drone equipment captures the full scope of large properties in a way ground-level photos simply can't match.",
      },
      {
        q: "How far is CS Media from Hodgenville?",
        a: "About 45 minutes via the Western Kentucky Parkway and US-31E. We shoot in LaRue County regularly and can batch with nearby Elizabethtown or Bardstown shoots to reduce mileage.",
      },
      {
        q: "Can you fly drones in Hodgenville?",
        a: "Yes. Hodgenville and most of LaRue County are in uncontrolled (Class G) airspace with no FAA restrictions. Drone flights for real estate are routine here.",
      },
      {
        q: "Do you photograph Airbnb and short-term rental properties?",
        a: "Yes. Tourism-focused properties along the Lincoln Heritage Trail benefit from professional photography that captures both the property and its rural Kentucky setting. We tailor the shoot to the audience the property is marketed to.",
      },
      {
        q: "What if my Hodgenville property is mostly land?",
        a: "Land-heavy listings are exactly where drone photography is most valuable. We can do an aerial-only package starting at $85 if there's no structure to photograph, or include extensive aerial coverage in any package if there's a home plus significant acreage.",
      },
    ],
    nearbyAreas: ["Buffalo", "Magnolia", "Mount Sherman", "Athertonville", "Tonieville"],
    nearbyTowns: [
      "Hodgenville",
      "Buffalo",
      "Magnolia",
      "Mount Sherman",
      "Athertonville",
      "Tonieville",
      "Upton",
      "Sonora",
      "New Haven",
      "Howardstown",
      "Elizabethtown",
    ],
    distanceFromBase: "~45 min from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photography of a country home on acreage in Hodgenville, LaRue County KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a rustic kitchen in Hodgenville, KY" },
      { src: "/images/white-farmhouse-aerial-drone-kentucky.webp", alt: "Aerial drone photo of a white farmhouse on Kentucky acreage in LaRue County" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Hodgenville, KY" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior real estate photography in LaRue County, Kentucky" },
      { src: "/images/stone-estate-living-room-fireplace.webp", alt: "Professional living room real estate photography in Hodgenville, KY" },
    ],
  },
  {
    slug: "hardinsburg",
    city: "Hardinsburg",
    county: "Breckinridge County",
    state: "KY",
    tagline: "Real Estate Media for Breckinridge County",
    headline: "Real Estate Photography & Drone Media in Hardinsburg, Breckinridge County KY",
    intro:
      "CS Media serves real estate agents and property owners in Hardinsburg and across Breckinridge County. Hardinsburg sits at the geographic center of Breckinridge — a rural county defined by Ohio River frontage, rolling farmland, and small-town communities. Most listings here are land-heavy and need aerial photography to communicate what they actually offer.",
    marketContext:
      "Breckinridge County is one of Kentucky's more affordable rural markets, and that pulls in two buyer pools that rarely overlap. The first is hunters — deer-lease investors and weekend-camp owners shopping from Louisville, Cincinnati, and Indianapolis — who drive most of the land-heavy inventory from July through October, timing purchases to land before Kentucky's archery and firearm seasons. The second is retirees and remote workers priced out of Meade and Hardin next door, looking for acreage without the commute penalty. Neither buyer is browsing casually; both are shopping from photos alone, often from several hours away.",
    whyUs:
      "We're 35 minutes up Highway 259 from Hardinsburg — closer than the Louisville and Owensboro photographers most agents default to, which matters when a hunting-property listing has a seasonal window. A tract that waits three weeks for a photographer in early October has missed its buyer. We can typically slot Breckinridge County shoots within a week, flat.",
    droneDetails:
      "The two features that sell Breckinridge County listings — timber and water — are almost invisible from the ground. A 40-acre tract with a spring-fed pond, mature oak stands, and a draw running through it reads as 'woods and a field' in a curb-appeal photo. From 300 feet up, a buyer can see the draw line, the timber blocks, the pond placement, and how those features connect. For Ohio River listings near Cloverport and Stephensport, altitude is the only way to capture the river relationship — ground-level photos flatten a bluff view into a strip of water.",
    propertyTypes: [
      {
        name: "Deer Camps & Hunting Tracts",
        description:
          "Breckinridge moves serious hunting inventory every fall. These listings need drone coverage that reads topographically: timber stands, water access, bedding cover, and field edges ready for food plots. Generic 'wooded acreage' shots don't close a full-asking sale to a buyer comparing tracts across three states.",
      },
      {
        name: "Ohio River Frontage",
        description:
          "Listings around Cloverport and Stephensport trade on the river itself — the view, the water access, the bluff-top placement. We weight aerial coverage toward elevation and river-angle shots that capture the frontage, not just the house sitting above it.",
      },
      {
        name: "Rural Residential on 1–10 Acres",
        description:
          "Country homes on small acreage are the working-market majority in Breckinridge. These get balanced interior and exterior coverage plus an aerial that places the home in its lot — buyers want to see the driveway length, outbuildings, and how far the nearest neighbor's lights are.",
      },
    ],
    localInsight:
      "The most consistently under-marketed category we see in Breckinridge is hunting tracts. Most come to market with four photos: the cabin, the gravel drive, a wide shot of trees, and an interior of the kitchen. A serious deer-lease buyer — the one who pays asking — wants to see topography, timber composition, and water layout before driving two hours to walk the property. Drone coverage on those features turns a tract that sits for six months into one that sells in the first week of archery season.",
    closingPitch:
      "Whether you're listing a Breckinridge County farm, a hunting property, an Ohio River cabin, or an in-town Hardinsburg home, we can help. Packages start at $85 plus 2-way mileage.",
    faqs: [
      {
        q: "Do you photograph hunting and recreational properties in Breckinridge County?",
        a: "Yes. Hunting and recreational land is a major part of the Breckinridge County market. We use drone photography to show topography, timber, water sources, and access — the features that actually matter to hunting and recreational buyers.",
      },
      {
        q: "How far is Hardinsburg from CS Media?",
        a: "About 35 minutes via Highway 259 from Leitchfield. Breckinridge County is one of our closest neighboring markets, so mileage costs are minimal.",
      },
      {
        q: "Can you fly drones along the Ohio River in Breckinridge County?",
        a: "Yes. Most of Breckinridge County is in uncontrolled (Class G) airspace. River-adjacent properties near Cloverport, Stephensport, and Lewisport are routine for drone work.",
      },
      {
        q: "Do you photograph farms and large acreage?",
        a: "Yes. Large rural properties are some of our most common shoots. We fly at multiple altitudes to capture both the overall property scope and specific features like outbuildings, water, and field layout.",
      },
      {
        q: "What if my listing is mostly land with a small structure?",
        a: "That's a typical rural listing for us. Our aerial-only package ($85) is great for land-only listings, and our larger packages can be weighted toward aerial coverage if the structure is secondary to the land. We tailor the shoot to the property.",
      },
    ],
    nearbyAreas: ["Cloverport", "Irvington", "Stephensport", "Custer", "Big Spring"],
    nearbyTowns: [
      "Hardinsburg",
      "Cloverport",
      "Irvington",
      "Stephensport",
      "Custer",
      "Sample",
      "Garfield",
      "Big Spring",
      "Webster",
      "McDaniels",
      "Falls of Rough",
    ],
    distanceFromBase: "~35 min from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photography of a country home on acreage in Hardinsburg, Breckinridge County KY" },
      { src: "/images/white-farmhouse-aerial-drone-kentucky.webp", alt: "Aerial drone photo of a white farmhouse in Breckinridge County, Kentucky" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a rustic kitchen in Hardinsburg, KY" },
      { src: "/images/twilight-ranch-aerial-drone-dusk.webp", alt: "Twilight aerial drone photography of a property in Breckinridge County, KY" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior real estate photography in Hardinsburg, Kentucky" },
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Overhead aerial drone real estate photography in Breckinridge County, Kentucky" },
    ],
  },
  {
    slug: "brandenburg",
    city: "Brandenburg",
    county: "Meade County",
    state: "KY",
    tagline: "Real Estate Media for Meade County",
    headline: "Real Estate Photography & Drone Media in Brandenburg, Meade County KY",
    intro:
      "CS Media provides real estate photography and drone video for agents and property owners in Brandenburg and Meade County. Brandenburg sits on the Ohio River with views across to Indiana and a market that's quietly grown into one of the region's better-kept secrets — driven by Doe Valley resort properties, river-frontage land, and steady residential demand from commuters working in Louisville and Fort Knox.",
    marketContext:
      "Brandenburg's real estate market is more diverse than its small-town size suggests. Doe Valley alone is a 4,000+ acre gated resort community with golf, lake, and lifestyle amenities — properties there often sell to out-of-state buyers who are deciding from listing photos. Add in Ohio River frontage, rural farmland, and a residential core in town, and you have a market where the right photographic approach varies dramatically by property type. One-size-fits-all photography doesn't work here.",
    whyUs:
      "We approach every Brandenburg shoot based on what the specific property needs. A Doe Valley golf-course home gets different framing than a 50-acre farm in rural Meade County, and both get different treatment than a townhome near downtown Brandenburg. Our drone capabilities are especially valuable for river-adjacent and resort properties where the setting is the selling point.",
    droneDetails:
      "Brandenburg's location on the Ohio River makes drone photography especially valuable. For river-frontage properties, aerials are the only way to capture the water relationship — the view, the access, and how the property sits relative to the river. For Doe Valley properties, drone shots show the resort community context, golf course proximity, and lake access. For rural Meade County listings, aerials communicate acreage and land use the same way they do for any rural Kentucky property.",
    propertyTypes: [
      {
        name: "Doe Valley Resort Properties",
        description:
          "Doe Valley is a destination community with its own buyer pool. We photograph these properties with the lifestyle in mind — golf course views, lake proximity, gated community atmosphere, and the resort amenities that justify the price point.",
      },
      {
        name: "Ohio River Frontage",
        description:
          "Properties on or near the Ohio River command a premium, but only if the photography communicates the river relationship. Drone shots capture the water views, river access, and property setting in ways no ground-level photo can match.",
      },
      {
        name: "Meade County Farms & Acreage",
        description:
          "Outside of Brandenburg and Doe Valley, Meade County has significant rural acreage. Drone photography shows total land scope, fence lines, tree cover, and water features — the details that drive rural property sales.",
      },
    ],
    localInsight:
      "Doe Valley listings are a category of their own. Buyers there are often shopping from out of state and comparing properties against resort communities elsewhere. Generic real estate photos don't compete. The properties that move fastest are the ones with drone footage showing the resort layout, golf course context, and the lifestyle amenities — not just the house. If you're listing a Doe Valley property, professional photography isn't optional.",
    closingPitch:
      "Whether you're listing in Doe Valley, on the Ohio River, or anywhere in Meade County, we can help your property show its best. Packages start at $85 plus 2-way mileage from Leitchfield.",
    faqs: [
      {
        q: "Do you photograph properties in Doe Valley?",
        a: "Yes. Doe Valley is a strong fit for our services — the resort setting, golf course views, and lake amenities all benefit from professional drone photography that shows the full property context, not just the home.",
      },
      {
        q: "How far is Brandenburg from CS Media?",
        a: "About 1 hour 10 minutes via Highway 259 and US-60. Meade County is a regular service area for us.",
      },
      {
        q: "Can you fly drones along the Ohio River in Brandenburg?",
        a: "Yes. Most of Meade County is in uncontrolled airspace. The Ohio River corridor is routine for drone work, though we always check airspace authorization for specific addresses.",
      },
      {
        q: "Do you photograph river-frontage properties differently?",
        a: "We weight the shoot more heavily toward exterior and aerial coverage when the river is the main selling point. Drone shots that capture the water relationship, views, and access are critical for these listings.",
      },
      {
        q: "What if I have multiple Doe Valley listings?",
        a: "We can batch multiple properties into a single trip to reduce per-listing mileage. Doe Valley is a tight community, so it's especially efficient to schedule a few shoots together.",
      },
    ],
    nearbyAreas: ["Doe Valley", "Muldraugh", "Ekron", "Payneville", "Battletown"],
    nearbyTowns: [
      "Brandenburg",
      "Doe Valley",
      "Muldraugh",
      "Ekron",
      "Payneville",
      "Battletown",
      "Wolf Creek",
      "Andyville",
      "Flaherty",
      "Big Spring",
      "Radcliff",
      "Vine Grove",
    ],
    distanceFromBase: "~1 hr 10 min from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Aerial drone real estate photography in Brandenburg, Meade County KY" },
      { src: "/images/twilight-ranch-aerial-drone-dusk.webp", alt: "Twilight aerial drone photography of an Ohio River property in Meade County, KY" },
      { src: "/images/stone-estate-living-room-fireplace.webp", alt: "Professional living room real estate photography in Brandenburg, KY" },
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photo of a country home on acreage in Meade County, KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a kitchen in Brandenburg, Kentucky" },
      { src: "/images/white-farmhouse-front-exterior-kentucky.webp", alt: "Exterior real estate photography of a farmhouse in Meade County, Kentucky" },
    ],
  },
  {
    slug: "shepherdsville",
    city: "Shepherdsville",
    county: "Bullitt County",
    state: "KY",
    tagline: "Real Estate Media for Bullitt County",
    headline: "Real Estate Photography & Drone Media in Shepherdsville, Bullitt County KY",
    intro:
      "CS Media serves real estate agents and property owners in Shepherdsville and Bullitt County — Louisville's southern suburbs and the gateway to Bernheim Forest. Bullitt County's growth is driven by buyers who want Louisville access without Louisville prices, and the market is competitive enough that professional listing media has become the expectation, not the exception.",
    marketContext:
      "Bullitt County is one of Kentucky's fastest-growing counties, and Shepherdsville is at the heart of it. Subdivisions along the I-65 corridor, new construction in Mt. Washington and Hillview, and rural acreage around Bernheim Forest mean a constant flow of new listings. Buyers are typically Louisville commuters or families relocating from out of state, both of whom rely heavily on listing photos to filter their search before scheduling showings. In a market with this much inventory, weak photography is a guaranteed way to lose attention.",
    whyUs:
      "We deliver Louisville-quality real estate photography at small-town pricing. Most Bullitt County agents have used Louisville-based photographers and know the experience: high prices, week-long turnaround, and standardized shoots. We're 1 hour 15 minutes south, charge competitive rates, and deliver in 24-48 hours. For agents with multiple Bullitt County listings, the math works heavily in our favor.",
    droneDetails:
      "Drone photography in Bullitt County is valuable in two main ways: it shows neighborhood context for suburban subdivision homes (proximity to schools, parks, I-65 access, Bernheim Forest), and it captures land scope for the rural acreage listings outside the developed corridors. For Mt. Washington and Hillview new construction, drone shots also document development progress and lot placement within larger subdivisions.",
    propertyTypes: [
      {
        name: "Subdivision Homes & New Construction",
        description:
          "Shepherdsville and Mt. Washington have ongoing residential development. We photograph completed builds and document construction progress. Drone shots are particularly valuable for showing lot placement and surrounding amenities.",
      },
      {
        name: "Louisville Commuter Properties",
        description:
          "Many Bullitt County buyers are Louisville professionals looking for more space and lower prices. These listings need to communicate practical information clearly: layout, condition, yard, and commute proximity to I-65 and downtown Louisville.",
      },
      {
        name: "Bernheim Area & Rural Acreage",
        description:
          "South of Shepherdsville, Bullitt County opens into rural acreage near Bernheim Forest. These listings need extensive drone coverage to communicate land scope, woodland features, and proximity to the forest — a major lifestyle draw.",
      },
    ],
    localInsight:
      "Shepherdsville's proximity to Louisville means buyers have lots of comparison options — a Bullitt County listing isn't just competing with other Bullitt County listings, it's competing with Jefferson County properties at similar prices. The listings that get attention are the ones with photography that matches Louisville-market quality. Cell phone photos don't survive that comparison.",
    closingPitch:
      "Whether you're listing in Shepherdsville, Mt. Washington, or anywhere in Bullitt County, we can deliver Louisville-quality photography at small-town pricing. Packages start at $85 plus 2-way mileage.",
    faqs: [
      {
        q: "Do you serve the Louisville suburbs?",
        a: "Yes. Bullitt County — Shepherdsville, Mt. Washington, Hillview, and surrounding communities — is a regular service area for us. We're 1 hour 15 minutes from Shepherdsville via I-65.",
      },
      {
        q: "Can you fly drones in Bullitt County?",
        a: "Most of Bullitt County is in uncontrolled (Class G) airspace and routine for drone work. The northern edge of the county brushes Louisville's controlled airspace, so we always verify authorization for specific addresses, especially properties near I-265.",
      },
      {
        q: "How does your pricing compare to Louisville real estate photographers?",
        a: "We're significantly less expensive than most Louisville-based photographers — typically 30-50% lower for comparable packages — while delivering the same quality and 24-48 hour turnaround. The trade-off is mileage from Leitchfield, but for Bullitt County properties that's still well below Louisville rates.",
      },
      {
        q: "Do you photograph multiple Bullitt County listings in one trip?",
        a: "Yes, and it's a smart way to keep mileage costs low. If you have 2-3 listings in Shepherdsville, Mt. Washington, or surrounding areas, we can batch them into a single trip and reduce per-property travel charges.",
      },
      {
        q: "Can you photograph properties near Bernheim Forest?",
        a: "Yes. The Bernheim area has some of Bullitt County's most distinctive rural acreage listings, and they benefit enormously from drone photography that captures the relationship between the property and the forest setting.",
      },
    ],
    nearbyAreas: ["Mt. Washington", "Hillview", "Hebron Estates", "Pioneer Village", "Lebanon Junction"],
    nearbyTowns: [
      "Shepherdsville",
      "Mt. Washington",
      "Hillview",
      "Hebron Estates",
      "Pioneer Village",
      "Lebanon Junction",
      "Brooks",
      "Belmont",
      "Knob Creek",
      "Clermont",
      "Cox's Creek",
    ],
    distanceFromBase: "~1 hr 15 min from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Aerial drone real estate photography in Shepherdsville, Bullitt County KY" },
      { src: "/images/living-room-sectional-dark-floors.webp", alt: "Interior real estate photography of a modern living room in Shepherdsville, KY" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Bullitt County, KY" },
      { src: "/images/upper-level-loft-staircase-landing.webp", alt: "Interior real estate photography of a loft staircase in Shepherdsville, KY" },
      { src: "/images/white-farmhouse-front-exterior-kentucky.webp", alt: "Exterior real estate photography of a farmhouse in Bullitt County, Kentucky" },
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photo of a country home in Bullitt County, near Bernheim Forest" },
    ],
  },
  {
    slug: "caneyville",
    city: "Caneyville",
    county: "Grayson County",
    state: "KY",
    tagline: "Local Service for Eastern Grayson County",
    headline: "Real Estate Photography & Drone Media in Caneyville, Grayson County KY",
    intro:
      "CS Media is based right next door in Leitchfield and serves Caneyville and eastern Grayson County with no mileage fees. Caneyville is small-town Kentucky at its most authentic — most listings are residential homes, working farms, and rural acreage along the Highway 62 corridor. As your local real estate photographer, we can be on-site within days of booking.",
    marketContext:
      "Caneyville is a smaller, more agricultural market than Leitchfield, and the listing mix reflects it. Most inventory is working farms, country homes on small acreage along the Highway 62 corridor, and a quieter in-town residential core around the old downtown streets. The buyer pool is different too — fewer short-term rental investors than you see in the Rough River area, more local Grayson County families, and a slow but steady trickle of Louisville and Elizabethtown retirees looking for real rural living without giving up I-65 access.",
    whyUs:
      "Caneyville is 15 minutes from our Leitchfield base — close enough that mileage is effectively a non-issue. But the real advantage is familiarity. We work Grayson County every week, so we already know which back roads are worth shooting from, where the airspace is clean, and how the local market prices this kind of inventory. That context shapes the shoot plan before a camera comes out of the case.",
    droneDetails:
      "Eastern Grayson County's terrain differs from the western side. Less of the Rough River Lake elevation, more flat-to-rolling working farmland stretching toward Edmonson and Hart counties. For farm listings, aerial coverage needs to emphasize usable-acreage readability — pasture versus wooded versus cropland — rather than dramatic topography. For parcels in the eastern pockets that edge toward Nolin Lake access, aerials capture proximity to lake roads without requiring direct waterfront.",
    propertyTypes: [
      {
        name: "Working & Hobby Farms",
        description:
          "Eastern Grayson County has active row-crop and cattle operations alongside smaller hobby farms. We shoot these to emphasize productive acreage, barn condition, water sources, and road frontage — the specific details a buyer farming for income actually studies before scheduling a walk-through.",
      },
      {
        name: "Small-Town Residential",
        description:
          "The residential core around Main Street photographs best with on-site lighting that handles older room dimensions and a composition that sells walkability and neighborhood character ahead of lot size.",
      },
      {
        name: "Nolin Lake-Area Acreage",
        description:
          "Parcels in eastern Grayson edging toward Nolin Lake have secondary-home appeal for Louisville buyers. Aerial shots showing lake proximity, road access, and the overall rural setting help position these for the weekend-property market rather than the in-county buyer pool.",
      },
    ],
    localInsight:
      "The Caneyville listings that move fastest are usually working farms priced correctly for the acreage — Grayson County farmland is still meaningfully cheaper than comparable land in Hardin or Nelson — but they only move fast if the photography lets out-of-county buyers evaluate the land without driving two hours to see it. A farm that reads as 'a house and some trees' in the MLS photos gets ignored. The same farm, shot with a couple of high-altitude aerials that read the property line and the fields, gets showings within days.",
    closingPitch:
      "Caneyville is part of our home territory. No mileage fees, fast scheduling, packages from $85.",
    faqs: [
      {
        q: "Do you charge travel fees for Caneyville shoots?",
        a: "No. CS Media is based in Leitchfield, just 15 minutes from Caneyville. There are zero travel or mileage fees anywhere in Grayson County.",
      },
      {
        q: "Can you fly drones in Caneyville?",
        a: "Yes. Caneyville and eastern Grayson County are in uncontrolled (Class G) airspace with no FAA restrictions. We're FAA Part 107 certified and routinely include drone shots on Caneyville-area shoots.",
      },
      {
        q: "How quickly can you photograph a Caneyville listing?",
        a: "Often within 1-3 days of booking. As your local photographer, we can frequently fit Caneyville shoots into our schedule on short notice.",
      },
      {
        q: "Do you photograph farms and acreage in eastern Grayson County?",
        a: "Yes. Working farms and rural acreage are some of our most common shoots in the Grayson County area. Drone photography is essential for these listings, and we include it at no extra charge in all applicable packages.",
      },
      {
        q: "What's included in your Caneyville packages?",
        a: "Same as anywhere else: edited, MLS-ready deliverables in 24-48 hours. Aerial-only is $85, Photo Package with drone is $200, and full packages with listing video run $280–$380. No mileage fees in Grayson County.",
      },
    ],
    nearbyAreas: ["Leitchfield", "Clarkson", "Centertown", "Beaver Dam", "Falls of Rough"],
    nearbyTowns: [
      "Caneyville",
      "Leitchfield",
      "Clarkson",
      "Big Clifty",
      "Centertown",
      "Beaver Dam",
      "Falls of Rough",
      "Spring Lick",
      "Millwood",
      "Madrid",
      "Cub Run",
    ],
    distanceFromBase: "~15 min from base",
    mileageNote: "No mileage fees",
    galleryImages: [
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photography of a country home on acreage in Caneyville, Grayson County KY" },
      { src: "/images/white-farmhouse-aerial-drone-kentucky.webp", alt: "Aerial drone photo of a white farmhouse in Caneyville, Kentucky" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a rustic kitchen in Caneyville, KY" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Grayson County, KY" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior photography of a Caneyville, Kentucky home" },
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Overhead aerial drone real estate photography in Grayson County, Kentucky" },
    ],
  },
  {
    slug: "munfordville",
    city: "Munfordville",
    county: "Hart County",
    state: "KY",
    tagline: "Real Estate Media for Hart County",
    headline: "Real Estate Photography & Drone Media in Munfordville, Hart County KY",
    intro:
      "CS Media serves real estate agents and property owners in Munfordville and Hart County. Sitting along I-65 between Elizabethtown and Bowling Green — and just north of Mammoth Cave National Park — Munfordville's market combines steady residential demand from highway-corridor commuters with a strong tourism-driven rental market tied to the cave. Each property type benefits from a different photographic approach.",
    marketContext:
      "Hart County's real estate market runs on two engines that barely overlap. The first is I-65 corridor residential — Munfordville at Exit 65, Cave City at Exit 58, and the farms and small communities strung between them — serving local families and commuters splitting the distance between Elizabethtown and Bowling Green. The second is Mammoth Cave tourism: cabins, lodges, and short-term rentals within fifteen minutes of the National Park entrance, where the audience is a traveler in Ohio or Illinois scrolling Airbnb on a Tuesday night. The two markets read listing photos completely differently, and shooting them the same way is the fastest way to underperform either one.",
    whyUs:
      "45 minutes down the Western Kentucky Parkway to I-65 gets us to Munfordville, and we regularly batch Hart County shoots with nearby Bowling Green or Elizabethtown jobs to trim mileage. More importantly, we shoot vacation rentals and residential listings differently. A Mammoth Cave-area Airbnb needs photography that reads like a travel magazine; a Munfordville family home needs photography that reads like MLS. Same pricing, very different shoot.",
    droneDetails:
      "Drone work in Hart County has to account for Mammoth Cave National Park's airspace — we will not fly inside NPS boundaries, and we verify a property's exact coordinates before the booking is confirmed. Outside the park, the ridgelines above Green River and the rolling pasture toward Horse Cave photograph beautifully from 200-400 feet. For cabin rentals, aerial shots are one of the biggest booking-conversion levers on Airbnb — travelers want to see the setting, not just the deck.",
    propertyTypes: [
      {
        name: "Mammoth Cave Vacation Rentals",
        description:
          "Cabins near the park entrance, Cave City short-term rentals, and Green River-adjacent lodges live and die on Airbnb's first three photos. We shoot these for the platform: a strong lifestyle hero, a warm interior that reads well on mobile, and an aerial that places the property in the Kentucky countryside travelers are flying in to see.",
      },
      {
        name: "Munfordville & Horse Cave Residential",
        description:
          "In-town homes in Munfordville's historic district and Horse Cave's walkable core need photography that handles smaller rooms and older-home lighting conditions. HDR processing and on-site lighting make the difference — these are not open-plan new builds, and the shoot has to be set up accordingly.",
      },
      {
        name: "I-65 Corridor Farms",
        description:
          "Hart County farm inventory runs from 20-acre hobby farms to working cattle operations. Drone coverage shows pasture layout, barn condition, and the property's relationship to the I-65 access that makes it commutable — a real selling point for buyers relocating from larger counties.",
      },
    ],
    localInsight:
      "Mammoth Cave-area vacation rentals are where the photography gap is most obvious and most correctable. We have walked into listings booking 40 percent of the nights they could be and walked out after a four-hour shoot that — a few weeks later — tracked toward 70-plus percent occupancy in high season. Airbnb's search algorithm weights listings with strong photo engagement, so professional photography does not only convert the traveler who sees the listing; it surfaces the listing to more travelers in the first place. That compounds.",
    closingPitch:
      "Whether you're listing a Munfordville home, a Hart County farm, or a Mammoth Cave-area rental, we can help. Packages start at $85 plus 2-way mileage from Leitchfield.",
    faqs: [
      {
        q: "Do you photograph short-term rentals and Airbnbs near Mammoth Cave?",
        a: "Yes. Vacation rental photography is one of our most-requested services in Hart County. Professional photos directly correlate with booking rates on Airbnb and VRBO — better photos mean more bookings.",
      },
      {
        q: "How far is Munfordville from CS Media?",
        a: "About 45 minutes via the Western Kentucky Parkway and I-65. Hart County is a regular service area for us, and we can batch with nearby Bowling Green or Elizabethtown shoots.",
      },
      {
        q: "Can you fly drones near Mammoth Cave National Park?",
        a: "Yes for properties outside the National Park boundary — most Mammoth Cave-area rentals are. Drone flights inside the National Park boundary are restricted by NPS regulations. We verify location before booking and won't fly anywhere we shouldn't.",
      },
      {
        q: "Do you offer different shoots for tourism rentals vs. residential listings?",
        a: "Yes. A vacation rental shoot focuses on lifestyle and setting — the experience of staying there. A residential listing focuses on layout, condition, and value. We adjust composition, lighting, and editing to match the audience the property is being marketed to.",
      },
      {
        q: "What's the best package for an Airbnb near Mammoth Cave?",
        a: "Most short-term rentals do best with a Photo Package ($200) covering 25–40 photos including drone aerials, sometimes upgraded to Full Package — Standard ($280) which adds a 30–45 second video. Video is increasingly important on Airbnb listings as the platform pushes video-enabled hosts.",
      },
    ],
    nearbyAreas: ["Horse Cave", "Hardyville", "Bonnieville", "Cub Run", "Magnolia"],
    nearbyTowns: [
      "Munfordville",
      "Horse Cave",
      "Hardyville",
      "Bonnieville",
      "Cub Run",
      "Magnolia",
      "Linwood",
      "Roanoke",
      "Park City",
      "Cave City",
      "Mammoth Cave",
    ],
    distanceFromBase: "~45 min from base",
    mileageNote: "+ mileage",
    galleryImages: [
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photography of a country home on acreage in Munfordville, Hart County KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a rustic kitchen in Munfordville, KY" },
      { src: "/images/twilight-ranch-aerial-drone-dusk.webp", alt: "Twilight aerial drone photography of a property in Hart County, KY" },
      { src: "/images/white-farmhouse-front-exterior-kentucky.webp", alt: "Exterior real estate photography of a farmhouse in Hart County, Kentucky" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior photography of a Munfordville, Kentucky home" },
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Overhead aerial drone real estate photography in Hart County, Kentucky" },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
