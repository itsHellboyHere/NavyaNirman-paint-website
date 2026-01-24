// src/app/waterproofing/[slug]/loading.jsx

import styles from "@/app/css/ProductSkeleton.module.css";

export default function Loading() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.imageSkeleton} />
          <div className={styles.textBlock}>
            <div className={styles.titleSkeleton} />
            <div className={styles.lineSkeleton} />
            <div className={styles.lineSkeleton} />
          </div>
        </div>

        {/* Features */}
        <div className={styles.features}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.featureSkeleton} />
          ))}
        </div>

        {/* Specs */}
        <div className={styles.specs}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.specRow} />
          ))}
        </div>
      </div>
    </section>
  );
}