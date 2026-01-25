import InteriorHero from "@/app/components/products/interior/InteriorHero";
import InteriorProduct from "@/app/components/products/interior/InteriorProduct";
export const metadata = {
  title: "Interior Paints & Wall Finishes | Navyya Nirman",
  description:
    "Premium interior wall paints and primers designed for smooth finishes, durability, and elegant living spaces. Explore interior paint systems by Navyya Nirman.",

  keywords: [
    "interior paints",
    "wall paints",
    "interior wall finishes",
    "premium interior paint",
    "home interior paint",
    "Navyya Nirman interior paints",
  ],

  openGraph: {
    title: "Interior Paints | Navyya Nirman",
    description:
      "Explore premium interior paints and primers crafted for smooth, durable and elegant wall finishes.",
    url: "https://navvyanirman.com/products/interior",
    siteName: "Navyya Nirman",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "/products/interior",
  },
};

export default function Page() {
  return (
    <>
      <InteriorHero />
      <InteriorProduct
        slug="premium-matt"
        align="left"
        title="Premium Matt"
        subtitle="Timeless matt finish for modern interiors"
        description="Premium Matt is crafted for spaces that value balance and subtle elegance. Its smooth, low-sheen finish minimizes glare while enhancing wall depth, creating interiors that feel calm and refined."
        image="/interior/matt.webp"
      />

      <InteriorProduct
      slug="marvella-luxury"
        align="right"
        title="Marvella Luxury"
        subtitle="Silk-smooth elegance with a refined glow"
        description="Marvella Luxury delivers a graceful sheen that elevates premium interiors. Its silky finish reflects light softly, adding richness and depth to statement spaces."
        image="/interior/luxury.webp"
      />
      <InteriorProduct
      slug="premium-wall-primer"
        align="left"
        title="Premium Wall Primer"
        subtitle="The essential base for flawless interior finishes"
        description="Premium Wall Primer is a water-based acrylic primer designed to prepare interior surfaces for long-lasting paint performance. It ensures uniform absorption, improves paint adhesion, and creates a smooth, consistent base—allowing top coats to achieve their true finish and durability."
        image="/interior/primer.webp"
      />
    </>
  )
}