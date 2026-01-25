"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "@/app/css/FeaturedProducts.module.css"
// import featuredProducts from "@/app/data/featuredProducts"

const featuredProducts = [
  {
    id: 1,
    name: "Stonix",
    tagline: "Ultra Durable Exterior Mineral Paint",
    image: "/featured/stonix.webp",
    link: "/products/exterior/stonix",
  },
  {
    id: 2,
    name: "Marvella",
    tagline: "Luxury Interior Finish with Superior Smoothness",
    image: "/featured/marvella.webp",
    link: "/products/interior/marvella-luxury",
  },
  {
    id: 3,
    name: "ZycoSil+",
    tagline: "Advanced Penetrative Waterproofing System",
    image: "/products/zycosil.webp",
    link: "/products/waterproofing/zycosil-plus",
  },
];
export default function FeaturedProducts() {
    const [index, setIndex] = useState(0);
    const product = featuredProducts[index];

    const prev = () =>
        setIndex((index - 1 + featuredProducts.length) % featuredProducts.length);

    const next = () =>
        setIndex((index + 1) % featuredProducts.length);

    //  mod any no gives mod if smaller like 2 % 4 gives 2

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                {/* HEADER */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Featured <span>Products</span>
                    </h2>
                    <div className={styles.arrows}>
                        <button onClick={prev} aria-label="Previous">
                            ←
                        </button>
                        <button onClick={next} aria-label="Next">
                            →
                        </button>
                    </div>
                </div>
                {/* CARD */}
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h3>{product.name}</h3>
                        <p>{product.tagline}</p>

                        <Link href={product.link} className={styles.link}>
                            View Product →
                        </Link>
                    </div>
                    <div className={styles.imageWrap}>
                    <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                    priority
                    />
                    </div>
                </div>
            </div>

        </section>
    )
}