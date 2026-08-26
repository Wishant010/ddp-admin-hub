// Productie-URL van de site (gebruikt voor canonical, sitemap, Open Graph en schema)
export const SITE_URL = "https://www.admindrfa.nl";

// Contact Information
export const CONTACT = {
  email: "info@admindrfa.nl",
  phone: "+31 6 54324404",
  phoneDisplay: "06 5432 4404",
  address: "Zevenwoudenplantsoen 11",
  postalCity: "2036 NL Haarlem",
  kvk: "91593344",
  whatsapp: "31640772472",
} as const;

// Social Links
export const SOCIALS = {
  instagram: "https://instagram.com/admindrfa",
  whatsappUrl: (message: string) =>
    `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
} as const;

// Navigatie, pakketten en overige teksten staan in lib/translations.ts (NL + EN)

// Review type
export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  status: "pending" | "approved";
  photo?: string;
}
