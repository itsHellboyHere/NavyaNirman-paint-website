import Applications from "./components/Application";
import FeaturedProducts from "./components/FeaturedProducts";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import WhyChooseUs from "./components/WhyChooseUs";

export default function HomePage(){
  return(
    <>
    <Hero/>
    <Solutions/>
    <WhyChooseUs/>
    <FeaturedProducts/>
    <Applications/>
    <FinalCTA/>
    </>
  )
}