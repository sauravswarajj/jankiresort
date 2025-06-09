"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Import Link from next/link
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Janki Resort</span>
          </Link>
          <div className={styles.desktopMenu}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="#about" className={styles.navLink}>
              About
            </Link>
            <Link href="#services" className={styles.navLink}>
              Services
            </Link>
            <Link href="#facilities" className={styles.navLink}>
              Facilities
            </Link>
            <Link href="#gallery" className={styles.navLink}>
              Gallery
            </Link>
            <Link href="#contact" className={styles.navLink}>
              Contact
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileButton}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
          <div className={styles.mobileMenuContent}>
            <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/facilities" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Facilities
            </Link>
            <Link href="/gallery" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="/contact" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}