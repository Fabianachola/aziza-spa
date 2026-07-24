<!-- src/components/common/AppFooter.vue -->
<template>
  <footer class="app-footer">
    <!-- Map Section (Full Width) -->
    <div class="footer-map-section">
      <div class="map-header">
        <h3 class="map-title">Visit Our Location</h3>
        <p class="map-subtitle">Find us in the heart of Westlands</p>
      </div>
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255.282!2d36.817223!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x9c8a3a4b5c6d7e8f!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000" 
          class="map-iframe" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <a href="https://maps.google.com/?q=Westlands+Metropolitan+Estate+Chiromo+Nairobi" target="_blank" class="map-button">
          Get Directions
        </a>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Section -->
          <div class="footer-brand">
            <div class="footer-logo">
              <img 
                src="/images/logos/aziza-spa-logo-light.png" 
                alt="Azizi Spa"
                class="footer-logo-image"
              />
              <span class="footer-logo-text">AZIZI SPA</span>
            </div>
            <p class="footer-tagline">Relax • Recharge • Renew</p>
            <p class="footer-description">
              Experience the ultimate in luxury wellness at Azizi Spa. 
              Where relaxation meets elegance in the heart of Nairobi.
            </p>
          </div>

          <!-- Visit Us -->
          <div class="footer-section visit-section">
            <h4 class="footer-title">Visit Us</h4>
            <div class="visit-grid">
              <div class="visit-item">
                <div class="visit-icon"></div>
                <div class="visit-content">
                  <span class="visit-label">Address</span>
                  <span class="visit-value">Westlands Metropolitan Estate, Chiromo, Nairobi</span>
                </div>
              </div>
              <div class="visit-item">
                <div class="visit-icon">📞</div>
                <div class="visit-content">
                  <span class="visit-label">Phone</span>
                  <a href="tel:+254796471899" class="visit-value">+254 796 471 899</a>
                </div>
              </div>
              <div class="visit-item">
                <div class="visit-icon"></div>
                <div class="visit-content">
                  <span class="visit-label">WhatsApp</span>
                  <a href="https://wa.me/254796471899" class="visit-value">Chat with us</a>
                </div>
              </div>
              <div class="visit-item">
                <div class="visit-icon">✉️</div>
                <div class="visit-content">
                  <span class="visit-label">Email</span>
                  <a href="mailto:info@azizispa.com" class="visit-value">info@azizispa.com</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Opening Hours -->
          <div class="footer-section">
            <h4 class="footer-title">Opening Hours</h4>
            <ul class="footer-links">
              <li class="footer-link">
                <span class="hours-day">Monday – Sunday</span>
                <span class="hours-time">08:00 AM – 08:00 PM</span>
              </li>
              <li class="footer-link">
                <span class="hours-day">Public Holidays</span>
                <span class="hours-time">09:00 AM – 06:00 PM</span>
              </li>
            </ul>
          </div>

          <!-- Quick Links -->
          <div class="footer-section">
            <h4 class="footer-title">Quick Links</h4>
            <ul class="footer-links">
              <li><router-link to="/" class="footer-link-item">Home</router-link></li>
              <li><router-link to="/experience" class="footer-link-item">Experience</router-link></li>
              <li><router-link to="/services" class="footer-link-item">Services</router-link></li>
              <li><router-link to="/packages" class="footer-link-item">Packages</router-link></li>
              <li><router-link to="/gallery" class="footer-link-item">Gallery</router-link></li>
              <li><router-link to="/about" class="footer-link-item">About</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="footer-divider"></div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <!-- Social Media -->
          <div class="footer-social">
            <h4 class="footer-title">Follow Us</h4>
            <div class="social-links">
              <a href="https://web.facebook.com/profile.php?id=100070092201685" target="_blank" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/azizispa._/?hl=en" target="_blank" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17" cy="7" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@azizispa" target="_blank" class="social-link" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.3-.69.32-1.06.1-1.2.04-2.41.04-3.61.01-3.99.01-7.98.01-11.98z"/>
                </svg>
              </a>
              <a href="https://wa.me/254796471899" target="_blank" class="social-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="footer-newsletter">
            <h4 class="footer-title">Newsletter</h4>
            <p class="newsletter-text">Subscribe to get exclusive offers and wellness tips</p>
            <div class="newsletter-form">
              <input 
                type="email" 
                placeholder="Your Email Address"
                class="newsletter-input"
              />
              <button class="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <!-- Copyright - Centered -->
        <div class="footer-copyright">
          <p>© 2026 Azizi Spa. All rights reserved.</p>
          <p class="footer-legal">Privacy Policy | Terms &amp; Conditions</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.app-footer {
  background: #0a1628;
  color: #FAF8F4;
}

