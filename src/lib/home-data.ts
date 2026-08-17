// Content for the redesigned home page, mirroring the Zariya Living reference.
// Section order: Hero -> Why Zariya Exists -> The Flagship -> Discover band ->
// Lagoon Villa -> Global Lifestyle -> Privileges -> Financial Clarity ->
// Founder letter -> Testimonials -> Begin Your Path Home -> Footer.

export const HOME_HERO = {
  eyebrow: "Sylhet, Bangladesh",
  title: "Where Do I Truly Belong?",
  tagline: "A Peaceful Return to Nature, Belonging & Yourself",
  subtitle:
    "Zariya is a faith-aligned, nature-rooted community in the heart of Sylhet — built for people who have worked hard and are ready to come home.",
  primaryCta: "Book a Visit",
  secondaryCta: "Explore the Path",
  image: "/images/villa-hero.jpg",
} as const;

export const FLAGSHIP = {
  eyebrow: "The Flagship · Zariya Sylhet Resort & Villas",
  title: "One Vision. One Philosophy.",
  intro:
    "Our flagship project unites three experiences on one masterplan in Sylhet — a resort, an organic farm, and a lagoon-villa community. Other Zariya destinations are coming soon.",
  cards: [
    {
      icon: "resort",
      title: "Zariya Resort",
      subtitle: "Experience & Emotional Connection",
      desc: "A world-class resort designed not for spectacle, but for peace. Where culture, nature, wellness, and hospitality meet in harmony.",
      cta: "Explore Resort",
      href: "/projects/sylhet",
    },
    {
      icon: "agro",
      title: "Zariya Agro",
      subtitle: "Nature & Simplicity",
      desc: "Across 2,900 decimals of open land, a living, breathing organic farm ecosystem — for slower, healthier, more meaningful living.",
      cta: "Explore Agro",
      href: "/projects/sylhet",
    },
    {
      icon: "villa",
      title: "Lagoon Villa Community",
      subtitle: "Belonging & Legacy",
      desc: "A limited lagoon-front villa collection for NRB families and retirees, bound into a value-based global membership community.",
      cta: "Explore Villas",
      href: "/projects/sylhet",
    },
  ],
} as const;

export const DISCOVER_BAND = {
  text: "A Peaceful Return to Nature, Belonging & Yourself.",
  cta: "Discover Zariya Sylhet Resort & Villas",
  href: "/projects/sylhet",
} as const;

export const LAGOON_VILLA = {
  eyebrow: "Zariya Lagoon Villa",
  title: "Lagoon Living for the Privileged Few.",
  body: "A limited lagoon-front collection — 2,200 sq ft duplexes with four bedrooms, a private infinity pool, and a lagoon-facing balcony. Privacy, scarcity, and legacy, set in the natural beauty of Sylhet.",
  image: "/images/villa-sunset.png",
} as const;

export const GLOBAL_LIFESTYLE = {
  eyebrow: "A Global Lifestyle",
  title: "A Global Lagoon Lifestyle, Rooted in Sylhet.",
  body: "Lagoon-front living — admired in destinations like the Maldives, Dubai, Bali, and Fiji — comes to the tea gardens and waters of Sylhet. Where greenery, resort comfort, and a value-based global community meet.",
  gateway: {
    label: "The Gateway",
    text: "Only Global Lagoon Villa Members are eligible to purchase a Lagoon Villa Share — membership is the first step of the ownership journey.",
  },
  image: "/images/villa-hero.jpg",
} as const;

export const FINANCIAL = {
  eyebrow: "Financial Clarity",
  title: "Own Something That Works for You.",
  intro:
    "Zariya is not just a place to visit. It is a multi-asset ownership ecosystem — where your investment earns passive income, appreciates over time, and passes to your children as a freehold asset.",
  shares: [
    {
      icon: "villa",
      title: "Lagoon Villa Share",
      desc: "A 2,200 sq ft lagoon-front duplex — 4 bedrooms, a private infinity pool, and a waterfront balcony. Defined freehold ownership inside Zariya's limited lagoon-villa collection, with resort rental income and an annual family stay.",
    },
    {
      icon: "taka",
      title: "Resort Share",
      desc: "Earn 50% of net profits from Zariya Resort's operations. Seasonal demand, corporate bookings, and community retreats keep the income flowing year-round.",
    },
    {
      icon: "agro",
      title: "Agro Share",
      desc: "1 decimal of freehold organic farmland. Production income, farm-fresh food access, and an annual 5-star resort stay included.",
    },
  ],
  guarantee: "100% Money-Back Guarantee. Founder Protection Programme. Your trust is protected.",
  cta: "View Full Ownership & Income Details",
  href: "/ownership",
} as const;

export const BEGIN_PATH = {
  eyebrow: "Book a Visit",
  title: "Begin Your Path Home.",
  intro: "Speak with our team. No pressure, no sales pitch — just a conversation about what matters to you.",
  cta: "Book a Site Visit",
  footnote:
    "Confirmed bookings include a complimentary By-Air Sylhet Experience Tour — your first look at the land, the lagoon, and the life waiting for you.",
} as const;
