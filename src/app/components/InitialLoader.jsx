"use client";

import { useEffect, useState } from "react";
import styles from "@/app/css/InitialLoader.module.css";

export default function InitialLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem("site-loaded");

    if (visited) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      sessionStorage.setItem("site-loaded", "true");
      document.body.style.overflow = "";
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <img src="/brand/logo-full.png" alt="Navvya Nirman" />
    </div>
  );
}