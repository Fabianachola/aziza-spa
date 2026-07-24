<template>
  <section class="why-choose-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Why Choose Aziza</h2>
        <p class="section-subtitle">Experience the Aziza Spa difference</p>
      </div>
      
      <div class="features-grid">
        <div v-for="reason in reasons" :key="reason.title" class="feature-item">
          <div class="feature-icon">
            <!-- Professional Therapists - Users Icon -->
            <svg v-if="reason.icon === 'therapist'" class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M12 9l2 2-2 2-2-2 2-2z" />
            </svg>
            
            <!-- Private Rooms - Door/Suite Icon -->
            <svg v-else-if="reason.icon === 'private'" class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect x="9" y="11" width="6" height="4" rx="1" />
              <path d="M12 15v2" />
            </svg>
            
            <!-- Premium Oils - Droplet Icon -->
            <svg v-else-if="reason.icon === 'oils'" class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
              <path d="M12 6v4" />
              <path d="M10 8l4 2" />
              <circle cx="12" cy="14" r="1.5" />
            </svg>
            
            <!-- Luxury Environment - Crown/Star Icon -->
            <svg v-else-if="reason.icon === 'luxury'" class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L9.5 7.5L3.5 7L7 11.5L5.5 17.5L10.5 14.5L16 18L15 12L20 8L14 7.5L12 2Z" />
              <path d="M12 22v-4" />
              <path d="M8 20l4-2 4 2" />
              <path d="M12 18v-4" />
            </svg>
            
            <!-- Personalized Care - Heart/Sparkle Icon -->
            <svg v-else-if="reason.icon === 'personal'" class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7Z" />
              <path d="M12 8v4" />
              <path d="M10 10h4" />
              <path d="M12 2v2" />
            </svg>
            
            <!-- Affordable Luxury - Credit Card / Wallet Icon -->
            <svg v-else-if="reason.icon === 'affordable'" class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
              <path d="M7 14h4" />
              <path d="M15 14h2" />
              <circle cx="19" cy="14" r="1" />
              <path d="M12 5v2" />
            </svg>
          </div>
          <div class="feature-text">
            <h3 class="feature-title">{{ reason.title }}</h3>
            <p class="feature-description">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyChooseUs',
  data() {
    return {
      reasons: [
        { 
          icon: 'therapist', 
          title: 'Professional Therapists', 
          description: 'Skilled experts dedicated to your wellness' 
        },
        { 
          icon: 'private', 
          title: 'Private Rooms', 
          description: 'Exclusive spaces for your comfort and privacy' 
        },
        { 
          icon: 'oils', 
          title: 'Premium Oils', 
          description: 'Pure, natural oils for therapeutic benefits' 
        },
        { 
          icon: 'luxury', 
          title: 'Luxury Environment', 
          description: 'Elegant atmosphere designed for relaxation' 
        },
        { 
          icon: 'personal', 
          title: 'Personalized Care', 
          description: 'Treatments tailored to your unique needs' 
        },
        { 
          icon: 'affordable', 
          title: 'Affordable Luxury', 
          description: 'Premium experiences at accessible prices' 
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.why-choose-section {
  padding: 80px 0;
  background: #0a1628;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  color: #FAF8F4;
  margin: 0 0 0.5rem 0;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: rgba(250, 248, 244, 0.7);
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #fafafa;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(250, 248, 244, 0.08);
}

.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: #D4AF37;
}

.feature-icon {
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: #D4AF37;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.feature-item:hover .feature-icon {
  background: #F5D061;
  transform: scale(1.05);
}

.icon-svg {
  width: 24px;
  height: 24px;
  stroke: #0a1628;
  stroke-width: 2;
  fill: none;
  transition: stroke 0.3s ease;
}

.feature-text {
  flex: 1;
}

.feature-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.3rem 0;
}

.feature-description {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #0a1628;
  margin: 0;
  opacity: 0.7;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .features-grid {
    gap: 1rem;
  }
  .feature-item {
    padding: 1.2rem;
  }
  .feature-title {
    font-size: 16px;
  }
  .feature-description {
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
  .section-subtitle {
    font-size: 16px;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .feature-item {
    padding: 1rem;
    gap: 0.8rem;
  }
  
  .feature-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 10px;
  }
  
  .icon-svg {
    width: 20px;
    height: 20px;
  }
  
  .feature-title {
    font-size: 15px;
  }
  
  .feature-description {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .why-choose-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 28px;
  }
  .section-subtitle {
    font-size: 14px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
  
  .feature-item {
    padding: 0.8rem;
  }
  
  .feature-icon {
    width: 36px;
    height: 36px;
    min-width: 36px;
    border-radius: 8px;
  }
  
  .icon-svg {
    width: 18px;
    height: 18px;
  }
  
  .feature-title {
    font-size: 14px;
  }
  
  .feature-description {
    font-size: 12px;
  }
}

@media (min-width: 1400px) {
  .features-grid {
    gap: 2rem;
    max-width: 1200px;
  }
  .feature-item {
    padding: 2rem;
  }
  .feature-title {
    font-size: 20px;
  }
  .feature-description {
    font-size: 15px;
  }
  .feature-icon {
    width: 56px;
    height: 56px;
    min-width: 56px;
  }
  .icon-svg {
    width: 28px;
    height: 28px;
  }
}
</style>
