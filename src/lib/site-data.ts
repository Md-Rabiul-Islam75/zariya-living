// Central content for the Zariya Living site. Static now; can be swapped for a CMS later.

export const SITE = {
  name: "Zariya",
  wordmark: "ZARIYA",
  tagline: "Living",
  hero: {
    eyebrow: "Sylhet, Bangladesh",
    title: "Where Do I Truly\nBelong?",
    tagline: "A Peaceful Return to Nature, Belonging & Yourself",
    subtitle:
      "Zariya is a faith-aligned, nature-rooted community in the heart of Sylhet — built for people who have worked hard and are ready to come home.",
    primaryCta: "Book a Visit",
    secondaryCta: "Explore the Path",
  },
} as const;

// Contact details. Replace placeholders with the real values.
export const CONTACT = {
  whatsapp: "8801907070640", // international format, no '+' — used in wa.me links
  phone: "+880 1907 070640-43",
  email: "info@zariyaliving.com",
  address: "32 Sonargaon Janapath Road, Sector 12, Uttara, Dhaka 1230, Bangladesh",
  bookHref: "/visit",
} as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy & Terms", href: "/privacy" },
  { label: "Legal & Disclosures", href: "/legal" },
] as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

// Routes for pages we'll build out individually. For now they point at the
// (not-yet-built) page paths — the branded 404 covers them until then.
export const NAV_LINKS: NavLink[] = [
  { label: "Explore", href: "/explore" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Flagship — Sylhet", href: "/projects/sylhet" },
      { label: "Niladri", href: "/projects/niladri" },
      { label: "Noakhali", href: "/projects/noakhali" },
      { label: "Cox's Bazar", href: "/projects/coxs-bazar" },
    ],
  },
  { label: "Ownership & Income", href: "/ownership" },
  { label: "Township & Amenities", href: "/township" },
  { label: "Community", href: "/community" },
  { label: "Visit", href: "/visit" },
];

export const PILLARS = [
  {
    id: "resort",
    eyebrow: "Hospitality",
    title: "Zariya Resort",
    description:
      "A flagship hospitality landmark crowned by the Lotus Tower — observation decks, sky lounges, fine dining, and wellness, all visible for miles.",
    image: "/images/lotus-tower.png",
    cta: "Explore the Resort",
  },
  {
    id: "agro",
    eyebrow: "Organic Farm",
    title: "Zariya Agro",
    description:
      "Chemical-free produce, orchards, livestock, and fisheries — a working farm that feeds the community, the resort, and premium export channels.",
    image: "/images/agro-overview.png",
    cta: "Explore the Farm",
  },
  {
    id: "villas",
    eyebrow: "Residences",
    title: "Lagoon Villa Community",
    description:
      "Architect-designed villas wrapped around a private lagoon — a community of owners who chose to live close to nature, and to each other.",
    image: "/images/villa-community.png",
    cta: "Explore the Villas",
  },
] as const;

export const RESORT_GALLERY = [
  { title: "Fine Dining", caption: "Chandelier-lit elegance with panoramic views.", image: "/images/dining-fine.png" },
  { title: "Sky Lounge", caption: "A canopy lounge beneath the stars.", image: "/images/sky-lounge.jpg" },
  { title: "Signature Dining", caption: "Garden-walled rooms and warm gold light.", image: "/images/dining-signature.png" },
  { title: "Resort Pools", caption: "Lagoon pools framed by palms.", image: "/images/resort-pool.png" },
  { title: "Nature Dining", caption: "Open-air dining in the green.", image: "/images/dining-nature.png" },
  { title: "Active Living", caption: "Sports fields for an active family life.", image: "/images/sports-field.png" },
] as const;

export const AGRO_FEATURES = [
  {
    title: "Organic Produce",
    description:
      "Vegetables and fruit grown without synthetic chemicals, harvested at peak ripeness and on your table within hours.",
    image: "/images/agro-overview.png",
  },
  {
    title: "Farmer Network",
    description:
      "Selected farmers join the ecosystem with organic, ISO-oriented safe-production training and market-demand crop planning.",
    image: "/images/agro-farmer.png",
  },
  {
    title: "Fisheries & Innovation",
    description:
      "Freshwater ponds and aquaponic systems producing fish for the resort kitchens and the wider community.",
    image: "/images/agro-aquaponics.png",
  },
  {
    title: "Processing & Export",
    description:
      "Every batch is quality-checked, cold-stored, and packed to premium and export standards.",
    image: "/images/agro-facility.png",
  },
] as const;

