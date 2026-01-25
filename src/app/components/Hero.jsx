import Image from "next/image";
import styles from "@/app/css/Hero.module.css";

import Link from "next/link";
export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Left content */}
            <div className={styles.content}>
                <h1 className={`${styles.title} ${styles.fadeUp} ${styles.delay1}`}>
                    Paint & <span>Waterproofing</span> Solutions
                </h1>

                <p className={`${styles.subtitle} ${styles.fadeUp} ${styles.delay2}`}>
                    Designed to protect homes and buildings from moisture, weather,
                    and long-term wear — without compromising on finish or durability.
                </p>

                <div className={`${styles.actions} ${styles.fadeUp} ${styles.delay3}`}>
                    <Link href="/products/interior" className={styles.primaryBtn}>
                        Explore Paint Systems
                    </Link>

                    <Link href="/contact" className={styles.secondaryBtn}>
                        Talk to Expert
                    </Link>
                </div>
            </div>

            {/* Right image */}
            <div className={styles.imageWrap}>
                <Image
                    src="/hero.webp"
                    alt="Painted exterior wall with waterproofing protection"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.heroImage}
                />
            </div>
        </section>
    );
}