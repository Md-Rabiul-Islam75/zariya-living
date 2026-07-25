// Content for the private "Founding 10" offer page (/offers), reached via the
// ticket QR code. Unlisted / noindex.

export const OFFERS = {
  // Chairman's video. Paste the YouTube video ID (the part after v= or youtu.be/).
  // e.g. https://youtu.be/ABC123xyz  ->  "ABC123xyz"
  chairmanYouTubeId: "-GW2vVrlVec",
  chairmanPoster: "/images/offers/chairman.png",

  hero: {
    badge: "Private Invitation",
    eyebrow: "Exclusive to Amra-Amra Community",
    program: "The Founding 10 Program",
    title: "Ready to become one of 10?",
    subtitle: "Dual ownership in Bangladesh's most promising eco-investment.",
    note: "Amra-Amra Members · Only 10 Slots",
    primaryCta: "Claim Your Complimentary Ownership",
    secondaryCta: "Learn More Below",
    videoCaption: "A Message from Our Chairman, Mirza Tanzir Ahmed",
  },

  offer: {
    eyebrow: "The Founding Member Offer",
    title: "One Investment. Two Ownerships. A Protected Exit.",
    tag: "First 10 Only",
    cards: [
      {
        image: "/images/offers/agro.jpg",
        overline: "Export-Oriented Organic Agro Ecosystem",
        title: "Agro Ownership",
        desc: "Own a stake in Bangladesh's fastest-growing organic export sector, farmland, harvest rights, and a direct income stream rooted in the earth.",
        priceLabel: "Investment Value",
        price: "BDT 6,00,000",
        featured: false,
      },
      {
        image: "/images/offers/resort.jpg",
        overline: "Zariya Sylhet",
        title: "Resort Ownership",
        desc: "Gifted exclusively to Founding Members, resort construction ownership, annual stays, premium facilities, and a transferable legacy asset.",
        priceLabel: "Market Value",
        price: "BDT 6,00,000",
        yourCost: "৳0",
        featured: true,
        badge: "Complimentary",
      },
    ],
    summary: {
      eyebrow: "Ownership Value Summary",
      rows: [
        { label: "Agro Ownership", value: "BDT 6,00,000" },
        { label: "Resort Ownership (Complimentary)", value: "BDT 6,00,000" },
        { label: "Total Ownership Value", value: "BDT 12,00,000" },
      ],
      finalLabel: "Your Final Offer Price",
      finalPrice: "BDT 6,00,000",
      saveNote: "You save BDT 6,00,000 — 50% off total value",
      footnote: "Structured Buyback Option Available After 3 Years · Annual Income ~BDT 1L from farm production",
    },
  },

  agro: {
    eyebrow: "Agro Ownership",
    title: "What Your Agro Ownership Includes",
    desc: "Your plot of certified organic farmland in Zariya's export-oriented agro ecosystem, earning income, feeding families, and growing your legacy through the soil.",
    items: [
      { icon: "🌱", label: "1 Decimal (435.6 sq.ft) Agro Land Ownership" },
      { icon: "🚀", label: "Export-Oriented Agro Business Ownership" },
      { icon: "💰", label: "Annual Income Opportunity (Approx. BDT 1,00,000)" },
      { icon: "🏨", label: "2 Nights / 3 Days Annual Family Resort Stay" },
      { icon: "🛒", label: "Farm Production Purchase Saving Benefit" },
      { icon: "🌐", label: "Networking Access in Global Business Community" },
    ],
  },

  resort: {
    eyebrow: "Resort Ownership",
    title: "What Your Resort Ownership Includes",
    desc: "A complimentary gift reserved exclusively for Founding Members, resort construction ownership in the heart of Sylhet, backed by a structured buyback guarantee.",
    items: [
      { icon: "🏗️", label: "20 sq.ft Resort Construction Ownership" },
      { icon: "🏞️", label: "100 sq.ft Resort Land Ownership" },
      { icon: "💰", label: "Annual Income Opportunity (Approx. BDT 1,00,000)" },
      { icon: "🌿", label: "Annual 2 Nights / 3 Days Stay" },
      { icon: "✨", label: "Premium Resort Facilities Access" },
      { icon: "👨‍👩‍👧", label: "Transferable Legacy Benefit" },
    ],
    guarantee: { label: "Buyback Protection", value: "3-Year Guarantee — Written & Structured" },
  },

  returns: {
    eyebrow: "Returns",
    title: "Potential Annual Returns",
    desc: "Conservative estimates across income streams, savings, and membership privileges from both ownerships.",
    rows: [
      { label: "Farm Production Income", value: "Approx. BDT 1,00,000" },
      { label: "Community Food Purchase Saving", value: "Approx. BDT 1,20,000" },
      { label: "Agro Owner Resort Stay (2N3D)", value: "Approx. BDT 30,000" },
      { label: "Resort Income Opportunity", value: "Approx. BDT 1,00,000" },
      { label: "Resort Owner Stay (2N3D)", value: "Approx. BDT 30,000" },
      { label: "Resort Facilities Saving", value: "Up to BDT 20,000" },
    ],
    totalLabel: "Total Potential Annual Value",
    totalValue: "Approx. BDT 4,00,000+",
    footnote: "All income, savings, and benefit values are estimates. May vary based on production, market conditions, occupancy, and applicable terms.",
  },

  security: {
    eyebrow: "Security",
    title: "Protected Exit Option: 3-Year Buyback Guarantee",
    desc: "After 3 years, eligible members may return their complimentary Resort Ownership to Zariya Living Ltd at BDT 6,00,000. A structured, written guarantee, because your trust deserves more than a promise.",
    steps: [
      { num: "01", title: "Year 1", desc: "Agro operations begin, resort construction progresses." },
      { num: "02", title: "Year 2", desc: "Annual income streams active, stay benefits activated." },
      { num: "03", title: "Year 3", desc: "Full ownership milestone. Option: return resort ownership to Zariya Living Ltd at BDT 6,00,000.", featured: true },
    ],
    footnote: "Structured written guarantee — legally documented for peace of mind.",
  },

  bonus: {
    image: "/images/offers/bonus.jpg",
    eyebrow: "Special Bonus",
    title: "By-Air Sylhet Experience Tour",
    desc: "Booking-confirmed eligible members receive an exclusive complimentary guided tour, fly to Sylhet, walk the land that will carry your family's name, and feel what it means to belong somewhere.",
    points: [
      "Eligible: Booking-confirmed Founding 10 members",
      "Experience: Zariya location walkthrough + Sylhet natural beauty",
      "Duration: Complimentary 2–3 day guided tour",
    ],
    cta: "Apply to Qualify",
    quote: "\"Experience the land that will carry your family's legacy.\" — Sylhet, Bangladesh",
  },

  payment: {
    eyebrow: "Payment Plan",
    title: "Easy Ownership Entry: Three-Step Payment Plan",
    summary: [
      { label: "Total Ownership Value", value: "BDT 12,00,000" },
      { label: "You Save", value: "BDT 6,00,000 (50% Off)" },
      { label: "Final Offer Price", value: "BDT 6,00,000" },
    ],
    steps: [
      { step: "01 · At Sign-up", title: "Booking Confirmation", desc: "Reserves your founding slot", pct: "10% of BDT 6,00,000", amount: "BDT 60,000" },
      { step: "02 · Within 30 Days", title: "Down Payment", desc: "Activates ownership process", pct: "20% of BDT 6,00,000", amount: "BDT 1,20,000" },
      { step: "03 · Up to 12 Months", title: "Remaining Balance", desc: "Flexible payment option", pct: "70% of BDT 6,00,000", amount: "BDT 4,20,000" },
    ],
    footnote: "Monthly installment option: approx. BDT 35,000/month over 12 months for the remaining 70%.",
  },

  apply: {
    eyebrow: "Book a Visit",
    title: "Let Zariya speak for itself.",
    desc: "No decision should be made without standing on the land. Book a guided visit, schedule a private call, or request the investment pack, and we'll take it from there.",
    points: ["Schedule a Private Call", "Book a Site Visit", "Request Investment Pack"],
    interestOptions: ["Private Call", "Site Visit", "Investment Pack"],
    cta: "Request a Visit",
  },

  closing: {
    eyebrow: "The Founding 10 Program",
    title: "Not a Discount. Not a Lucky Draw. A Private Founding Member Invitation.",
    points: [
      "One Investment — Two Ownerships",
      "A Protected Exit Option",
      "A Legacy for Your Family",
      "Access to Zariya's Global Business Community",
    ],
    cta: "Become One of the First 10 Founding Members",
  },
} as const;