export const VILLA_GALLERY = [
  { title: "The Lagoon Villa", image: "/images/villa-hero.jpg" },
  { title: "Waterfront Living", image: "/images/villa-sunset.png" },
  { title: "Private Sanctuary", image: "/images/villa-premium.png" },
  { title: "The Community", image: "/images/villa-cottages.png" },
] as const;

export const MEMBERSHIP_PRIVILEGES = [
  {
    category: "Resort & Lifestyle",
    title: "Full Facility Access",
    description:
      "Complimentary access to the Observation Deck, Sky Lounge, Theatre, Gym, and resort swimming pools.",
  },
  {
    category: "Food & Beverage",
    title: "15% Dining Discount",
    description: "A standing 15% discount on food & beverage across Zariya's resort dining.",
  },
  {
    category: "Events & Hospitality",
    title: "Up to 80% Off",
    description:
      "Priority event access, plus up to 80% off Convention Hall and Business Centre usage.",
  },
  {
    category: "Sports & Recreation",
    title: "Active Family Living",
    description: "Up to 80% off sports facilities — wellness and recreation for the whole family.",
  },
  {
    category: "Future Ownership",
    title: "Priority Access",
    description:
      "First access and special privileges on future Zariya projects, including Lagoon Villa Shares.",
  },
  {
    category: "Global Community",
    title: "Founding Member Status",
    description:
      "A global network of NRBs, professionals, and families — with founding-member recognition.",
  },
] as const;

export const MEMBERSHIP = [
  {
    title: "Lagoon Villa Share",
    description: "The most complete entry into Zariya ownership — a residence and a stake in the community.",
  },
  {
    title: "Resort Share",
    description: "Own a part of the flagship resort, with priority access and founding-member privileges.",
  },
  {
    title: "Agro Share",
    description: "The most accessible entry, with real working land and a projected yearly farm-production benefit.",
  },
] as const;

export const MEMBERSHIP_BENEFITS = [
  "Full Facility Access",
  "Active Family Living",
  "Future Ownership",
  "Priority Access",
  "Founding Member Status",
  "Global Community",
] as const;

export const PROJECTS = [
  {
    name: "Niladri",
    location: "Sunamganj, Sylhet",
    status: "Coming Soon",
    description: "Where turquoise water meets the hills — the community model set against Sylhet's most iconic landscape.",
    image: "/images/project-niladri.jpg",
  },
  {
    name: "Noakhali",
    location: "Coconut Belt",
    status: "Coming Soon",
    description: "Sun, soil, and the quiet life. The community model brought to the green calm of the coconut belt.",
    image: "/images/project-noakhali.jpeg",
  },
  {
    name: "Cox's Bazar",
    location: "Coastal Belt",
    status: "Coming Soon",
    description: "Where the world's longest beach meets a community built on values — reimagined for the family that wants more.",
    image: "/images/project-coxsbazar.jpg",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "My children grew up speaking another language, in another country. Zariya is the first place that feels like ours — somewhere they can finally call home.",
    name: "Mirza Tanzir Ahmed",
    role: "Entrepreneur",
    location: "London",
  },
  {
    quote:
      "I came expecting a brochure and a hard sell. Instead I spent a morning walking the land in silence. That moment told me everything I needed to know.",
    name: "Dr. Anwar Hossain",
    role: "Retired Surgeon",
    location: "New York",
  },
  {
    quote:
      "What sold me wasn't the returns — it was sitting at Fajr and realising my grandchildren could one day pray on the same ground. That kind of belonging is rare.",
    name: "Farzana Karim",
    role: "Founding Member",
    location: "Sydney",
  },
] as const;

export const INTEREST_OPTIONS = [
  "Lagoon Villa Share",
  "Resort Share",
  "Agro Share",
  "Lagoon Membership",
  "Just Exploring",
] as const;

/* ------------------------------------------------------------------ */
/* Projects page                                                       */
/* ------------------------------------------------------------------ */

export const PROJECTS_HERO = {
  title: "Our Projects",
  subtitle: "One philosophy. Four landscapes. A lifetime of belonging.",
  image: "/images/masterplan.png",
} as const;

