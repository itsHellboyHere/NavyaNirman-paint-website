import ExteriorProduct from "@/app/components/products/exterior/ExteriorProduct";
import ExteriorHero from "@/app/components/products/exterior/ExteriorHero";

export const metadata = {
  title: "Exterior Paints & Wall Coatings | Navyya Nirman",
  description:
    "High-performance exterior paints engineered for durability, colour stability, and long-lasting protection. Explore mineral and premium exterior paint systems by Navyya Nirman.",

  keywords: [
    "exterior paints",
    "exterior wall paint",
    "outside wall paint",
    "mineral exterior paint",
    "weather resistant paint",
    "Navyya Nirman exterior paints",
  ],

  openGraph: {
    title: "Exterior Paints | Navyya Nirman",
    description:
      "Premium exterior paint systems offering long-term protection, breathability, and refined mineral finishes.",
    url: "https://navvyanirman.com/products/exterior",
    siteName: "Navyya Nirman",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "/products/exterior",
  },
};

export default function Page() {
  return (
    <>
      <ExteriorHero />
      <ExteriorProduct
        slug="stonix"
        align="left"
        title="Stonix"
        subtitle="Ultra-durable mineral exterior paint"
        description="Stonix is a high-performance mineral paint formulated with a potassium silicate binder system for exterior applications. Made exclusively with lightfast inorganic pigments, it delivers exceptional resistance to fading, peeling, and dirt pickup. Its breathable, water-impermeable mineral structure inhibits algae and fungal growth while offering an ultra-matt finish that enhances light reflectivity and conceals surface imperfections. Designed for long-term performance, Stonix provides a service life of 15+ years on mineral substrates."
        image="/exterior/stonix-hero.webp"
      />

      <ExteriorProduct
        slug="xtend-ultra"
        align="right"
        title="Xtend Ultra"
        subtitle="High performance exterior paint"
        description="Xtend Ultra is a high-performance exterior paint engineered for long-lasting durability and colour stability. Formulated with lightfast inorganic pigments and a specially designed binder system, it offers excellent resistance to fading, peeling, and dirt pickup. Its breathable and water-impermeable nature naturally restricts algae and fungal growth, while its mineral matt finish enhances light reflection and masks surface irregularities. Xtend Ultra delivers dependable exterior protection with a service life of 10+ years."
        image="/exterior/xtend-ultra-hero.webp"
      />
      <ExteriorProduct
        slug="xtend"
        align="left"
        title="Xtend"
        subtitle="Premium mineral matt exterior finish"
        description="Xtend is a premium exterior paint developed using lightfast pigments and an advanced organo-silicate binder system. Its formulation provides excellent breathability combined with water repellency, protecting surfaces from weathering while resisting dirt pickup, algae, and fungal growth. With a refined mineral matt appearance that improves light reflectivity and conceals surface defects, Xtend offers reliable exterior performance with a service life of 7+ years."
        image="/exterior/xtend-hero.webp"
      />
      <ExteriorProduct
        slug="xtend-brick"
        align="right"
        title="Xtend Brick"
        subtitle="Natural brick-tone mineral exterior paint"
        description="Xtend Brick is a ready-to-apply exterior paint designed to replicate the natural appearance of brick surfaces. Ideal for old brick facades and decorative masonry, it preserves the inherent breathability of bricks while providing protection against weathering elements. Its ultra-matt finish and authentic brick tone deliver a classic aesthetic that cannot be achieved with conventional acrylic paints, backed by a 7-year performance warranty."
        image="/exterior/xtend-brick-hero.webp"
      />
    </>
  )
}