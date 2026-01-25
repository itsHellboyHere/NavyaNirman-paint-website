import styles from "@/app/css/About.module.css";
import {
    FaTools,
    FaLayerGroup,
    FaShieldAlt,
    FaMapMarkedAlt,
} from "react-icons/fa";

import Link from "next/link";

export const metadata = {
    title: "About Us | Navyya Nirman",
    description:
        "System-focused paint and waterproofing company delivering long-term performance solutions for residential and commercial construction across India.",
};

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* HERO */}
                <header className={styles.hero}>
                    <div className={styles.heroCard}>
                        <h1>
                            Built for <span>Performance</span>.
                            <br />
                            Designed for Longevity.
                        </h1>
                        <p>
                            Navyya Nirman is a system-focused paint and waterproofing company
                            delivering high-performance solutions for residential and
                            commercial construction across India.
                        </p>
                    </div>
                </header>

                {/* CONTENT */}
                <div className={styles.content}>
                    <div className={styles.block}>
                        <h2>
                            <FaLayerGroup /> What We Do
                        </h2>
                        <p>
                            We specialise in interior paints, exterior coatings, and advanced
                            waterproofing systems engineered for Indian climate conditions.
                            Our solutions prioritise durability, compatibility, and long-term
                            protection.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h2>
                            <FaTools /> Our Approach
                        </h2>
                        <ul>
                            <li>System-based product selection</li>
                            <li>Substrate-specific recommendations</li>
                            <li>Long-term performance over cosmetic claims</li>
                            <li>Clear application guidance</li>
                            <li>Compatibility across primers, coatings, and membranes</li>
                        </ul>
                    </div>

                    <div className={styles.block}>
                        <h2>
                            <FaMapMarkedAlt /> Where We Work
                        </h2>
                        <p>
                            We support residential, commercial, and infrastructure projects
                            across India — adapting systems to regional climate conditions
                            and construction practices.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className={styles.cta}>
                        <FaShieldAlt className={styles.ctaIcon} />
                        <h3>Need Technical Guidance?</h3>
                        <p>
                            Our team helps architects, contractors, and homeowners select the
                            right paint or waterproofing system based on surface condition,
                            exposure, and service life expectations.
                        </p>

                        <Link href="/contact" className={styles.ctaLink}>
                            Get Technical Consultation →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}