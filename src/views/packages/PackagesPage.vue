<template>
  <div class="packages-page">
    <!-- Hero Section -->
    <section class="packages-hero">
      <div class="hero-image">
        <img 
          src="/images/packages/packages-hero.jpg" 
          alt="Curated Spa Experiences"
          loading="lazy"
        />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">Best <span class="highlight">Spa Experiences</span></h1>
          <p class="hero-subtitle">Thoughtfully designed journeys for your ultimate relaxation</p>
        </div>
      </div>
    </section>

    <!-- Package One: Essential Escape -->
    <section class="package-section">
      <div class="container">
        <div class="package-card">
          <div class="package-image">
            <img 
              src="/images/packages/essential-escape.jpg" 
              alt="Essential Escape Package"
              loading="lazy"
            />
            <div class="package-badge">Most Popular</div>
          </div>
          <div class="package-content">
            <h2 class="package-title">Essential Escape</h2>
            <p class="package-description">
              A complete wellness journey designed to relax, rejuvenate, and restore your mind and body.
            </p>
            <div class="package-features">
              <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 12H4M12 4v16"/>
                </svg>
                <span class="feature-text">Massage Therapy</span>
              </div>
              <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
                <span class="feature-text">Steam Experience</span>
              </div>
              <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span class="feature-text">Body Scrub</span>
              </div>
              <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <span class="feature-text">Herbal Tea</span>
              </div>
            </div>
            <div class="package-footer">
              <span class="package-price">Ksh 6,000</span>
              <router-link to="/book-appointment" class="btn-primary">Reserve Experience</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Two: Royal Moroccan Bath -->
    <section class="package-section alternate">
      <div class="container">
        <div class="package-card reverse">
          <div class="package-image">
            <img 
              src="/images/packages/royal-moroccan.jpg" 
              alt="Royal Moroccan Bath"
              loading="lazy"
            />
            <div class="package-badge signature">Signature</div>
          </div>
          <div class="package-content">
            <h2 class="package-title">Royal Moroccan Bath</h2>
            <p class="package-description">
              A traditional Moroccan bathing ritual combining deep cleansing, exfoliation, and luxury relaxation.
            </p>
            <div class="package-features">
              <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <span class="feature-text">Moroccan Bath</span>
              </div>
              <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <span class="feature-text">Black Soap Scrub</span>
              </div>
              <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <span class="feature-text">Rhassoul Clay Mask</span>
              </div>
              <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <span class="feature-text">Herbal Tea</span>
              </div>
            </div>
            <div class="package-footer">
              <span class="package-price">Ksh 10,000</span>
              <router-link to="/book-appointment" class="btn-primary">Reserve Experience</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Luxury Comparison -->
    <section class="comparison-section">
      <div class="container">
        <h2 class="section-title">Choose Your Perfect Experience</h2>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h3>Essential Escape</h3>
            <ul>
              <li>✓ Massage Therapy</li>
              <li>✓ Steam Experience</li>
              <li>✓ Body Scrub</li>
              <li>✓ Herbal Tea</li>
            </ul>
            <span class="comparison-price">Ksh 6,000</span>
            <router-link to="/book-appointment" class="btn-small">Book Now</router-link>
          </div>
          <div class="comparison-card featured">
            <div class="featured-badge">Most Popular</div>
            <h3>Royal Moroccan Bath</h3>
            <ul>
              <li>✓ Moroccan Bath</li>
              <li>✓ Black Soap Scrub</li>
              <li>✓ Rhassoul Clay Mask</li>
              <li>✓ Herbal Tea</li>
            </ul>
            <span class="comparison-price">Ksh 10,000</span>
            <router-link to="/book-appointment" class="btn-small">Book Now</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Book CTA -->
    <section class="book-cta">
      <div class="container">
        <div class="cta-wrapper">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Book your luxury spa package today and experience the ultimate in relaxation</p>
          <div class="cta-buttons">
            <router-link to="/book-appointment" class="btn-primary">Reserve Your Package</router-link>
            <a href="https://wa.me/254796471899" target="_blank" class="btn-whatsapp">WhatsApp to Book</a>
            <a href="tel:+254796471899" class="btn-call">Call</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PackagesPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.packages-page {
  background: #fafafa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.packages-hero {
  position: relative;
  height: clamp(300px, 60vh, 600px);
  min-height: 250px;
  max-height: 600px;
  overflow: hidden;
}

.hero-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.8) 0%, rgba(10, 22, 40, 0.3) 100%);
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fafafa;
  z-index: 2;
  width: 100%;
  padding: 0 2rem;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.hero-title .highlight {
  color: #C9A96E;
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 300;
  margin-top: 1rem;
  opacity: 0.9;
}

