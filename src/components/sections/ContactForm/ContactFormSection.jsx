import React, { useState } from 'react';
import { useForm } from '@hooks/useForm';
import styles from './ContactFormSection.module.css';
import Button from '@components/common/Button/Button';

const ContactFormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (values) => {
    const errors = {};
    if (!values.name.trim()) errors.name = 'Name is required';
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!values.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  }, validateForm);

  const onSubmit = async (formValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formValues);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.successMessage}>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
            <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>Have questions? We're here to help. Reach out to us for any inquiries about our services.</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactDetail}>
                <h3>Call Us</h3>
                <p>010 350 5306</p>
              </div>
              <div className={styles.contactDetail}>
                <h3>Email Us</h3>
                <p>admin@orangeotelecoms.co.za</p>
              </div>
              <div className={styles.contactDetail}>
                <h3>Business Hours</h3>
                <p>Mon-Fri: 8AM-6PM<br />Sat: 9AM-1PM</p>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={errors.name ? styles.error : ''}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={errors.email ? styles.error : ''}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                />
              </div>
              
              <div className={styles.formGroup}>
                <select
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Sales">Sales</option>
                  <option value="Billing">Billing</option>
                  <option value="Complaint">Complaint</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className={errors.message ? styles.error : ''}
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                size="large"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;