export const ALL_PROJECTS = [
  {
    name: "Zariya Sylhet Resort & Villas",
    location: "Nandirgaon, Gowainghat",
    status: "Active",
    description:
      "The flagship. A 5-star resort, organic farm, and private villa community — set against the tea gardens and lagoons of Sylhet. This is where the path begins.",
    image: "/images/villa-hero.jpg",
    cta: "View Project",
    href: "/projects/sylhet",
  },
  {
    name: "Niladri",
    location: "Tahirpur, Sunamganj",
    status: "Coming Soon",
    description:
      "Where the hills meet the water. Niladri is Zariya's next chapter — a sanctuary nestled into one of Bangladesh's most dramatic natural landscapes.",
    image: "/images/project-niladri.jpg",
    cta: "Get Notified",
    href: "#notify",
  },
  {
    name: "Noakhali",
    location: "Coconut Groves",
    status: "Coming Soon",
    description:
      "Sun, soil, and the quiet life. Zariya Noakhali will bring the community model to the green calm of the coconut belt.",
    image: "/images/project-noakhali.jpeg",
    cta: "Get Notified",
    href: "#notify",
  },
  {
    name: "Cox's Bazar",
    location: "Coastal Belt",
    status: "Coming Soon",
    description:
      "Where the world's longest beach meets a community built on values. Cox's Bazar reimagined for the family that wants more than a holiday.",
    image: "/images/project-coxsbazar.jpg",
    cta: "Get Notified",
    href: "#notify",
  },
] as const;

export const PROJECTS_EXPANDING = {
  title: "Zariya Is Expanding.",
  body: "Every new Zariya project is thoughtfully integrated into its landscape. We do not build everywhere. We build where the land and the community deserve each other.",
  disclaimer: "All visuals and project descriptions are conceptual representations only and are subject to change.",
} as const;

export const PROJECTS_NOTIFY = {
  title: "Be First to Know.",
  body: "Register your interest for upcoming Zariya projects.",
  placeholder: "Your email address",
  cta: "Notify Me About New Projects",
} as const;

/* ------------------------------------------------------------------ */
/* Community page                                                      */
/* ------------------------------------------------------------------ */

export const COMMUNITY_HERO = {
  eyebrow: "Zariyans' Global Community",
  title: "You Don't Just Own Here. You Belong Here.",
  image: "/images/community-hands.png",
} as const;

export const COMMUNITY_INTRO = {
  title: "A Community Bound by Values, Not Just Geography.",
  paragraphs: [
    "The Zariyans' Global Community is a network of non-resident Bangladeshi families, professionals, and retirees who share a vision of what home should feel like. Spread across continents, united by the same longing — to belong somewhere real.",
    "When you own at Zariya, you join this community automatically. It is not a loyalty programme. It is a circle of people who understand the journey you have been on, because they have been on it too.",
  ],
} as const;

export const COMMUNITY_MEMBERSHIP = {
  title: "What Membership Means",
  cards: [
    {
      title: "A Place to Gather",
      desc: "Community villas, shared spaces, and a calendar of gatherings — from Eid celebrations to family retreats — where Zariyans connect across generations.",
    },
    {
      title: "A Network That Cares",
      desc: "A trusted circle for advice, partnership, and friendship — people who understand the realities of building a life across two countries.",
    },
    {
      title: "A Legacy to Share",
      desc: "A community your children inherit — not just property, but belonging. Roots that hold even as the family grows and scatters across the world.",
    },
  ],
} as const;

export const COMMUNITY_STORIES = {
  title: "Stories from Zariyans",
  items: [
    {
      quote: "After 30 years abroad, I wanted my grandchildren to know where they come from. Zariya gave us a reason to come back together.",
      author: "Retiree, Toronto",
    },
    {
      quote: "It is the only investment I have made that my whole family is excited about. That tells you something.",
      author: "Professional, Dubai",
    },
    {
      quote: "I came to see land. I left having found a community. That was unexpected, and it was everything.",
      author: "Founding Member, Manchester",
    },
  ],
} as const;

export const COMMUNITY_JOIN = {
  title: "Join the Zariyans.",
  body: "Register your interest and our team will share how to become part of the community.",
  placeholder: "Your email address",
  cta: "Request to Join",
} as const;

/* ------------------------------------------------------------------ */
/* Township & Amenities page                                           */
/* ------------------------------------------------------------------ */

export const TOWNSHIP_HERO = {
  title: "Township & Amenities",
  subtitle: "Every road, every garden, every sightline — designed around one idea: peace that lasts a hundred years.",
  image: "/images/masterplan.png",
} as const;

export const TOWNSHIP_TOWER = {
  eyebrow: "The Heart of Zariya",
  title: "The Lotus Tower",
  image: "/images/lotus-tower.png",
  paragraphs: [
    "Rising from the centre of the masterplan, the Lotus Tower is more than a landmark. Inspired by the lotus — a flower that grows in still water and opens toward the light — it is a symbol of everything Zariya stands for: rootedness, renewal, and quiet strength.",
    "Inside, it houses the Observation Deck, the Sky Lounge, and the resort's most elevated experiences. Visible for miles across the Sylhet landscape, it is the first thing you see as you arrive — and the place you will return to again and again.",
  ],
} as const;

