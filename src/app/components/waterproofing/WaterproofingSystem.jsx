"use client";

import styles from "@/app/css/WaterproofingSystem.module.css";

const systems = [
  {
    title: "Penetrative Organosilane Technology",
    desc: "Deep nano-pore penetration forming a breathable, permanent waterproof barrier.",
    image: "/waterproofing/step-1.webp",
    action: "Learn More",
    target: "#products",
  },
  {
    title: "Sealing & Bonding Preparation",
    desc: "Improves wet adhesion and reduces porosity for long-term compatibility.",
    image: "/waterproofing/step-2.webp",
    action: "View System",
    target: "#products",
  },
  {
    title: "Elastomeric Membrane Protection",
    desc: "Crack-bridging, UV-resistant membranes for exposed surfaces.",
    image: "/waterproofing/step-3.webp",
    action: "Explore",
    target: "#products",
  },
  {
    title: "High-Elongation Protection",
    desc: "Handles structural movement and harsh weather conditions.",
    image: "/waterproofing/step-4.webp",
    action: "See Details",
    target: "#products",
  },
];

export default function WaterproofingSystems() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Waterproofing <span>Systems</span>
        </h2>

        <div className={styles.grid}>
          {systems.map((item) => (
            <div
              key={item.title}
              className={styles.card}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.overlay} />

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

          
                <a href={item.target} className={styles.action}>
                  {item.action} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}