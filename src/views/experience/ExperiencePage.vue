<template>
  <div class="experience-page">
    <!-- Hero Section -->
    <section class="experience-hero">
      <div class="hero-image">
        <img 
          src="/images/experience/hero-experience.jpg" 
          alt="Experience Wellness Like Never Before"
          loading="lazy"
        />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">Experience Wellness<br><span class="highlight">Like Never Before</span></h1>
        </div>
      </div>
    </section>

    <!-- Story Section -->
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
            Located in the heart of Westlands, Aziza Spa is a haven of tranquility where 
            ancient wellness traditions meet modern luxury. Every treatment, every detail, 
            and every moment is designed to transport you to a state of pure relaxation.
          </p>
        </div>
      </div>
    </section>

    <!-- Interactive Timeline -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Your Journey Begins Here</h2>
        <div class="timeline">
          <div v-for="(step, index) in timelineSteps" :key="index" class="timeline-item">
            <div class="timeline-icon">
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="step.icon === 'book'" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path v-if="step.icon === 'book'" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path v-if="step.icon === 'arrive'" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2" />
                <path v-if="step.icon === 'consultation'" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle v-if="step.icon === 'consultation'" cx="12" cy="7" r="4" />
                <path v-if="step.icon === 'treatment'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path v-if="step.icon === 'treatment'" d="M9 12l2 2 4-4" />
                <circle v-if="step.icon === 'refresh'" cx="12" cy="12" r="10" />
                <path v-if="step.icon === 'refresh'" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <path v-if="step.icon === 'renewed'" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline v-if="step.icon === 'renewed'" points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Treatment Rooms -->
    <section class="treatment-rooms">
      <div class="container">
        <h2 class="section-title">Treatment Rooms</h2>
        <div class="rooms-grid">
          <div v-for="room in treatmentRooms" :key="room.name" class="room-card">
            <img :src="room.image" :alt="room.name" loading="lazy" />
            <div class="room-info">
              <h3>{{ room.name }}</h3>
              <p>{{ room.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title">Gallery</h2>
        <div class="gallery-grid">
          <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
            <img :src="image.path" :alt="image.label" loading="lazy" />
            <div class="gallery-overlay">
              <span>{{ image.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Spa Etiquette -->
    <section class="etiquette-section">
      <div class="container">
        <h2 class="section-title">Spa Etiquette</h2>
        <div class="etiquette-grid">
          <div v-for="item in etiquetteItems" :key="item.title" class="etiquette-item">
            <div class="etiquette-icon">
              <svg class="icon-svg-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle v-if="item.icon === 'clock'" cx="12" cy="12" r="10" />
                <polyline v-if="item.icon === 'clock'" points="12 6 12 12 16 14" />
                <path v-if="item.icon === 'phone'" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline v-if="item.icon === 'phone'" points="22 6 12 13 2 6" />
                <path v-if="item.icon === 'clothes'" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle v-if="item.icon === 'clothes'" cx="12" cy="7" r="4" />
                <path v-if="item.icon === 'message'" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path v-if="item.icon === 'peace'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path v-if="item.icon === 'peace'" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFAQ(index)">
            <div class="faq-question">
              <span>{{ faq.question }}</span>
              <span class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</span>
            </div>
            <div v-show="activeIndex === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Book CTA -->
    <section class="book-cta">
      <div class="container">
        <div class="cta-wrapper">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Experience the ultimate in luxury wellness at Aziza Spa</p>
          <router-link to="/book-appointment" class="btn-primary">Book Your Experience</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ExperiencePage',
  data() {
    return {
      activeIndex: null,
      timelineSteps: [
        { icon: 'book', title: 'Book', description: 'Secure your preferred time and treatment' },
        { icon: 'arrive', title: 'Arrive', description: 'Welcome to your sanctuary of calm' },
        { icon: 'consultation', title: 'Consultation', description: 'Personalized treatment selection' },
        { icon: 'treatment', title: 'Treatment', description: 'Luxury spa experience tailored to you' },
        { icon: 'refresh', title: 'Refresh', description: 'Premium refreshments and relaxation' },
        { icon: 'renewed', title: 'Leave Renewed', description: 'Depart feeling completely rejuvenated' }
      ],
      treatmentRooms: [
        {
          name: 'Serenity Suite',
          
          image: '/images/experience/serenity-suite.jpg'
        },
        {
          name: 'Tranquility Room',
          
          image: '/images/experience/tranquility-room.jpg'
        },
        {
          name: 'Luxury Treatment Room',
          
          image: '/images/experience/luxury-treatment.jpg'
        }
      ],
      galleryImages: [
        { label: 'Reception', path: '/images/gallery/reception.jpg' },
        { label: 'Treatment Room', path: '/images/gallery/treatment-room.jpg' },
        { label: 'Relaxation Area', path: '/images/gallery/relaxation.jpg' },
        { label: 'Ambiance', path: '/images/gallery/ambiance.jpg' },
        { label: 'Therapy', path: '/images/gallery/therapy.jpg' },
        { label: 'Steam Room', path: '/images/gallery/steam.jpg' }
      ],
      etiquetteItems: [
        { icon: 'clock', title: 'Arrive Early', description: 'Please arrive 15 minutes before your appointment to relax and complete any necessary paperwork.' },
        { icon: 'phone', title: 'Silence Devices', description: 'To maintain a peaceful environment, please silence all electronic devices upon arrival.' },
        { icon: 'clothes', title: 'Dress Comfortably', description: 'We provide robes and slippers for your comfort during treatments.' },
        { icon: 'message', title: 'Communicate', description: 'Share your preferences and any concerns with our therapists for a personalized experience.' },
        { icon: 'peace', title: 'Relax', description: 'This is your time to unwind. Let our skilled therapists take care of everything.' }
      ],
      faqs: [
        {
          question: 'How do I book an appointment?',
          answer: 'You can book an appointment by calling us directly at 0796471899 or by using our online booking system. We recommend booking in advance to secure your preferred time.'
        },
        {
          question: 'What should I expect during my first visit?',
          answer: 'During your first visit, you will be welcomed with a warm greeting, offered refreshments, and given a consultation to discuss your wellness goals and preferences.'
        },
        {
          question: 'How early should I arrive?',
          answer: 'We recommend arriving at least 15 minutes before your scheduled appointment to allow time for check-in and relaxation.'
        },
        {
          question: 'Do you offer couples treatments?',
          answer: 'Yes, we offer couples massage and spa packages for a romantic shared experience. Please mention this when booking.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a cancellation fee.'
        }
      ]
    }
  },
  methods: {
    toggleFAQ(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.experience-page {
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
.experience-hero {
  position: relative;
  height: clamp(350px, 70vh, 650px);
  min-height: 280px;
  max-height: 650px;
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
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.7) 0%, rgba(10, 22, 40, 0.3) 100%);
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #FAF8F4;
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
  color: #D4AF37;
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

/* Timeline Section */
.timeline-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 40px;
  bottom: 40px;
  width: 3px;
  background: linear-gradient(to bottom, #D4AF37, #0a1628);
  opacity: 0.3;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-icon {
  width: clamp(48px, 5vw, 60px);
  height: clamp(48px, 5vw, 60px);
  min-width: clamp(48px, 5vw, 60px);
  background: #D4AF37;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: 3px solid #fafafa;
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.1);
}

.icon-svg {
  width: clamp(22px, 2.5vw, 28px);
  height: clamp(22px, 2.5vw, 28px);
  stroke: #0a1628;
  stroke-width: 2;
  fill: none;
}

.timeline-content h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.3rem 0;
}

.timeline-content p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  font-weight: 300;
  color: #0a1628;
  opacity: 0.7;
  margin: 0;
}

/* Treatment Rooms */
.treatment-rooms {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.room-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.06);
  transition: all 0.3s ease;
  background: #ffffff;
}

.room-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(10, 22, 40, 0.1);
}

.room-card img {
  width: 100%;
  height: clamp(200px, 25vw, 250px);
  object-fit: cover;
  background: #f0f0f0;
}

.room-info {
  padding: clamp(1rem, 1.5vw, 1.5rem);
}

.room-info h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 1.8vw, 1.4rem);
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.5rem 0;
}

