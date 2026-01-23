import styles from "@/app/css/Solutions.module.css";

export default function Solutions() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Our <span>Solutions</span>
        </h2>

        <p className={styles.subtitle}>
          Designed to protect, enhance, and extend the life of buildings —
          inside and out.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Paint Solutions</h3>
            <p>
              Interior and exterior paints engineered for durability, finish
              retention, and Indian climate conditions.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Waterproofing Systems</h3>
            <p>
              Advanced solutions for roofs, walls, basements, and terraces —
              preventing seepage and structural damage.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Surface Preparation</h3>
            <p>
              Primers, sealers, and bonding agents that ensure long-lasting
              performance of every system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}