/* Package Sections */
.package-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.package-section.alternate {
  background: #f5f5f5;
}

.package-card {
  display: flex;
  gap: 3rem;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(10, 22, 40, 0.06);
  transition: all 0.4s ease;
}

.package-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(10, 22, 40, 0.1);
}

.package-card.reverse {
  flex-direction: row-reverse;
}

.package-image {
  flex: 1;
  position: relative;
  min-height: 300px;
  overflow: hidden;
  background: #f0f0f0;
}

.package-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.package-card:hover .package-image img {
  transform: scale(1.03);
}

.package-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: #C9A96E;
  color: #0F172A;
  padding: 0.3rem 1.2rem;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.65rem, 1vw, 0.7rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.package-badge.signature {
  background: #0F172A;
  color: #C9A96E;
  border: 1px solid rgba(201, 169, 110, 0.3);
}

.package-content {
  flex: 1;
  padding: clamp(2rem, 3vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.package-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 3.5vw, 2.4rem);
  font-weight: 700;
  color: #0a1628;
  margin: 0 0 1rem 0;
}

.package-description {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1rem);
  font-weight: 300;
  color: #0a1628;
  line-height: 1.8;
  margin: 0 0 2rem 0;
  opacity: 0.8;
}

.package-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  font-weight: 400;
  color: #0a1628;
  opacity: 0.8;
}

.feature-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  stroke: #C9A96E;
}

.package-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.package-price {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2rem);
  font-weight: 700;
  color: #C9A96E;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.7rem, 1vw, 0.8rem) clamp(1.5rem, 2.5vw, 2.5rem);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.875rem);
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background: #C9A96E;
  color: #0F172A;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(201, 169, 110, 0.3);
  min-height: 48px;
  min-width: 44px;
  cursor: pointer;
  justify-content: center;
}

.btn-primary:hover {
  background: #B8925A;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201, 169, 110, 0.4);
}

.btn-primary:active {
  transform: scale(0.96);
}

/* Comparison Section */
.comparison-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #0F172A;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 700;
  color: #FAF8F4;
  text-align: center;
  margin: 0 0 clamp(2rem, 3vw, 3rem) 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.comparison-card {
  background: rgba(250, 248, 244, 0.05);
  padding: clamp(1.5rem, 2.5vw, 2.5rem);
  border-radius: 16px;
  border: 1px solid rgba(250, 248, 244, 0.08);
  text-align: center;
  transition: all 0.3s ease;
}

.comparison-card:hover {
  transform: translateY(-4px);
  border-color: #C9A96E;
}

.comparison-card.featured {
  border-color: #C9A96E;
  position: relative;
  overflow: hidden;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #C9A96E;
  color: #0F172A;
  padding: 0.2rem 1rem;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.6rem, 0.8vw, 0.65rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.comparison-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  font-weight: 600;
  color: #FAF8F4;
  margin: 0 0 1rem 0;
}

.comparison-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.comparison-card ul li {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  font-weight: 300;
  color: rgba(250, 248, 244, 0.7);
  padding: 0.3rem 0;
}

.comparison-price {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 2.5vw, 2.2rem);
  font-weight: 700;
  color: #C9A96E;
  margin-bottom: 1rem;
}

.btn-small {
  display: inline-block;
  padding: clamp(0.5rem, 0.8vw, 0.6rem) clamp(1.5rem, 2vw, 2rem);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.85rem);
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  background: #C9A96E;
  color: #0F172A;
  transition: all 0.3s ease;
  min-height: 44px;
  min-width: 44px;
  cursor: pointer;
}

.btn-small:hover {
  background: #B8925A;
  transform: translateY(-2px);
}

.btn-small:active {
  transform: scale(0.96);
}

/* Book CTA */
.book-cta {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.cta-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: clamp(2rem, 4vw, 4rem);
  background: #0F172A;
  border-radius: 24px;
  border: 1px solid rgba(201, 169, 110, 0.15);
  box-shadow: 0 20px 60px rgba(10, 22, 40, 0.15);
}

.cta-wrapper h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: #FAF8F4;
  margin: 0 0 1rem 0;
}

.cta-wrapper p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 300;
  color: rgba(250, 248, 244, 0.7);
  margin: 0 0 2rem 0;
  line-height: 1.8;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.7rem, 1vw, 0.8rem) clamp(1.5rem, 2.5vw, 2.5rem);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.875rem);
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background: #25D366;
  color: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
  min-height: 48px;
  min-width: 44px;
  cursor: pointer;
  justify-content: center;
}

.btn-whatsapp:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
}

.btn-whatsapp:active {
  transform: scale(0.96);
}

