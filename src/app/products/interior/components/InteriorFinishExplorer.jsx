"use client";

import styles from "@/app/css/products_paints/InteriorFinishExplorer.module.css";
import { interiorFinishData } from "../../data/interiorFinishData";

export default function InteriorFinishExplorer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.title}>Interior Finish & Surface Feel</h2>
        <p className={styles.subtitle}>
          Representative finish tones showcasing texture, depth and surface behaviour.
        </p>

        <div className={styles.palette}>
          {interiorFinishData.map((item) => (
            <div
              key={item.label}
              className={styles.color}
              style={{ background: item.color }}
            >
              <span>
                <strong>{item.label}</strong>
                <em>{item.description}</em>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}