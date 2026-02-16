"use client";

import { IoLogoWhatsapp } from "react-icons/io5"; // Using react-icons
import styles from "@/app/css/WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  const phoneNumber = "918527555909"; 
  const message = encodeURIComponent("Hello Navyya Nirman, I would like to inquire about your services.");

  return (
    <div className={styles.container}>
      {/* Refined Tooltip */}
      <span className={styles.tooltip}>Inquire Now</span>

      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.float}
        aria-label="Contact Navyya Nirman"
      >
        <IoLogoWhatsapp size={32} />
      </a>
    </div>
  );
}