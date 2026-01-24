"use client";

import styles from "@/app/css/WaterproofingProducts.module.css";
import Link from "next/link";

const products = [
  {
    slug: "zycosil-plus",
    name: "ZycoSil+",
    desc: "Reactive organosilane waterproofing technology",
    image: "/waterproofing/zydex-zycosil-plus.webp",
    pack: "1L, 5L, 20L",
  },
  {
    slug: "zycoprime-plus",
    name: "ZycoPrime+",
    desc: "Acrylic sealing & bonding agent",
    image: "/waterproofing/zydex-zycoprime-plus.webp",
    pack: "1L, 5L, 20L",
  },
  {
    slug: "zycosil-max",
    name: "ZycoSil Max",
    desc: "New-generation deep penetrative waterproofing",
    image: "/waterproofing/zydex-zycosil-max.webp",
    pack: "1L, 5L",
  },
  {
    slug: "zycobond-max",
    name: "ZycoBond Max",
    desc: "Nano acrylic sealer & bonding agent",
    image: "/waterproofing/zydex-zycobond-max.webp",
    pack: "1L, 5L",
  },
  {
    slug: "elastostretch",
    name: "ElastoStretch",
    desc: "Acrylic stretchable elastomeric membrane",
    image: "/waterproofing/zydex-elastostretch.webp",
    pack: "1L, 4L, 20L",
  },
  {
    slug: "elastomax-pu",
    name: "ElastoMax PU",
    desc: "PU modified elastomeric membrane",
    image: "/waterproofing/zydex-elastomax-pu.webp",
    pack: "1L, 4L, 20L",
  },
  {
    slug: "elastosil",
    name: "ElastoSil",
    desc: "Cement-modified elastomeric membrane",
    image: "/waterproofing/zydex-elastosil.webp",
    pack: "4L, 20L",
  },
  {
    slug: "elastobar",
    name: "Elastobar",
    desc: "High-performance acrylic elastomeric membrane",
    image: "/waterproofing/zydex-elastobar.webp",
    pack: "1Kg, 5Kg, 20Kg",
  },
];



export default function WaterproofingProducts() {
  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Waterproofing <span>Products</span>
        </h2>

        <div className={styles.grid}>
          {products.map((item) => (
            <div className={styles.card} key={item.slug}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.name} />
              </div>

              <div className={styles.content}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>

                <span className={styles.pack}>
                  Packing: {item.pack}
                </span>

                <div className={styles.cardFooter}>
                  <Link
                    href={`/products/waterproofing/${item.slug}`}
                    className={styles.btn}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}