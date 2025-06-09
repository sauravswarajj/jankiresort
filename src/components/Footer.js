"use client"

import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link from next/link
import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
   const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Logo and About */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>Janki Resort</h3>
            <p className={styles.footerDescription}>
              Celebrating Life’s Precious Moments for Over 5 Years — Your Elegant Venue for Weddings & Events.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com/jankiresort" className={styles.socialIcon}>
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/jankiresort" className={styles.socialIcon}>
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com/jankiresort" className={styles.socialIcon}>
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerList}>
              <li>
                <Link href="/" className={styles.footerLink}>Home</Link>
              </li>
              <li>
                <Link href="#about" className={styles.footerLink}>About Us</Link>
              </li>
              <li>
                <Link href="#facilities" className={styles.footerLink}>Facilities</Link>
              </li>
              <li>
                <Link href="#gallery" className={styles.footerLink}>Gallery</Link>
              </li>
              <li>
                <Link href="#contact" className={styles.footerLink}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Our Services</h4>
            <ul className={styles.footerList}>
              <li>
                <Link href="#facilities" className={styles.footerLink}>Wedding Ceremonies</Link>
              </li>
              <li>
                <Link href="#facilities" className={styles.footerLink}>Dining Services</Link>
              </li>
              <li>
                <Link href="#facilities" className={styles.footerLink}>Entertainment</Link>
              </li>
              <li>
                <Link href="#facilities" className={styles.footerLink}>Photography</Link>
              </li>
              <li>
                <Link href="#facilities" className={styles.footerLink}>Technical Support</Link>
              </li>
              <li>
                <Link href="#facilities" className={styles.footerLink}>Event Planning</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Contact Information</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span className={styles.contactText}>jankiresortpatna@gmail.com</span>
              </li>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span className={styles.contactText}>+91 9525805080</span>
              </li>
              <li className={styles.contactText}>
                <p>J29H+5P5, RN Singh Path, Mathiapur,</p>
                <p>Patna, Bihar, India,</p>
                <p>801503</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Janki Resort. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.bottomLink}>Terms of Service</Link>
            <Link href="/sitemap" className={styles.bottomLink}>Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a
        href="#"
        className={`${styles.backToTop} ${isVisible ? styles.show : styles.hide}`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.backToTopIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
}