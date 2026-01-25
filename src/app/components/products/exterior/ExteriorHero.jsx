"use client";
import styles from "@/app/css/products_paints/ExteriorHero.module.css";

export default function ExteriorHero() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h1>Exterior Paints</h1>

                <p className={styles.subtitle}>
                    Engineered for durability. Designed for lasting façades.
                </p>

                <p className={styles.desc}>
                    Our exterior paint systems combine mineral technology, breathability,
                    and long-term weather resistance to protect buildings against fading,
                    peeling, dirt pickup, and harsh climatic conditions.
                </p>

                <div className={styles.explore}>
                    <span>Explore exterior solutions</span>
                    <span className={styles.arrow}>↓</span>
                </div>
            </div>
        </section>
    );
}