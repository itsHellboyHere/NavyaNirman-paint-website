"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { sendLead } from "@/app/actions/sendLead";
import styles from "@/app/css/ProductCTA.module.css";

export default function ProductCTA({ product }) {
  const [status, setStatus] = useState("idle");
  const pathname = usePathname();
  const isWaterproofing = pathname.includes("/waterproofing");
  const isExterior = pathname.includes("/exterior");
  const isInterior = pathname.includes("/interior");

  const titleText = "Need expert guidance?";

  const descriptionText = isWaterproofing
    ? "Our waterproofing specialists will help you choose the right solution for your application."
    : isExterior
      ? "Our coating experts will help you select the right exterior paint system for long-term protection."
      : "Our paint experts will help you choose the perfect finish for your interior spaces.";

  const whatsappMessage = encodeURIComponent(
    isWaterproofing
      ? `Hi, I'm interested in ${product.name}. Please guide me with the right waterproofing solution.`
      : isExterior
        ? `Hi, I'm interested in ${product.name}. Please guide me with the right exterior paint system.`
        : `Hi, I'm interested in ${product.name}. Please guide me with the right interior paint solution.`
  );

  async function handleSubmit(formData) {
    try {
      setStatus("loading");
      await sendLead(formData);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="product-cta">
      <div className={styles.container}>
        <div className={styles.card}>

          {/* TEXT */}
          <div className={styles.text}>
            <h2>{titleText}</h2>
            <p>{descriptionText}</p>
          </div>

          {/* FORM / SUCCESS */}
          {status === "success" ? (
            <div className={styles.success}>
              <h3>Thank you!</h3>
              <p>Our team will contact you shortly.</p>
            </div>
          ) : (
            <form action={handleSubmit} className={styles.form}>
              <input name="name" placeholder="Your name" required />
              <input name="phone" placeholder="Phone number" required />
              <textarea
                name="message"
                placeholder="Your requirement (optional)"
                rows={3}
              />

              {/* Honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              {/* Context */}
              <input type="hidden" name="product" value={product.name} />
              <input type="hidden" name="category" value={product.category} />
              <input type="hidden" name="page" value={pathname} />

              <button disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Get Consultation →"}
              </button>

              <div className={styles.divider}>or</div>

              <a
                href={`https://wa.me/9810166841?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsapp}
              >
                <span className={styles.whatsappIcon}>💬</span>
                WhatsApp Us
              </a>

              {status === "error" && (
                <p className={styles.error}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}

        </div>
      </div>
    </section>
  );
}