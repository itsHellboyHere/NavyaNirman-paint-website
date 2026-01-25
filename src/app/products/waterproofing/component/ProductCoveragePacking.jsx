"use client";

import styles from "@/app/css/ProductCoveragePacking.module.css";
import { FaFillDrip } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";

export default function ProductCoveragePacking({ coverage, packing }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* COVERAGE */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <FaFillDrip className={styles.icon} />
              <h3>Coverage</h3>
            </div>

            {/* PENETRATIVE PRODUCTS (stacked layout) */}
            {(coverage.horizontal || coverage.vertical) && (
              <div className={styles.coverageStack}>
                {coverage.horizontal && (
                  <div className={styles.coverageBlock}>
                    <span className={styles.label}>Horizontal</span>
                    <p className={styles.value}>{coverage.horizontal}</p>
                  </div>
                )}

                {coverage.vertical && (
                  <div className={styles.coverageBlock}>
                    <span className={styles.label}>Vertical</span>
                    <p className={styles.value}>{coverage.vertical}</p>
                  </div>
                )}
              </div>
            )}

            {/* ELASTOMERIC MEMBRANE PRODUCTS */}
            {coverage.value && (
              <div className={styles.coverageValue}>
                <strong>{coverage.value}</strong>
              </div>
            )}

            {coverage.note && (
              <p className={styles.note}>{coverage.note}</p>
            )}
          </div>

          {/* PACKING */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <BsBoxSeam className={styles.icon} />
              <h3>Available Packing</h3>
            </div>

            <ul className={styles.packingGrid}>
              {packing.map((item) => (
                <li key={item} className={styles.packItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}