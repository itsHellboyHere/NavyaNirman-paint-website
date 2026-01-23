import Applications from "../components/Application";
import WaterproofingHero from "../components/waterproofing/WaterproofingHero";
import WaterproofingProducts from "../components/waterproofing/WaterproofingProducts";
import WaterproofingSystem from "../components/waterproofing/WaterproofingSystem";
import WaterproofingTechnology from "../components/waterproofing/WaterproofingTechnology";


export const metadata = {
  title: "Waterproofing Systems & Solutions | Navyya Nirman",
  description:
    "Advanced waterproofing systems for roofs, terraces, basements and concrete structures. Long-lasting protection by Navvya Nirman.",

  keywords: [
    "waterproofing solutions",
    "roof waterproofing",
    "terrace waterproofing",
    "basement waterproofing",
    "construction waterproofing",
    "Navvya Nirman waterproofing"
  ],

  openGraph: {
    title: "Waterproofing Systems & Solutions | Navvya Nirman",
    description:
      "High-performance waterproofing products and systems designed for durability and long-term protection.",
    url: "https://navvyanirman.com/waterproofing",
    siteName: "Navvya Nirman",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "/waterproofing",
  },
};

export default function Page(){
    return(
        <>
        {/* <WaterproofingSystem/> */}
        <WaterproofingHero/>
        {/* <WaterproofingTechnology/> */}
        <WaterproofingSystem/>
        <WaterproofingProducts/>
        {/* <Applications/> */}
        </>
    )
}