.btn-call {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.7rem, 1vw, 0.8rem) clamp(1.5rem, 2.5vw, 2.5rem);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.875rem);
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background: transparent;
  color: #FAF8F4;
  border: 1px solid rgba(250, 248, 244, 0.15);
  transition: all 0.3s ease;
  min-height: 48px;
  min-width: 44px;
  cursor: pointer;
  justify-content: center;
}

.btn-call:hover {
  background: rgba(250, 248, 244, 0.05);
  transform: translateY(-2px);
}

.btn-call:active {
  transform: scale(0.96);
}

/* Touch Device Optimizations */
@media (hover: none) {
  .package-card:hover {
    transform: none;
  }
  
  .package-card:hover .package-image img {
    transform: none;
  }
  
  .btn-primary:hover,
  .btn-whatsapp:hover,
  .btn-call:hover,
  .btn-small:hover,
  .comparison-card:hover {
    transform: none !important;
  }
  
  .btn-primary:active,
  .btn-whatsapp:active,
  .btn-call:active,
  .btn-small:active,
  .comparison-card:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .package-card {
    flex-direction: column !important;
  }
  
  .package-image {
    min-height: 250px;
    max-height: 400px;
  }
  
  .comparison-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .package-content {
    padding: 1.5rem;
  }
  
  .package-features {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
  
  .package-footer {
    flex-direction: column;
    align-items: stretch;
  }
  
  .package-price {
    text-align: center;
  }
  
  .btn-primary {
    width: 100%;
    justify-content: center;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
  }
  
  .btn-whatsapp,
  .btn-call {
    width: 100%;
    justify-content: center;
  }
  
  .cta-wrapper {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  .comparison-card {
    padding: 1.5rem;
  }
  
  .featured-badge {
    top: 0.75rem;
    right: 0.75rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .package-card {
    border-radius: 16px;
  }
  
  .package-image {
    min-height: 200px;
    max-height: 300px;
  }
  
  .package-content {
    padding: 1.2rem;
  }
  
  .package-badge {
    top: 1rem;
    left: 1rem;
    padding: 0.2rem 1rem;
    font-size: 0.6rem;
  }
  
  .feature-item {
    font-size: 0.85rem;
  }
  
  .feature-icon {
    width: 18px;
    height: 18px;
  }
  
  .cta-wrapper {
    padding: 1.2rem;
  }
  
  .btn-primary,
  .btn-whatsapp,
  .btn-call,
  .btn-small {
    font-size: 0.8rem;
    min-height: 44px;
  }
  
  .comparison-card ul li {
    font-size: 0.85rem;
  }
}

/* Large Screens */
@media (min-width: 1400px) {
  .container {
    padding: 0 3rem;
  }
  
  .package-card {
    gap: 4rem;
    border-radius: 30px;
  }
  
  .package-content {
    padding: 4rem;
  }
  
  .package-image {
    min-height: 450px;
  }
  
  .comparison-grid {
    gap: 3rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.btn-primary:focus-visible,
.btn-whatsapp:focus-visible,
.btn-call:focus-visible,
.btn-small:focus-visible {
  outline: 3px solid #C9A96E;
  outline-offset: 2px;
}

/* Loading states */
.package-image img,
.hero-image img {
  background: #f0f0f0;
}

.package-image img:not([src]),
.hero-image img:not([src]) {
  opacity: 0;
}

/* Print Styles */
@media print {
  .packages-hero {
    height: 300px;
    min-height: 200px;
  }
  
  .hero-overlay {
    background: rgba(10, 22, 40, 0.5);
  }
  
  .package-card {
    box-shadow: none;
    border: 1px solid #ddd;
    break-inside: avoid;
  }
  
  .package-card:hover {
    transform: none;
    box-shadow: none;
  }
  
  .package-card:hover .package-image img {
    transform: none;
  }
  
  .cta-wrapper {
    background: #fafafa;
    border: 1px solid #ddd;
  }
  
  .cta-wrapper h2 {
    color: #0a1628;
  }
  
  .cta-wrapper p {
    color: #0a1628;
  }
  
  .btn-primary,
  .btn-whatsapp,
  .btn-call,
  .btn-small {
    display: none;
  }
  
  .comparison-section {
    background: #fafafa;
  }
  
  .comparison-card {
    background: #fafafa;
    border: 1px solid #ddd;
  }
  
  .comparison-card h3 {
    color: #0a1628;
  }
  
  .comparison-card ul li {
    color: #0a1628;
  }
  
  .featured-badge {
    background: #ddd;
    color: #0a1628;
  }
  
  .section-title {
    color: #0a1628;
  }
}
</style>