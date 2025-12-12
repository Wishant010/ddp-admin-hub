// Contact Information
export const CONTACT = {
  email: "info@adminddp.nl",
  phone: "+31 6 54324404",
  phoneDisplay: "06 5432 4404",
  address: "Zevenwoudenplantsoen 11",
  postalCity: "2036 NL Haarlem",
  kvk: "91593344",
  whatsapp: "31654324404",
} as const;

// Social Links
export const SOCIALS = {
  instagram: "https://instagram.com/adminddp",
  whatsappUrl: (message: string) =>
    `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Pakketten", href: "/pakketten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

// Packages/Pricing
export const PACKAGES = [
  {
    name: "Basis",
    price: 100,
    period: "per maand",
    description: "Perfect voor starters met weinig transacties",
    features: [
      "Tot 30 boekingen per maand",
      "Koppeling boekhoudsoftware",
      "Kwartaal-BTW-aangifte",
      "Jaarrekening in Excel / PDF",
    ],
    highlighted: false,
  },
  {
    name: "Compleet",
    price: 150,
    period: "per maand",
    description: "De beste keuze voor groeiende ondernemers",
    badge: "Meest gekozen",
    features: [
      "Alles uit Basis",
      "Tot 100 boekingen per maand",
      "Aangifte inkomstenbelasting",
      "Kwartaalrapportage",
      "Beperkt advies (max. 1 uur per kwartaal)",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: 250,
    period: "per maand",
    description: "Volledige ontzorging voor ambitieuze ondernemers",
    features: [
      "Alles uit Compleet",
      "Onbeperkt boekingen",
      "Maandelijkse rapportage",
      "Onbeperkt advies per e-mail/telefoon",
      "Hulp bij investeringen, auto van de zaak, etc.",
    ],
    highlighted: false,
  },
] as const;

// Steps / Werkwijze
export const STEPS = [
  {
    number: 1,
    title: "Aanmelden",
    description: "Neem contact op via het formulier of WhatsApp en vertel over je situatie.",
  },
  {
    number: 2,
    title: "Offerte ondertekenen",
    description: "Je ontvangt een helder voorstel zonder verrassingen. Akkoord? Dan starten we.",
  },
  {
    number: 3,
    title: "Laat de rest aan ons over",
    description: "Gefeliciteerd! Wij regelen je administratie, jij focust op ondernemen.",
  },
] as const;

// Review type
export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  status: "pending" | "approved";
}

// Default WhatsApp message
export const DEFAULT_WHATSAPP_MESSAGE = "Hallo! Ik heb een vraag over jullie diensten.";
