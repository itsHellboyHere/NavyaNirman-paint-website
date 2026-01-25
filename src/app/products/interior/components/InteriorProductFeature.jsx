"use client";

import styles from "@/app/css/products_paints/InteriorProductFeatures.module.css";
import { useInView } from "@/app/hooks/useInView";

export default function InteriorProductFeatures({ product }) {
  const { ref, inView } = useInView();

  if (!product?.keyFeatures?.length) return null;

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>

        <h2 className={`${styles.title} ${inView ? styles.inView : ""}`}>
          Key Features
        </h2>

        <div className={styles.grid}>
          {product.keyFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${styles.card} ${inView ? styles.inView : ""}`}
            >
              <span className={styles.bullet} />
              <p>{feature}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}