.room-info p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.85rem, 1vw, 0.9rem);
  font-weight: 300;
  color: #0a1628;
  opacity: 0.7;
  margin: 0;
  line-height: 1.6;
}

/* Gallery */
.gallery-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  background: #f0f0f0;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item:active img {
  transform: scale(0.98);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: clamp(1.5rem, 2vw, 2rem) clamp(1rem, 1.5vw, 1.5rem) clamp(1rem, 1.5vw, 1.5rem);
  background: linear-gradient(to top, rgba(10, 22, 40, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:active .gallery-overlay {
  opacity: 1;
}

.gallery-overlay span {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 600;
  color: #FAF8F4;
}

/* Spa Etiquette */
.etiquette-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #0a1628;
}

.etiquette-section .section-title {
  color: #FAF8F4;
}

.etiquette-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.etiquette-item {
  background: rgba(250, 248, 244, 0.05);
  padding: clamp(1.5rem, 2vw, 2rem);
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(250, 248, 244, 0.08);
  transition: all 0.3s ease;
}

.etiquette-item:hover {
  transform: translateY(-4px);
  border-color: #D4AF37;
}

.etiquette-item:active {
  transform: scale(0.98);
}

.etiquette-icon {
  width: clamp(50px, 5vw, 60px);
  height: clamp(50px, 5vw, 60px);
  background: rgba(212, 175, 55, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
}

.icon-svg-white {
  width: clamp(24px, 2.5vw, 28px);
  height: clamp(24px, 2.5vw, 28px);
  stroke: #D4AF37;
  stroke-width: 2;
  fill: none;
}

.etiquette-item h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.1rem, 1.5vw, 1.25rem);
  font-weight: 600;
  color: #FAF8F4;
  margin: 0 0 0.5rem 0;
}

