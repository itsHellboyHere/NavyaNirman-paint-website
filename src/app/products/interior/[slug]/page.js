import { notFound } from "next/navigation";
import { interiorProducts } from "../../data/interiorPaintProducts";


import ScrollReset from "@/app/components/common/ScrollReset";

import ProductCTA from "../../waterproofing/component/ProductCTA";
import InteriorHeroProduct from "../components/InteriorHeroProduct";
import InteriorProductOverview from "../components/InteriorProductOverview";
import InteriorProductFeatures from "../components/InteriorProductFeature";
import InteriorProductSpecifications from "../components/InteriorProductSpecification";
import InteriorProductApplication from "../components/InteriorProductApplication";
// import InteriorFinishExplorer from "../components/InteriorFinishExplorer";


export default async function InteriorProductPage({ params }) {
const { slug } = await params; 

  const product = interiorProducts.find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }
  return (
    <>
    <ScrollReset/>
    <InteriorHeroProduct product={product}/>
    <InteriorProductOverview product={product} />
    <InteriorProductFeatures product={product} />
    <InteriorProductSpecifications product={product} />
    <InteriorProductApplication product={product} />
    {/* <InteriorFinishExplorer /> */}
    <ProductCTA product={product} />
    </>
  );
}