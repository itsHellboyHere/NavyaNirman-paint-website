"use client";

import styles from "@/app/css/products_paints/ExteriorProductFeatures.module.css";
import { useInView } from "@/app/hooks/useInView";

export default function ExteriorProductFeatures({ product }) {
  const { ref, inView } = useInView();

  if (!product?.keyFeatures?.length) return null;

  return (
    <section ref={ref} className={`${styles.section} ${inView ? styles.inView : ""}`}>
      <div className={styles.container}>

        <h2 className={`${styles.title}`}>
          Key Features
        </h2>

        <div className={styles.grid}>
          {product.keyFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${styles.card}`}
              style={{"--i": index}}
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