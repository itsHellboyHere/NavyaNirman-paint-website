"use client";

import styles from "@/app/css/ProductHero.module.css";

export default function ProductHero({ product }) {
  return (
    <section className={styles.productHero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src={product.heroImage}
              alt={product.name}
            />
          </div>

          <div className={styles.content}>
            <span className={styles.category}>
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p>{product.shortDesc}</p>

            <button className={styles.cta}>
              Get Consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}