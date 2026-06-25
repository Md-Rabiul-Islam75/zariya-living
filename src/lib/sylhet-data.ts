// Content for the flagship project detail page (/projects/sylhet).

export const SYLHET = {
  hero: {
    eyebrow: "The Flagship Project",
    title: "Zariya Sylhet Resort & Villas",
    subtitle: "Where the lotus tower meets the lagoon. Where peace is not an amenity, it is the architecture.",
    image: "/images/resort-pool.png",
  },

  project: {
    eyebrow: "The Project",
    title: "Not Just a Resort. A Place to Belong.",
    paragraphs: [
      "Zariya Sylhet Resort & Villas is designed for people seeking more than luxury, peace, emotional connection, wellness, and meaningful living. Set across a thoughtfully planned masterplan in Sylhet, it brings together culture, nature, recreation, and hospitality in a way that has never been done before in Bangladesh.",
      "At the centre of it all stands the Lotus Tower, an iconic landmark visible for miles, and the heart of everything Zariya offers.",
    ],
    cards: [
      { label: "Location", value: "Sylhet, Bangladesh, 10 minutes from the airport" },
      { label: "Scale", value: "145 exclusive villas across approximately 2,100 decimals" },
      { label: "Design Concept", value: "Faith-aligned, nature-rooted, legacy-focused" },
    ],
  },

  experiences: {
    eyebrow: "The Flagship · Three Parts",
    title: "One Destination. Three Experiences.",
    intro:
      "Zariya Sylhet Resort & Villas brings three worlds together on one masterplan, a world-class resort, a living organic farm, and a limited lagoon-villa community. One vision, three ways to belong.",
    cards: [
      { num: "01", title: "Zariya Resort", tag: "Experience & Emotional Connection", desc: "A five-star resort built for peace, lotus tower, lagoon pools, wellness, dining, and culture.", cta: "Explore the Resort", href: "#resort" },
      { num: "02", title: "Zariya Agro", tag: "Nature & Simplicity", desc: "A living organic farm ecosystem, safe food, farmer network, and a real production income share.", cta: "Explore the Farm", href: "#agro" },
      { num: "03", title: "Lagoon Villa Community", tag: "Belonging & Legacy", desc: "A limited lagoon-front villa collection and a value-based global membership community.", cta: "Explore the Villas", href: "#lagoon" },
    ],
  },

  resort: {
    eyebrow: "Part One · Zariya Resort",
    title: "There Is No Ordinary Day at Zariya.",
    cards: [
      { icon: "deck", title: "Observation Deck", desc: "Rise above the lagoon and the treetops. The Observation Deck offers a 360-degree view of the masterplan, the tea gardens, and the open Sylhet sky, a moment of perspective that stays with you." },
      { icon: "lounge", title: "Sky Lounge", desc: "An elevated space for evenings that deserve to linger. The Sky Lounge is where guests and members gather under open skies, over good food and better conversations." },
      { icon: "theatre", title: "Theatre", desc: "Culture and creativity, designed with elegance. The Zariya Theatre hosts live performances, cinematic events, cultural programmes, and private functions, every seat a good seat." },
      { icon: "tea", title: "Tea Museum", desc: "Sylhet is tea country. The Tea Museum celebrates this heritage through rare collections, traditional preparation rituals, and the warm culture that has grown up around the leaf." },
      { icon: "heritage", title: "Heritage Museum", desc: "A living record of the communities and traditions of this land. Cultural artefacts, traditional attire, instruments, and handcrafted pieces, each corner tells a story." },
      { icon: "lobby", title: "Reception & Grand Lobby", desc: "Your first moment at Zariya sets the tone for everything that follows. The Grand Lobby welcomes with warm light, calming interiors, and hospitality that makes every guest feel they have arrived somewhere that was expecting them." },
    ],
  },

  rooms: {
    eyebrow: "Where You Rest",
    title: "Three Room Experiences. All Designed for Rest.",
    items: [
      {
        name: "Velvet Haven",
        image: "/images/velvet-haven.png",
        intro: "Step into a world of soft textures and amber warmth. The Velvet Haven wraps you in cream-toned upholstery, honey-toned wood accents, and the gentle glow of bedside lamps. Designed for the traveller who values quiet luxury over loud statements.",
        features: [
          { label: "Cosy Bed", value: "A plush king-size bed dressed in 600-thread Egyptian cotton, layered with a cashmere throw in warm mocha tones." },
          { label: "Washroom", value: "Marble-finished, with a deep soaking tub, rainfall shower, and warm vanity lighting." },
          { label: "Balcony", value: "Cushioned rattan chairs and a side table, made for morning coffee and the golden warmth of early sun." },
        ],
      },
      {
        name: "Golden Sovereign",
        image: "/images/golden-sovereign.png",
        intro: "Dark stone, brushed gold, and a sense of occasion. The Golden Sovereign is for those who want their space to feel as significant as the moment they are marking.",
        features: [
          { label: "Cosy Bed", value: "A grand king-size bed framed in rich timber, with a deep upholstered headboard and layered linens in royal tones." },
          { label: "Washroom", value: "Dark stone and brushed gold fixtures. A freestanding sculptural tub, dual vanities, and a steam shower built for two." },
          { label: "Balcony", value: "A private terrace overlooking the lagoon, a place to watch the day turn gold." },
        ],
      },
      {
        name: "Timber & Ember",
        image: "/images/timber-ember.png",
        intro: "Warm wood, natural light, and the quiet comfort of nature brought indoors. Timber & Ember is for the traveller who finds luxury in simplicity.",
        features: [
          { label: "Cosy Bed", value: "A handcrafted timber bed with breathable cotton linens and a woven throw in earthen tones." },
          { label: "Washroom", value: "Warm travertine stone, rich timber accents, a spacious walk-in rain shower, and a deep vessel basin." },
          { label: "Balcony", value: "An open-air nook among the treetops, birdsong, breeze, and the smell of the gardens below." },
        ],
      },
    ],
  },

  wellness: {
    eyebrow: "Wellness",
    title: "Your Body and Mind Belong Here Too.",
    cards: [
      { title: "Yoga & Meditation", desc: "Spacious, sun-filled studios designed for stillness. Whether you are a daily practitioner or a curious beginner, the Zariya Yoga and Meditation Centre gives you the space to return to yourself." },
      { title: "Spa", desc: "A serene environment designed to refresh the body and quiet the mind. Zariya's spa offers a full menu of rejuvenating treatments, a true escape from everyday stress." },
      { title: "Sauna", desc: "Warmth, comfort, and detoxification. The premium sauna at Zariya Sylhet Resort & Villas is a peaceful retreat where you can unwind and recharge completely." },
      { title: "Gymnasium", desc: "Fully equipped with modern fitness facilities in a comfortable environment. Staying active at Zariya is never a compromise." },
    ],
  },

  dining: {
    eyebrow: "Dining",
    title: "Food That Feeds More Than Hunger.",
    cards: [
      { title: "Fine Dining", image: "/images/dining-fine.png", desc: "An elevated dining experience overlooking the resort grounds. Inspired by the finest traditions of hospitality, Zariya's Fine Dining restaurant brings together flavour, elegance, and occasion." },
      { title: "Casual Dining", image: "/images/dining-nature.png", desc: "Open, light-filled, and surrounded by greenery. A space where families gather, conversations flow, and meals feel like the best part of the day." },
      { title: "Farm-Fresh Dining", image: "/images/dining-farm-fresh.png", desc: "The freshest produce from Zariya Agro, served at your table. Farm-to-fork, with nothing in between, food the way nature intended.", cta: "Learn about Zariya Agro", href: "#agro" },
    ],
  },

  business: {
    eyebrow: "Business & Events",
    title: "Where Work Meets Inspiration.",
    cards: [
      { title: "Business Centre", desc: "A professionally appointed meeting and co-working environment with a view that inspires clarity. The Zariya Business Centre is where members and guests host high-level conversations in a setting unlike any boardroom." },
      { title: "Convention Hall", desc: "For conferences, corporate retreats, investor gatherings, and community events. Modern AV, professional staging, and a team experienced in making every event run without a hitch." },
      { title: "Banquet Hall", desc: "For the moments that deserve grandeur. Weddings, receptions, celebrations, the Zariya Banquet Hall transforms any occasion into a memory." },
    ],
  },

  recreation: {
    eyebrow: "Recreation",
    title: "There Is Always Something to Do. Or Not Do.",
    cards: [
      { title: "Kids Zone", desc: "A world of discovery for the youngest Zariyans. The Kids Zone is safe, imaginative, and designed to let children be fully, joyfully children." },
      { title: "Swimming Pools & Water Features", desc: "Lagoon-style pools winding through tropical gardens. Whether you swim lengths or simply float in the sun, the water features at Zariya are a destination in themselves." },
      { title: "Sports Complex", desc: "Football pitch, tennis courts, basketball, badminton, and a table tennis hall, all within the resort grounds. For members who bring their competitive side on holiday." },
    ],
  },

  agro: {
    eyebrow: "Part Two · Zariya Agro",
    title: "A Farm That Feeds a Community.",
    image: "/images/dining-farm-fresh.png",
    body: "Across 2,900 decimals of open land, Zariya Agro is a working organic ecosystem, fields, orchards, dairy, and aquaculture, designed to supply the resort, nourish the community, and generate a real production income for shareholders.",
    tags: ["Safe organic food", "Selected farmer network", "Production income share", "Annual resort stay"],
    cta: "Explore Zariya Agro in Full",
    href: "#agro",
  },

  lagoon: {
    eyebrow: "Part Three · Lagoon Villa Community",
    title: "Lagoon Living for the Privileged Few.",
    image: "/images/villa-sunset.png",
    body: "A limited lagoon-front collection, 2,200 sq ft duplexes with four bedrooms, a private infinity pool, and a lagoon-facing balcony. Owned through a defined freehold share, earning resort rental income, and gathered into a value-based global membership community.",
    tags: ["2,200 sq ft duplex · 4 beds", "Private infinity pool", "Resort rental income", "Global membership gateway"],
    cta: "Explore the Lagoon Community",
    href: "/community",
  },

  closing: {
    banner: {
      title: "Own a Part of Zariya Resort.",
      body: "Every Resort Share is a 20 sq ft freehold construction holding, with access to 100 sq ft of common space and participation in the 50/50 profit-sharing model. Your share earns while you live.",
      cta: "View Full Ownership & Income Details",
      href: "/ownership",
    },
    cards: [
      { title: "Come and See It for Yourself.", desc: "No decision should be made without standing on the land. Book a guided visit and let Zariya speak for itself.", cta: "Book My Visit", href: "/visit", primary: true },
      { title: "Become a Zariyan.", desc: "Every Zariya owner becomes part of the Zariyans' Global Community, a network of NRB families, professionals, and retirees bound by shared values and a shared vision for what home can mean.", cta: "Learn About the Community", href: "/community", primary: false },
    ],
  },
} as const;
