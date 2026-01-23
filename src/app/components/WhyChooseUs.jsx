'use client'
import styles from "@/app/css/WhyChooseUs.module.css";
import { useInView } from "@/app/hooks/useInView";

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {/* LEFT */}
        <div className={`${styles.left} ${styles.fadeUp} ${inView ? styles.inView : ""}`}>
          <h2 className={styles.title}>
            Why Choose <span>NavyyaNirman</span>
          </h2>

          <p className={styles.description}>
            Our products are developed as complete surface protection systems —
            combining preparation, coating, and protection layers to deliver
            long-term performance across varied building conditions.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay1} ${inView ? styles.inView : ""}`}>
            <h3>System-Based Solutions</h3>
            <p>Products designed to work together, ensuring consistent performance.</p>
          </div>

          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay2} ${inView ? styles.inView : ""}`}>
            <h3>Proven Durability</h3>
            <p>Long service life with resistance to peeling, fading, and dirt pickup.</p>
          </div>

          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay3} ${inView ? styles.inView : ""}`}>
            <h3>Climate & Surface Ready</h3>
            <p>Engineered for Indian climate conditions and mineral substrates.</p>
          </div>

          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay4} ${inView ? styles.inView : ""}`}>
            <h3>Advanced Waterproofing</h3>
            <p>Breathable, penetrative, and elastomeric protection systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}