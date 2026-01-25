import Link from "next/link";
import styles from "@/app/css/NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>

        {/* Visual */}
        <div className={styles.paint}>
          <div className={styles.drop} />
        </div>

        {/* Text */}
        <h1>Page not found</h1>
        <p>
          The surface you’re looking for doesn’t exist or has been repainted.
        </p>

      
        <Link href="/" className={styles.btn}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}