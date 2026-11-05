// Contact details and navigation used by the /offers page.
// The main site keeps its own copy in src/components/site.

// Contact details. Replace placeholders with the real values.
export const CONTACT = {
  whatsapp: "8801907070640", // international format, no '+', used in wa.me links
  phone: "+880 1907 070640-43",
  email: "info@zariyaliving.com",
  address: "32 Sonargaon Janapath Road, Sector 12, Uttara, Dhaka 1230, Bangladesh",
  bookHref: "/visit",
} as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/zariya.living", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/@ZariyaLiving", icon: "youtube" },
  { label: "Instagram", href: "https://www.instagram.com/zariya_livingltd", icon: "instagram" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy & Terms", href: "/privacy" },
  { label: "Legal & Disclosures", href: "/legal" },
] as const;

export type NavChild = { label: string; href: string; soon?: boolean };
export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

// Only the flagship Sylhet project page exists; the rest are marked "soon"
// (shown but not clickable in the dropdown).
export const NAV_LINKS: NavLink[] = [
  { label: "Explore", href: "/explore" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Zariya Resort & Villas, Sylhet", href: "/projects/sylhet" },
      { label: "Niladri", href: "/projects/niladri", soon: true },
      { label: "Noakhali", href: "/projects/noakhali", soon: true },
      { label: "Cox's Bazar", href: "/projects/coxs-bazar", soon: true },
    ],
  },
  { label: "Ownership & Income", href: "/ownership" },
  { label: "Township & Amenities", href: "/township" },
  { label: "Community", href: "/community" },
  { label: "Visit", href: "/visit" },
];

export const PROJECTS = [
  {
    name: "Niladri",
    location: "Sunamganj, Sylhet",
    status: "Coming Soon",
    description: "Where turquoise water meets the hills, the community model set against Sylhet's most iconic landscape.",
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
    description: "Where the world's longest beach meets a community built on values, reimagined for the family that wants more.",
    image: "/images/project-coxsbazar.jpg",
  },
] as const;
