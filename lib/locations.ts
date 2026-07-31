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
      "CS Media is headquartered in Leitchfield, Kentucky. This is our home market. That means the fastest turnaround in the county and a photographer who actually knows Grayson County. We've shot everything from starter homes off Highway 62 to hundred-acre farms along the Western Kentucky Parkway. If it's in Grayson County, we've probably driven past it.",
    marketContext:
      "Leitchfield's real estate market is a mix of in-town residential, rural acreage, and a growing number of Airbnb and short-term rental properties near Rough River Dam State Resort Park. Buyers searching in this area are often looking at land, not just houses, and that changes what listing photos need to communicate. A ground-level shot of a fence line doesn't tell the story of a 40-acre property. Drone photography does.",
    whyUs:
      "We're not driving in from Louisville or Bowling Green and charging you for the trip. CS Media is based here, which means we can often shoot within days of booking, sometimes same-day for urgent listings. Every shoot gets professional editing, HDR processing, and color correction. We don't hand you raw files and call it done.",
    droneDetails:
      "Grayson County's terrain is what makes aerial photography essential here. The rolling hills, tree lines, creeks, and mixed-use land don't photograph well from the ground; you lose all sense of scale. Our drone captures property boundaries, outbuildings, pond locations, road frontage, and the relationship between the house and the land around it. For agents listing rural properties, this is the difference between a buyer understanding what they're looking at and scrolling past.",
    propertyTypes: [
      {
        name: "Farms & Acreage",
        description:
          "Grayson County has no shortage of farm listings. Drone photography shows total acreage, fence lines, barn locations, creek access, and timber stands in a single frame. We shoot at angles that emphasize the usable land, not just the house.",
      },
      {
        name: "Residential Listings",
        description:
          "For in-town homes in Leitchfield, our interior/exterior packages cover every room with professional lighting and HDR. We photograph what matters to buyers: kitchen, living areas, bathrooms, and curb appeal, not hallways and closets.",
      },
      {
        name: "Rough River Area Rentals",
        description:
          "The short-term rental market near Rough River Dam is growing. We help Airbnb and VRBO hosts create listings that actually compete, with professional photos that show the property, the setting, and the proximity to the lake.",
      },
    ],
    localInsight:
      "One thing agents in Grayson County deal with is showing properties where the land is the main selling point. A 3-bedroom house on 50 acres needs to communicate the acreage first. That's what the buyer is paying for. We prioritize drone shots and wide exterior coverage on these listings because that's what drives the sale. Interior photos matter too, but the aerial perspective is what stops buyers mid-scroll.",
    closingPitch:
      "Ready to get your Leitchfield listing or project professionally captured? Packages start at $185 with 24-48 hour turnaround.",
    faqs: [
      {
        q: "How much does real estate photography cost in Leitchfield?",
        a: "Aerial Media Only is $185. Photography Only (25–40 MLS-ready photos, drone included) is $285, and the Full Media Package (photos plus a listing video) is $420.",
      },
      {
        q: "Do you charge travel fees for Leitchfield shoots?",
        a: "No. Travel is included in every package price, so there's nothing extra for shoots in Leitchfield, Caneyville, Clarkson, or anywhere in Grayson County.",
      },
      {
        q: "Can you fly drones in Leitchfield?",
        a: "Yes. Leitchfield is in uncontrolled (Class G) airspace with no FAA restrictions. We're FAA Part 107 certified and include drone shots on every applicable shoot at no extra charge.",
      },
      {
        q: "How quickly can you schedule a shoot in Leitchfield?",
        a: "Since we're local, we can often shoot within 1-3 days of booking. For urgent listings, same-day shoots may be available. Text us at 270-307-0173 to check availability.",
      },
      {
        q: "Do you photograph land and farms, or just houses?",
        a: "Both. A large portion of our work in Grayson County is rural property: farms, acreage, and land listings where drone photography is essential to show what the property actually includes.",
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
      "CS Media provides real estate photography, drone video, and virtual staging for agents and property owners in Elizabethtown and Hardin County. E-town sits at the crossroads of I-65 and the Western Kentucky Parkway, making it one of central Kentucky's most active real estate markets, and one where professional listing media is the standard, not the exception.",
    marketContext:
      "Elizabethtown's housing market is driven by a few key factors: proximity to Fort Knox and the Gold Vault, a growing population that commutes to Louisville, and steady new construction on the city's south and east sides. Military relocations bring a constant flow of buyers who are house-hunting from out of state, often making decisions based entirely on listing photos before they ever visit in person. That makes the quality of your listing media a direct factor in whether your property gets a showing.",
    whyUs:
      "Louisville photographers charge Louisville prices. We offer the same professional quality (HDR interiors, drone aerials, edited walkthroughs) at significantly lower rates, and we deliver within 24-48 hours. We shoot in E-town regularly and know the neighborhoods, the light conditions, and what buyers in this market expect to see.",
    droneDetails:
      "Aerial photography in Elizabethtown serves a specific purpose: it shows context. Buyers relocating for Fort Knox want to see how close the house is to post. Families want to see the neighborhood layout, nearby schools, and whether the backyard borders woods or another subdivision. Our drone shots answer these questions visually without the buyer having to dig through Google Maps.",
    propertyTypes: [
      {
        name: "New Construction",
        description:
          "E-town's south side has seen significant new development. We photograph new builds during and after construction. Drone shots are especially effective for showing lot placement within a development and the surrounding infrastructure.",
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
      "A reality of shooting in parts of Elizabethtown is Fort Knox airspace. The northern portions of E-town fall under restricted zones where drone flights require advance authorization through LAANC. We check every address before we book and will let you know upfront if there are any restrictions. Most of E-town is clear, but properties near Radcliff or directly north toward Fort Knox may have altitude limitations. This is something hobbyist photographers often don't check. We do, every time.",
    closingPitch:
      "We shoot in Elizabethtown regularly and can often batch multiple properties per trip. Packages start at $185. Text or call to get your listing scheduled.",
    faqs: [
      {
        q: "How much does drone photography cost in Elizabethtown?",
        a: "Aerial Media Only is $185, Photography Only (25–40 MLS-ready photos, drone included) is $285, and the Full Media Package (photos plus a listing video) is $420, plus 6% Kentucky sales tax. Contact us for an exact quote for your property.",
      },
      {
        q: "Are there drone restrictions near Fort Knox?",
        a: "Some areas of Elizabethtown, particularly north of town near Radcliff, fall under Fort Knox restricted airspace. We verify LAANC authorization for every address before booking. Most of E-town proper is in unrestricted airspace, but we'll confirm for your specific property.",
      },
      {
        q: "How far is CS Media from Elizabethtown?",
        a: "About 40 minutes via the Western Kentucky Parkway. We shoot in E-town regularly and can often schedule same-week appointments. We also batch multiple properties per trip for agents with several listings.",
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
    nearbyAreas: ["Radcliff", "Vine Grove", "Glendale", "Rineyville", "Cecilia"],
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
    ],
    distanceFromBase: "~40 min from base",
    galleryImages: [
      { src: "/images/kentucky-real-estate-drone-aerial.webp", alt: "Aerial drone real estate photography in Elizabethtown, Hardin County KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a kitchen in Elizabethtown, Kentucky" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Elizabethtown, KY" },
      { src: "/images/living-room-sectional-dark-floors.webp", alt: "Professional interior photography of a modern living room in Elizabethtown, KY" },
      { src: "/images/white-farmhouse-front-exterior-kentucky.webp", alt: "Exterior photography of a white farmhouse in Hardin County, Kentucky" },
      { src: "/images/stone-estate-front-exterior-walkway.webp", alt: "Stone estate exterior real estate photography in Elizabethtown, KY" },
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
      "CS Media serves real estate agents and property owners in Radcliff, just north of Elizabethtown and directly bordering Fort Knox. Radcliff's market is shaped almost entirely by the post. Military families rotating in, transitioning out, or stationed long-term make up a huge share of buyers and renters. That means a steady stream of out-of-state house-hunters who are deciding from listing photos alone, before they ever set foot in Kentucky.",
    marketContext:
      "Radcliff's housing market moves with the rhythm of Fort Knox PCS cycles. Spring and summer bring waves of incoming families looking to buy or rent quickly; fall and winter are heavier on outgoing listings. Time on market matters more here than in most Kentucky towns because PCS deadlines don't wait. Listings that don't get attention in the first week often sit. Professional photos and drone shots that load fast on phones and tell the full story upfront are the difference between a quick offer and a price reduction.",
    whyUs:
      "We understand the Fort Knox airspace map better than most photographers; we have to. Significant portions of Radcliff fall under controlled airspace that requires LAANC authorization for any drone flight, and parts are restricted entirely. We check every address before booking and won't waste your time with flights that can't legally happen.",
    droneDetails:
      "When drone photography is permitted in Radcliff, it's especially valuable for showing proximity to post, a major decision factor for incoming military families. Aerial shots can show how close a property is to gate access, schools serving Fort Knox families, and the commercial corridor along North Dixie Boulevard. For properties where airspace is restricted, we lean heavier on exterior coverage from elevated angles using poles and ladder mounts.",
    propertyTypes: [
      {
        name: "Military Family Rentals",
        description:
          "Properties marketed to PCS families need to communicate practical information visually: layout, condition, yard size, and proximity to gates. We photograph with that audience in mind: clean, well-lit, and informative rather than artsy.",
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
      "If you're listing in Radcliff, factor PCS season into your marketing timing. Listings that go live in March and April catch the wave of summer movers and tend to move fastest. Listings that drop in October sit. Professional photography is especially worth it during peak season, when the most buyers are searching, you want your listing standing out, not blending in with iPhone shots.",
    closingPitch:
      "We serve Radcliff regularly and check airspace before every booking so you know up front what we can legally capture. Packages start at $185.",
    faqs: [
      {
        q: "Can you photograph properties in Radcliff with Fort Knox airspace restrictions?",
        a: "Yes, but it depends on the address. Some Radcliff properties fall under Fort Knox restricted airspace where drone flights aren't permitted; others fall in zones where we can fly with LAANC authorization. We check every address before booking. If aerials aren't possible at your property, we'll let you know and adjust the package accordingly.",
      },
      {
        q: "How far is Radcliff from CS Media?",
        a: "About 50 minutes via the Western Kentucky Parkway and Highway 31W. We shoot in the Hardin County area regularly and can often batch Radcliff shoots with Elizabethtown or Vine Grove to make scheduling easier.",
      },
      {
        q: "Do you understand the military relocation market?",
        a: "Yes. A significant portion of Radcliff buyers and renters are PCS families house-hunting from out of state. We photograph with that audience in mind: clear layouts, accurate representation, and aerial context where airspace allows.",
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
    galleryImages: [
      { src: "/images/kentucky-real-estate-drone-aerial.webp", alt: "Aerial drone real estate photography in Radcliff, Hardin County KY" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a kitchen in Radcliff, Kentucky" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Radcliff, KY" },
      { src: "/images/living-room-sectional-dark-floors.webp", alt: "Interior real estate photography of a living room in Radcliff, KY" },
      { src: "/images/white-farmhouse-front-exterior-kentucky.webp", alt: "Exterior real estate photography of a home in Hardin County, KY" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior photography of a Radcliff, Kentucky home" },
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
      "CS Media serves real estate agents and property owners in Hardinsburg and across Breckinridge County. Hardinsburg sits at the geographic center of Breckinridge, a rural county defined by Ohio River frontage, rolling farmland, and small-town communities. Most listings here are land-heavy and need aerial photography to communicate what they actually offer.",
    marketContext:
      "Breckinridge County is one of Kentucky's more affordable rural markets, and that pulls in two buyer pools that rarely overlap. The first is hunters (deer-lease investors and weekend-camp owners shopping from Louisville, Cincinnati, and Indianapolis) who drive most of the land-heavy inventory from July through October, timing purchases to land before Kentucky's archery and firearm seasons. The second is retirees and remote workers priced out of Meade and Hardin next door, looking for acreage without the commute penalty. Neither buyer is browsing casually; both are shopping from photos alone, often from several hours away.",
    whyUs:
      "We're 35 minutes up Highway 259 from Hardinsburg, closer than the Louisville and Owensboro photographers most agents default to, which matters when a hunting-property listing has a seasonal window. A tract that waits three weeks for a photographer in early October has missed its buyer. We can typically slot Breckinridge County shoots within a week, flat.",
    droneDetails:
      "The two features that sell Breckinridge County listings, timber and water, are almost invisible from the ground. A 40-acre tract with a spring-fed pond, mature oak stands, and a draw running through it reads as 'woods and a field' in a curb-appeal photo. From 300 feet up, a buyer can see the draw line, the timber blocks, the pond placement, and how those features connect. For Ohio River listings near Cloverport and Stephensport, altitude is the only way to capture the river relationship; ground-level photos flatten a bluff view into a strip of water.",
    propertyTypes: [
      {
        name: "Deer Camps & Hunting Tracts",
        description:
          "Breckinridge moves serious hunting inventory every fall. These listings need drone coverage that reads topographically: timber stands, water access, bedding cover, and field edges ready for food plots. Generic 'wooded acreage' shots don't close a full-asking sale to a buyer comparing tracts across three states.",
      },
      {
        name: "Ohio River Frontage",
        description:
          "Listings around Cloverport and Stephensport trade on the river itself: the view, the water access, the bluff-top placement. We weight aerial coverage toward elevation and river-angle shots that capture the frontage, not just the house sitting above it.",
      },
      {
        name: "Rural Residential on 1–10 Acres",
        description:
          "Country homes on small acreage are the working-market majority in Breckinridge. These get balanced interior and exterior coverage plus an aerial that places the home in its lot. Buyers want to see the driveway length, outbuildings, and how far the nearest neighbor's lights are.",
      },
    ],
    localInsight:
      "The most consistently under-marketed category we see in Breckinridge is hunting tracts. Most come to market with four photos: the cabin, the gravel drive, a wide shot of trees, and an interior of the kitchen. A serious deer-lease buyer, the one who pays asking, wants to see topography, timber composition, and water layout before driving two hours to walk the property. Drone coverage on those features turns a tract that sits for six months into one that sells in the first week of archery season.",
    closingPitch:
      "Whether you're listing a Breckinridge County farm, a hunting property, an Ohio River cabin, or an in-town Hardinsburg home, we can help. Packages start at $185.",
    faqs: [
      {
        q: "Do you photograph hunting and recreational properties in Breckinridge County?",
        a: "Yes. Hunting and recreational land is a major part of the Breckinridge County market. We use drone photography to show topography, timber, water sources, and access: the features that actually matter to hunting and recreational buyers.",
      },
      {
        q: "How far is Hardinsburg from CS Media?",
        a: "About 35 minutes via Highway 259 from Leitchfield. Breckinridge County is one of our closest neighboring markets.",
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
        a: "That's a typical rural listing for us. Our aerial-only package ($185) is great for land-only listings, and our larger packages can be weighted toward aerial coverage if the structure is secondary to the land. We tailor the shoot to the property.",
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
      "CS Media provides real estate photography and drone video for agents and property owners in Brandenburg and Meade County. Brandenburg sits on the Ohio River with views across to Indiana and a market that's quietly grown into one of the region's better-kept secrets, driven by Doe Valley resort properties, river-frontage land, and steady residential demand from commuters working in Louisville and Fort Knox.",
    marketContext:
      "Brandenburg's real estate market is more diverse than its small-town size suggests. Doe Valley alone is a 4,000+ acre gated resort community with golf, lake, and lifestyle amenities, and properties there often sell to out-of-state buyers who are deciding from listing photos. Add in Ohio River frontage, rural farmland, and a residential core in town, and you have a market where the right photographic approach varies dramatically by property type. One-size-fits-all photography doesn't work here.",
    whyUs:
      "We approach every Brandenburg shoot based on what the specific property needs. A Doe Valley golf-course home gets different framing than a 50-acre farm in rural Meade County, and both get different treatment than a townhome near downtown Brandenburg. Our drone capabilities are especially valuable for river-adjacent and resort properties where the setting is the selling point.",
    droneDetails:
      "Brandenburg's location on the Ohio River makes drone photography especially valuable. For river-frontage properties, aerials are the only way to capture the water relationship: the view, the access, and how the property sits relative to the river. For Doe Valley properties, drone shots show the resort community context, golf course proximity, and lake access. For rural Meade County listings, aerials communicate acreage and land use the same way they do for any rural Kentucky property.",
    propertyTypes: [
      {
        name: "Doe Valley Resort Properties",
        description:
          "Doe Valley is a destination community with its own buyer pool. We photograph these properties with the lifestyle in mind: golf course views, lake proximity, gated community atmosphere, and the resort amenities that justify the price point.",
      },
      {
        name: "Ohio River Frontage",
        description:
          "Properties on or near the Ohio River command a premium, but only if the photography communicates the river relationship. Drone shots capture the water views, river access, and property setting in ways no ground-level photo can match.",
      },
      {
        name: "Meade County Farms & Acreage",
        description:
          "Outside of Brandenburg and Doe Valley, Meade County has significant rural acreage. Drone photography shows total land scope, fence lines, tree cover, and water features: the details that drive rural property sales.",
      },
    ],
    localInsight:
      "Doe Valley listings are a category of their own. Buyers there are often shopping from out of state and comparing properties against resort communities elsewhere. Generic real estate photos don't compete. The properties that move fastest are the ones with drone footage showing the resort layout, golf course context, and the lifestyle amenities, not just the house. If you're listing a Doe Valley property, professional photography isn't optional.",
    closingPitch:
      "Whether you're listing in Doe Valley, on the Ohio River, or anywhere in Meade County, we can help your property show its best. Packages start at $185.",
    faqs: [
      {
        q: "Do you photograph properties in Doe Valley?",
        a: "Yes. Doe Valley is a strong fit for our services: the resort setting, golf course views, and lake amenities all benefit from professional drone photography that shows the full property context, not just the home.",
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
        a: "We can batch multiple properties into a single trip. Doe Valley is a tight community, so it's especially efficient to schedule a few shoots together.",
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
    slug: "caneyville",
    city: "Caneyville",
    county: "Grayson County",
    state: "KY",
    tagline: "Local Service for Eastern Grayson County",
    headline: "Real Estate Photography & Drone Media in Caneyville, Grayson County KY",
    intro:
      "CS Media is based right next door in Leitchfield and serves Caneyville and eastern Grayson County. Caneyville is small-town Kentucky at its most authentic. Most listings are residential homes, working farms, and rural acreage along the Highway 62 corridor. As your local real estate photographer, we can be on-site within days of booking.",
    marketContext:
      "Caneyville is a smaller, more agricultural market than Leitchfield, and the listing mix reflects it. Most inventory is working farms, country homes on small acreage along the Highway 62 corridor, and a quieter in-town residential core around the old downtown streets. The buyer pool is different too: fewer short-term rental investors than you see in the Rough River area, more local Grayson County families, and a slow but steady trickle of Louisville and Elizabethtown retirees looking for real rural living without giving up I-65 access.",
    whyUs:
      "Caneyville is 15 minutes from our Leitchfield base. The real advantage is familiarity. We work Grayson County every week, so we already know which back roads are worth shooting from, where the airspace is clean, and how the local market prices this kind of inventory. That context shapes the shoot plan before a camera comes out of the case.",
    droneDetails:
      "Eastern Grayson County's terrain differs from the western side. Less of the Rough River Lake elevation, more flat-to-rolling working farmland stretching toward Edmonson and Hart counties. For farm listings, aerial coverage needs to emphasize usable-acreage readability (pasture versus wooded versus cropland) rather than dramatic topography. For parcels in the eastern pockets that edge toward Nolin Lake access, aerials capture proximity to lake roads without requiring direct waterfront.",
    propertyTypes: [
      {
        name: "Working & Hobby Farms",
        description:
          "Eastern Grayson County has active row-crop and cattle operations alongside smaller hobby farms. We shoot these to emphasize productive acreage, barn condition, water sources, and road frontage: the specific details a buyer farming for income actually studies before scheduling a walk-through.",
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
      "The Caneyville listings that move fastest are usually working farms priced correctly for the acreage (Grayson County farmland is still meaningfully cheaper than comparable land in Hardin or Nelson), but they only move fast if the photography lets out-of-county buyers evaluate the land without driving two hours to see it. A farm that reads as 'a house and some trees' in the MLS photos gets ignored. The same farm, shot with a couple of high-altitude aerials that read the property line and the fields, gets showings within days.",
    closingPitch:
      "Caneyville is part of our home territory. Fast scheduling, packages from $185.",
    faqs: [
      {
        q: "Do you charge travel fees for Caneyville shoots?",
        a: "No. CS Media is based in Leitchfield, just 15 minutes from Caneyville, and travel is included in every package price.",
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
        a: "Same as anywhere else: edited, MLS-ready deliverables in 24-48 hours. Aerial Media Only is $185, Photography Only (25–40 MLS-ready photos, drone included) is $285, and the Full Media Package (photos plus a listing video) is $420.",
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
    galleryImages: [
      { src: "/images/country-home-aerial-acreage-kentucky.webp", alt: "Aerial drone photography of a country home on acreage in Caneyville, Grayson County KY" },
      { src: "/images/white-farmhouse-aerial-drone-kentucky.webp", alt: "Aerial drone photo of a white farmhouse in Caneyville, Kentucky" },
      { src: "/images/rustic-kitchen-wood-beams-island.webp", alt: "Interior real estate photography of a rustic kitchen in Caneyville, KY" },
      { src: "/images/twilight-ranch-home-evening-kentucky.webp", alt: "Twilight real estate photography of a ranch home in Grayson County, KY" },
      { src: "/images/covered-front-porch-kentucky-home.webp", alt: "Covered front porch exterior photography of a Caneyville, Kentucky home" },
      { src: "/images/stone-estate-aerial-overhead-drone.webp", alt: "Overhead aerial drone real estate photography in Grayson County, Kentucky" },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
