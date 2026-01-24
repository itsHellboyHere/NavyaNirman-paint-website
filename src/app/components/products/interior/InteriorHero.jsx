"use client";
import styles from "@/app/css/products_paints/InteriorHero.module.css";

export default function InteriorHero() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>Interior Paints</h1>
        <p className={styles.subtitle}>
          Designed for calm spaces. Crafted for lasting beauty.
        </p>
        <p className={styles.desc}>
          From refined matt finishes to graceful luxury textures, our interior
          paints are created to enhance light, comfort, and everyday living.
         
        </p>
        <div className={styles.explore}>
  <span>Explore interior finishes</span>
  <span className={styles.arrow}>↓</span>
</div>
      </div>
    </section>
  );
}