/* Map Section */
.footer-map-section {
  background: #0a1628;
  padding: 3rem 2rem;
  border-bottom: 3px solid #D4AF37;
}

.map-header {
  text-align: center;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.map-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  color: #FAF8F4;
  margin: 0 0 0.5rem 0;
}

.map-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: rgba(250, 248, 244, 0.7);
  margin: 0;
}

.map-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.map-iframe {
  width: 100%;
  height: 350px;
  border: 0;
  display: block;
}

.map-button {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  padding: 0.8rem 2rem;
  background: #25D366;
  color: #ffffff;
  text-decoration: none;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
}

.map-button:hover {
  background: #128C7E;
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(37, 211, 102, 0.4);
}

/* Main Footer Content */
.footer-main {
  background: #0a1628;
  padding: 4rem 0 1rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.8fr 1.8fr 1.2fr 1.2fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo-image {
  height: 40px;
  width: auto;
}

.footer-logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #D4AF37;
}

.footer-tagline {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  color: #D4AF37;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0;
  font-weight: 600;
}

.footer-description {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(250, 248, 244, 0.7);
  margin: 0;
  max-width: 300px;
}

/* Visit Section - Side by Side Grid */
.visit-section {
  gap: 0.5rem;
}

.visit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem 1.5rem;
}

.visit-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.visit-icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 2px;
  opacity: 0.7;
}