.etiquette-item p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.85rem, 1vw, 0.9rem);
  font-weight: 300;
  color: rgba(250, 248, 244, 0.7);
  margin: 0;
  line-height: 1.6;
}

/* FAQ Section */
.faq-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid rgba(10, 22, 40, 0.06);
  padding: clamp(1rem, 1.5vw, 1.2rem) 0;
  cursor: pointer;
  transition: background 0.2s ease;
  border-radius: 8px;
  min-height: 60px;
}

.faq-item:hover {
  background: rgba(10, 22, 40, 0.02);
}

.faq-item:active {
  background: rgba(10, 22, 40, 0.04);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 500;
  color: #0a1628;
  padding: 0.5rem;
  min-height: 44px;
}

.faq-icon {
  font-size: clamp(1.5rem, 2vw, 1.8rem);
  color: #D4AF37;
  flex-shrink: 0;
  min-width: 30px;
  text-align: center;
  transition: transform 0.3s ease;
}

.faq-answer {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.95rem, 1.1vw, 1rem);
  font-weight: 300;
  color: #0a1628;
  opacity: 0.7;
  line-height: 1.8;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Book CTA */
.book-cta {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.cta-wrapper {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: clamp(2rem, 4vw, 3.5rem);
  background: #0a1628;
  border-radius: 24px;
  border: 1px solid rgba(212, 175, 55, 0.15);
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

.btn-primary {
  display: inline-block;
  padding: clamp(0.8rem, 1.2vw, 1rem) clamp(2rem, 3vw, 3rem);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  font-weight: 500;
  text-decoration: none;
  border-radius: 12px;
  background: #25D366;
  color: #ffffff;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  min-height: 48px;
  min-width: 44px;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
}

.btn-primary:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
}

.btn-primary:active {
  transform: scale(0.96);
}

/* Touch Device Optimizations */
@media (hover: none) {
  .room-card:hover {
    transform: none;
  }
  
  .gallery-item:hover img {
    transform: none;
  }
  
  .gallery-item:hover .gallery-overlay {
    opacity: 0;
  }
  
  .gallery-item:active img {
    transform: scale(0.98);
  }
  
  .gallery-item:active .gallery-overlay {
    opacity: 1;
  }
  
  .etiquette-item:hover {
    transform: none;
  }
  
  .etiquette-item:active {
    transform: scale(0.98);
    background: rgba(250, 248, 244, 0.08);
  }
  
  .faq-item:hover {
    background: transparent;
  }
  
  .faq-item:active {
    background: rgba(10, 22, 40, 0.04);
  }
  
  .btn-primary:hover {
    transform: none;
  }
  
  .btn-primary:active {
    transform: scale(0.96);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .timeline::before {
    left: 25px;
  }
  
  .timeline-item {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    gap: 1rem;
  }
  
  .timeline-content h3 {
    font-size: 1.2rem;
  }
  
  .rooms-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .etiquette-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .cta-wrapper {
    margin: 0 0.5rem;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .timeline::before {
    left: 18px;
  }
  
  .timeline-item {
    gap: 0.8rem;
    margin-bottom: 2rem;
  }
  
  .timeline-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }
  
  .icon-svg {
    width: 18px;
    height: 18px;
  }
  
  .timeline-content h3 {
    font-size: 1rem;
  }
  
  .timeline-content p {
    font-size: 0.85rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .gallery-item {
    aspect-ratio: 4/3;
  }
  
  .room-card img {
    height: 200px;
  }
  
  .etiquette-item {
    padding: 1.2rem;
  }
  
  .faq-item {
    padding: 0.8rem 0;
  }
  
  .faq-question {
    font-size: 0.95rem;
    padding: 0.3rem;
    min-height: 40px;
  }
  
  .faq-answer {
    font-size: 0.9rem;
    padding: 0.3rem;
  }
  
  .cta-wrapper {
    padding: 1.2rem;
  }
  
  .btn-primary {
    width: 100%;
    justify-content: center;
    padding: 0.8rem 1.5rem;
  }
}

/* Large Screens */
@media (min-width: 1400px) {
  .container {
    padding: 0 3rem;
  }
  
  .rooms-grid {
    gap: 2.5rem;
  }
  
  .gallery-grid {
    gap: 1.5rem;
  }
  
  .etiquette-grid {
    gap: 2.5rem;
  }
  
  .timeline {
    max-width: 900px;
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
  
  .faq-answer {
    animation: none;
  }
}

.faq-item:focus-visible,
.btn-primary:focus-visible {
  outline: 3px solid #D4AF37;
  outline-offset: 2px;
}

/* Loading states */
.room-card img,
.gallery-item img,
.hero-image img {
  background: #f0f0f0;
}

.room-card img:not([src]),
.gallery-item img:not([src]),
.hero-image img:not([src]) {
  opacity: 0;
}

/* Print Styles */
@media print {
  .experience-hero {
    height: 300px;
    min-height: 200px;
  }
  
  .hero-overlay {
    background: rgba(10, 22, 40, 0.5);
  }
  
  .room-card {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #ddd;
  }
  
  .room-card:hover {
    transform: none;
    box-shadow: none;
  }
  
  .gallery-item {
    break-inside: avoid;
  }
  
  .gallery-overlay {
    opacity: 1;
    background: rgba(10, 22, 40, 0.5);
  }
  
  .etiquette-section {
    background: #fafafa;
  }
  
  .etiquette-section .section-title {
    color: #0a1628;
  }
  
  .etiquette-item {
    background: #fafafa;
    border: 1px solid #ddd;
  }
  
  .etiquette-item h3 {
    color: #0a1628;
  }
  
  .etiquette-item p {
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
  
  .btn-primary {
    display: none;
  }
  
  .faq-item {
    break-inside: avoid;
  }
  
  .timeline::before {
    display: none;
  }
}
</style>