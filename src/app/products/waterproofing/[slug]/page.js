// src/app/waterproofing/[slug]/page.jsx

import { waterproofingProducts } from "@/app/products/waterproofing/[slug]/data/products";
import { notFound } from "next/navigation";
import ProductDetail from "../component/ProducDetial";
import ScrollReset from "@/app/components/common/ScrollReset";

export default async function ProductPage({ params }) {
  const { slug } = await params; 

  const product = waterproofingProducts.find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <ScrollReset />
      <ProductDetail product={product} />
    </>
  );
}