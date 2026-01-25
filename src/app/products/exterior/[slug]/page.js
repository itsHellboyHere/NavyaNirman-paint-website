import { notFound } from "next/navigation";
import { exteriorProducts } from "../../data/exteriorPaintProducts";


import ScrollReset from "@/app/components/common/ScrollReset";
import ExteriorProductHero from "./components/ExteriorHeroProduct";
import ExteriorProductOverview from "./components/ExteriorProductOverview";
import ExteriorProductFeatures from "./components/ExteriorProductFeatures";
import ExteriorProductSpecifications from "./components/ExteriorProductSpecification";
import ExteriorProductApplication from "./components/ExteriorProductApplication";
import ProductCTA from "../../waterproofing/component/ProductCTA";


export async function generateMetadata({ params }) {
  const {slug} = await params;
  const product = exteriorProducts.find(
    (p) => p.slug === slug
  );

  if (!product) return {};

  return {
    title: `${product.name} | Exterior Paints`,
    description: product.shortDesc,
  };
}

export default async function ExteriorProductPage({ params }) {
const { slug } = await params; 

  const product = exteriorProducts.find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }
  return (
    <>
      <ScrollReset/>
    <ExteriorProductHero product={product}/>
    <ExteriorProductOverview product={product} />
    <ExteriorProductFeatures product={product}/>
    <ExteriorProductSpecifications product={product} />
    <ExteriorProductApplication product={product} />
    <ProductCTA product={product} />
    </>
  );
}