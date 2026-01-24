"use client";

import styles from "@/app/css/ProductSpecifications.module.css";

export default function ProductSpecifications({ specs }) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Technical Specifications</h2>

                <div className={styles.table}>
                    {specs.map((item) => (
                        <div className={styles.row} key={item.label}>
                            <span className={styles.label}>{item.label}</span>
                            <span className={styles.value}>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}