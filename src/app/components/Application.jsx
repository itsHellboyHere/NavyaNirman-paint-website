import Image from "next/image";
import Link from "next/link";
import styles from "@/app/css/Applications.module.css";

const applications = [
  {
    title: "Interior Walls",
    desc: "Smooth, durable finishes designed for everyday living spaces.",
    image: "/applications/interior.webp",
    link: "/products/interior",
  },
  {
    title: "Exterior Facades",
    desc: "Weather-resistant coatings built for long-term exterior protection.",
    image: "/applications/exterior.webp",
    link: "/products/exterior",
  },
  {
    title: "Roofs & Terraces",
    desc: "Advanced waterproofing systems for exposed horizontal surfaces.",
    image: "/products/waterproofing.webp",
    link: "/products/waterproofing",
  },
  {
    title: "Basements & Wet Areas",
    desc: "Protection against dampness, seepage, and water ingress.",
    image: "/applications/basement.webp",
    link: "/products/waterproofing",
  },
];

export default function Applications() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Where Our <span>Products Are Used</span>
        </h2>

        <div className={styles.grid}>
          {applications.map((item) => (
            <Link href={item.link} key={item.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}