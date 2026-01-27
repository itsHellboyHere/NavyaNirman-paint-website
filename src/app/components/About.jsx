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
                            Colour with <span>Care</span>.
                            <br />
                            Protection with Purpose.
                        </h1>
                        <p>
                            Welcome to Navyya Nirman Company, your trusted partner in painting
                            and waterproofing solutions. With a strong commitment to quality,
                            durability, and customer satisfaction, we bring colour and
                            protection to residential, commercial, and industrial spaces.
                        </p>
                    </div>
                </header>

                {/* CONTENT */}
                <div className={styles.content}>

                    {/* WHAT WE DO */}
                    <div className={styles.block}>
                        <h2>
                            <FaLayerGroup /> What We Do
                        </h2>
                        <p>
                            At Navyya Nirman Company, we believe every wall tells a story—our
                            job is to make sure it’s vibrant and long-lasting. From premium
                            interior and exterior painting to advanced waterproofing systems,
                            our expert team ensures your property looks stunning and stands
                            strong against the elements.
                        </p>
                    </div>

                    {/* OUR APPROACH */}
                    <div className={styles.block}>
                        <h2>
                            <FaTools /> Our Approach
                        </h2>
                        <p>
                            We use only the highest-quality materials and the latest techniques
                            to deliver results that not only enhance aesthetics but also
                            provide long-term protection and value. Whether it’s a touch of
                            elegance for your home or a layer of defence for your structure,
                            we help you achieve perfection—coating by coating.
                        </p>
                    </div>

                    {/* VALUES */}
                    <div className={styles.block}>
                        <h2>
                            <FaShieldAlt /> Our Values
                        </h2>
                        <p>
                            Our guiding principles are trust, transparency, and top-tier
                            craftsmanship. Every project we undertake is backed by our
                            passion for excellence and attention to detail, ensuring complete
                            peace of mind for every client.
                        </p>
                    </div>

                    {/* CTA */}
            
                    <div className={styles.cta}>
                        <FaMapMarkedAlt className={styles.ctaIcon} />
                        <h3>Get in Touch</h3>
                        <p>
                            Choose Navyya Nirman Company—where colour meets care, and
                            protection meets perfection.
                        </p>

                        <Link href="/contact" className={styles.ctaLink}>
                            Contact Us →
                        </Link>

                        <p style={{ marginTop: "20px" }}>
                            <strong>Navyya Nirman Company</strong><br />
                            236, New Arya Nagar, Opp. Bajaj Agency,<br />
                            Ghaziabad, U.P. – 201002<br />
                            <br />
                            <strong>Mobile:</strong> 9810166841<br />
                            <strong>Email:</strong> gauravjain@navyya.co.in
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}