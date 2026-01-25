"use client";

import styles from "@/app/css/products_paints/InteriorProductOverview.module.css";

export default function InteriorProductOverview({ product }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* LEFT — TEXT */}
          <div className={styles.text}>
            <span className={styles.tag}>{product.category}</span>

            <h2 className={styles.name}>{product.name}</h2>

            <p className={styles.type}>{product.type}</p>

            <p className={styles.description}>
              {product.description}
            </p>
          </div>

          {/* RIGHT — FACT CARDS */}
          <div className={styles.meta}>

            {/* PERFORMANCE */}
            {product.performance && (
              <div className={styles.metaCard}>
                <strong>{product.performance}</strong>
                <span>Performance (T&C Apply)</span>
              </div>
            )}

            {/* HIGHLIGHTS (TOP 3 ONLY) */}
            {product.highlights?.slice(0, 3).map((item, idx) => (
              <div key={idx} className={styles.metaCard}>
                <strong>{item}</strong>
                <span>Key Product Attribute</span>
              </div>
            ))}

            {/* SPEC (OPTIONAL – FIRST ONE ONLY) */}
            {product.specifications?.[0] && (
              <div className={styles.metaCard}>
                <strong>{product.specifications[0].value}</strong>
                <span>{product.specifications[0].label}</span>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}