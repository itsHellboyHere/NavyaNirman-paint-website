import Image from "next/image";
import styles from "@/app/css/WaterproofingHero.module.css";

export default function WaterproofingHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Waterproofing <span>Solutions</span>
          </h1>

          <p className={styles.subtitle}>
            Advanced organosilane-based waterproofing systems designed to
            penetrate deep into concrete and masonry, providing long-term
            protection without peeling or surface failure.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.imageWrap}>
          <Image
            src="/waterproofing/hero.webp"
            alt="Waterproofing protection on concrete surface"
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}