import ProductCoveragePacking from "./ProductCoveragePacking";
import ProductCTA from "./ProductCTA";
import ProductHero from "./ProductHero";
import ProductOverview from "./ProductOverview";
import ProductSpecifications from "./ProductSpecifications";


export default function ProductDetail({ product }) {
  return (
    <>
      <ProductHero product={product}/>
      <ProductOverview product={product} />
      
      <ProductSpecifications specs={product.specifications}/>
      <ProductCoveragePacking 
      coverage={product.coverage}
      packing={product.packing}
      />
      <ProductCTA product={product}/>
    </>
  );
}