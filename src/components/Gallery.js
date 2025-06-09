"use client";

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import styles from './gallery.module.css';

// Define gallery images with local paths
const galleryImages = [
  {
    src: '/images/1.jpg',
    alt: 'Wedding ceremony setup',
    category: 'Weddings',
  },
  {
    src: '/images/2.jpg',
    alt: 'Dining hall setup',
    category: 'Dining',
  },
  {
    src: '/images/3.jpg',
    alt: 'Venue exterior',
    category: 'Venue',
  },
  {
    src: '/images/4.jpeg',
    alt: 'Wedding celebration',
    category: 'Weddings',
  },
  {
    src: '/images/3.jpg',
    alt: 'Fine dining setup',
    category: 'Dining',
  },
  {
    src: '/images/stage.jpeg',
    alt: 'Wedding hall decoration',
    category: 'Weddings',
  },
  {
    src: '/images/2.jpg',
    alt: 'Parking area',
    category: 'Facilities',
  },
  {
    src: '/images/1.jpg',
    alt: 'Garden area',
    category: 'Venue',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.galleryContainer}>
        <span className={styles.galleryLabel}>Our Gallery</span>
        <h2 className={styles.sectionHeading}>Capture the Beauty</h2>
        <div className={styles.goldLine}></div>
        <p className={styles.sectionSubheading}>
          Take a visual tour of our elegant spaces and previous celebrations
        </p>

        {/* Filters */}
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`${styles.filterButton} ${
                activeFilter === category ? styles.active : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={styles.imageCard}
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.galleryImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className={styles.imageOverlay}>
                <span className={styles.categoryLabel}>{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={28} />
            </button>
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                style={{ objectFit: 'contain' }}
                className={styles.lightboxImage}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}