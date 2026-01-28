"use client";

import { use, useState } from "react";
import styles from "@/app/css/Contact.module.css";
import SocialLinks from "./SocialLinks";
import { sendLead } from "../actions/sendLead";



export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  async function handleSubmit(formData) {
    try {
      setError("");
      setStatus("loading");
      await sendLead(formData);
      setStatus("success");
    } catch (err) {
      // console.error(err);
      setError(err?.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* INTRO */}
        <header className={styles.header}>
          <h1>
            Let’s talk about the <span>right system</span>
          </h1>
          <p>
            Get expert guidance for selecting paint or waterproofing systems
            based on surface condition, exposure, and service life expectations.
          </p>
        </header>

        <div className={styles.grid}>

          {/* LEFT: CONTACT INFO */}
          <div className={styles.info}>
            <div className={styles.card}>
              <h3>Contact Us</h3>

              <p>
                📞 <a href="tel:+919810166841">+91 9810166841</a>
              </p>

              <p>
                ✉️{" "}
                <a href="mailto:gauravjain@navyya.co.in">
                  gauravjain@navyya.co.in
                </a>
              </p>

              <p>
                📍 236, New Arya Nagar, Opp. Bajaj Agency,<br/>
                Ghaziabad, U.P. –  201002
              </p>

              <p>
                Serving residential, commercial, and industrial projects across India
              </p>

              <div className={styles.socials}>
                <SocialLinks variant="contact" />
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className={styles.formWrap}>
            {status === "success" ? (
              <div className={styles.success}>
                <h3>Thank you</h3>
                <p>Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form action={handleSubmit} className={styles.form}>
                <input name="name" placeholder="Your name" required />
                <input name="phone" placeholder="Phone number" required />
                <textarea
                  name="message"
                  placeholder="Tell us about your requirement"
                  rows={4}
                />

                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className={styles.honeypot}
                />

                <input type="hidden" name="product" value="General Enquiry" />

                <button disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Request Consultation"}
                </button>

                {status === "error" && error && (
                  <p className={styles.error}>
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}