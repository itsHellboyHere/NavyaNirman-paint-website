import Link from "next/link";
import styles from "@/app/css/Footer.module.css";
import SocialLinks from "@/app/components/SocialLinks";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* BRAND */}
        <div className={styles.col}>
          <div className={styles.brandWrap}>
            <img
              src="/brand/logo-icon.png"
              alt="Navvya Nirman Company logo"
              className={styles.brandLogo}
            />
            <h3 className={styles.brand}>
              Navyya<span>Nirman</span>
            </h3>
          </div>
          <p className={styles.desc}>
            High-performance paint and waterproofing systems designed for
            durability, protection, and long-term performance.
          </p>
          <p className={styles.subtle}>
            Serving residential & commercial projects across India.
          </p>
          <SocialLinks variant="footer" />
        </div>

        {/* PRODUCTS */}
        <div className={styles.col}>
          <h4>Products</h4>
          <ul>
            <li><Link href="/products/interior">Interior Paints</Link></li>
            <li><Link href="/products/exterior">Exterior Paints</Link></li>
            <li><Link href="/products/waterproofing">Waterproofing</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className={styles.col}>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            {/* <li><Link href="/applications">Waterproofing</Link></li> */}
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles.col}>
          <h4>Contact</h4>
          <ul className={styles.contact}>
            <li>📞 +91 9XXXXXXXXX</li>
            <li>✉️ info@navvyanirman.com</li>
            <li>📍 Serving across India</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} NavyyaNirman Company. All rights reserved.
      </div>
    </footer>
  );
}