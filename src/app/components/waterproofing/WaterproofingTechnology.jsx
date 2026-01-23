import styles from "@/app/css/WaterproofingTechnology.module.css";

const items = [
  {
    title: "Organosilane Technology",
    text:
      "Reactive organosilane molecules penetrate deep into nano-pores of concrete and masonry, becoming a permanent part of the substrate.",
  },
  {
    title: "Breathable & Non-Leachable",
    text:
      "Allows trapped moisture vapour to escape while preventing water ingress. UV resistant and free from peel-off issues.",
  },
  {
    title: "System-Based Protection",
    text:
      "A complete waterproofing approach combining penetration, bonding, and elastomeric membranes for long-term durability.",
  },
];

export default function WaterproofingTechnology() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Technology <span>Behind Our Systems</span>
        </h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}