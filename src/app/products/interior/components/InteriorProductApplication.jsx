"use client";
import styles from "@/app/css/products_paints/InteriorProductApplication..module.css";
import {
  HiOutlinePaintBrush,
  HiOutlineSquare3Stack3D,
  HiOutlineCube
} from "react-icons/hi2";

export default function InteriorProductApplication({ product }) {
  if (!product.application && !product.coverage) return null;

  return (
    <section className={styles.section} id="application">
      <div className={styles.container}>

        <h3 className={styles.heading}>Application & Coverage</h3>

        <div className={styles.grid}>

          {/* APPLICATION */}
          {product.application && (
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>
                <HiOutlinePaintBrush className={styles.icon} />
                Application Method
              </h4>
              <p>{product.application}</p>
            </div>
          )}

          {/* COVERAGE */}
          {product.coverage && (
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>
                <HiOutlineSquare3Stack3D className={styles.icon} />
                Coverage
              </h4>
              <p>{product.coverage}</p>
              {product.coverageNote && (
                <span className={styles.note}>{product.coverageNote}</span>
              )}
            </div>
          )}

          {/* PACKING */}
          {product.packing?.length > 0 && (
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>
                <HiOutlineCube className={styles.icon} />
                Available Packing
              </h4>
              <ul className={styles.packing}>
                {product.packing.map(size => (
                  <li key={size}>{size}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}