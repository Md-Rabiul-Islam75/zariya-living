// Central content for the Zariya Living site. Static now; can be swapped for a CMS later.

export const SITE = {
  name: "Zariya",
  wordmark: "ZARIYA",
  tagline: "Living",
  hero: {
    eyebrow: "Sylhet, Bangladesh",
    title: "One Philosophy.\nFour Landscapes.\nA Lifetime of Belonging.",
    subtitle:
      "Most developments think in decades. Zariya thinks in generations — an integrated resort, organic farm, and lagoon villa community built as one.",
    primaryCta: "Book a Visit",
    secondaryCta: "Explore the Path",
  },
} as const;

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

export const INTEREST_OPTIONS = [
  "Lagoon Villa Share",
  "Resort Share",
  "Agro Share",
  "Lagoon Membership",
  "Just Exploring",
] as const;
