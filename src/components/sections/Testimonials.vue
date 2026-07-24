<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Client Testimonials</h2>
        <p class="section-subtitle">What our guests say about their experience</p>
      </div>
      
      <!-- Scrolling Testimonials - Right to Left -->
      <div class="testimonials-scroll">
        <div class="testimonials-track">
          <!-- First set of testimonials -->
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-rating">★★★★★</div>
              <img 
                src="/images/testimonials/google-logo.png" 
                alt="Google Review" 
                class="google-logo"
                @error="handleLogoError"
              />
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-footer">
              <div class="author-info">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="author-avatar"
                  loading="lazy"
                  @error="handleAvatarError"
                />
                <span class="author-name">{{ testimonial.name }}</span>
              </div>
            </div>
          </div>
          <!-- Duplicate for seamless scrolling -->
          <div v-for="testimonial in testimonials" :key="'dup-'+testimonial.id" class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-rating">★★★★★</div>
              <img 
                src="/images/testimonials/google-logo.png" 
                alt="Google Review" 
                class="google-logo"
                @error="handleLogoError"
              />
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-footer">
              <div class="author-info">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="author-avatar"
                  loading="lazy"
                  @error="handleAvatarError"
                />
                <span class="author-name">{{ testimonial.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { testimonials } from '@/data/testimonials.js';

export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: testimonials
    }
  },
  methods: {
    handleAvatarError(e) {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"%3E%3Crect width="50" height="50" fill="%23D4AF37" rx="50"/%3E%3Ctext x="25" y="32" font-family="Arial" font-size="22" fill="%23FAF8F4" text-anchor="middle"%3E👤%3C/text%3E%3C/svg%3E'
    },
    handleLogoError(e) {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"%3E%3Ctext x="12" y="18" font-family="Arial" font-size="14" fill="%234285F4" text-anchor="middle"%3EG%3C/text%3E%3C/svg%3E'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.testimonials-section {
  padding: 80px 0;
  background: #fafafa;
  overflow: hidden;
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
  color: #0a1628;
  margin: 0 0 0.5rem 0;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #0a1628;
  margin: 0;
  opacity: 0.7;
}

.testimonials-scroll {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.testimonials-track {
  display: flex;
  gap: 1.5rem;
  animation: scrollRightToLeft 45s linear infinite;
  width: max-content;
}

.testimonials-track:hover {
  animation-play-state: paused;
}

@keyframes scrollRightToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.testimonial-card {
  background: #fafafa;
  padding: 1.8rem;
  border-radius: 20px;
  min-width: 380px;
  max-width: 380px;
  border: 1px solid rgba(10, 22, 40, 0.06);
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.04);
  transition: all 0.3s ease;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(10, 22, 40, 0.08);
  border-color: #D4AF37;
}

.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.testimonial-rating {
  color: #D4AF37;
  font-size: 18px;
  letter-spacing: 2px;
}

.google-logo {
  height: 22px;
  width: auto;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.testimonial-card:hover .google-logo {
  opacity: 1;
}

.testimonial-text {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #0a1628;
  line-height: 1.7;
  margin: 0 0 1.2rem 0;
  font-style: italic;
  opacity: 0.8;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(10, 22, 40, 0.06);
  margin-top: auto;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #D4AF37;
  flex-shrink: 0;
}

.author-name {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  font-weight: 600;
  color: #0a1628;
}

@media (max-width: 1024px) {
  .testimonial-card {
    min-width: 320px;
    max-width: 320px;
    padding: 1.5rem;
  }
  .testimonial-text {
    font-size: 13px;
    -webkit-line-clamp: 4;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
  .section-subtitle {
    font-size: 16px;
  }
  
  .testimonial-card {
    min-width: 280px;
    max-width: 280px;
    padding: 1.2rem;
  }
  
  .testimonial-text {
    font-size: 12px;
    -webkit-line-clamp: 4;
  }
  
  .author-name {
    font-size: 14px;
  }
  
  .author-avatar {
    width: 35px;
    height: 35px;
  }
  
  .google-logo {
    height: 18px;
  }
  
  .testimonials-track {
    animation-duration: 35s;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .testimonials-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .testimonial-card {
    min-width: 240px;
    max-width: 240px;
    padding: 1rem;
  }
  
  .testimonial-text {
    font-size: 11px;
    -webkit-line-clamp: 3;
  }
  
  .author-name {
    font-size: 12px;
  }
  
  .author-avatar {
    width: 30px;
    height: 30px;
  }
  
  .google-logo {
    height: 16px;
  }
  
  .testimonials-track {
    animation-duration: 30s;
    gap: 0.8rem;
  }
}
</style>
