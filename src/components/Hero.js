import styles from './hero.module.css';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link'; // Import Link from next/link

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/3.jpg"
        alt="Janki Resort Hero"
        fill // Use fill to make the image responsive within the section
        style={{ objectFit: 'cover' }} // Ensure the image covers the section
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay}></div> {/* Add overlay for the gradient */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to <span className={styles.highlight}>Janki Resort</span></h1>
        <p className={styles.heroSubtitle}>Celebrate Weddings, Birthdays & Events in Grand Style.</p>
        <Link href="#contact" className={styles.cta}>
          Book Now
        </Link>
      </div>
    </section>
  );
}