export const TOWNSHIP_ZONES = [
  {
    icon: "villa",
    title: "Residential Villas",
    desc: "145 private lagoon-front villas, set along tree-lined avenues and calm water.",
  },
  {
    icon: "resort",
    title: "Resort Core",
    desc: "The Lotus Tower, lobby, dining, wellness, and event venues at the centre.",
  },
  {
    icon: "agro",
    title: "Agro Belt",
    desc: "Working organic farmland, orchards, and aquaculture across 2,900 decimals.",
  },
  {
    icon: "buffer",
    title: "Peace Buffer",
    desc: "Permanently green protected land surrounding the community, kept untouched.",
  },
] as const;

export const TOWNSHIP_INVENTORY = {
  title: "Ownership Inventory",
  subtitle: "A limited, deliberately small community. Once they are gone, they are gone.",
  columns: ["Type", "Size", "Units", "Tenure", "Status"],
  rows: [
    { type: "Lagoon Villa Share", size: "2,200 sq ft duplex", units: "Limited", tenure: "Freehold", status: "Limited" },
    { type: "Resort Share", size: "20 sq ft + common", units: "Limited release", tenure: "Freehold", status: "Available" },
    { type: "Agro Share", size: "1 decimal", units: "Limited release", tenure: "Freehold", status: "Available" },
  ],
  cta: "Enquire About Availability",
} as const;