.visit-content {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.visit-label {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: #D4AF37;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.visit-value {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  color: rgba(250, 248, 244, 0.8);
  line-height: 1.4;
  word-wrap: break-word;
}

.visit-value a {
  color: rgba(250, 248, 244, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.visit-value a:hover {
  color: #D4AF37;
}

/* Footer Sections */
.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-title {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #D4AF37;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 0.25rem 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-link {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: rgba(250, 248, 244, 0.7);
  line-height: 1.5;
}

.hours-day {
  font-weight: 600;
  color: #FAF8F4;
}

.hours-time {
  color: rgba(250, 248, 244, 0.6);
  font-size: 13px;
}

.footer-link-item {
  color: rgba(250, 248, 244, 0.7);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  transition: color 0.3s ease;
  line-height: 1.8;
}

.footer-link-item:hover {
  color: #D4AF37;
}

/* Divider */
.footer-divider {
  height: 1px;
  background: rgba(212, 175, 55, 0.15);
  margin: 2rem 0;
}

/* Footer Bottom */
.footer-bottom {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 2rem;
  align-items: start;
  margin-bottom: 2rem;
}

/* Social Section */
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-links {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(212, 175, 55, 0.08);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(212, 175, 55, 0.15);
  color: rgba(250, 248, 244, 0.7);
  text-decoration: none;
}

.social-link:hover {
  background: rgba(212, 175, 55, 0.2);
  transform: translateY(-3px);
  border-color: #D4AF37;
  color: #D4AF37;
}

.social-link svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
}

/* Newsletter */
.footer-newsletter {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.newsletter-text {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  color: rgba(250, 248, 244, 0.6);
  margin: 0;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.6rem 1rem;
  background: rgba(250, 248, 244, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 8px;
  color: #FAF8F4;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  transition: all 0.3s ease;
  min-width: 0;
}

.newsletter-input::placeholder {
  color: rgba(250, 248, 244, 0.3);
}

.newsletter-input:focus {
  border-color: #D4AF37;
  outline: none;
  background: rgba(250, 248, 244, 0.08);
}

.newsletter-btn {
  padding: 0.6rem 1.5rem;
  background: #25D366;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.newsletter-btn:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
}

/* Copyright - Centered */
.footer-copyright {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}

.footer-copyright p {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: rgba(250, 248, 244, 0.4);
  margin: 0;
  letter-spacing: 0.02em;
}

.footer-legal {
  font-size: 11px !important;
  margin-top: 0.2rem !important;
}

/* ============================================
   RESPONSIVE IMPROVEMENTS - MOBILE & LARGE DEVICES
   ============================================ */

/* LARGE DEVICES (1200px - 1400px) */
@media (min-width: 1200px) and (max-width: 1400px) {
  .container {
    padding: 0 3rem;
  }
  
  .footer-grid {
    gap: 2.5rem;
  }
  
  .footer-description {
    max-width: 250px;
  }
}

/* EXTRA LARGE DEVICES (1400px+) */
@media (min-width: 1400px) {
  .container {
    padding: 0 4rem;
  }
  
  .footer-grid {
    gap: 4rem;
  }
  
  .footer-description {
    max-width: 350px;
    font-size: 15px;
  }
  
  .footer-logo-image {
    height: 48px;
  }
  
  .footer-logo-text {
    font-size: 1.8rem;
  }
  
  .map-title {
    font-size: 42px;
  }
  
  .map-iframe {
    height: 420px;
  }
  
  .visit-grid {
    gap: 1rem 2rem;
  }
}

/* ULTRA LARGE DEVICES (1920px+) */
@media (min-width: 1920px) {
  .container {
    padding: 0 6rem;
    max-width: 1600px;
  }
  
  .footer-grid {
    gap: 5rem;
  }
  
  .map-iframe {
    height: 480px;
  }
  
  .map-title {
    font-size: 48px;
  }
}

/* TABLET (768px - 1024px) */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-bottom {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .map-iframe {
    height: 280px;
  }
  
  .map-title {
    font-size: 30px;
  }
  
  .footer-description {
    max-width: 100%;
  }
  
  .visit-grid {
    gap: 0.6rem 1.2rem;
  }
}

/* MOBILE LARGE (481px - 768px) */
@media (max-width: 768px) {
  .footer-map-section {
    padding: 2rem 1rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .map-title {
    font-size: 24px;
  }
  
  .map-subtitle {
    font-size: 14px;
  }
  
  .map-iframe {
    height: 220px;
  }
  
  .map-button {
    bottom: 1rem;
    right: 1rem;
    padding: 0.6rem 1.5rem;
    font-size: 12px;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-main {
    padding: 3rem 0 1rem 0;
  }
  
  .visit-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }
  
  .footer-bottom {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-social .social-links {
    justify-content: center;
  }
  
  .footer-social {
    align-items: center;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-btn {
    width: 100%;
  }
  
  .footer-description {
    max-width: 100%;
  }
  
  .footer-logo-image {
    height: 34px;
  }
  
  .footer-logo-text {
    font-size: 1.3rem;
  }
}

/* MOBILE SMALL (480px and below) */
@media (max-width: 480px) {
  .footer-map-section {
    padding: 1.5rem 0.75rem;
  }
  
  .container {
    padding: 0 0.75rem;
  }
  
  .map-title {
    font-size: 20px;
  }
  
  .map-subtitle {
    font-size: 13px;
  }
  
  .map-iframe {
    height: 180px;
    border-radius: 12px;
  }
  
  .map-button {
    bottom: 0.8rem;
    right: 0.8rem;
    padding: 0.5rem 1.2rem;
    font-size: 11px;
  }
  
  .footer-grid {
    gap: 1.5rem;
  }
  
  .footer-main {
    padding: 2rem 0 1rem 0;
  }
  
  .visit-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .visit-item {
    gap: 0.5rem;
  }
  
  .visit-icon {
    font-size: 16px;
  }
  
  .visit-value {
    font-size: 12px;
  }
  
  .footer-link-item {
    font-size: 13px;
  }
  
  .footer-title {
    font-size: 12px;
  }
  
  .footer-logo-image {
    height: 30px;
  }
  
  .footer-logo-text {
    font-size: 1.1rem;
  }
  
  .footer-tagline {
    font-size: 11px;
  }
  
  .footer-description {
    font-size: 13px;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
  }
  
  .social-link svg {
    width: 18px;
    height: 18px;
  }
  
  .newsletter-input {
    font-size: 13px;
    padding: 0.5rem 0.8rem;
  }
  
  .newsletter-btn {
    font-size: 13px;
    padding: 0.5rem 1rem;
  }
  
  .footer-copyright p {
    font-size: 10px;
  }
  
  .footer-legal {
    font-size: 10px !important;
  }
  
  .footer-divider {
    margin: 1.5rem 0;
  }
}
</style>