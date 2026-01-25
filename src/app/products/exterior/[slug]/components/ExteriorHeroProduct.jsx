"use client";
import styles from "@/app/css/products_paints/ExteriorHeroProduct.module.css";

export default function ExteriorHeroProduct({ product }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.text}>
          <span className={styles.badge}>{product.category}</span>

          <h1 className={styles.title}>{product.name}</h1>

          <p className={styles.type}>{product.type}</p>

          <p className={styles.desc}>
            {product.description.split("\n")[0]}
          </p>

          {product.performance && (
            <div className={styles.performance}>
              {product.performance}
            </div>
          )}
          <div className={styles.actions}>
  <a href="#application" className={styles.primaryCta}>
    Request Application Details
  </a>

  <a href="#product-cta" className={styles.secondaryCta}>
    Talk to an Expert
  </a>
</div>
        </div>

        {/* RIGHT */}
        <div className={styles.visual}>
          {product.image && (
            <div className={styles.imageWrap}>
              <img src={product.image} alt={product.name} />
            </div>
          )}

          {product.highlights?.length > 0 && (
            <div className={styles.highlights}>
              {product.highlights.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}