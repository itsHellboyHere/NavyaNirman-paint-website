"use client"
import Link from "next/link"
import styles from "@/app/css/FinalCTA.module.css"

export default function FinalCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h2 className={styles.title}>
                    Need help choosing the right <span>system</span>?
                </h2>
                <p className={styles.description}>
                    Our technical team helps you select the appropriate paint or
                    waterproofing solution based on surface condition, exposure, and
                    long-term performance needs.
                </p>
                <div className={styles.actions}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Get Technical Consultation
                    </Link>

                     <Link href="/products/interior" className={styles.secondaryBtn}>
    Explore Paint Systems
  </Link>
                </div>
            </div>
        </section>
    )
}