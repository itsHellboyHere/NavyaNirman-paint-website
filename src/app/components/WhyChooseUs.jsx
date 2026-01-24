'use client'
import styles from "@/app/css/WhyChooseUs.module.css";
import { useInView } from "@/app/hooks/useInView";

function FeatureCard({ title, desc }) {
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.inView : ""}`}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        
        {/* LEFT */}
        <div
          ref={ref}
          className={`${styles.left} ${inView ? styles.inView : ""}`}
        >
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
          <FeatureCard
            title="System-Based Solutions"
            desc="Products designed to work together, ensuring consistent performance."
          />

          <FeatureCard
            title="Proven Durability"
            desc="Long service life with resistance to peeling, fading, and dirt pickup."
          />

          <FeatureCard
            title="Climate & Surface Ready"
            desc="Engineered for Indian climate conditions and mineral substrates."
          />

          <FeatureCard
            title="Advanced Waterproofing"
            desc="Breathable, penetrative, and elastomeric protection systems."
          />
        </div>
      </div>
    </section>
  );
}