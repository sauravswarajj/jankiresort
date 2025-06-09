"use client"; // Add this to allow useState

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null); // Add state for error handling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            eventDate: "",
            eventType: "",
            message: "",
          });
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      setError("There was an error sending your message. Please try again later.");
      console.error("Error:", err);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <span className={styles.contactLabel}>Get In Touch</span>
        <h2 className={styles.sectionHeading}>Contact Us</h2>
        <div className={styles.goldLine}></div>
        <p className={styles.sectionSubheading}>
          Reach out to us to book your event or to inquire about our services
        </p>

        <div className={styles.contactGrid}>
          {/* Contact Information */}
          <div className={styles.infoWrapper}>
            <h3 className={styles.infoHeading}>Visit Our Location</h3>

            {/* Google Maps Embed - Placeholder for Janki Resort */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=J29H+5P5, RN Singh Path, Mathiapur, Patna, Bihar 801503&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Janki Resort Location"
              ></iframe>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <MapPin className={styles.icon} />
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Our Address</h4>
                  <p className={styles.detailText}>
                    J29H+5P5, RN Singh Path, Mathiapur, <br />
                    Patna, Bihar, India, 801503
                  </p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <Phone className={styles.icon} />
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Phone Number</h4>
                  <p className={styles.detailText}>+91 9525805080</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <Mail className={styles.icon} />
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Email Address</h4>
                  <p className={styles.detailText}>
                    jankiresortpatna@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formWrapper}>
            <h3 className={styles.formHeading}>Send Us a Message</h3>

            {isSubmitted ? (
              <div className={styles.successMessage}>
                <CheckCircle className={styles.successIcon} />
                <h4 className={styles.successTitle}>
                  Message Sent Successfully!
                </h4>
                <p className={styles.successText}>
                  Thank you for contacting us. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {error && (
                  <div className={styles.errorMessage}>
                    <p>{error}</p>
                  </div>
                )}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="eventDate" className={styles.label}>
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="eventType" className={styles.label}>
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Reception">Reception</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={styles.textarea}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                  <Send className={styles.sendIcon} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}