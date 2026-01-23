"use client";

import styles from "@/app/css/ProductOverView.module.css";

export default function ProductOverview({ product }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* LEFT */}
          <div className={styles.text}>
            <span className={styles.eyebrow}>Technical Overview</span>

            <h2>Product Overview</h2>

            <p className={styles.lead}>
              {product.shortDesc}
            </p>

            <div className={styles.body}>
              <p>{product.overview}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.features}>
            <h3>Key Features</h3>
            <ul>
              {product.keyFeatures.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}