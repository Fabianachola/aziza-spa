<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-image">
        <img 
          src="/images/about/about-hero.jpg" 
          alt="Wellness Starts Here"
          loading="lazy"
        />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">Wellness <span class="highlight">Starts Here</span></h1>
          <p class="hero-subtitle">Discover the story behind Aziza Spa</p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="story-section">
      <div class="container">
        <div class="story-content">
          <h2 class="section-title">Our Story</h2>
          <p class="story-text">
            At Aziza Spa, we believe that true wellness is a journey, not a destination. 
            Our story began with a simple vision: to create a sanctuary where luxury meets 
            healing, and where every guest leaves feeling renewed, refreshed, and revitalized.
          </p>
          <p class="story-text">
            Nestled in the heart of Westlands, Aziza Spa is a haven of tranquility where 
            ancient wellness traditions meet modern luxury. Every treatment, every detail, 
            and every moment is designed to transport you to a state of pure relaxation.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card">
            <h3>Our Mission</h3>
            <p>To provide exceptional spa experiences that restore balance, promote wellness, and leave every guest feeling completely rejuvenated.</p>
          </div>
          <div class="mission-card vision">
            <h3>Our Vision</h3>
            <p>To be the leading destination for luxury wellness in Nairobi, setting the standard for excellence in spa and beauty care.</p>
          </div>
          <div class="mission-card values">
            <h3>Our Values</h3>
            <p>Integrity, excellence, personalized care, and a commitment to using only the finest natural and organic products.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet The Team - Full Photos Only -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">Meet The Team</h2>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.name" class="team-card">
            <div class="team-image">
              <img :src="member.image" :alt="member.name" loading="lazy" />
            </div>
            <div class="team-name">{{ member.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities -->
    <section class="facilities-section">
      <div class="container">
        <h2 class="section-title">Our Facilities</h2>
        <div class="facilities-grid">
          <div v-for="facility in facilities" :key="facility.name" class="facility-item">
            <h3>{{ facility.name }}</h3>
            <p>{{ facility.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Book CTA -->
    <section class="book-cta">
      <div class="container">
        <div class="cta-wrapper">
          <h2>Ready to Begin Your Wellness Journey?</h2>
          <p>Experience the Aziza Spa difference and discover true relaxation</p>
          <div class="cta-buttons">
            <router-link to="/book-appointment" class="btn-primary">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
              </svg>
              Reserve Your Experience
            </router-link>
            <a href="https://wa.me/254796471899" target="_blank" class="btn-whatsapp">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a href="tel:+254796471899" class="btn-call">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Aziza Spa
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      teamMembers: [
        {
          
          image: '/images/about/sarah-wanjiku.jpg'
        },
        {
          
          image: '/images/about/peter-kamau.jpg'
        },
        {
          
          image: '/images/about/grace-muthoni.jpg'
        },
        {
          image: '/images/about/david-ochieng.jpg'
        }
      ],
      facilities: [
        {
          name: 'Treatment Rooms',
          description: 'Luxury private rooms designed for your comfort and privacy.'
        },
        {
          name: 'Steam & Sauna',
          description: 'Traditional steam and sauna facilities for complete relaxation.'
        },
        {
          name: 'Moroccan Bath',
          description: 'Authentic Moroccan bathing rituals for deep cleansing and renewal.'
        },
        {
          name: 'Relaxation Lounge',
          description: 'A serene space to unwind before and after your treatments.'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.about-page {
  background: #fafafa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #0a1628;
  text-align: center;
  margin: 0 0 clamp(2rem, 3vw, 3rem) 0;
}

/* Hero Section */
.about-hero {
  position: relative;
  height: clamp(400px, 70vh, 700px);
  min-height: 300px;
  max-height: 700px;
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
  font-size: clamp(2.5rem, 6vw, 4rem);
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

/* Story Section */
.story-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.story-text {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 300;
  color: #0a1628;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

/* Mission Section */
.mission-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.mission-card {
  background: #fafafa;
  padding: clamp(1.5rem, 2.5vw, 2.5rem);
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(10, 22, 40, 0.06);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mission-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(10, 22, 40, 0.1);
}

.mission-card.vision {
  background: #0F172A;
  color: #fafafa;
  border-color: rgba(250, 248, 244, 0.08);
}

.mission-card.vision h3 {
  color: #fafafa;
}

.mission-card.vision p {
  color: rgba(250, 248, 244, 0.7);
}

.mission-card.values {
  border: 2px solid #C9A96E;
}

.mission-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.8rem 0;
}

.mission-card p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.875rem, 1vw, 0.95rem);
  font-weight: 300;
  color: #0a1628;
  line-height: 1.7;
  margin: 0;
  opacity: 0.8;
}

/* Team Section */
.team-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  text-align: center;
  transition: all 0.3s ease;
  background: #fafafa;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.04);
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(10, 22, 40, 0.08);
}

.team-image {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f0f0f0;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-name {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  font-weight: 500;
  color: #0a1628;
  padding: 1rem 0.5rem;
  background: #ffffff;
}

/* Facilities Section */
.facilities-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #0F172A;
}

.facilities-section .section-title {
  color: #fafafa;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.facility-item {
  text-align: center;
  padding: clamp(1.5rem, 2vw, 2rem);
  background: rgba(250, 248, 244, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(250, 248, 244, 0.08);
  transition: all 0.3s ease;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.facility-item:hover {
  transform: translateY(-4px);
  border-color: #C9A96E;
  background: rgba(250, 248, 244, 0.08);
}

.facility-item h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.1rem, 1.5vw, 1.25rem);
  font-weight: 600;
  color: #fafafa;
  margin: 0 0 0.5rem 0;
}

.facility-item p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.875rem);
  font-weight: 300;
  color: rgba(250, 248, 244, 0.7);
  margin: 0;
  line-height: 1.6;
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

.btn-primary,
.btn-whatsapp,
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
  transition: all 0.3s ease;
  min-height: 48px;
  min-width: 44px;
  cursor: pointer;
  justify-content: center;
}

.btn-primary {
  background: #C9A96E;
  color: #0F172A;
  box-shadow: 0 4px 20px rgba(201, 169, 110, 0.3);
}

.btn-primary:hover {
  background: #B8925A;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201, 169, 110, 0.4);
}

.btn-whatsapp {
  background: #25D366;
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
}

.btn-whatsapp:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
}

.btn-whatsapp svg {
  fill: currentColor;
}

.btn-call {
  background: transparent;
  color: #FAF8F4;
  border: 1px solid rgba(250, 248, 244, 0.15);
}

.btn-call:hover {
  background: rgba(250, 248, 244, 0.05);
  transform: translateY(-2px);
}

.btn-primary svg,
.btn-call svg {
  stroke: currentColor;
}

/* Touch Device Optimizations */
@media (hover: none) {
  .mission-card:hover,
  .team-card:hover,
  .facility-item:hover,
  .btn-primary:hover,
  .btn-whatsapp:hover,
  .btn-call:hover {
    transform: none !important;
  }
  
  .mission-card:active,
  .team-card:active,
  .facility-item:active,
  .btn-primary:active,
  .btn-whatsapp:active,
  .btn-call:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
}

/* Responsive - Mobile First */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .about-hero {
    height: clamp(300px, 50vh, 400px);
    min-height: 250px;
  }
  
  .hero-title {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
  
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .facilities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
  }
  
  .btn-primary,
  .btn-whatsapp,
  .btn-call {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
  
  .cta-wrapper {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  .cta-wrapper h2 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .team-card {
    border-radius: 12px;
  }
  
  .team-name {
    font-size: 0.85rem;
    padding: 0.75rem 0.3rem;
  }
  
  .mission-card {
    padding: 1.5rem;
    min-height: 160px;
  }
  
  .facility-item {
    padding: 1.2rem;
    min-height: 130px;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .story-text {
    font-size: 0.95rem;
  }
  
  .section-title {
    font-size: clamp(1.5rem, 6vw, 1.8rem);
  }
  
  .cta-wrapper {
    padding: 1.2rem;
  }
  
  .btn-primary,
  .btn-whatsapp,
  .btn-call {
    font-size: 0.8rem;
    min-height: 44px;
    padding: 0.6rem 1.2rem;
  }
}

/* Large Screens Optimization */
@media (min-width: 1400px) {
  .container {
    padding: 0 3rem;
  }
  
  .story-content {
    max-width: 900px;
  }
  
  .mission-grid {
    max-width: 1200px;
    gap: 2.5rem;
  }
  
  .team-grid {
    gap: 2.5rem;
  }
  
  .facilities-grid {
    gap: 2.5rem;
    max-width: 1200px;
  }
  
  .cta-wrapper {
    max-width: 900px;
    padding: 5rem;
  }
}

/* Accessibility - Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Loading State for Images */
.team-image img {
  background: #f0f0f0;
}

.team-image img:not([src]) {
  opacity: 0;
}

/* Focus States for Accessibility */
.btn-primary:focus-visible,
.btn-whatsapp:focus-visible,
.btn-call:focus-visible,
.mission-card:focus-visible,
.team-card:focus-visible,
.facility-item:focus-visible {
  outline: 3px solid #C9A96E;
  outline-offset: 2px;
}

/* Print Styles */
@media print {
  .about-hero {
    height: 300px;
    min-height: 200px;
  }
  
  .hero-overlay {
    background: rgba(10, 22, 40, 0.5);
  }
  
  .cta-buttons {
    display: none;
  }
  
  .mission-card.vision {
    background: #fafafa;
    color: #0a1628;
    border: 1px solid #ddd;
  }
  
  .mission-card.vision h3 {
    color: #0a1628;
  }
  
  .mission-card.vision p {
    color: #0a1628;
    opacity: 0.8;
  }
  
  .facilities-section {
    background: #fafafa;
  }
  
  .facilities-section .section-title {
    color: #0a1628;
  }
  
  .facility-item {
    background: #fafafa;
    border: 1px solid #ddd;
  }
  
  .facility-item h3 {
    color: #0a1628;
  }
  
  .facility-item p {
    color: #0a1628;
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
}
</style>