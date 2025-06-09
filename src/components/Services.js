import { Gift, Music, Utensils, Camera, Cpu, Clock } from 'lucide-react';
import styles from './services.module.css';

const services = [
  {
    icon: <Gift className={styles.serviceIcon} />,
    title: 'Wedding Ceremonies',
    description: 'Elegant settings for ceremonies of all traditions and sizes, with customizable decoration options.'
  },
  {
    icon: <Utensils className={styles.serviceIcon} />,
    title: 'Dining Services',
    description: 'Exquisite catering options with customizable menus featuring local and international cuisine.'
  },
  {
    icon: <Music className={styles.serviceIcon} />,
    title: 'Entertainment',
    description: 'State-of-the-art sound systems and space for live bands, DJs, and traditional performances.'
  },
  {
    icon: <Camera className={styles.serviceIcon} />,
    title: 'Photography',
    description: 'Beautiful settings for photography with professional lighting and picturesque backgrounds.'
  },
  {
    icon: <Cpu className={styles.serviceIcon} />,
    title: 'Technical Support',
    description: 'Modern audiovisual equipment with technical staff to ensure flawless presentations and events.'
  },
  {
    icon: <Clock className={styles.serviceIcon} />,
    title: 'Event Planning',
    description: 'Comprehensive event planning services to handle all details from start to finish.'
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <span className={styles.servicesLabel}>Our Offerings</span>
        <h2 className={styles.sectionHeading}>Exceptional Services</h2>
        <div className={styles.goldLine}></div>
        <p className={styles.sectionSubheading}>
          We provide a comprehensive range of services to make your special day perfect
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}