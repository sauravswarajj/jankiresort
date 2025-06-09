import { Award, Heart, Users } from 'lucide-react';
import styles from './about.module.css';
import Image from 'next/image'; // Import the Image component

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <span className={styles.aboutLabel}>About Us</span>
        <h2 className={styles.sectionHeading}>Welcome to Janki Resort</h2>
        <div className={styles.goldLine}></div>
        <p className={styles.sectionSubheading}>
          A premier destination for weddings and events, nestled in a serene environment
        </p>

        <div className={styles.aboutGrid}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/stage.jpeg"
                alt="Janki Resort Wedding Hall"
                fill // Use fill to make the image responsive within a container
                style={{ objectFit: 'cover' }} // Ensure the image covers the container
                className={styles.image}
                sizes="(max-width: 767px) 100vw, 50vw" // Optimize for mobile and desktop
              />
            </div>
            <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Established 1995</span>
              <h3 className={styles.imageTitle}>Creating Beautiful Memories</h3>
            </div>
          </div>

          <div className={styles.textContent}>
            <h3 className={styles.textHeading}>A Tradition of Excellence</h3>
            <p className={styles.textParagraph}>
              For over 25 years, Janki Resort has been the premier destination for elegant weddings and memorable events. Our spacious marriage hall, exquisite dining areas, and ample parking provide the perfect setting for your special day.
            </p>
            <p className={styles.textParagraph}>
              We take pride in our attention to detail, personalized service, and commitment to making your event truly exceptional. Our experienced team works closely with you to ensure every aspect of your celebration exceeds expectations.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <Heart className={styles.icon} />
                </div>
                <h4 className={styles.statTitle}>200+ Weddings</h4>
                <p className={styles.statSubtitle}>Annually</p>
              </div>

              <div className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <Users className={styles.icon} />
                </div>
                <h4 className={styles.statTitle}>500+ Capacity</h4>
                <p className={styles.statSubtitle}>Spacious Halls</p>
              </div>

              <div className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <Award className={styles.icon} />
                </div>
                <h4 className={styles.statTitle}>Excellence</h4>
                <p className={styles.statSubtitle}>Award Winning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}