export const TOWNSHIP_AMENITIES = {
  title: "Everything Within Reach",
  items: [
    "Mosque",
    "Swimming Pools",
    "Sports Complex",
    "Spa & Sauna",
    "Yoga Centre",
    "Kids Zone",
    "Theatre",
    "Museums",
    "Convention Hall",
    "Banquet Hall",
    "Business Centre",
    "Gymnasium",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Ownership & Income page                                             */
/* ------------------------------------------------------------------ */

export const OWNERSHIP_HERO = {
  title: "Ownership & Income",
  subtitle: "Transparent. Protected. Built to grow.",
  image: "/images/villa-premium.png",
} as const;

export const OWNERSHIP_OPTIONS = [
  {
    eyebrow: "Option One",
    title: "Lagoon Villa Share",
    popular: false,
    rows: [
      { label: "Holding", value: "40 sq ft construction + 280 sq ft common land — freehold share" },
      { label: "The Villa", value: "2,200 sq ft lagoon-front duplex · 4 beds · private infinity pool" },
    ],
    note: "Lagoon-front living with resort rental income and a complimentary 2 nights / 3 days annual family stay.",
  },
  {
    eyebrow: "Option Two",
    title: "Resort Share",
    popular: true,
    rows: [
      { label: "Holding", value: "20 sq ft freehold construction + 100 sq ft common access" },
      { label: "Income Model", value: "50% of net resort profit shared among shareholders" },
    ],
    note: "Earn from year-round resort operations — seasonal demand, corporate bookings, retreats.",
  },
  {
    eyebrow: "Option Three",
    title: "Agro Share",
    popular: false,
    rows: [
      { label: "Holding", value: "1 decimal freehold organic farmland" },
      { label: "Benefits", value: "Production income + farm-fresh access + annual resort stay" },
    ],
    note: "The most accessible entry into Zariya ownership, with real working land.",
  },
] as const;

export const OWNERSHIP_PAYMENT = {
  title: "A Payment Plan That Respects You.",
  intro:
    "No hidden charges. No pressure. A clear, staged plan designed for families planning across borders and currencies.",
  steps: [
    { num: "01", title: "Reservation", desc: "Secure your villa or share with a refundable reservation deposit." },
    { num: "02", title: "Down Payment", desc: "Confirm your ownership with a structured down payment." },
    { num: "03", title: "Instalments", desc: "Spread the balance across comfortable monthly or quarterly instalments." },
    { num: "04", title: "Handover & Registration", desc: "Freehold title registered in your name on completion." },
  ],
  disclaimer:
    "Indicative payment structure only. Specific pricing and terms are shared during a private consultation.",
} as const;

export const OWNERSHIP_COMPARE = {
  title: "Compare Your Options",
  columns: ["Feature", "Lagoon Villa", "Resort Share", "Agro Share"],
  rows: [
    { feature: "Freehold ownership", values: ["✓ Construction + land", "✓ Construction holding", "✓ Farmland"] },
    { feature: "Passive income", values: ["Resort rental income", "50% profit share", "Production share"] },
    { feature: "Resort stay benefit", values: ["Annual 2N / 3D stay", "Member rates", "Annual stay included"] },
    { feature: "Heritable & resaleable", values: ["✓", "✓", "✓"] },
    { feature: "Community membership", values: ["✓", "✓", "✓"] },
  ],
} as const;

export const OWNERSHIP_TRUST = {
  eyebrow: "Your Trust, Protected",
  title: "We Put It in Writing.",
  cards: [
    {
      icon: "guarantee",
      title: "100% Money-Back Guarantee",
      desc: "If Zariya cannot deliver on its commitments to you, your investment is returned. We would rather protect your trust than keep your money.",
    },
    {
      icon: "shield",
      title: "Founder Protection Programme",
      desc: "Early founding members receive additional safeguards and priority protections — our commitment to those who believed first.",
    },
  ],
  cta: "Request the Full Investment Pack",
} as const;

/* ------------------------------------------------------------------ */
/* Explore page                                                        */
/* ------------------------------------------------------------------ */

export const EXPLORE_HERO = {
  eyebrow: "Explore",
  title: "Faith. Nature. Legacy.",
  subtitle: "Three words. One life philosophy.",
  image: "/images/project-niladri.jpg",
} as const;

export const EXPLORE_BELIEFS = [
  {
    icon: "faith",
    title: "Faith",
    description:
      "We believe a life rooted in faith is a life with direction. Zariya is designed for families who want their environment to reflect their values: peaceful, purposeful, and free from distraction.",
  },
  {
    icon: "nature",
    title: "Nature",
    description:
      "We believe humans belong in nature. The overcrowded city, the noise, the screen — these were never meant to be permanent. Zariya returns you to open skies, green land, and mornings that begin with birdsong, not traffic.",
  },
  {
    icon: "legacy",
    title: "Legacy",
    description:
      "We believe the truest measure of success is what you leave behind. A freehold villa. A family home. A community your children will grow up in. Zariya is built to be passed on.",
  },
] as const;

export const EXPLORE_PATH = {
  title: "'Zariya' Means The Path.",
  paragraphs: [
    "Sylhet has always been a place of spiritual significance. The 360 Auliyas who walked this land centuries ago left behind more than mosques and shrines — they left a culture of faith, community, and inner peace that this soil still carries.",
    "When we chose the name Zariya, we were not looking for something poetic. We were looking for something true. The Path is not just where you walk. It is how you live.",
    "Zariya is our attempt to build a community worthy of that name — where the environment itself encourages you to slow down, reflect, and reconnect with what matters.",
  ],
} as const;

export const EXPLORE_LONGTERM = {
  title: "Built to Last 100 Years.",
  paragraphs: [
    "Most property developments think in decades. Zariya thinks in generations.",
    "The masterplan is designed with a peace buffer — land kept permanently green to protect the community from future encroachment. The agro ecosystem is designed for long-term sustainability. The Lagoon Villas are freehold, heritable, and resaleable.",
    "We are not building for today's market. We are building a place your grandchildren will be glad exists.",
  ],
  stats: [
    { value: 2100, suffix: "", label: "Decimals of Land" },
    { value: 100, suffix: "-Year", label: "Vision" },
    { value: 145, suffix: "", label: "Exclusive Villas" },
  ],
} as const;

export const EXPLORE_VOICES = [
  {
    quote:
      "I spent 22 years in the UK building a career. What I didn't realise was that I was also spending 22 years quietly missing home. Zariya gave me somewhere to actually return to.",
    author: "NRB Member, London",
  },
  {
    quote:
      "My children are grown. My responsibilities are lighter. I wanted somewhere peaceful, somewhere with community, somewhere my grandchildren would love to visit. I found all three.",
    author: "Founding Member, Dhaka",
  },
] as const;

export const EXPLORE_NEWS = [
  {
    category: "Development Milestones",
    title: "Land Development & Site Preparation Underway",
    description: "Progress continues across the masterplan as the site takes shape ahead of the first phase.",
    image: "/images/agro-facility.png",
  },
  {
    category: "Announcements",
    title: "Founding Member Registration Now Open",
    description: "A limited number of founding memberships are available to early believers in the Zariya vision.",
    image: "/images/sky-lounge.jpg",
  },
  {
    category: "Upcoming Events",
    title: "By-Air Sylhet Experience Tour Dates",
    description: "Join an upcoming guided tour of the land, the lagoon, and Sylhet's most iconic landmarks.",
    image: "/images/sports-field.png",
  },
] as const;
