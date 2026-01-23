"use client";
import styles from "@/app/css/SocialLinks.module.css";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const socials = [
  { name: "Instagram", icon: FiInstagram, href: "#" },
  { name: "Facebook", icon: FiFacebook, href: "#" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/XXXXXXXXXX" },
];

export default function SocialLinks({ variant = "footer" }) {
  return (
    <ul className={`${styles.wrapper} ${styles[variant]}`}>
      {socials.map(({ name, icon: Icon, href }) => (
        <li key={name}>
          <a
            href={href}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}