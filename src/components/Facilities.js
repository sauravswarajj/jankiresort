import { Car, Utensils, Home, Users, Shield } from 'lucide-react';
import Image from 'next/image';
import styles from './facilities.module.css';

const facilitiesData = [
  {
    icon: <Utensils className={styles.facilityIcon} />,
    title: 'Spacious Dining',
    imageSrc: '/images/3.jpg',
    imageAlt: 'Dining Hall',
    description: 'Our grand dining hall can accommodate up to 500 guests comfortably. The elegantly designed space features high ceilings, sophisticated décor, and flexible seating arrangements to suit your needs.',
    features: [
      'Multiple dining areas',
      'Separate buffet spaces',
      'Fine dining options',
      'Customizable setup'
    ],
    delay: '0.2s'
  },
  {
    icon: <Car className={styles.facilityIcon} />,
    title: 'Ample Parking',
    imageSrc: '/images/2.jpg',
    imageAlt: 'Parking Area',
    description: 'Never worry about parking again. Our spacious parking area can accommodate over 200 vehicles with dedicated sections for VIP guests, valet parking services, and easy access to the main venue.',
    features: [
      '200+ parking spaces',
      'Valet service',
      'Well-lit parking areas',
      'Security personnel'
    ],
    delay: '0.4s'
  }
];

const amenitiesData = [
  {
    icon: <Home className={styles.amenityIcon} />,
    title: 'Luxury Suites',
    description: 'Exclusive guest rooms for the wedding party and out-of-town guests.',
    delay: '0.6s'
  },
  {
    icon: <Users className={styles.amenityIcon} />,
    title: 'Preparation Rooms',
    description: 'Dedicated spaces for wedding party preparation with all amenities.',
    delay: '0.8s'
  },
  {
    icon: <Shield className={styles.amenityIcon} />,
    title: '24/7 Security',
    description: 'Professional security staff and monitoring throughout the venue.',
    delay: '0.9s'
  }
];

export default function Facilities() {
  return (
    <section id="facilities" className={styles.facilitiesSection}>
      <div className={styles.facilitiesContainer}>
        <span className={styles.facilitiesLabel}>Premium Facilities</span>
        <h2 className={styles.sectionHeading}>World-Class Amenities</h2>
        <div className={styles.goldLine}></div>
        <p className={styles.sectionSubheading}>
          Our resort offers everything you need for an exceptional event experience
        </p>

        <div className={styles.facilitiesGrid}>
          {facilitiesData.map((facility, index) => (
            <div
              key={index}
              className={styles.facilityCard}
              style={{ animationDelay: facility.delay }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={facility.imageSrc}
                  alt={facility.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.facilityImage}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.titleWrapper}>
                  {facility.icon}
                  <h3 className={styles.facilityTitle}>{facility.title}</h3>
                </div>
                <p className={styles.facilityDescription}>{facility.description}</p>
                <ul className={styles.featuresList}>
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.featureDot}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.amenitiesGrid}>
          {amenitiesData.map((amenity, index) => (
            <div
              key={index}
              className={styles.amenityCard}
              style={{ animationDelay: amenity.delay }}
            >
              <div className={styles.iconWrapper}>{amenity.icon}</div>
              <h4 className={styles.amenityTitle}>{amenity.title}</h4>
              <p className={styles.amenityDescription}>{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}