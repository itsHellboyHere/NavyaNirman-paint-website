"use client";
import styles from "@/app/css/products_paints/ExteriorProduct.module.css";
import { useInView } from "@/app/hooks/useInView";
export default function ExteriorProduct({
  slug,
  align = "left",
  title,
  subtitle,
  description,
  image,
}) {

  const { ref, inView } = useInView()
  return (
    <section ref={ref} className={`${styles.section} ${styles[align]} ${inView ? styles.show : ""}`}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <div className={styles.imageOverlay} />
          <img src={image} alt={title} />
        </div>

        <div className={styles.text}>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{description}</p>
          <a
            href={`/products/exterior/${slug}`}
            className={styles.cta}
            aria-label={`Explore ${title}`}
          >
            Explore {title}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}