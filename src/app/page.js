import Applications from "./components/Application";
import FeaturedProducts from "./components/FeaturedProducts";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import WhyChooseUs from "./components/WhyChooseUs";

export const metadata = {
  title: "Home | Navyya Nirman",
  description:
    "Navyya Nirman provides advanced waterproofing systems and premium interior & exterior paint solutions designed for long-term protection and performance.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <WhyChooseUs />
      <FeaturedProducts />
      <Applications />
      <FinalCTA />
    </>
  );
}