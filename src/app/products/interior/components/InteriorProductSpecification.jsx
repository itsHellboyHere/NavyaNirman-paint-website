"use client";
import styles from "@/app/css/products_paints/InteriorProductSpecification.module.css";

export default function InteriorProductSpecifications({ product }) {
  if (!product.specifications?.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h3 className={styles.heading}>Technical Specifications</h3>

        <div className={styles.table}>
          {product.specifications.map((spec, index) => (
            <div key={index} className={styles.row}>
              <span className={styles.label}>{spec.label}</span>
              <span className={styles.value}>{spec.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}