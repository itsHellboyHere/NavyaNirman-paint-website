"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/css/Navbar.module.css";

export default function Navbar() {
    const pathname = usePathname();

    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const isContact = pathname === "/contact";
    const isProducts =
        pathname === "/products" ||
        pathname === "/products/interior" ||
        pathname === "/products/exterior";

    /* SCROLL STATE */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);

        if (pathname === "/") {
            window.addEventListener("scroll", onScroll);
        } else {
            setScrolled(true);
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [pathname]);

    /* CLOSE MENUS ON ROUTE CHANGE */
    useEffect(() => {
        setOpen(false);
        setProductsOpen(false);
    }, [pathname]);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navInner}>
                {/* LOGO */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoWrapper}>
                        <img
                            src="/brand/logo-icon.png"
                            alt="Navvya Nirman Company"
                            className={styles.logoIcon}
                        />

                        <span className={styles.logoTextWrap}>
                            <span className={styles.logoText}>
                                Navyya<span className={styles.logoSpan}>Nirman</span>
                            </span>

                            {/* DRIP */}
                            <div className={styles.dripContainer}>
                                <svg className={styles.drip} viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path
                                        d="M10,0 Q15,10 20,0 T30,0 T40,0 T50,0 T60,0 T70,0 T80,0 T90,0"
                                        fill="currentColor"
                                    />
                                    <circle className={styles.drop1} cx="15" cy="12" r="2" />
                                    <circle className={styles.drop2} cx="45" cy="15" r="2.5" />
                                    <circle className={styles.drop3} cx="75" cy="10" r="1.5" />
                                </svg>
                            </div>
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <ul className={styles.links}>
                    <li>
                        <Link
                            href="/"
                            className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
                        >
                            Home
                        </Link>
                    </li>

                    {/* PRODUCTS */}
                    <li
                        className={styles.productsWrapper}
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                    >
                        <span
                            className={`${styles.link} ${isProducts ? styles.active : ""}`}
                        >
                            Products
                        </span>

                        {productsOpen && (
                            <div className={styles.megaMenu}>
                                <div className={styles.megaCol}>
                                    <h4>Paints</h4>
                                    <Link href="/products/interior">Interior Paints</Link>
                                    <Link href="/products/exterior">Exterior Paints</Link>
                                </div>

                                <div className={styles.megaCol}>
                                    <h4>Protection</h4>
                                    <Link href="/products/waterproofing">
                                        Waterproofing Systems
                                    </Link>
                                </div>
                            </div>
                        )}
                    </li>

                    <li>
                        <Link
                            href="/products/waterproofing"
                            className={`${styles.link} ${pathname.startsWith("/products/waterproofing")
                                ? styles.active
                                : ""
                                }`}
                        >
                            Waterproofing
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/about"
                            className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}
                        >
                            About
                        </Link>
                    </li>

                    <Link
                        href="/contact"
                        className={`${styles.cta} ${isContact ? styles.ctaActive : ""}`}
                    >
                        {isContact ? "You're here" : "Get Consultation"}
                    </Link>
                </ul>

                {/* MOBILE TOGGLE */}
                <button
                    className={styles.menuBtn}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className={styles.mobileMenu}>
                    <Link
                        href="/"
                        className={`${styles.mobileLink} ${pathname === "/" ? styles.mobileActive : ""
                            }`}
                    >
                        Home
                    </Link>

                    <button
                        className={`${styles.mobileProducts} ${isProducts ? styles.mobileActive : ""
                            }`}
                        onClick={() => setProductsOpen(!productsOpen)}
                    >
                        Products
                    </button>

                    {productsOpen && (
                        <div className={styles.mobileSub}>
                            <Link href="/products/interior">Interior Paints</Link>
                            <Link href="/products/exterior">Exterior Paints</Link>
                            <Link href="/products/waterproofing">Waterproofing</Link>
                        </div>
                    )}

                    <Link
                        href="/products/waterproofing"
                        className={`${styles.mobileLink} ${pathname.startsWith("/products/waterproofing")
                            ? styles.mobileActive
                            : ""
                            }`}
                    >
                        Waterproofing
                    </Link>

                    <Link
                        href="/about"
                        className={`${styles.mobileLink} ${pathname === "/about" ? styles.mobileActive : ""
                            }`}
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className={`${styles.cta} ${isContact ? styles.ctaActive : ""}`}
                    >
                        {isContact ? "You're here" : "Get Consultation"}
                    </Link>
                </div>
            )}
        </nav>
    );
}